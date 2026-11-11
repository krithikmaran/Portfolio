# vite-project

Source for [krithikmaran.work](https://krithikmaran.work). See the [root README](../README.md) for the stack, pipeline and deployment notes.

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Start the Vite dev server |
| `npm test` | Run the Vitest unit tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |
| `npm run build` | Build the production bundle into `dist/` |
| `npm run preview` | Serve `dist/` locally |

Files in `public/` are copied as-is to the site root: `resume.pdf` (stable resume link), `_headers` (Cloudflare security and cache headers), `robots.txt`, `sitemap.xml`, `og-image.png` and `apple-touch-icon.png`.

If you change the inline theme script in `index.html`, update its `sha256-...` hash in the `Content-Security-Policy` in `public/_headers`. The `npm test` suite checks that the two match.
