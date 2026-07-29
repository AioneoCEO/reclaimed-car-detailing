# Reclaimed Auto Care — Project Guide for Claude

## Business Overview
- **Business Name:** Reclaimed Auto Care
- **Tagline:** Restored. Refined. Reclaimed.
- **Type:** Faith-driven mobile auto detailing business
- **Location:** Elmore County, Alabama — based in Tallassee (mobile — no fixed shop address, never put address on site)
- **Phone:** (334) 640-1831
- **Email:** reclaimedautocare@gmail.com
- **Instagram:** @reclaimedautocare
- **Facebook:** /reclaimedautocare
- **TikTok:** @reclaimedautocare
- **Owner:** Ray Compton
- **Domain:** reclaimedautocare.com (site-wide domain, repointed from reclaimeddetailers.com — see SEO Status below for DNS/Vercel status)

## Mission & Brand Voice
The brand is built on three pillars: **Faith, Community, Excellence**. Every piece of writing, UI copy, and design decision should feel premium, purposeful, and personal — not corporate. The tone is confident but warm, like a trusted professional who also cares about people.

- Use phrases like "Restored. Refined. Reclaimed." and "Faith First. Community Always."
- Avoid generic marketing language ("best in class," "top-tier," etc.)
- The ✝ symbol is intentional and meaningful — keep it in footers and brand moments
- The business serves Elmore County, AL (home county) and surrounding areas (Tallassee, Wetumpka, Pike Road, Montgomery, Millbrook, Prattville, Auburn)
- The business is mobile-only with no fixed location — never add a street address to the website

## Service Area Travel Fee
- Free travel within a 25-mile radius of the Tallassee home base
- Beyond 25 miles: a flat **$1 per additional mile** (e.g. 30 miles away = 25 free + $5)
- Current distances from home base: Wetumpka ~15mi (no fee), Pike Road ~15mi (no fee), Montgomery ~25mi (no fee), Millbrook ~30mi (+$5), Prattville ~35mi (+$10), Auburn ~45mi (+$20)
- Tallassee itself stays branded as the home base (0 miles, never a fee) regardless of actual driving distance
- Each served city has its own `detailing-<city>-al.html` landing page; keep mileage/fee figures consistent across that page, `service-areas.html`, and the shared nav "Areas" dropdown across all pages

## Site Structure
| File | Purpose |
|---|---|
| `index.html` | Main homepage — services, gallery, memberships, contact |
| `about.html` | Brand story, owner background, faith/community mission |
| `showcase.html` | 3D car viewer + before/after gallery |
| `privacy-policy.html` | GDPR/CCPA compliant privacy policy |
| `terms.html` | Terms & Conditions — Alabama law |
| `sitemap.xml` | SEO sitemap (add when domain is confirmed) |
| `robots.txt` | SEO crawl permissions (add when domain is confirmed) |
| `google4c047571b395bdc9.html` | Google Search Console verification file |

## Brand Colors (CSS Variables)
```css
--purple:        #7b35c4   /* Primary brand purple */
--purple-brand:  #9b5ce4   /* Lighter interactive purple */
--purple-light:  #b07de8   /* Hover states, accents */
--gold:          #b8922a   /* Premium accent gold */
--gold-light:    #d4aa4a   /* Gold hover/highlight */
--silver:        #c8c8d0   /* Neutral metallic */

/* Light Mode */
--bg:            #f4f2ef
--bg-2:          #ede9e4
--bg-card:       #ffffff
--text:          #1c1a18
--text-muted:    #6a6860

/* Dark Mode */
--bg:            #080808
--bg-card:       #161616
--text:          #f5f3f0
--text-muted:    #b0ada6
--bg-dark:       #1a1020   /* Deep purple-black for hero sections */
```

## Typography
```css
font-family: 'Playfair Display', serif;   /* Headings, brand moments — elegant */
font-family: 'Barlow', sans-serif;        /* Body text, UI — clean, readable */
font-family: 'Barlow Condensed', sans-serif; /* Labels, caps, nav links */
```
- Headings use Playfair Display at weights 700–900
- Body copy uses Barlow at weight 300–500
- Letter-spacing on uppercase labels: 1–2px

