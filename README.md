# gmacovei.com — personal website

Static production-ready website files. Deploy the contents of this folder at the domain root.

## Purpose
This site presents Gabriel Macovei as a digital strategist and AI expert, including his professional introduction, focus areas, typical outcomes, insights, contact paths, and a prominent route to RielArt for business services and project inquiries.

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

## July 2026 audit update
- Standardized terminology around Services, Pricing, Process, Insights, and Contact.
- Reframed outcome language so it does not imply unsupported case-study proof.
- Added a GitHub Pages-compatible redirect for the stale direct-mail article URL.
- Corrected the privacy-page description and retained gmacovei.com as a personal founder hub rather than a paid-traffic landing page.

## Alignment update
This package includes the final spacing and alignment pass for the homepage hero actions, portrait presentation, and four-item proof strip across desktop, tablet, and mobile layouts.
