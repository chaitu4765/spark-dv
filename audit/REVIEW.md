# Research and implementation review — 8 November 2026

## Sources and coverage

Firecrawl mapped and crawled https://sparkdv.com, collecting 30 pages. Playwright inspected the source homepage, clinical/audience pages and the six collapsed dentist protocols. It captured the Cleer studio case study at desktop and mobile sizes, scroll states and the gallery's underlying design images.

The reference is a studio case study, not a live storefront. Its WebGL imagery was partially blank in headless Chromium. Direct gallery-image inspection supports conclusions about typography, quiet navigation, full product stages and open composition, but not claims about a live Cleer checkout or precise storefront animation timings.

## Visual comparison and refinements

1. The original local implementation used an arched crop that cut off product packaging, small mobile text, and a large overflowing logo. The replacement uses contained product imagery, consistent sans-serif typography, controlled spacing and a correctly sized logo.
2. Product details, research and audience pages now expose source-specific content rather than short generic summaries. The founder portrait and biography are restored; six source protocols are interactive disclosures.
3. User-supplied shelf, logo-reveal and footer components were integrated. The shelf initially appeared only on the homepage; user review identified that `/products` still had cards. The catalogue was then switched to the same shelf while preserving search, sort and filters.
4. The footer retains its cinematic headline, diagonal scrolling band, magnetic enquiry links and large SPARK-DV background wordmark. User review rejected the lower navigation columns, so those were removed. A compact legal row remains; full manufacturer and product-label information moved to Contact.
5. Original photography and logos remain intact. The source has shared/mismatched Nanion variant imagery, recorded explicitly in README and the image inventory. No missing package text, reviews, sizes or delivery promises were invented from the cosmetic demo.

## Implementation choices

- Four products per shelf on desktop, two on mobile; no hard-coded twelve-product limit.
- Shared-layout product detail transition, real cart integration, quantity selection, original-image zoom, Escape/Back dismissal and focus containment.
- Logo reveal replays on browser reload and can be skipped. Reduced motion uses a short static presentation. WebGL failure has an original-logo fallback.
- Footer scrolling can be paused. Fine-pointer magnetic motion is disabled for touch/reduced-motion users.
- Forms explicitly prepare an email; no simulated success or fake backend.
- Client-side route metadata, product/organization structured data, robots and sitemap are provided. Production Core Web Vitals and search indexing still require measurement on the actual host; no Lighthouse score is claimed.

## Owner inputs still required for launch

Approved legal-policy text; confirmed variant-specific photographs where the source reuses or mismatches assets; submission/payment integration only if automated orders are desired. Deployment is not part of the completed local changes.

Machine-readable verification results are in `qa.json`, `component-qa.json` and `links.json`. Screenshots include the final catalogue shelf and the individual interaction states, not just the homepage.
