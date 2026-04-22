# mcabesoftware.com

Static site for McAbe Software. Plain HTML + CSS, no build step.

## Local preview

Open `index.html` directly in a browser, or serve with:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

- `index.html` — home (hero + apps grid)
- `about.html` — about page
- `privacy.html` — privacy policy
- `css/style.css` — all styling
- `assets/icons/` — placeholder icons live inline in HTML for now
- `assets/screenshots/` — reserved for app screenshots
- `CNAME` — custom domain for GitHub Pages

## Deployment

Hosted on GitHub Pages. Custom domain `mcabesoftware.com` points here via DNS at IONOS.

To update the live site: push to `main`. GitHub Pages auto-deploys.
