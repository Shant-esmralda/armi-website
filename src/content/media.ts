import type { Locale } from '../i18n/home';

export type LocalizedText = Record<Locale, string>;

interface MediaEntry {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

interface PerformanceDetails extends MediaEntry {
  transcript: LocalizedText;
}

export interface FilePerformance extends PerformanceDetails {
  kind?: 'file';
  /** Root-relative path to an authorized file in public/. */
  src: string;
  poster?: string;
  captions?: { src: string; locale: Locale; label: string }[];
}

export interface YouTubePerformance extends PerformanceDetails {
  kind: 'youtube';
  /** The 11-character ID from a YouTube watch or share URL. */
  videoId: string;
}

export type Performance = FilePerformance | YouTubePerformance;

export function youtubeEmbedUrl(videoId: string, locale: Locale): string {
  if (!/^[A-Za-z0-9_-]{11}$/.test(videoId)) {
    throw new Error('Invalid YouTube video ID: use the 11-character ID, not the full URL.');
  }
  return `https://www.youtube-nocookie.com/embed/${videoId}?hl=${locale}&cc_lang_pref=${locale}&playsinline=1`;
}

export interface Resource extends MediaEntry {
  kind: 'sheet-music' | 'audio';
  /** Root-relative path to an authorized file in public/. */
  src: string;
}

// Add authorized files to public/media/ or reference YouTube videos by ID here.
// See docs/adding-media.md for complete examples and publishing instructions.
export const performances: Performance[] = [];
export const resources: Resource[] = [];
