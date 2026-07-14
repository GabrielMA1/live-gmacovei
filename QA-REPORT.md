# GMACOVEI Website 2027 — QA Report

Tested July 14, 2026.

## Layout coverage
- 1600 × 1000 desktop, light and dark themes
- 1024 × 900 tablet/small desktop, light and dark themes
- 390 × 844 mobile, light and dark themes
- No page-level horizontal overflow at any tested viewport
- Responsive navigation switches correctly to the mobile menu

## Requested hero changes
- Gabriel portrait removed from the hero
- Portrait retained in the About section
- Former four-card proof strip removed
- Visit RielArt, Email me, and Connect on LinkedIn use the same glass/outline button treatment

## Interaction checks
- Light/dark theme toggle works
- Mobile menu opens, traps navigation state, and closes with Escape
- FAQ accordion opens correctly
- Reveal animation has a non-JavaScript fallback and respects reduced-motion preferences

## Technical checks
- No browser console or JavaScript errors during QA
- Local image references verified
- One H1 per rendered page
- Existing canonical metadata, structured data, CNAME, robots.txt, redirects, and sitemap retained or updated
- Blog routes continue redirecting to the active RielArt publication
