// Generate 5 profile images via DGX ComfyUI Flux model
const COMFYUI_URL = "https://dgxc.therich.ai.kr";
const CF_HEADERS = {
  "CF-Access-Client-Id": "5ad435a4c6a15fbfdd390a5f30ff0372.access",
  "CF-Access-Client-Secret": "b5071696aa679046d19ca0554e53a1c8de3f48e184a52bf299af6b9f75f45255",
  "Content-Type": "application/json",
};

const PROFILES = [
  {
    id: "creator",
    prompt:
      "Professional headshot portrait of a young Korean female YouTube content creator, confident smile, casual-chic outfit, ring light reflection in eyes, soft bokeh studio background with purple neon glow, high-end photography, 1:1 square crop, ultra detailed face",
  },
  {
    id: "ceo",
    prompt:
      "Professional headshot portrait of a young Korean male startup CEO, wearing a navy suit with no tie, confident and approachable expression, clean minimal white office background, soft natural lighting, corporate photography, 1:1 square crop, ultra detailed face",
  },
  {
    id: "photographer",
    prompt:
      "Professional headshot portrait of a Korean female photographer in her 30s, holding a vintage camera near her face, artistic moody lighting, warm tones, shallow depth of field, creative studio background, 1:1 square crop, ultra detailed",
  },
  {
    id: "cafe",
    prompt:
      "Professional headshot portrait of a friendly Korean male cafe owner in his 30s, wearing a linen apron, warm smile, cozy cafe interior background with wooden shelves and plants, warm golden hour lighting, lifestyle photography, 1:1 square crop, ultra detailed",
  },
  {
    id: "trainer",
    prompt:
      "Professional headshot portrait of a fit Korean male fitness trainer, athletic build, wearing black performance wear, confident determined expression, modern gym background with dramatic side lighting, sports photography, 1:1 square crop, ultra detailed",
  },
];

function buildPromptPayload(text, seed, prefix) {
  return {
    prompt: {
      "1": {
        class_type: "DualCLIPLoader",
        inputs: { clip_name1: "clip_l.safetensors", clip_name2: "t5xxl_fp16.safetensors", type: "flux" },
      },
      "2": {
        class_type: "CLIPTextEncode",
        inputs: { text, clip: ["1", 0] },
      },
      "3": {
        class_type: "UNETLoader",
        inputs: { unet_name: "flux1-dev-kontext_fp8_scaled.safetensors", weight_dtype: "fp8_e4m3fn" },
      },
      "4": {
        class_type: "EmptyLatentImage",
        inputs: { width: 768, height: 768, batch_size: 1 },
      },
      "5": {
        class_type: "BasicGuider",
        inputs: { model: ["3", 0], conditioning: ["2", 0] },
      },
      "6": {
        class_type: "RandomNoise",
        inputs: { noise_seed: seed },
      },
      "7": {
        class_type: "BasicScheduler",
        inputs: { model: ["3", 0], scheduler: "normal", steps: 20, denoise: 1.0 },
      },
      "8": {
        class_type: "SamplerCustomAdvanced",
        inputs: { noise: ["6", 0], guider: ["5", 0], sampler: ["9", 0], sigmas: ["7", 0], latent_image: ["4", 0] },
      },
      "9": {
        class_type: "KSamplerSelect",
        inputs: { sampler_name: "euler" },
      },
      "10": {
        class_type: "VAELoader",
        inputs: { vae_name: "ae.safetensors" },
      },
      "11": {
        class_type: "VAEDecode",
        inputs: { samples: ["8", 0], vae: ["10", 0] },
      },
      "12": {
        class_type: "SaveImage",
        inputs: { filename_prefix: prefix, images: ["11", 0] },
      },
    },
  };
}

async function queuePrompt(payload) {
  const res = await fetch(`${COMFYUI_URL}/prompt`, {
    method: "POST",
    headers: CF_HEADERS,
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Queue failed: ${res.status} ${await res.text()}`);
  return await res.json();
}

async function waitForCompletion(promptId, timeoutMs = 180000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    const res = await fetch(`${COMFYUI_URL}/history/${promptId}`, { headers: CF_HEADERS });
    if (res.ok) {
      const data = await res.json();
      if (data[promptId]) {
        const outputs = data[promptId].outputs;
        if (outputs && outputs["12"] && outputs["12"].images) {
          return outputs["12"].images[0];
        }
      }
    }
    await new Promise((r) => setTimeout(r, 3000));
  }
  throw new Error(`Timeout waiting for ${promptId}`);
}

async function downloadImage(filename, subfolder, destPath) {
  const params = new URLSearchParams({ filename, subfolder: subfolder || "", type: "output" });
  const res = await fetch(`${COMFYUI_URL}/view?${params}`, { headers: CF_HEADERS });
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const { writeFile } = await import("fs/promises");
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buffer);
}

async function main() {
  const { mkdir } = await import("fs/promises");
  await mkdir("./public/profiles", { recursive: true });

  for (const p of PROFILES) {
    console.log(`⏳ Generating: ${p.id}...`);
    const payload = buildPromptPayload(p.prompt, Math.floor(Math.random() * 999999), `namecard_${p.id}`);
    const { prompt_id } = await queuePrompt(payload);
    console.log(`   Queued: ${prompt_id}`);
    const imageInfo = await waitForCompletion(prompt_id);
    console.log(`   Done: ${imageInfo.filename}`);
    await downloadImage(imageInfo.filename, imageInfo.subfolder, `./public/profiles/${p.id}.png`);
    console.log(`   ✓ Saved: public/profiles/${p.id}.png`);
  }

  console.log("\n✅ All 5 profile images generated!");
}

main().catch((e) => {
  console.error("❌ Error:", e.message);
  process.exit(1);
});
