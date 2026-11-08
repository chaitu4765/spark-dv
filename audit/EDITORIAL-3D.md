# Editorial motion review — 8 November 2026

## References inspected

- https://press.stripe.com/ — Firecrawl extracted the publication catalogue and editorial structure. Playwright inspected the desktop shelf, scrolling, pointer states and mobile layout.
- https://press.stripe.com/the-art-of-doing-science-and-engineering — Playwright captured the book detail, drag rotation, scrolling and mobile stack. Its rendered book changes orientation while the accompanying editorial text remains readable. The page contains a `PressHomepageCanvas`, fixed canvas/navigation containers and separate HTML text transforms. The second canvas is an audio preview; its presence alone is not evidence of 3D. Screenshots: `stripe-scroll-1.png`, `stripe-book.png`, `stripe-book-drag.png`, `stripe-book-scroll.png`, `stripe-book-mobile.png`.
- https://non-linear.studio/work/cleer — prior inspection and extracted gallery screenshots inform restrained typography, spacing and product scale. This is a studio case study, not a verified live Cleer storefront.

Observed principles: object-led editorial hierarchy, quiet navigation, coordinated text and visual states, responsive stacking, restrained camera movement. The initial Stripe home capture was taken before its book shelf finished loading; later scroll captures show the actual shelf. No reference source code, book textures, branding or models were copied into the site.

## Original compositions

| Page | Composition | Editorial connection |
| --- | --- | --- |
| Science | Ordered silver/teal lattice above material plates | A conceptual entry into the original mechanisms and research |
| Dentists | Rounded tooth sculpture, dental mirror, separate material form | Assessment, materials and professional resources |
| Parents | Ivory tooth, toothbrush, care objects | Everyday habits and family education |
| School program | Architectural miniature, books, tooth sculpture | Education and preventive care, followed by original campaign photography |
| About | Three assembled ceramic/metal arcs | Research, precision and care, followed by company history and founder photography |

All geometry is original and procedural. The tooth is a smooth lofted sculpture, not a clinical scan. These scenes are explicitly labelled conceptual and make no new claims about efficacy, anatomy, scale or treatment. All source articles and original product assets remain intact.

## Implementation and refinements

React Three Fiber 8 / Drei 9 pair with the existing React 18 app. Motion remains the only animation timeline dependency. Official compatibility and demand-rendering references: https://r3f.docs.pmnd.rs/getting-started/installation and https://r3f.docs.pmnd.rs/advanced/scaling-performance.

`InteractiveEditorialScene` provides the reusable editorial frame, page configurations, chapters, keyboard controls, visibility tracking and fallbacks. `scene-canvas.tsx` supplies camera, lighting, assembly and five compositions. Rotation is bounded; horizontal touch drag preserves vertical page scrolling. Chapter controls permit deliberate exploration independently of scrolling; Reset returns to automatic scroll synchronization.

Screenshot refinement replaced an initially flat extruded tooth with a rounded loft, replaced hard shadows with soft contact shadows, repaired a render-target alpha issue, improved caption contrast, widened the editorial rule, and added the original school photograph to the school page itself (previously present on the homepage only).

## Performance and fallbacks

- WebGL is dynamically imported only for a supported, non-reduced-motion scene approaching the viewport. The initial website bundle does not import the Three.js runtime.
- Demand rendering stops when transforms settle. Offscreen and hidden-document scenes pause. There is no perpetual idle rotation or particle loop.
- Mobile uses pixel ratio 1, fewer lattice nodes and brush tufts, smaller shadow buffers and no multisample antialiasing. Rendering quality can regress under load.
- No GLB files, remote HDRs or texture downloads are needed. Studio light cards are generated locally. R3F releases mounted scene resources; the custom tooth geometry is disposed on unmount.
- Reduced motion, unavailable WebGL, rendering errors and context loss retain static scene artwork. Posters are small local screenshots of our own geometry, not substitute product photographs. Native SVG illustrations remain a last fallback if a poster fails.
- Fixed stage dimensions prevent loading layout shifts. Full article content stays accessible without WebGL.

## Verification

`scripts/editorial-qa.mjs` checks five desktop/mobile pages, actual pixel changes during assembly and rotation, touch input, keyboard controls, zero draws at idle/offscreen, source photographs, protocol expansion, scroll chapter state, context loss, reduced motion and unavailable WebGL. `audit/editorial-qa.json` records the latest complete result. Production network checks separately confirm that the 3D chunk stays out of the homepage and reduced-motion paths.

No physical-device benchmark, production Core Web Vitals score or medical validation is claimed. Browser captures use Chromium desktop and mobile emulation.
