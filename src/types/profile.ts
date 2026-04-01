import type { ComponentType } from "react";

export interface ProfileStat {
  value: string;
  label: string;
  unit?: string;
}

export interface ProfileExpertise {
  title: string;
  desc: string;
  icon?: string;
}

export interface ProfileExperience {
  period: string;
  role: string;
  company: string;
  desc: string;
}

export interface ProfileContact {
  label: string;
  value: string;
  href?: string | null;
  icon?: ComponentType<{ className?: string }> | string;
}

export interface ProfileSocial {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export interface Profile {
  name: string;
  nameKo?: string;
  nameEn?: string;
  title: string;
  company?: string;
  shop?: string;
  gym?: string;
  tagline: string;
  bio: string;
  image?: string;
  profileImage?: string;
  subs?: string;
  stats: ProfileStat[];
  expertise?: ProfileExpertise[];
  experience?: ProfileExperience[];
  contacts?: ProfileContact[];
  socials?: ProfileSocial[];
  milestones?: { year: string; text: string }[];
  values?: { title: string; desc: string }[];
  channels?: { label: string; value: string; icon: string; color: string }[];
  menu?: { title: string; desc: string }[];
  info?: { label: string; value: string }[];
  contact?: { email: string; phone: string };
  programs?: { title: string; desc: string; icon: string }[];
  certs?: string[];
  specialties?: { title: string; desc: string }[];
  clients?: string[];
}
