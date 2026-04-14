# LushLife Landscaping

Marketing website for a landscaping and outdoor maintenance business, built with React, TypeScript, Vite, and Tailwind CSS.

The current site is a polished single-page experience with:

- A bold hero section and service positioning
- Service cards for core landscaping offerings
- About and team credibility content
- Testimonials and blog preview content
- A service-area map embed
- A contact section with call, WhatsApp, and email actions

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React
- Motion

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The development server runs on `http://localhost:3000`.

## Available Scripts

- `npm run dev` starts the Vite dev server
- `npm run build` creates a production build in `dist/`
- `npm run preview` previews the production build locally
- `npm run lint` runs TypeScript type-checking
- `npm run clean` removes the `dist/` folder

## Project Structure

```text
src/
  assets/         Local image assets
  components/     Homepage sections and reusable UI
  App.tsx         Main page layout
  main.tsx        React entry point
  index.css       Global styles
```

## Notes

- No API keys or special runtime configuration are required.
- Business content is currently hardcoded in the React components.
- Some sections use external images and a Google Maps embed.

## Production Build

```bash
npm run build
```

To preview the production output locally:

```bash
npm run preview
```
