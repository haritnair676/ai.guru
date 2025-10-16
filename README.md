# AI Insights & Tools — Static site

This repository contains a small, SEO-friendly static website ready to deploy on GitHub Pages. It includes a tiny analytics loader that supports Google Analytics (GA4) and Plausible.

Getting started

1. Update the canonical URLs in the HTML files (`index.html`, `about.html`, `blog.html`) to use your GitHub pages URL (or custom domain).
2. Configure analytics in `index.html` by setting the `meta[name="ga-measurement-id"]` content to your GA4 measurement ID (G-XXXXXXX) or `meta[name="plausible-domain"]` to your domain for Plausible.
3. Push to GitHub and enable GitHub Pages on repository settings (branch: gh-pages or use the workflow below which publishes from main push).

Deployment (recommended):

- This repo includes a GitHub Actions workflow that triggers on pushes to `main` and publishes the repository root to GitHub Pages using `peaceiris/actions-gh-pages`.

Analytics

- GA4: Add your measurement id to the meta tag in `index.html`. The site loads GA4 and anonymizes IPs by default.
- Plausible: Add your domain to the plausible meta tag. The snippet will load plausible.io tracker.

SEO tips applied

- Semantic HTML, clear titles and descriptions on each page.
- Canonical links and a sitemap.xml with a robots.txt entry.
- OpenGraph and Twitter Card metadata plus structured JSON-LD for the site.

Next steps / improvements

- Add more pages and blog posts; consider a simple static generator (Hugo, Jekyll) for content management.
- Add image alt tags and optimize `ai-preview.png`.
- Configure a custom domain with HTTPS via GitHub Pages.
