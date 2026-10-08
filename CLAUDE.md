# Repository Guidelines

## Project Scope

Build a portfolio website for **Armine Shahnazarian**, a singer and music teacher working in classical and pop music. The visual direction is elegant and music inspired. The site must support English (`en`), Farsi (`fa`), and Armenian (`hy`).

The four planned pages are:

- **Home:** introduce the artist, musical approach, and teaching.
- **Contact:** lesson, performance, and collaboration enquiries.
- **Portfolio:** accessible video and audio performances.
- **Resources:** downloadable sheet music and other student materials.

The current milestone is the Home page in all three languages. Until the remaining pages exist, navigation may point to relevant Home sections. Never invent credentials, testimonials, contact details, recordings, or downloadable files.

## Structure & Localization

`src/pages/` defines Astro routes; `/` is English, `/fa/` is Farsi, and `/hy/` is Armenian. Shared page markup belongs in `src/components/`, document structure in `src/layouts/`, translations in `src/i18n/`, and global styles in `src/styles/`. Store public images and future media/downloads in `public/`.

Keep corresponding content and navigation consistent across languages. Set document `lang` and use `dir="rtl"` for Farsi. Prefer CSS logical properties and native-script language labels. Translate accessible names, metadata, and visible interface text.

## Development & Validation

Use npm and preserve `package-lock.json`. Run `npm run build` for the production build and `npm run preview` to inspect it. Start development in background mode: `npm run dev -- --background`. Manage it with `npm run astro -- dev status`, `npm run astro -- dev logs`, and `npm run astro -- dev stop`.

No test framework, coverage threshold, formatter, or linter is configured. Before submitting, build successfully and inspect all three languages on desktop and mobile. Check keyboard navigation, language links, Farsi direction, image loading, and page overflow.

## Style & Contributions

Use TypeScript with the existing strict configuration, two-space indentation for new code, PascalCase Astro components, and descriptive kebab-case asset filenames. Prefer semantic HTML, accessible native controls, and minimal client JavaScript.

Git history currently contains only an initial Astro commit; no established commit convention exists. Use concise imperative subjects. Pull requests should explain changes, list validation, link relevant issues, and include desktop/mobile screenshots for visual changes.

## Astro Documentation

Consult the Astro guides for [routing](https://docs.astro.build/en/guides/routing/), [components](https://docs.astro.build/en/basics/astro-components/), [styling](https://docs.astro.build/en/guides/styling/), and [internationalization](https://docs.astro.build/en/guides/internationalization/) before changing related code. Publish only media and sheet music the owner is authorized to distribute.
