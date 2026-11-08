# SPARK-DV Website Design Direction

**Version:** 1.0  
**Date:** 4 November 2026  
**Companion requirements:** [SPARK-DV-Recreation-PRD.md](./SPARK-DV-Recreation-PRD.md)  
**Scope:** Public marketing site, product catalogue and details, professional resources, audience pages, enquiry routes, and commerce touchpoints.

## 1. Design intent

### Product truth

SPARK-DV presents clinically oriented products for pediatric and preventive dentistry. The site must serve dentists first while keeping parent education, direct shopping, distributors, and school-program partners easy to reach. Catalogue discovery and qualified enquiries are the primary conversion goals.

### Direction in one sentence

**A calm clinical journal for pediatric dentistry, with product objects treated like precise instruments and every claim connected to usable evidence or guidance.**

The experience should feel editorial and considered, not like a generic hospital template or a brightly colored children’s clinic. The primary user is a busy dental professional scanning between patients; the secondary audience should still understand the site without needing clinical vocabulary.

### Desired user response

Within seconds, dentists should understand that SPARK-DV has a portfolio across prevention, pediatric endodontics, and restorations, and should see a clear route to products, protocols, or an enquiry. Parents should see a separate, plain-language path. Visitors should experience the site as confident, specific, and transparent about professional-use status and evidence.

## 2. Inspiration research and application

Research was conducted using the user’s browser and publicly accessible live sites. References are sources of interaction/organization patterns only; do not copy their visual identity, language, images, or distinctive layouts.

### Sprig Oral Health Technologies — [sprigusa.com](https://sprigusa.com/)

Observed patterns: pediatric-dentistry-specific product storytelling; pairing “Learn more” with “Shop now”; featured products; training and education as part of the product ecosystem; dentist testimonials and family stories; clear product/education/resource footer groupings.

**Apply to SPARK-DV:** pair product education with an explicit next step, create a dentist-first pathway to protocols, samples and training, and keep family-facing guidance separate. Use real, approved stories only. Avoid adopting Sprig’s wordmark, color language, layouts, product imagery, or campaign devices.

### Oral Science — [oralscience.com](https://oralscience.com/)

Observed patterns: products grouped by clinical need (e.g. high-risk caries, sensitivity); protocols connected to product groups; specialist presentation enquiry; latest innovations and useful learning/news modules; clear professional shopping entry points.

**Apply to SPARK-DV:** let dentists browse by clinical category as well as product name, connect the science library to relevant catalogue items, and make “Ask a clinical specialist” a first-class action. Avoid a homepage dominated by rotating banners or a dense corporate mega-footer.

### Additional reference — [Oral Science product/protocol ecosystem](https://oralscience.com/)

The site also demonstrates that education, protocols, product recommendations, and professional requests can coexist when their labels are distinct. SPARK-DV should keep evidence and professional-use qualifiers close to their products and protocols rather than hiding them in the footer.

## 3. Visual system

### 3.1 Palette

Use a restrained mineral palette with one vivid scientific accent. These are proposed design tokens, not extracted source-brand values; validate against any approved logo/packaging assets before implementation.

| Token | Proposed value | Role |
|---|---|---|
| `ink-950` | `#102B35` | Primary text, deep header, high-contrast panels |
| `teal-700` | `#126B69` | Primary actions, active navigation, links |
| `teal-100` | `#DCEFEB` | Soft feature surfaces, chips, selected filters |
| `mint-50` | `#F4F8F5` | Quiet section background |
| `paper` | `#FBFAF6` | Warm page canvas |
| `white` | `#FFFFFF` | Cards, forms, product surfaces |
| `slate-600` | `#53656D` | Secondary copy |
| `line` | `#D9E2DF` | Borders, dividers, table rules |
| `amber-600` | `#A65A16` | Caution/attention states only; pair with text/icon |
| `error-700` | `#A52D2D` | Error feedback |

Do not use color alone for professional-only, coming-soon, safety, discount, or form states. Confirm all contrast combinations meet WCAG 2.2 AA.