## Design Principles
- **Dark hero sections** with deep purple-black (`#1a1020`) and purple glow effects
- **Light content sections** alternate between `#f4f2ef` and `#ede9e4`
- **Buttons:** Primary = solid purple `#7b35c4`, Outline = transparent with purple border
- **Cards** use white background with subtle gold border accents on hover
- **No harsh borders** — use `rgba` opacity borders and box-shadows
- **Supports light/dark mode** via `data-theme` attribute on `<html>`
- Aesthetic is luxury/premium meets faith-driven authenticity — think high-end detailing shop meets personal brand
- Inspired by Apple-level cleanliness but warmer and more personal

## Tech Stack
- Pure HTML/CSS/JavaScript — no frameworks, no build tools
- Three.js (CDN) used in `showcase.html` for 3D car viewer
- Google Fonts for typography
- No npm, no bundler — keep it simple and deployable anywhere
- Hosted on **Vercel** via GitHub integration (repo: `ReclaimedDetailersLLC/reclaimed-detailers-site`)

## Development Branch
- Active branch: `claude/detailer-local-seo-ranking-5seyb2`
- Always commit and push to this branch
- Do NOT push directly to `main` without user approval

## SEO Status
- Google Search Console: verification file added, pending domain setup
- Meta descriptions: added to all pages ✅
- Local business schema (JSON-LD): added to all pages ✅
- Sitemap + robots.txt: present, reference reclaimedautocare.com
- Domain registrar: Squarespace Domains (migrated from Google Domains after Squarespace's 2023 acquisition)
- reclaimeddetailers.com: DNS already correctly points to Vercel (A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com) — confirmed live
- reclaimedautocare.com: owned, same Squarespace nameservers, but DNS still sits on Squarespace's default parking records — **not yet pointed to Vercel**, and not yet added as a custom domain on the Vercel project. TODO: add domain in Vercel dashboard, then update Squarespace DNS to match the records above.

## Legal Compliance
- Privacy Policy: `privacy-policy.html` ✅
- Terms & Conditions: `terms.html` ✅
- Cookie consent banner: added to all pages ✅
- Copyright: © 2026 Reclaimed Auto Care ✅
- ADA: basic structure in place; needs real image alt text when photos are added

## Services Offered
- Exterior wash & decontamination
- Paint correction
- Ceramic coating ("Covenant Coatings")
- Interior detailing
- Maintenance wash ($75 flat)
- Mobile — comes to the customer

## Pending / TODO
- [ ] Add real before/after photos to showcase and about pages
- [x] Add meta descriptions to all pages
- [x] Add Local Business JSON-LD schema to all pages
- [x] Confirm domain name (reclaimedautocare.com) and add sitemap.xml + robots.txt
- [ ] Add reclaimedautocare.com as a custom domain on the Vercel project, then point its DNS (still on Squarespace parking defaults) to Vercel
- [ ] Decide reclaimeddetailers.com's role going forward (redirect to reclaimedautocare.com, or drop it) — it currently still resolves correctly to the same Vercel project
- [ ] Submit sitemap in Google Search Console once reclaimedautocare.com is live
- [ ] Set up Google Business Profile for Maps/local SEO
- [ ] Add Yelp, Bing Places, Apple Maps listings

## Expanding Claude's Capabilities (MCP Servers to Add)

To add these, go to **Claude Code → Settings → MCP Servers** and add the following:

### Figma MCP (UI/UX Design)
Lets Claude read and write Figma design files directly.
- Search "Figma MCP" at `npmjs.com` or the Anthropic MCP directory
- Requires a Figma API token from your Figma account settings

### Tailwind / shadcn UI
For generating styled components quickly. Add to project by running:
```bash
npm install tailwindcss
```
Then tell Claude: "Use Tailwind CSS for all new components."

### Google Analytics MCP
Once the site is live, connect GA4 so Claude can read traffic data and suggest SEO improvements based on real visitor behavior.

## Working Preferences
- Keep code in plain HTML/CSS/JS — no React, no Vue unless explicitly asked
- Prefer editing existing files over creating new ones
- Always update all pages consistently (don't add something to index.html without adding it to the other pages)
- Commit and push after every meaningful change
- When adding new pages, match the nav, footer, and cookie banner pattern from existing pages
- Copyright year: always use current year (2026)
- No placeholder text like "Lorem ipsum" — write real, on-brand copy
