# SPARK-DV Website Recreation — Product Requirements Document

**Document date:** 4 November 2026  
**Reference site:** [sparkdv.com](https://sparkdv.com/)  
**Purpose:** Rebuild the complete public SPARK-DV website with a clearer, more accessible UI and a task-oriented UX while preserving the site's information, product range, commerce functions, audiences, and compliance content.

## 1. Executive summary

SPARK-DV presents clinically oriented dental products focused on pediatric and preventive dentistry, and supports both professional and consumer audiences. The current site combines brand marketing, product education, professional protocols, community/school-program information, contact and distributor enquiries, and direct product sales.

The recreation should preserve the full breadth of that experience, including all observed product families and variant-level commerce, while changing the information architecture from a long, mixed-purpose marketing journey to clear paths by task and audience. Visitors should be able to:

1. Find and compare products by intended use and audience.
2. Understand evidence, use guidance, safety notes, and professional-only restrictions.
3. Shop available items with transparent price/variant/cart states.
4. Reach the relevant team for professional, distributor, school-program, or general enquiries.
5. Access company, policy, regulatory, and disclaimer information from every relevant page.

This document separates **observed source facts** from **recreation requirements**. It does not invent missing policy language or claim that clinical statements have been independently validated. Clinical, regulatory, pricing, stock, shipping, evidence, and testimonial content must be approved by SPARK-DV before publication.

## 2. Product vision and goals

### Vision

Create a trustworthy, modern dental-care site that helps each audience reach the right information or next action quickly, without reducing the depth of professional and product content.

### Goals

- Preserve every observed route, content section, product/variant, action, footer detail, and visible support path.
- Make the product catalogue easier to scan, compare, filter, and purchase.
- Offer distinct navigation journeys for dental professionals, parents, distributors, and school-program partners.
- Make clinical claims and safety/context notes legible and consistently placed.
- Improve mobile navigation, accessibility, page hierarchy, and form usability.
- Keep the content model maintainable so products, variants, prices, launch status, protocols, and legal pages can be updated independently.

### Non-goals

- Changing product formulations, clinical positioning, prices, claims, indications, or legal terms without approved source content.
- Creating new clinical recommendations, evidence citations, testimonials, or guarantees.
- Replacing checkout, payment, fulfilment, CRM, or form integrations until the existing providers and operating requirements are confirmed.
- Treating the site’s medical/product claims as independently verified facts.

## 3. Audiences and core jobs

| Audience | Primary job | Desired outcome |
|---|---|---|
| Dental professional / clinic | Evaluate products, protocols, evidence, samples, training, and pricing | Confidently understand professional use and contact the clinical/commercial team |
| Parent / caregiver | Understand cavities, white spots, brushing, age/use guidance, and product fit | Make an informed next step and know when to consult the child’s dentist |
| Distributor / commercial partner | Review range and request pricing/partnership discussion | Submit a routed enquiry with relevant company and market details |
| School / college partner | Understand the school dental-health program, delivery, economics, and eligibility | Ask to onboard a school/clinic campaign |
| Shopper | Find a product/variant, add it to cart, and complete purchase | Know item, price, availability, delivery expectations, and cart contents |
| General visitor | Learn about SPARK-DV, its science, company, and contact routes | Find a credible answer and reach the appropriate channel |

## 4. Information architecture and route inventory

Build direct, bookmarkable routes. Keep the observed route names where possible to preserve existing links and search indexing.

### Global routes

- `/` — Home
- `/products` — Product catalogue
- `/products/:slug` — Product or product-family detail; support observed slugs listed below
- `/science` — Science & Research
- `/school-program` — School Dental Health Preventive Program
- `/dentists` — Clinical Resource Center / For Dentists
- `/parents` — For Parents
- `/about` — About SPARK-DV
- `/contact` — Contact and enquiry hub
- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/shipping` — Shipping & Returns
- `/cart` or persistent cart drawer — Cart experience; match existing checkout integration

### Observed product slugs

`nanion-lite`, `nanion-elite`, `nanion-lite-pro`, `nanion-elite-pro`, `nanion-pro`, `nanion-swish`, `pobtura`, `nanohybrid-biocem`, `marc`, `marc-zirc`, `tac`, `nanosilver-pro`, `3d-flxpost`, `nanion-pro-plus-gummies`, `asm`, `pedo-spark-single`, `pedo-spark-three`, `endo-spark-permanent`, and `spark-files`.

The catalogue describes 13 product families, while family detail pages and variant/product URLs expose more purchasable items. Preserve all family and variant distinctions; do not force the count to one interpretation. Confirm canonical product/variant count with the source commerce catalogue.

## 5. Global UI and UX requirements

### 5.1 Proposed navigation model

Use a compact sticky header with:

- Brand mark and tagline/brand name link to home.
- Primary links: **Shop**, **Science**, **For Professionals**, **For Parents**, **School Program**, **About**.
- **Contact** as a persistent utility link.
- Cart icon with live item count and accessible name.
- A high-priority CTA selected by page context (e.g. Request pricing, Clinical enquiry, or Shop products).
- Mobile menu with the same destinations and clear close/escape behavior.

“Shop” opens a mega-menu grouped by Prevention, Pediatric Endodontics, Restorations & Space Maintenance, and Endodontic Instruments. Show family names, short labels, and clear “View all products” routing. Do not hide professional-only status in a hover-only interaction.

### 5.2 Shared components

- Announcement strip: distributor/clinic enquiries and WhatsApp action; dismissible and keyboard accessible. Dismiss state persists for the session.
- Product card: image, category/use label, name, short summary, professional-only/coming-soon status, variant or price summary, discount when approved, and actions (“View details”, “Add to cart” where purchasable).
- Product comparison/variant selector with selected state, price, availability, and relevant variant-level attributes.
- Clinical note, safety note, regulatory note, and professional-only badges with non-color-only distinction.
- Accordion for FAQs and protocols; supports keyboard, expanded state announcements, and deep linking when useful.
- Contact CTA blocks with context-specific form or contact route.
- Testimonial card only for approved, attributable content and with appropriate consent.
- Footer with product links, company links, contacts, regulatory/label information, India origin, legal links, and full disclaimer.
- WhatsApp floating/contact action with accessible label and fallback to contact details.
- Cart drawer: empty state, populated line items, variant and quantity, subtotal, remove/update controls, checkout CTA; drawer is keyboard-trapped and closable by Escape.
- Toast/inline confirmation after add-to-cart, form submit, or cart update; errors have actionable text.

### 5.3 New UX direction

- Start journeys with a **“What brings you here?”** choice: Shop products, Professional resources, Parent guidance, School program, or Partner with us. Keep this as a helpful home-page module, not a forced gate.
- On catalogue, provide practical category and audience filters, risk/use filters only where approved, and sort by relevance/name/price. Filtering must preserve shareable URL state.
- On product pages, use a consistent decision sequence: “What it is” → “Who it is for / professional status” → “How it works” → “Variants and price” → “Use and safety information” → “Evidence/resources” → “Related products” → CTA.
- On long content pages, use a visible section index on desktop and compact jump links on mobile.
- Separate purchase actions from enquiry actions; never imply that a professional-only item is suitable for consumer self-selection.
- Keep WhatsApp and phone as optional contact channels without interrupting reading.

## 6. Page-by-page requirements

### 6.1 Home (`/`)

Preserve the current home page’s full content and intent, reorganized into an easier sequence:

1. Announcement strip for distributor and clinic enquiries with WhatsApp link.
2. Hero: “Innovating the Future of Pediatric & Preventive Dentistry”; supporting line about high-risk caries management, pediatric endodontics, and aesthetic pediatric restorations; CTAs **Request Distributor Pricing** and **Talk to a Specialist**; product imagery; proof points **Made in India**, **Dentist-Oriented**, **Evidence-Led**.
3. Proof/feature strip: **R&D Led**, **Science-First**, **Dentist Oriented**, **Patented Technology**, **Made in India**; plus **Evidence-Led Formulations**, **Non-Staining Formulations**, **Pediatric-Friendly**, **Professional Protocols**, **Quality-First Manufacturing**. Claims such as “patented” and “non-staining” require current substantiation and approved wording.
4. Complete Product Portfolio section with all 13 observed families and all separately sold variants, including launch offers/status; content inventory appears in section 7.
5. Three Pillars: **Science-Led Formulations**, **Practical Clinical Protocols**, **Safety & Quality Manufacturing**, retaining each explanatory sentence from section 7.
6. Featured Clinical Highlights: **Biofilm + Enamel Defense**, **High-Risk Patient Focus**, **Pediatric Workflow Optimized**, with descriptions and link to Science.
7. School program feature with camp image, four program benefits, minimum 1,000 students and 60/40 share statement (subject to confirmation), link to program page.
8. Audience pathways: Dentists, Parents, Distributors, each with role-specific summary/action.
9. Three testimonials as observed, pending consent/verification.
10. Closing CTA: **Ready to Partner with SPARK-DV?**, pricing and demo actions.
11. Full shared footer.

### 6.2 Product catalogue (`/products`)

- Heading: **Our Products** and portfolio description covering prevention, pediatric endodontics, aesthetic restorations, and digital space maintenance.
- Present the complete product family/variant set, including images, labels, descriptions, tags, prices/discounts, launch offers, availability, and professional-only status.
- Preserve observed CTA behavior: Add to Cart for purchasable products and Learn More for details. Do not offer Add to Cart for items marked coming soon or without verified inventory/price.
- Categories and catalogue details: see section 7.
- “Need Help Choosing?” section with **Request Distributor Pricing** and **Clinical Resources** links.
- Filtering/sorting/search should be added as new UX, with no product hidden by default.

### 6.3 Product detail template (`/products/:slug`)

Provide a complete reusable detail layout and preserve route-specific content:

- Breadcrumbs and category.
- Product name, short summary, image gallery/alt text, availability and professional-use status.
- Variant selector, SKU/pack, price, offer/discount, quantity and Add to Cart when purchasable; Request Pricing/Contact for enquiry-led products.
- Primary benefits/feature chips and mechanism/technology explanation.
- Intended audience/use and contraindication/safety content exactly as approved.
- How to use / protocol / handling, storage, composition, specifications, evidence, FAQ, downloads/IFU as available.
- Clinical/legal disclaimer in the correct context.
- Related products and links to dentists/science resources.
- Contextual CTA: buy, request professional pricing, request a demo, or ask a clinical specialist.

The public catalogue/search snapshots expose content for many product families but not every detail section, image, selectable option, or live stock state. Use the original route as source of truth during implementation; maintain a content parity checklist per slug.

### 6.4 Science & Research (`/science`)

Preserve:

- Intro: products built on rigorous scientific research and clinical validation.
- **How Our Technology Works** with:
  - Antibacterial Action: 10–20 nm nanosilver, bacterial membrane interaction, structural damage and respiratory-enzyme interference.
  - Biofilm Disruption: particles penetrate/disrupt extracellular matrix and enable improved access of antimicrobial/remineralizing agents.
  - Remineralization Support: fluoride ions and nHA support mineral deposition; nHA reservoir of calcium/phosphate.
- **Evidence Library** cards: NanoSilver Fluoride Technology (12 studies), Non-Staining Formulations (5), Pediatric Applications (8), Bioactive Materials (6); preserve View Studies action where supported and actual references/files where available.
- **Safety & Non-Staining Technology**, comparison with traditional SDF, formulation explanation and clinical note that results vary and clinician consultation is appropriate.
- **Non-Staining Formula** message.
- Links to relevant products and professional resources.
- All scientific wording and study counts must be validated against current source citations before publication.

### 6.5 For Parents (`/parents`)

Preserve parent-facing education and guidance:

- Intro: clear information for family oral-care decisions.
- **What Causes Cavities?** bacteria/acids, contributing factors, and higher-risk contexts (braces, frequent snacking, cavity history).
- **What Are White Spots?** early enamel demineralization, common contexts, early intervention framing.
- **How to Brush Correctly**, six steps: pea-size on soft brush; small circles for two minutes; cover all surfaces; spit and do not rinse for best protection; avoid food/drink for 30 minutes; brush morning and before bed.
- **Which Product is Right?** Nanion Lite and Nanion Elite, their intended risk/usage summaries and Learn More links.
- Six FAQs: child safety; staining; accidental swallowing; age; sensitivity; Nanion Swish child safety. Preserve qualifiers, age guidance, supervision, and professional consultation language exactly after clinical approval.
- Educational-not-dental-advice disclaimer and **Have More Questions? / Contact Us** CTA.

### 6.6 For Dentists (`/dentists`)

Preserve the Clinical Resource Center:

- Intro about protocols, evidence, downloads, samples.
- Request Samples and View Clinical Evidence actions.
- **Protocol Library** with expandable entries: NSF Toothpaste Usage (Nanion Lite 2%/Elite 3%, chairside + home-use), White Spot Protocol, Orthodontic Protocol, Biocem Mixing & Placement (fold-and-press), MARC Crown Prep & Cementation, P-Obtura Bio-Activ Obturation.
- Professional-use clinical disclaimer: licensed professionals, follow official IFU, clinical judgment; maintain age/protocol notes where relevant.
- **Download Center / Product Brochures**, current site marks brochures coming soon; retain a clear unavailable/coming-soon state until files exist.
- **Clinical Enquiry** form fields: Name (required; placeholder Dr. Name), Clinic (required), Email (required; placeholder doctor@clinic.com), Phone (optional; placeholder +91 XXXX XXXXXX), City (required; City, State), Products of Interest, Message; submit action.
- Benefits list: no-obligation product samples, clinical support/protocol guidance, competitive professional pricing, priority access to new products.
- FAQs: difference vs traditional SDF, pediatric safety, distributor process, clinical training, and professional-only product list (P-Obtura Bio-Activ, Nanohybrid Biocem, TRICURE, MARC 3D Crowns).
- Form success, validation, error, spam protection, privacy consent, and data-routing behavior must be defined with the form backend owner.

### 6.7 School program (`/school-program`)

Preserve **School Dental Health Preventive Program** content:

- Hero and Partner With Us / View Products actions.
- **Program Highlights / Top-Tier Protection for Every Student**; Nanion toothpaste and professional preventive application.
- **What Each Student Receives:** NSF professional application by partner dentists; Nanion Toothpaste; Healthy Smile Certificate; student contribution ₹500.
- **Why Partner With Us?** High Volume Reach (minimum 1,000 students), Trusted Products, Community Impact.
- Campaign table: campaign scale minimum 1,000 students; company share 60%; dentists/college 40%; student contribution ₹500; final terms confirmed at onboarding.
- Contact details/actions: telephone numbers, email, nanion.in (verify ownership/link target), and SPARK-DV enquiry route.
- Confirm current eligibility, economics, costs, operational details, and terms with business owner.

### 6.8 About (`/about`)

Preserve:

- **About SPARK-DV** and “Innovating the Future” positioning.
- Mission: clinically oriented, evidence-led products for caries management, pediatric endodontics, restorative care; R&D-driven mindset; manufacturing by 3K NANO PVT. LTD. and marketing by Sendan Pharmaceuticals.
- Current stats/claims observed: 9 products, India, R&D Driven. Reconcile with current 13-family/variant catalogue; do not ship stale count.
- Vision: innovate through science, quality, clinical impact.
- Core values: Science-Led, Patient-Centered, Innovation.
- Founder and Managing Director profile/biography section (source excerpt references a practicing dentist and academic researcher; obtain complete approved copy and photo).
- **Our Journey** milestones: Founded; R&D NanoSilver Fluoride development with 3K NANO; Nanion line launch; portfolio growth (P-Obtura, Nanohybrid Biocem, MARC Crowns, TAC); Today building distribution and adoption.
- Partner With Us CTAs for contact and dental professionals.

### 6.9 Contact (`/contact`)

The page route exists and is linked from all principal CTAs; complete body was not readable in source inspection. Recreate it as a contact hub, then verify exact original fields and content against live browser/source before final acceptance.

Known contact details from site footer:

- Email: `sparkdv310@gmail.com`
- Phone: `+91 7981546939`, `9154741994`, `9848014443`
- Location: Chennai, Tamil Nadu, India
- WhatsApp: `https://wa.me/919246901870`
- Enquiry types implied by site: distributor pricing, clinical demo, specialist contact, school program, general contact.

Requirements: visitor selects enquiry purpose or uses preselected context from CTA; show only relevant fields; provide consent/privacy notice; validate input; success state confirms receipt and next steps. Confirm actual backend/recipient, required fields, and consent policy before wiring.

### 6.10 Legal, commerce, and footer pages

- `/privacy`, `/terms`, `/shipping`: preserve complete current legal text and section ordering from the live site. The readable browser/search inspection did not expose the full text, so do not author substitute legal terms. Import and approve verbatim current copy before launch.
- Shopping cart: current home snapshot showed an empty-cart message, a Shop Products link, and a header item-count control. Preserve empty and populated states, variant detail, price, quantity, remove, subtotal, checkout, and error/loading states based on the commerce platform.
- Footer on all pages: brand + summary; Products list (currently footer lists Nanion Lite, Nanion Elite, Nanion Swish, P-Obtura Bio-Activ, Nanohybrid Biocem, MARC 3D Crowns, TRICURE); Company list (About, Science, Dentists, Parents, Contact); contact info; regulatory/label block; Made in India; copyright year; Privacy, Terms, Shipping & Returns; full oral-care disclaimer. Add the full current catalogue via a “View all products” link without removing established footer links.

## 7. Content parity inventory

### Product families and observed copy/details

| Family / item | Observed description and content to retain | Observed commerce details |
|---|---|---|
| Nanion | Nano Silver Fluoride toothpaste; antibacterial, biofilm disruption, sustained remineralization; two variants | Lite: 2% NSF, moderate risk, ₹599; Elite: 3% NSF, high risk/ECC, ₹599; launch offer labels on homepage |
| Nanion Pro | Four-action NSF + 5% nano-hydroxyapatite dual matrix; antibacterial, biofilm disruption, sustained F⁻ release, biomimetic repair/tubule occlusion | Lite Pro 2% NSF + 5% nHA, moderate risk + sensitivity, ₹699; Elite Pro 3% NSF + 5% nHA, high risk/ECC, ₹699 |
| Nanion Swish | NSF mouthrinse; adjunct plaque/biofilm control; alcohol-free, gentle; 1% nanosilver fluoride + 1% nHA; 60-second rinse | ₹599 |
| P-Obtura Bio-Activ | Bioactive, resorbable obturation system for primary teeth; powder-liquid; professional use only; bioactive glass, nano ZnO, radiopaque, resorbable | ₹4,125 sale / ₹5,500 list; 25% off |
| Nanohybrid Biocem | Moisture-tolerant bioactive bioceramic system for pediatric endodontics; pulpotomy, pulp capping, apexogenesis; professional only | ₹4,500 sale / ₹6,000 list; 25% off |
| MARC 3D Crowns | Minimally invasive, aesthetic, resilient pediatric crowns; 3D precision fit, conservative prep, esthetic options, ductile failure mode | ₹4,800 |
| MARC Zirc Crowns | Pediatric zirconia crowns; anatomy, translucency and strength; morphology, emergence profile, balanced translucency/strength, size range | ₹1,200; verify whether per crown/pack/size |
| TRICURE / TAC | Triple antibiotic capsule; professional endodontic adjunct; source catalogue says pre-measured endodontic disinfection; homepage says as per clinician judgment/refer to IFU | Coming soon / launching soon; no add-to-cart until status changes |
| Nano Silver Pro | Professional NSF application; nanosilver 1,500 ppm, sodium fluoride 15,000 ppm, chitosan sustained-release matrix; 81–89% arrest rate claim | ₹4,600 sale / ₹5,499 list; 16% off |
| 3D FLXPOST | CAD-engineered prefabricated endodontic/resin flex post; dentin-like modulus, macro-retention spiral flutes | ₹500 |
| Nanion Pro Plus Gummies | Four-layer gummy: probiotics (6B CFU), prebiotics (xylitol + FOS), P114 peptide, L-arginine; strawberry flavour | ₹599 |
| ASM — Advanced Space Maintainer | Digitally engineered/additively manufactured fixed resin bondable alternative to band-and-loop after early primary molar loss; sized library | Learn More; no price exposed in catalogue excerpt |
| SPARK DV Files | Black Gold (TiN) and Black Oxide (TiO₂) NiTi rotary files; primary and permanent systems; non-cutting tip, pediatric lengths, S-shape/triangular options | Pedo Single ₹2,200 sale / ₹4,400 list; Pedo Three ₹1,800 / ₹3,600; Endo Spark ₹1,500 / ₹3,000. Homepage and catalogue variant labels differ; verify before publication. |

Additional exact visible homepage copy/features to retain are recorded in section 6.1 and the three-pillar/clinical sections. Product copy may be paraphrased for UI fit only after brand/clinical approval; retain all underlying detail and qualifiers.

### Global business/contact/compliance copy

- Product summary: clinically oriented products for caries management, pediatric endodontics, and restorations; Made in India.
- Manufacturer: 3K NANO PVT. LTD., HNO-RZ-625/1C, KH-625, T/F/L/S, Indra Park, Palam Colony, New Delhi, Delhi 110045.
- Manufactured for: SPARK-DV.
- Marketed by: Sendan Pharmaceuticals Pvt. Ltd., Chennai, Tamil Nadu.
- Footer disclaimer observed: products support oral hygiene/preventive care; not intended to diagnose, treat, cure, or prevent a disease; consult a qualified dental professional; children use under adult supervision; keep out of reach of children; do not swallow.
- © 2026 SPARK-DV. All rights reserved. Use dynamic year if approved.

## 8. Functional requirements

### Catalogue and purchase

- Product/variant records drive cards, detail pages, cart lines, prices, badges, URLs, and related products from one data source.
- Add-to-cart uses the explicitly selected variant; selecting another variant updates the price and attributes before add.
- Cart count and drawer update immediately and remain correct across route navigation/reload per supported persistence model.
- Quantity changes respect inventory/pack rules; unavailable items are not purchasable.
- Checkout provider, payment methods, taxes, shipping calculations, order confirmation, and order emails must match the active commerce setup; obtain integration details.
- Display INR using Indian number formatting and ensure current, consistent price/discount math.

### Forms and contact actions

- Use semantic labels, required indicators, field-level errors, server error recovery, loading state, success confirmation, spam controls, privacy link, and keyboard support.
- Route the enquiry with its intent and source page/CTA, without silently discarding entered data on validation failure.
- WhatsApp and `mailto:`/`tel:` links open correctly; provide visible plain-text fallback.
- Do not send/store form information until backend and privacy handling are agreed.

### Content and navigation

- Direct navigation and refresh work for every route and product slug.
- Header, footer, breadcrumbs, “all products,” audience links, related products, and CTAs use valid destinations.
- FAQ/protocol accordions announce expanded state and preserve expected keyboard behavior.
- Dismissed announcement and cart state survive only as intended by approved persistence requirements.
- Site search (if added) returns products, resources, and pages with understandable grouping; no dead-end empty state.

## 9. Non-functional requirements

- Responsive from narrow mobile through wide desktop; no horizontal overflow at supported breakpoints.
- WCAG 2.2 AA target: keyboard-operable controls, visible focus, meaningful heading order, accessible names, sufficient contrast, reduced-motion respect, form error identification, useful image alt text.
- Strong performance: responsive image formats/sizes, lazy load below-the-fold media, avoid blocking motion and oversized hero assets, stable layout.
- SEO: unique title/description, canonical URLs, social metadata, sitemap, robots rules, product structured data only for valid price/availability, breadcrumb data, and meaningful internal links.
- Security/privacy: HTTPS, server-side validation, CSRF/spam protection appropriate to integrations, data minimization, retention policy, no secrets in client, and consent language aligned with approved policy.
- Analytics: define consent-aware measurement for catalogue interactions, product detail views, add-to-cart, checkout starts, enquiry conversions, resource downloads, and audience pathway selection. Do not add tracking before privacy approval.
- Localization: initial language English and currency INR based on observed site; architecture should permit additional locales if the business requests them.

## 10. Content model (recommended)

- **ProductFamily:** id, slug, name, category, shortDescription, longDescription, imageGallery, audience, professionalOnly, claims, features, mechanism, indications/use, safetyNotes, protocol, evidenceRefs, downloads, FAQ, relatedProducts, status.
- **ProductVariant:** id, familyId, slug, name, concentration/specification, packSize, price, compareAtPrice, currency, sku, inventoryStatus, offerLabel, risk/useLabel, purchaseMode, CTA.
- **Resource:** title, type, audience, file/link, version/date, relatedProducts, access rules.
- **EvidenceReference:** title, authors, publication, year, DOI/URL, product/claim mapping, status/approvedBy.
- **EnquiryType/FormConfig:** intent, fields, validation, recipient/system, privacy text, success content.
- **Site settings:** announcement, phones/email/WhatsApp, regulatory block, disclaimers, social links, footer link groups.
- **Page content:** sections with explicit order, copy, assets, links, and approval metadata.

All clinical claims and regulated/commercial copy should support owner, source, review date, and approval status in the content workflow.

## 11. Design direction

Improve the visual hierarchy while remaining credible for a clinical brand:

- Use a restrained clinical palette (deep blue/teal, white, neutral warm gray, limited accent) and high contrast.
- Use clear, calm typography with readable body sizes and short line lengths; reserve display styling for page-level headings.
- Give product photography a consistent background, crop, scale, and descriptive alt text; avoid mixing arbitrary image treatments.
- Distinguish professional/consumer information and professional-only product status through text and icon labels.
- Use generous spacing, clear section landmarks, consistent card heights where possible, and visible section transitions.
- Avoid carousels for essential content; if testimonials rotate, provide manual controls and pause behavior.
- Motion is optional and subtle; honor reduced-motion preferences.

This is a direction, not a claim that the existing palette/assets are known. Inspect and inventory source brand assets before selecting final tokens.

## 12. Success metrics

- Visitors reach an intended audience path or product detail from the home page.
- Improved product-list-to-detail and product-detail-to-cart conversion, measured against a baseline.
- More complete and correctly routed distributor/clinical/school enquiries.
- Lower catalogue abandonment and fewer support questions caused by unclear variant/price/professional status.
- High task completion and accessibility success in moderated tests with dentists, parents, and distributors.
- No missing routes, products, footer/legal links, or required clinical qualifiers at release.

Define numeric targets only after baseline analytics and conversion data are available.

## 13. Acceptance criteria

1. Every route in section 4 resolves directly, refreshes correctly, and has appropriate page metadata.
2. Homepage reproduces all content blocks, product families, stakeholder paths, testimonials, CTA, announcement, footer, and disclaimer recorded here.
3. Catalogue contains every family and distinct sellable variant in the source system, with correct status, price, attributes, and details link.
4. Each observed product slug has a detail route or an intentional redirect to its canonical product/variant, with no broken inbound links.
5. Product-only/professional-only, age/use, safety, disclaimer, coming-soon, price and discount states are visible and correct according to approved source data.
6. Cart empty/populated states, selected variant, quantity changes, removal, subtotal, and checkout handoff work with the active commerce integration.
7. Professional, parent, school-program, contact, and distributor journeys are fully navigable and their forms give useful validation and success/error states.
8. All six dentist protocols, four science evidence categories/counts, six parent FAQs, school program economics, company journey, and footer regulatory/legal copy are represented or explicitly marked unavailable pending approved assets.
9. Privacy, terms, and shipping pages contain approved, current source copy; no placeholder or invented legal text is published.
10. Mobile and keyboard-only users can access navigation, filtering, accordions, forms, cart, and CTAs.
11. Product images have appropriate alt text; decorative images are hidden from assistive technology.
12. All externally directed links (WhatsApp, email, phones, nanion.in, study/download destinations) are validated.
13. Claims, testimonials, prices, study counts, manufacturer/marketer details, school-program commercial terms, and compliance copy have documented business/clinical approval.

## 14. Risks, open questions, and source validation

### Must resolve before content freeze

- What is the canonical total: 13 families, 9 products on About, or number of purchasable SKUs? Current pages conflict.
- What is the current source of truth for prices, launch offers, stock, variants, product URLs, shipping, taxes, and checkout?
- Confirm the product/variant inventory, especially Nanion Pro variants, MARC Zirc pricing unit, ASM availability, SPARK DV Files specifications and origin, and TRICURE launch status.
- Obtain exact current copy for Contact, Privacy, Terms, Shipping & Returns, and all product detail pages.
- Confirm all scientific claims, evidence counts/references, patent claims, non-staining wording, arrest-rate claim, and “clinical validation” language with qualified reviewers.
- Verify age ranges, contraindications, instructions, professional-only classification, accidental ingestion guidance, and all safety/clinical disclaimers.
- Confirm school program: minimum cohort size, ₹500 contribution, 60/40 share, services delivered, eligibility, operating geography, and final terms.
- Confirm founder biography and public profile permissions; verify testimonial identities, consent, and factual accuracy.
- Confirm enquiry destinations, response expectations, form privacy/consent language, CRM routing, WhatsApp account, and spam controls.
- Verify copyright year, business details, external links, product images, downloadable brochures/IFUs, and rights to reuse assets.

### Research coverage note

Inspection used the live homepage/browser accessibility tree and publicly indexed route content/search snippets for the catalogue and key informational pages. The homepage was fully readable in browser. Some direct route fetches returned no readable page text; exact page-specific content for those pages is therefore marked for direct source verification. “Complete site recreation” acceptance requires a route-by-route visual and content audit against the live site before implementation sign-off.

## 15. Source pages inspected

- [Home](https://sparkdv.com/)
- [Products](https://sparkdv.com/products)
- [Science & Research](https://sparkdv.com/science)
- [About](https://sparkdv.com/about)
- [For Parents](https://sparkdv.com/parents)
- [For Dentists](https://sparkdv.com/dentists)
- [School Program](https://sparkdv.com/school-program)
- [Contact](https://sparkdv.com/contact)
- Product routes listed in section 4; sample direct/indexed pages included ASM, SPARK DV Files, Nanion Swish, Nanion Pro, Nano Silver Pro, and TRICURE.
- [Privacy Policy](https://sparkdv.com/privacy), [Terms](https://sparkdv.com/terms), [Shipping & Returns](https://sparkdv.com/shipping) — routes identified; full text not captured.