### 3.2 Typography

- **Display/headings:** a distinctive but restrained editorial serif (e.g. locally licensed `Newsreader`) for hero and section titles; use sparingly for brand warmth.
- **UI/body:** a highly legible sans (e.g. locally licensed `DM Sans`) for navigation, descriptions, data, product labels, and forms.
- **Numeric/specification style:** use the UI sans with tabular numerals for prices, concentrations, file sizes, and technical specifications.
- Load font files locally; do not make page rendering depend on remote font requests.
- Headings use sentence case. Avoid all-caps paragraphs or long all-caps labels.
- Body line length target: 55–75 characters on editorial pages; product summary cards stay shorter.

### 3.3 Shape, borders, and material

- Use a 12-column desktop grid with a 1200–1280 px content maximum and generous outer margins.
- Cards: mostly square/low-radius (6–10 px), thin border, very light shadow only when elevated; no pervasive pill-shaped cards.
- Buttons: 6 px radius, confident fill/outline hierarchy, minimum 44 px touch target.
- Use fine rules, section numbers, annotated product labels, and restrained circles to evoke a clinical journal/field guide.
- No glassmorphism, gradient blobs, generic tooth icons as wallpaper, or unnecessary floating shapes.
- Product photography should show true packaging at consistent scale against warm white or pale mint. Clinical/lifestyle photography should be documentary and authentic, never staged stock smiles where an actual school or clinic image is required.

### 3.4 Iconography and illustration

- Use a coherent, simple line icon family, optically aligned, generally 1.75 px stroke.
- Icons support labels; never replace labels for critical status.
- Use simple mechanism diagrams only when authored from verified science and approved by a subject-matter reviewer. Label diagrams as conceptual where not to scale.

## 4. Navigation and information architecture

### Desktop header

Announcement strip is slim and dismissible. Main navigation is sticky after the hero threshold, with brand mark at left, core paths centered, and utility actions at right.

**Primary links:** Products, Science, For Dentists, For Parents, School Program, About.  
**Utilities:** Contact, cart count, and context-specific CTA.  
**CTA:** “Request pricing” on professional/catalogue pages; “Shop products” on parent and product discovery pages.

Products opens a structured menu with category columns: Prevention, Pediatric Endodontics, Restorations & Space Maintenance, Endodontic Instruments. Include compact product links, “For professionals” qualification where needed, and “Browse all products.”

### Mobile navigation

- Header has logo, cart, and menu control.
- Menu opens as a full-height panel with large text links and nested product categories.
- Tap to expand categories; never depend on hover.
- Keep Contact and the current primary CTA visible at the bottom of the menu.
- Close on Escape, explicit close button, route selection, or backdrop tap; preserve focus and return focus to the menu trigger.

### Orientation aids

- Breadcrumbs on product detail, resource, and policy pages.
- Section index/jump links for Science, For Dentists, For Parents, and long product pages.
- Filters visible above catalogue results; active filter chips removable individually; a clear-all action appears when any filter is active.
- Preserve route path and query parameters for filter/sort state where practical.

## 5. Page compositions

### 5.1 Home

