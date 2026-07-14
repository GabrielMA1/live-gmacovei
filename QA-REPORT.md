# GMACOVEI 2027 QA Report

Reviewed: July 14, 2026

## Passed checks

- 8 HTML pages checked
- All pages have one H1, a title, and a meta description
- No duplicate HTML IDs
- No missing local images, stylesheets, scripts, or internal page targets
- Sitemap targets resolve to included pages
- JavaScript syntax passes `node --check`
- CSS opening and closing braces are balanced
- No horizontal overflow at 1440 px, 900 px, or 390 px viewport widths
- Theme toggle changes between light and dark modes
- Mobile navigation opens and closes, including Escape-key handling
- FAQ accordion interaction works
- Portrait and all four proof cards remain visible across desktop, tablet, and mobile layouts

## Deployment structure

Files are packaged at the ZIP root for direct replacement in the existing GitHub Pages repository. The `CNAME` file remains set for gmacovei.com.
