# gmacovei.com — personal website

Static production-ready website files. Deploy the contents of this folder at the domain root.

## Purpose
This site presents Gabriel Macovei as a digital strategist and AI expert, including his professional introduction, focus areas, collaborators, selected outcomes, insights, contact paths, and a prominent route to RielArt for business services and project booking.

## Key files
- `index.html` — personal homepage
- `assets/css/site.css` — shared responsive styling and light/dark themes
- `assets/js/site.js` — theme toggle, mobile navigation, FAQ accordion, filters, and reveal behavior
- `images/` — portrait, social image, favicon, and RielArt preview assets
- `privacy-policy/`, `terms-conditions/` — legal pages

## Redirects
Legacy `/blog/` URLs contain static redirect pages and canonical links to their RielArt destinations. Configure true 301 redirects at the CDN or hosting layer using `_redirects` where supported.

## Notes
- Light mode is the default; the visitor's dark-mode preference is stored locally.
- Daniel Patel's profile links are placeholders and currently point to `gmacovei.com` until approved URLs are supplied.