1. **Announcement:** “Distributor & clinic enquiries open” with WhatsApp and dismiss.
2. **Hero split:** left side has a small “Pediatric & preventive dentistry” eyebrow, headline “Evidence-led care for growing smiles.” (working design headline; use exact approved brand copy if required), concise value statement, primary “Explore products” and secondary “Clinical resources.” Right side shows a precise still-life of Nanion packaging and a subtle clinical context image, arranged like a field-guide plate. Small proof line: Made in India · Dentist-oriented · Evidence-led.
3. **Professional task bar:** “I’m looking for” segmented links: Prevention / Endodontics / Restorations / Clinical protocols. This creates the dentist-first orientation without a forced role gate.
4. **Featured portfolio:** two larger feature panels for Nanion and Nanion Pro with variant clarity; then compact cards for Nanion Swish, P-Obtura, Nanohybrid Biocem, MARC, MARC Zirc, TRICURE, Nano Silver Pro, 3D FLXPOST, Gummies, ASM, and SPARK DV Files. “View all products” remains apparent.
5. **Science, made useful:** an editorial 3-step strip: Antibacterial action → Biofilm disruption → Remineralization support, with a link to the full evidence library. Avoid implying a guaranteed outcome.
6. **Protocols in practice:** large panel linking to the six dentist protocol topics; show what is available and what is coming soon.
7. **School initiative:** image plus concise program summary and verified minimum cohort/share terms; CTA “Explore the school program.”
8. **Audience paths:** Dentists (protocols, evidence, samples), Parents (plain-language guidance), Partners (pricing and distribution). Keep them visually distinct, not equal in size: dentist card leads.
9. **Trust/voices:** approved testimonials only. If consent or evidence is unavailable, use an approved company/team proof point instead.
10. **Closing CTA:** “Discuss a product or partnership” with Request pricing and Contact a specialist.
11. Full footer with regulatory details and disclaimer.

### 5.2 Catalogue

- Intro row: title and one-line portfolio explanation; search field on wider catalogues.
- Sticky filter rail/sidebar: category, audience/use (only approved), professional-only, availability; sort by relevance/name/price.
- Results show count and active filters.
- Grid: 3 columns at desktop, 2 at tablet, 1–2 at mobile, consistent image stage; cards can grow where variant choice is necessary.
- Family card: category label, image, product name, 1–2 line description, small feature set, professional status, status/availability, price range or “Request professional pricing,” and detail action. Variant cards expose selector and selected price before add-to-cart.
- On mobile, filters open in a bottom sheet with Apply/Clear; selected filters are summarized above results.
- Provide empty state with clear filter reset and contact help.

### 5.3 Product detail

- Breadcrumb and category label.
- Two-column first view: product gallery; name, short description, use/professional badge, variant selector, price/status, quantity, primary CTA, secondary clinical-enquiry link.
- Under hero, use a compact “At a glance” strip with formulation/spec, intended use, availability, and professional status.
- Information architecture: Overview → How it works → Use/protocol → Evidence → Safety & specifications → FAQs. Hide unavailable sections only when not in source; retain explicit “Documentation coming soon” states when that is current truth.
- “For dental professionals” note remains visible near the purchase action for professional-only products.
- Related items connect adjacent workflow items, not random upsells.

### 5.4 Science & Research

- Hero: “The science behind the formulation” with a simple labeled mechanism diagram.
- Three mechanism chapters use alternating copy/diagram layouts, with a sticky side index on desktop.
- Evidence library cards show count, topic, citation access, and current availability; citations are first-class, not decorative counts.
- Non-staining discussion includes a clearly visible qualifier and clinical note.
- Related product mapping connects each science mechanism to relevant products.

### 5.5 For Dentists

- Hero plus three clear actions: Open protocols, Request samples, Ask a clinical specialist.
- Protocol library as an accordion/table of contents with category, product association, document status/version, and audience note.
- Download center distinguishes available files from coming-soon materials.
- Clinical enquiry form in a clear panel with concise field labels, required markers, and contextual product selector.
- Professional FAQ with professional-use-only list and clinical disclaimer.

### 5.6 For Parents

- Reassuring, plain-language intro; “This page is educational and does not replace your dentist.”
- Educational sections as step cards: cavity causes, white spots, brushing steps.
- Product guidance uses simple “Talk to your dentist about…” framing and never turns risk content into a diagnosis tool.
- FAQ accordion; safety notes adjacent to relevant answers.
- Product links remain secondary to guidance and dentist consultation.

### 5.7 School program

- Hero with authentic school dental camp image and partner-oriented CTA.
- “What each student receives” 4-step visual checklist.
- “How a campaign works” timeline: partner enquiry → onboarding/terms → school delivery → certificates/follow-up, but only publish operational steps once confirmed.
- Program economics shown in a transparent table, with final-terms qualifier beside it.
- FAQ/contact block and related products.

