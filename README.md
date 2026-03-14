# Scroll-Animated Landing Page

A single-page landing with scroll-triggered animations and parallax effects. Built with React, Framer Motion, and GSAP ScrollTrigger.

## Tech Stack

- **React** (Vite)
- **TypeScript**
- **Framer Motion** — scroll-triggered entrance animations (`whileInView`, `once: true`)
- **GSAP + ScrollTrigger** — parallax on hero background and gallery layers
- **Tailwind CSS** — layout and styling

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start dev server         |
| `npm run build` | Production build      |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint             |

## Project Structure

- `src/components/` — one component per section: `HeroSection`, `AboutSection`, `ServicesSection`, `GallerySection`, `FooterSection`
- `src/utils/gsapConfig.ts` — GSAP ScrollTrigger registration
- Single page, no routing

## Deploy

### Vercel

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com), import the repository.
3. **Build command:** `npm run build`
4. **Output directory:** `dist`
5. Deploy.

### Netlify

1. Push the repo to your Git provider.
2. In [Netlify](https://netlify.com), add a new site from Git.
3. **Build command:** `npm run build`
4. **Publish directory:** `dist`
5. Deploy.

Both platforms detect the build command and output directory automatically for Vite projects.
# assignement-Fr
