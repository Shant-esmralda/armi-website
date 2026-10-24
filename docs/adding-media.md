# Adding performance videos and student resources

The website is static. Add files or YouTube entries to this repository, then rebuild and deploy with your usual hosting workflow. There is no browser upload area or server storage. Entries in `src/content/media.ts` drive all three languages from one list.

## 1. Add your files

Use descriptive, kebab-case filenames in these folders (create them as needed):

- `public/media/videos/` for browser-compatible MP4 or WebM performances.
- `public/media/sheet-music/` for PDF scores.
- `public/media/audio/` for MP3, M4A, WAV, or Ogg warmups and practice audio.
- `public/media/captions/` for WebVTT caption files.
- `public/images/` for optional video poster images.

Only publish files you are authorized to distribute. Everything in `public/` is publicly accessible, including files without a visible entry. Keep private student materials out of this folder.

## 2. Add a performance

Replace the empty `performances` array in `src/content/media.ts` with entries like the following. These are examples only: substitute actual files and approved content before adding an entry.

```ts
export const performances: Performance[] = [
  {
    id: 'performance-title',
    src: '/media/videos/performance-title.mp4',
    // Optional: omit poster if you do not have a cover image.
    poster: '/images/performance-title.webp',
    title: {
      en: 'Approved performance title',
      fa: 'عنوان اجرای تأییدشده',
      hy: 'Հաստատված կատարման վերնագիր',
    },
    description: {
      en: 'A description of this performance.',
      fa: 'توضیحی دربارهٔ این اجرا.',
      hy: 'Այս կատարման նկարագրությունը։',
    },
    transcript: {
      en: 'Describe the music and visual content, and transcribe any speech.',
      fa: 'موسیقی و محتوای تصویری را شرح دهید و گفتار را بنویسید.',
      hy: 'Նկարագրեք երաժշտությունն ու տեսողական բովանդակությունը և գրի առեք խոսքը։',
    },
    // Optional for instrumental-only clips. Include synchronized captions
    // for speech, sung words, and other meaningful sounds as appropriate.
    captions: [
      { src: '/media/captions/performance-title-en.vtt', locale: 'en', label: 'English' },
      { src: '/media/captions/performance-title-fa.vtt', locale: 'fa', label: 'فارسی' },
      { src: '/media/captions/performance-title-hy.vtt', locale: 'hy', label: 'Հայերեն' },
    ],
  },
];
```

The About page displays native video controls, a download link, and expandable performance notes/transcripts. Videos never autoplay. Large videos increase deployment size; compress them for web playback before committing them.

### Embed a YouTube performance

Uploaded videos and YouTube embeds can appear together in the same `performances` array. For YouTube, add an entry with `kind: 'youtube'` and `videoId` instead of `src`, `poster`, or local caption files:

```ts
{
  id: 'youtube-performance',
  kind: 'youtube',
  videoId: 'YOUR_VIDEO_ID', // Replace with the actual 11-character video ID.
  title: {
    en: 'Approved performance title',
    fa: 'عنوان اجرای تأییدشده',
    hy: 'Հաստատված կատարման վերնագիր',
  },
  description: {
    en: 'A description of this performance.',
    fa: 'توضیحی دربارهٔ این اجرا.',
    hy: 'Այս կատարման նկարագրությունը։',
  },
  transcript: {
    en: 'Describe the performance and transcribe any speech.',
    fa: 'اجرا را شرح دهید و گفتار را بنویسید.',
    hy: 'Նկարագրեք կատարումը և գրի առեք խոսքը։',
  },
}
```

The ID is the value after `v=` in a `youtube.com/watch?v=...` URL, or the path after `youtu.be/` in a share link. For Shorts it follows `/shorts/`. Omit other URL parameters. An invalid ID fails the build with a clear message.

Use a video the owner is authorized to share, with embedding enabled in YouTube. Manage captions on YouTube; local WebVTT files are only for uploaded video entries. The embed requests the current page's interface/caption language, subject to YouTube's supported languages and available captions. See [YouTube player parameters](https://developers.google.com/youtube/player_parameters).

Embeds use `youtube-nocookie.com`, lazy loading, responsive sizing, fullscreen support, and no autoplay. A “Watch on YouTube” link remains available if the embed cannot play. YouTube videos do not have a download link. Test on the deployed HTTP/HTTPS site: opening the generated HTML directly from disk can prevent embedded playback.

## 3. Add sheet music or audio

Replace the empty `resources` array with entries using `kind: 'sheet-music'` for PDFs or `kind: 'audio'` for recordings:

```ts
export const resources: Resource[] = [
  {
    id: 'practice-score',
    kind: 'sheet-music',
    src: '/media/sheet-music/practice-score.pdf',
    title: { en: 'Practice score', fa: 'نت تمرین', hy: 'Վարժության նոտաներ' },
    description: {
      en: 'Describe the score and how to use it.',
      fa: 'نت و روش استفاده از آن را شرح دهید.',
      hy: 'Նկարագրեք նոտաները և դրանց օգտագործումը։',
    },
  },
  {
    id: 'vocal-warmup',
    kind: 'audio',
    src: '/media/audio/vocal-warmup.mp3',
    title: { en: 'Vocal warmup', fa: 'گرم‌کردن صدا', hy: 'Ձայնի տաքացում' },
    description: {
      en: 'Explain the exercise. Include any spoken instructions in text.',
      fa: 'تمرین را توضیح دهید و دستورهای گفتاری را به‌صورت متن بنویسید.',
      hy: 'Բացատրեք վարժությունը։ Խոսքային ցուցումները ներկայացրեք նաև տեքստով։',
    },
  },
];
```

Each `id` must be unique within its list, using lowercase letters, numbers, and hyphens. Supply English, Farsi, and Armenian text for every title, description, and performance transcript. Paths start with `/` and omit `public/`. Keep media on this site's origin so download links work consistently. Audio entries include native playback controls and a download link; PDF entries include a download link. Empty categories display an honest availability message.

## 4. Verify and publish

1. Run `npm run build`, then `npm run preview`.
2. Visit `/about/` and `/resources/`, and their `/fa/` and `/hy/` equivalents.
3. Check playback, captions, transcripts, PDF/audio downloads, and mobile layouts.
4. Commit the files and entries together, then deploy the rebuilt site through your usual host.

To remove an item, remove its entry and its public file if it should no longer be accessible, then rebuild and redeploy.
