# Henry Hui — Portfolio

A responsive, single-page portfolio for Henry Hui, a Computer Science undergraduate at The University of Hong Kong. The site brings together projects, professional and research experience, robotics, education, awards and skills.

## Stack

- React and TypeScript
- Vite
- Custom responsive CSS, with lightweight browser-native scroll and reveal interactions
- GitHub Pages via GitHub Actions

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Update portfolio content

Content is centralised in `src/data/`:

- `profile.ts` — introduction, About copy, rotating taglines and contact details
- `experiences.ts` — roles, dates, summaries, contributions and tools
- `projects.ts` — project descriptions, implementation, recognition and technologies
- `education.ts` — education history and awards
- `skills.ts` — grouped skills and languages
- `activities.ts` — Robocon contributions, competition record and tools

Add an entry to the relevant exported array to include it in the existing layout. Project visual studies are selected using the `visual` field; they are illustrative graphics, not actual product screenshots.

## Replace or add images

- Replace `public/profile.jpeg` to update the hero portrait. Keep the same filename or update the image path in `src/sections/Hero.tsx`.
- `public/icon.png` is the site favicon. Replace it with a square PNG or update the favicon reference in `index.html`.
- Place project, competition and award media in `public/images/projects/`, `public/images/robocon/` and `public/images/awards/`.
- To show a project image, add its public path (for example, `/images/projects/example.jpg`) to that project's `image` field in `src/data/projects.ts`.

No project screenshots or competition photos are included until supplied. Any media you add to `public/` is published with the site.

## Deploy to GitHub Pages

The Vite base path is `/`, for the user-site repository `henryhhui.github.io`. The workflow at `.github/workflows/deploy.yml` builds the site and deploys it to Pages whenever changes are pushed to `main`; it can also be started manually from the Actions tab.

For the first deployment:

1. Push this repository to `https://github.com/henryhhui/henryhhui.github.io`.
2. In **Settings → Pages**, set the build and deployment source to **GitHub Actions**.
3. Confirm Actions are enabled for the repository, then push to `main` or start **Deploy portfolio to GitHub Pages** from the Actions tab.
4. Once the workflow succeeds, the site is available at [henryhhui.github.io](https://henryhhui.github.io/).

The workflow uses the official GitHub Pages Actions and requires the `pages: write` and `id-token: write` permissions declared in the workflow. No branch-based `gh-pages` deployment or repository secret is required.

## Public repository notes

This repository builds a static, client-side website. Contact details, the profile photo and any content or images added to the site are public; do not add private credentials, API keys, unpublished personal data or files you do not have permission to publish. The site has no server-side APIs, private environment variables or backend-dependent features.

The `.gitignore` excludes `node_modules/`, `dist/`, local environment files and `.DS_Store`. Commit `package-lock.json` so the deployment workflow can install the exact dependency versions with `npm ci`; generated `node_modules/` and `dist/` folders do not need to be uploaded.