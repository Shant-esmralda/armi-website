# Armine Shahnazarian

An elegant, music-inspired Astro website for a classical and pop singer and music teacher.

## Current milestone

The Home page is available in English at `/`, Farsi at `/fa/` (right to left), and Armenian at `/hy/`. Language links navigate between fully rendered pages. The Home navigation currently leads to section previews for **Portfolio**, **Resources**, and **Contact**; their dedicated pages are the next milestone.

The Portfolio will contain videos and audio. Resources will offer sheet music and student downloads. Recordings, downloads, and contact information are visibly marked as coming soon until real material is supplied.

## Run locally

Use the Node version required in `package.json` and npm:

```sh
npm install
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
npm run preview
```

The development URL is normally http://localhost:4321. Production output is written to `dist/`.

## Edit content and design

- `AGENTS.md`: project requirements and contributor instructions.
- `src/i18n/home.ts`: artist identity and all English, Farsi, and Armenian Home copy.
- `src/components/HomePage.astro`: shared Home content.
- `src/layouts/Layout.astro`: metadata, navigation, and footer.
- `src/styles/global.css`: responsive ivory, burgundy, and brass styling.
- `public/images/piano-hero.webp`: locally hosted, optimized hero image (1024 × 1280, approximately 100 KB).

No external fonts, media embeds, or third-party JavaScript are required for the Home page. Review the draft biography and translated copy with the artist before publication.

## Image provenance

The piano image is original AI-generated illustrative imagery, created with the built-in imagegen tool. It is not a photograph of the artist’s actual studio. The full generation prompt was:

> Use case: photorealistic-natural. Asset type: portrait hero photograph for an elegant classical and pop singer and music teacher website. Primary request: an intimate editorial photograph of a black grand piano in a warm, quiet music studio. Composition: vertical 4:5 portrait, close oblique view across the piano keyboard from the lower left toward the right, open cream sheet music softly blurred above the keys, glossy ebony body and subtle walnut tones in the background. Natural late-afternoon window light, tactile film grain, restrained warm shadows, rich dark burgundy and amber undertones. Fine art music magazine photography, realistic keys in repeating groups of two and three black keys. No people, no instrument brand, no overlaid text, no logos, no watermarks. Output a single high quality photo, not a website mockup.

## Validation

The production build and temporary browser checks passed for all three languages at 1440, 390, and 320 pixels. Checks covered language navigation, correct document direction, image loading, page overflow, lesson disclosures, mobile navigation, Escape handling, and the keyboard skip link. No persistent test framework has been added.