### 5.8 About, Contact, legal pages

- About page uses editorial narrative, approved founder profile, values and a timeline; reconcile product-count inconsistency before design lock.
- Contact page begins with intent selection cards: Clinical question, Distributor enquiry, School program, General contact. Route each to a short form with relevant fields.
- Legal pages use a calm reading layout, updated date/version, table of contents for long documents, and printable content. Use only current approved legal copy.

## 6. Core UI components

| Component | Design anatomy | States / behavior |
|---|---|---|
| Announcement bar | Short announcement, action, close button | Default, dismissed, mobile wrap; close has accessible name |
| Sticky header | Brand, links, CTA, cart count | Top, sticky, menu open, keyboard focus, cart update |
| Product mega-menu | Category columns, family links, audience qualifiers | Open by click/keyboard; close on Escape/outside click; focus managed |
| Product card | Image stage, label, title, short copy, status, price/variant, CTA | Default, hover/focus, professional-only, coming soon, discounted, unavailable |
| Product variant selector | Labeled radios or select with full name/spec | Selected, unselected, disabled/unavailable; price updates live accessibly |
| Filter chips | Removable active filter with label | Active, focus, clear all; URL state reflects selection |
| Filter drawer | Category/use/status controls and Apply | Closed, open, selected, no-result recovery |
| Price/offer block | Current price, compare-at price, offer label | Sale, regular, request pricing, no public price, unavailable |
| Professional-use badge | Text + icon and concise explanation | Always visible on relevant card/detail; never color-only |
| Clinical note/callout | Heading, note icon, clear text, optional source | Informational, safety, caution; accessible contrast |
| Protocol accordion | Title, product/context metadata, content/download link | Collapsed, expanded, loading, unavailable; keyboard support |
| Evidence card | Topic, study count, source links, last reviewed | Available, partial, coming soon; count is not a substitute for citations |
| Form field | Persistent label, required marker, help/error text | Default, focused, invalid, disabled, submitting, success |
| Enquiry purpose selector | Four intent cards with short explanations | Unselected, selected, keyboard focused; sets relevant fields |
| Cart drawer | Item rows with image, variant, price, quantity, remove, subtotal | Empty, populated, update, removal, loading, error; trap and restore focus |
| Toast/status | Concise result with optional action | Success/error/info; announced politely, dismissible where appropriate |
| WhatsApp action | Icon plus “Chat with SPARK-DV” label on expanded contexts | Fixed desktop/mobile placement without obscuring content or controls |
| Footer | Four navigation/contact columns, regulatory block, legal/disclaimer | Responsive accordion groups on small screens |

## 7. Motion and scroll animation specification

Motion should make the long site feel like one composed editorial journey. It must clarify hierarchy and reveal content without delaying access. **No essential content begins hidden.** If animation is unavailable, interrupted, or reduced, all content remains visible.

### 7.1 Motion principles

- Choreograph by section, not by individual DOM element; use a small number of consistent reveal families.
- Use transform and opacity only for reveals; avoid animating layout dimensions, blur, large shadows, or full-screen parallax.
- Trigger once when a section first enters view, except for the scroll progress indicator and sticky navigation state.
- Respect `prefers-reduced-motion: reduce`: remove transforms/parallax/scrub effects and show all content immediately.
- Keep animation duration 180–700 ms. No looped auto-motion for informational content.
- Avoid scroll hijacking, snap-to-section, text-by-text typewriter effects, and autoplaying carousels.
- For carousels, require manual controls and pause when focus/hover enters; provide pagination and announce slide change.

### 7.2 Motion tokens

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 160 ms | Button, chip, icon, focus-related state |
| `motion-base` | 280 ms | Drawer, accordion, menu and card affordances |
| `motion-reveal` | 520 ms | Section reveal and image entrance |
| `motion-long` | 700 ms max | Hero image/collage composition only |
| `ease-standard` | `cubic-bezier(.2,.7,.2,1)` | Most UI transitions |
| `ease-emphasis` | `cubic-bezier(.16,1,.3,1)` | Editorial image/card entrance |
| `reveal-distance` | 18–28 px | Y translation, desktop |
| `stagger` | 65–90 ms | Small group of cards/chips; cap total cascade near 450 ms |

