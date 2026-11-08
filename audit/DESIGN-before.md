---
name: SPARK-DV
description: Clinical product discovery and professional resources for pediatric dentistry.
colors:
  ink: "#173440"
  ink-deep: "#102B35"
  teal: "#14746E"
  teal-dark: "#0D5A55"
  mint: "#E6F0ED"
  canvas: "#F7F8F6"
  paper: "#FBFAF6"
  white: "#FFFFFF"
  muted: "#66777B"
  line: "#D9E2DF"
  caution: "#D77638"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3.5rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "2px"
  md: "4px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    height: "46px"
    padding: "0 18px"
  button-primary-hover:
    backgroundColor: "{colors.teal-dark}"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "20px"
---

## Overview

A dentist-first public marketing and catalogue experience for SPARK-DV. The visual language takes cues from a clinical field journal: editorial headlines, precise annotations, product photography, and restrained mineral colors. The site uses original SPARK-DV image assets stored in `public/images/` and self-hosted DM Sans and Newsreader fonts.

## Colors

Use ink for primary text and dark actions, teal for links and active states, pale mint for science and guidance surfaces, and the warm-white canvas for open reading space. Reserve orange for caution or attention. Pair color with labels or icons so status never relies on color alone.

## Typography

Newsreader carries display headlines and select product titles. DM Sans handles navigation, body copy, labels, specifications, forms, and controls. Display headings are compact and editorial; body measures stay readable. Prices and numeric product facts use tabular figures.

## Layout

Desktop content is capped around 1240 px with generous gutters. The header remains sticky and compacts after scrolling. Product catalogues use category filters and responsive grids; details use a two-column image and information layout. Below 760 px, navigation becomes a full-height menu, product grids collapse, and forms and content sections stack. Maintain 44 px minimum touch targets.

## Elevation & Depth

The system is mostly flat: thin mineral dividers, restrained shadows on sticky or floating elements, and layered product photography provide depth. Avoid decorative glow or blur beyond the header's functional backdrop.

## Shapes

Use square or lightly rounded corners (2–4 px), fine borders, and crisp rules. Buttons are compact rectangular controls. Chips may be rounded where they help scan specifications; avoid turning large layouts into pill shapes.

## Components

- **Header:** logo, primary routes, pricing action, cart count, and mobile menu. Keep keyboard focus visible.
- **Announcement strip:** dismissible clinic/distributor notice.
- **Buttons and text links:** dark filled primary action, outlined secondary action, and arrow-linked tertiary action; hover changes color or lifts by one pixel.
- **Product card:** source product image, family/status labels, concise summary, tags, price or pricing enquiry, and add action.
- **Catalog filters:** live search, category counts, professional-use filter, sorting, clear action, and helpful empty state.
- **Product detail:** breadcrumbs, use-status, variant, price/availability, add to cart, feature rows, safety guidance, and related items.
- **Cart drawer:** modal side panel with empty and populated states, quantity changes, remove, subtotal, and checkout affordance. Checkout remains a preview placeholder until commerce integration is supplied.
- **Accordions:** button-triggered clinical resources and parent FAQs with `aria-expanded` state.
- **Enquiry form:** enquiry type, organization, contact details, city, product interest, message, and consent; client-side preview confirmation only until a submission destination is connected.
- **Scroll reveal:** IntersectionObserver reveals sections with a short upward fade. Content is visible by default; the motion-ready class enables the animation, and reduced-motion users see static content.
- **Floating WhatsApp action:** persistent contact shortcut linking to the source business WhatsApp number.
- **Footer:** catalog paths, audience/resources, verified contact details, manufacturer/marketer information, policy links, and product disclaimer.

## Do's and Don'ts

- Lead with the clinical portfolio and keep dentist resources and qualified enquiry routes easy to reach.
- Keep parent guidance plain-language and visibly separate from professional clinical information.
- Use source-site product and school photography; preserve recognizable package labels and proportions.
- Keep professional-use and coming-soon statuses, prices, variants, and safety language close to the relevant product.
- Do not invent efficacy claims, study citations, policy copy, testimonials, founder biographies, or integrations. Clearly identify source gaps and preview-only behavior.
- Honor `prefers-reduced-motion`, keyboard interaction, semantic labels, and visible focus rings.
- Avoid generic hospital icon wallpaper, bright children’s-clinic styling, glassmorphism, gradient text, and decorative motion on every element.
