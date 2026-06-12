export const ROLAND_BASE = "https://static.roland.com";
export const ROLAND_GP9 = `${ROLAND_BASE}/products/gp-9/images`;
export const ROLAND_GALLERY = `${ROLAND_GP9}/gallery`;
export const ROLAND_MEDIA = `${ROLAND_BASE}/products/gp-9/media`;
export const ROLAND_LINEUP = `${ROLAND_BASE}/promos/gp_series/images`;

export const GP9_VIDEOS = {
  hero: `${ROLAND_MEDIA}/gp-9_hero.mp4`,
  openLid: `${ROLAND_MEDIA}/gp_series_open_lid.mp4`,
  speakers: `${ROLAND_MEDIA}/gp_series_speakers.mp4`,
  movingKeys: `${ROLAND_MEDIA}/gp_series_moving_keys.mp4`,
} as const;

export const FINISHES = {
  ebony: {
    label: "Polished Ebony",
    shortLabel: "Ebony",
    picker: `${ROLAND_GP9}/gp_color_picker_bk.jpg`,
    galleryPrefix: "gp-9",
  },
  white: {
    label: "Polished White",
    shortLabel: "White",
    picker: `${ROLAND_GP9}/gp_color_picker_wh.jpg`,
    galleryPrefix: "gp-9-pw",
  },
} as const;

export type FinishKey = keyof typeof FINISHES;

export function galleryImage(finish: FinishKey, name: string) {
  const prefix = FINISHES[finish].galleryPrefix;
  return `${ROLAND_GALLERY}/${prefix}_${name}`;
}

/** Frames for drag-to-rotate 360° product spinner (ebony finish) */
export const SPINNER_FRAMES = [
  `${ROLAND_GALLERY}/gp-9_front_gal.jpg`,
  `${ROLAND_GALLERY}/gp-9_angle_side_gal.jpg`,
  `${ROLAND_GALLERY}/gp-9_angle_open_gal.jpg`,
  `${ROLAND_GALLERY}/gp-9_top_angle_gal.jpg`,
  `${ROLAND_GALLERY}/gp-9_back_angle_gal.jpg`,
  `${ROLAND_GALLERY}/gp-9_angle_closed_gal.jpg`,
  `${ROLAND_GALLERY}/gp-9_casters_gal.jpg`,
  `${ROLAND_GALLERY}/gp-9_speakers_gal.jpg`,
] as const;

export const SPINNER_FRAME_LABELS = [
  "Front",
  "Side",
  "Lid open",
  "Top",
  "Rear",
  "Closed",
  "Casters",
  "Speakers",
] as const;