### 7.3 Scroll behaviors by section

| Surface/element | Trigger and behavior | Limits/accessibility |
|---|---|---|
| Hero product still-life | On initial load, product image fades in and moves 18 px upward over ~650 ms; small proof labels follow with 70 ms stagger | Headline/CTA are visible immediately; never gate copy behind animation |
| Hero scroll transition | Image shifts vertically by at most 3–4% of viewport over first ~500 px of scroll | Disable on reduced-motion and low-power/mobile; no content parallax |
| Sticky header | After hero’s bottom edge crosses top threshold, header compacts to a thinner surface with subtle border/background | 180 ms; content offset prevents jump; focus/scroll position preserved |
| Section headings | When 12% of section enters viewport, heading and short lead fade/translate 20 px over 450 ms | Trigger once; hidden state max 100 ms after intersection; content visible if JS fails |
| Product card grid | Cards reveal in row-wise stagger (70 ms) with opacity and 14 px rise | Stagger capped to visible first rows; no scroll-linked continuous motion |
| Mechanism diagram | Three steps draw/reveal as each step reaches 30% viewport; connector line grows once, then labels appear | Static complete diagram without motion; do not animate scientific meaning or imply timing/causality beyond approved copy |
| Science chapter media | Alternating image/diagram fades in with slight x-shift (16 px) from the content edge | No sticky pinned reading on mobile; no parallax on clinical diagram text |
| Protocol accordions | Height/opacity transition 220 ms; icon rotates 90° | `aria-expanded` updates at activation; allow reduced-motion instant state |
| School program timeline | Timeline nodes reveal sequentially as the whole group enters; no progress tied to scroll position | If campaign steps are not verified, render as static benefits rather than process sequence |
| Testimonials | No auto-advance. Manual next/previous crossfade (200 ms) only if carousel exists | Respect reduced motion; retain visible controls, slide count, pause/no motion while reduced |
| Closing CTA | Background image/color settles over 300 ms; CTA content reveal once | No animated gradient; CTA is fully usable on initial visibility |
| Back-to-top / scroll progress | Thin progress line at top reflects document scroll; back-to-top appears after 1.5 viewport lengths | Hide unnecessary progress for reduced motion if it causes distraction; progress is decorative and not announced continuously |

### 7.4 Micro-interactions

- Buttons: 1 px lift or subtle tonal shift on hover; pressed state has immediate inset/scale (max 0.98); visible focus ring.
- Product cards: image scale max 1.015 on pointer hover, no card jump; keyboard focus receives equivalent border emphasis.
- Links: underline appears/strengthens on hover/focus; do not rely on color alone.
- Filter selection: chip appears with a quick opacity/scale transition; update results without page jump and announce result count.
- Add to cart: button enters loading, then confirmation (“Added Nanion Lite to cart”) and cart count updates; no flying product-to-cart animation required.
- Quantity update: immediate visual response, then authoritative server/cart response; clearly surface failed updates.
- Form submit: submit button loading label; success message is placed in the form region and announced; focus moves to status heading if appropriate.
- Accordion: rotate disclosure icon; body opacity/height transition; opening one item must not forcibly close others unless product explicitly approves single-open behavior.

## 8. Responsive and accessibility rules

