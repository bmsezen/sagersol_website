# sagersolutions.com

Static site for [Sager Solutions](https://sagersolutions.com), built with [Astro](https://astro.build)
and deployed to GitHub Pages. This replaces the previous WordPress site hosted on Ionos.

## Editing content

All content lives in plain files; no CMS.

| What | Where |
| --- | --- |
| Site name, description, header links, social links, Formspree ID | `src/data/site.ts` |
| Portfolio companies and filter tags | `src/data/portfolio.ts` |
| Home page text (intro, What I do, Background, Contact) | `src/pages/index.astro` |
| Logos and images | `public/images/` |
| Styles | `src/styles/global.css` |

The site is a single page. To add a portfolio company: drop its logo in `public/images/logos/`,
then add an entry to `companies` in `src/data/portfolio.ts`. Its `tags` decide which filter chips
show it; add new tags to the `tags` list in the same file.

The old multi-page URLs (`/investments`, `/about`, and so on) redirect to sections of the home
page; the list is in `astro.config.mjs`.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build
```

## Contact form

The form posts to [Formspree](https://formspree.io). Create a form there, copy its ID (the part
after `/f/` in the endpoint URL), and set `formspreeId` in `src/data/site.ts`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it
to GitHub Pages.

One-time setup:

1. In the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Under **Custom domain**, enter `sagersolutions.com` and enable **Enforce HTTPS** once DNS
   resolves. `public/CNAME` already contains the domain.
3. At your DNS provider (Ionos), point the domain at GitHub Pages:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<your-github-username>.github.io`