- Design targets: 1440 desktop, 1024 tablet landscape, 768 tablet portrait, 390 and 360 mobile; verify at intermediate widths.
- Desktop catalogue: up to 3 columns with comfortable card width; tablet: 2; narrow mobile: 1 or horizontally scroll only for explicitly labeled comparison strips.
- Hero changes from split composition to stacked text then image on mobile; keep primary CTA before the image when space is constrained.
- Sticky elements must not obscure focused controls, anchor targets, or form feedback; apply scroll margin to section headings.
- Base body 16–18 px desktop/mobile; controls and essential metadata at least 14 px; line-height 1.5+ for body copy.
- All interactions keyboard operable; use semantic links for navigation and buttons for state changes.
- Visible focus, logical focus order, skip link, landmarks, one clear H1, correct heading hierarchy, live region for cart/form/filter changes.
- Images have meaningful alt descriptions; decorative background photos use empty alt/hidden semantics.
- Never encode professional-only or safety status solely as color, position, animation, or icon.
- Keep a no-motion mode functional; keep content available when animation scripts do not initialize.

## 9. Content and claims treatment

- Treat all clinical claims, study counts, patent references, arrest rates, age guidance, use instructions, and safety statements as controlled content.
- Keep qualifiers adjacent to the relevant claim and repeated near the action when the decision could affect safe product selection.
- Distinguish consumer guidance from professional protocols with labels and page context.
- Never place purchase-forward UI on a professional-only item without a clear qualification and approved sale model.
- Preserve the existing full content inventory and route details from the PRD. Resolve conflicting counts, prices, variants, status, and statements before design sign-off.
- No placeholder testimonials, study citations, product imagery, founder portrait, or legal text in the final experience.

## 10. Design QA checklist

### Visual

- Does the first viewport communicate pediatric/preventive dentistry, product specificity, and a useful dentist action?
- Does the design feel like one editorial clinical journal across home, catalogue, science, and professional pages?
- Are product packaging sizes/crops consistent and details legible?
- Are layout rhythm and density varied enough to avoid a wall of repeated cards?
- Does every interactive control visibly respond to hover, focus, active, disabled, and error states?

### UX

- Can a dentist reach product, protocol, evidence, and enquiry within two clicks from the home page?
- Can parents find plain-language guidance without being routed through professional jargon?
- Can users distinguish family pages, purchasable variants, enquiry-only items, and coming-soon products?
- Do catalogue filters and enquiry forms preserve context and explain no-result/failure states?
- Are contact options and legal/regulatory information accessible from every page?

### Motion

- Is every reveal one-shot and short, with no hidden content fallback?
- Is reduced motion honored for all scroll and entrance effects?
- Are no essential interactions dependent on scroll position or animation completion?
- Does motion avoid distracting from complex clinical copy and product specifications?

### Accessibility/performance

- Keyboard, screen reader, zoom/reflow, contrast, reduced-motion, and touch-target pass.
- No layout shift from late image/font load; images have defined aspect ratios.
- Animations use opacity/transform; avoid expensive scroll event loops and forced layout.
- Test mobile network conditions and ensure hero media does not block useful text/CTA.

## 11. Open decisions before visual implementation

1. Confirm approved logo, packaging, photography, typeface, and color commitments. Proposed tokens remain provisional until asset review.
2. Confirm whether the dentist audience may be explicitly called the primary audience in the site’s public messaging.
3. Resolve catalogue family vs SKU totals, product status, price variants, and retailer/checkout integration.
4. Approve the working hero headline or supply exact brand wording.
5. Confirm real clinical/evidence assets and whether protocols/downloads may be public.
6. Confirm approval of existing testimonials and school-program economic details.
7. Confirm form systems, routing and privacy language.
8. Confirm policy copy and the design of checkout/cart states.

## 12. Sources

- [SPARK-DV live site](https://sparkdv.com/) and the route inventory/content captured in [the companion PRD](./SPARK-DV-Recreation-PRD.md).
- [Sprig Oral Health Technologies](https://sprigusa.com/) — pediatric dentistry product storytelling, education and training, testimonials, and shop/detail pairing.
- [Oral Science](https://oralscience.com/) — clinical-need product organization, protocols, professional presentation enquiry, and specialist resources.

Patterns above are design observations, not evidence that the referenced sites’ claims or structures are suitable verbatim for SPARK-DV. Final content remains governed by SPARK-DV’s approved product, clinical, legal, and privacy information.

