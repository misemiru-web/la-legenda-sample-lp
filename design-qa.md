# Design QA — LA LEGENDA Sample LP

## Review basis

- Primary specifications: `docs/LA_LEGENDA_サンプルLP_要件定義書_v1.1.md`, `docs/LA_LEGENDA_サンプルLP_デザイン定義書_v1.2.md`, `docs/LA_LEGENDA_Asset_Source_Memo_v1.1.md`
- Desktop references: `references/01_hero_desktop_reference.jpg` through `references/08_guest_shooting_desktop_reference.jpg`
- Mobile references: `references/01_hero_mobile_reference.jpg`, `references/08_guest_shooting_mobile_reference.jpg`
- Implementation evidence: `qa/implementation-desktop-full.jpg`, `qa/implementation-mobile-full.jpg`, plus the focused section captures in `qa/`
- Implementation assets: only files under `public/images/` and `public/images/brand/`
- `docs/asset-map.md` was reviewed but not used as implementation truth because its contents describe an unrelated Bashiiin coffee project. The higher-priority LA LEGENDA documents and Asset Source Memo remained coherent.

## Capture conditions

- Desktop implementation: 1440 × 1000 CSS px, device scale factor 1, production static export.
- Mobile implementation: 390 × 844 CSS px, device scale factor 1, production static export.
- Hero focused evidence: mobile source `references/01_hero_mobile_reference.jpg` at 941 × 1672 px compared in the same visual review with `qa/implementation-mobile-hero.png` at 390 × 815 px; desktop source 1586 × 992 px compared with `qa/implementation-desktop-hero.png` at 1440 × 860 px. The source dimensions were normalized by viewport width rather than treated as 1:1 CSS pixels.
- Concept focused evidence: `references/02_problem_concept_desktop_reference.jpg` at 1122 × 1402 px compared with `qa/implementation-desktop-concept.png` at 1440 × 682 px and the dedicated mobile reflow at `qa/implementation-mobile-concept.png` at 390 × 1102 px.
- BODY copy evidence: `qa/implementation-desktop-problem.png` at 1440 × 637 px and `qa/implementation-mobile-problem.png` at 390 × 534 px.
- Why LA LEGENDA evidence: `qa/implementation-desktop-why.png` at 1440 px wide, `qa/implementation-tablet-why.png` at 768 px wide, and `qa/implementation-mobile-why.png` at 390 px wide.
- Body Care focused evidence: `references/04_body_care_wellness_desktop_reference.jpg` at 1491 × 1055 px compared with `qa/implementation-desktop-care.png` at 1440 × 737 px and `qa/implementation-mobile-care.png` at 390 × 859 px. InBody evidence is `qa/implementation-desktop-inbody.png` at 1440 × 624 px and `qa/implementation-mobile-inbody.png` at 390 × 936 px.
- Price / First Visit evidence: `qa/implementation-desktop-price.png` at 1440 × 1078 px, `qa/implementation-mobile-price.png` at 390 × 1188 px, `qa/implementation-desktop-first-visit.png` at 1440 × 827 px, and `qa/implementation-mobile-first-visit.png` at 390 × 1286 px.
- Access / closing evidence: `qa/implementation-desktop-access.png` and `qa/implementation-mobile-access.png`, `qa/implementation-desktop-final-cta.png` and `qa/implementation-mobile-final-cta.png`, plus the corresponding Footer captures. The checked section heights are approximately 606 / 897 px for Access, 600 / 600 px for Final CTA, and 272 / 467 px for Footer at desktop / mobile widths.
- Reference files were reviewed at their native dimensions; comparisons normalized for viewport width and assessed by hierarchy, composition, crop, spacing, and content density rather than raw pixel equality.
- State coverage: default desktop/mobile, scrolled header, mobile menu open, keyboard focus transfer, Escape close, and focus restoration.

## Fidelity review

- Hero: retained the reference's dark editorial split, large Mincho-style message, photographic dominance, gold arc, compact reservation action, and QUIET STRENGTH signature. Mobile fixes the H1 to “鍛えるだけじゃない。／これからも／動ける身体へ。” and uses a shorter copy area, earlier image start, compressed image crop, hidden address, tighter CTA rhythm, and a three-line menu icon. Desktop uses a deliberate two-line phrase break while preserving the existing composition.
- Problem / Concept: preserved the alternating dark and ivory rhythm, restrained typography, generous whitespace, and asymmetrical training/care image hierarchy. The dark Concept now uses a tighter 1180 px frame with left copy, a dominant horizontal Training image, and a supporting portrait Care image.
- Why LA LEGENDA: uses a compact split composition with the two-line section heading on the left and four equal 2×2 information cards on the right. Photography and item-level emphasis were removed; mobile preserves the same equal hierarchy as a single-column card sequence.
- Training / Care: reproduced the reference's full-height image-and-copy contrast and reversed section direction. Training now uses the reference-like 57.5:42.5 image/copy split with a tall photographic field; Care uses a 40:60 copy/photo split and a borderless editorial service list. Heading line breaks and image crops were tuned separately for desktop and mobile.
- Space: retained a dark photographic gallery with one dominant training-floor image and supporting reception/equipment details.
- Price: retained the black-and-gold two-column desktop presentation and converted it to a single readable mobile flow with full-width CTA.
- Guest / Shooting: layout and typographic hierarchy follow the references. The supplied Guest reference's person image was intentionally not reused because it is a reference-only asset; the implementation uses an approved facility image and states only the confirmed visit/shooting fact.
- Final CTA: retained the dark facility photo, directional overlay, gold arc, large closing message, and single primary action.

## Responsive and interaction checks

- Desktop: two-column hero and service sections, controlled image crops, asymmetrical concept/space galleries, and two-column pricing.
- Tablet: hero, training, and care switch to dedicated stacked layouts between 768 and 1023 px to avoid a cramped desktop split.
- Mobile: copy hierarchy, image order, CTA width, gallery composition, price rows, footer navigation, and Guest image ratio are independently recomposed.
- At 390 px, `document.documentElement.scrollWidth` equals `window.innerWidth` (390 px); no horizontal overflow was detected.
- Mobile menu: open state moves focus to `Concept`; Escape closes it and restores focus to the button labeled `メニューを開く`. Body scroll is locked while open and Tab focus is trapped inside the panel.
- The reduced-motion media query disables nonessential animation and smooth scrolling.
- A production-preview reload and full-page scroll produced no browser console errors or warnings.
- All visible images loaded. The only deliberately unloaded image in the mobile check is the fourth Space detail image, which is hidden by the mobile layout.

## Iterations and resolved findings

- P1 — Mobile menu focus initially remained on the trigger during its visibility transition. Resolved by making the panel immediately focusable and rechecked with keyboard input.
- P2 — Tablet hero and service splits were too compressed. Resolved with a dedicated 768–1023 px stacked layout.
- P2 — Several `next/image` dimension attributes overrode intended visual ratios. Resolved by explicitly allowing CSS height calculation; Guest now uses a compact 16:9 crop measuring 350 × 196.875 px at the 390 px viewport.
- P2 — Desktop Training heading wrapped inside “トレーニング”. Resolved with a desktop-specific size and Japanese keep-all rule while retaining the authored line break.
- P2 — Price CTA alignment did not match the centered reference. Resolved with an explicit fit-content flex button on desktop and full-width override on mobile.
- P2 — Mobile Hero was taller and less compact than `01_hero_mobile_reference.jpg`; its H1 wrapped differently, the address occupied above-the-fold space, the image began too low, and the header used the word “MENU”. Resolved with an explicit three-line mobile title, condensed vertical spacing, hidden mobile address, a 1:1 image crop beginning 184 px earlier than the previous capture, tighter primary/secondary CTA spacing, and Heroicons `Bars3Icon`/`XMarkIcon`. Post-fix evidence is `qa/implementation-mobile-hero.png`; the 390 px viewport has no horizontal overflow and the menu focus/Escape behavior passes.
- P2 — The Mobile H1 and Desktop subcopy still depended on ordinary line-breaking behavior. Resolved by making all three Mobile H1 lines block-level `nowrap` elements with a responsive 28–32 px size, and both Desktop subcopy sentences block-level `nowrap` elements. Browser measurement at 390 px confirmed exactly three visible H1 blocks, each with `white-space: nowrap`; the 1440 px capture confirmed the subcopy remains exactly two lines.
- P2 — Mobile Hero still felt vertically loose in the combined page and its arc occupied too much of the reading area. Resolved by reducing copy padding, type rhythm, action gaps, and image height; moving the arc outward; and measuring the final section at 815.28125 px at a 390 px viewport.
- P2 — Training used a shallower, less photographic layout than its desktop reference, then became vertically excessive after the photographic split was enlarged. The 57.5:42.5 desktop split is retained but capped near 810 px at 1440 px, with tighter copy padding, list rhythm, and CTA height. Desktop and mobile now share the fixed two-line heading “今の身体に合わせた、／自分のためのトレーニング。”; mobile keeps the image first with a slightly shorter crop.
- P2 — Body Care's full-width row rules read as inexpensive cards. Resolved by removing row boxes and full-width separators, introducing short restrained gold dividers between term and description, increasing whitespace, and retaining the reference's 40:60 copy/photo balance. Mobile stacks the same editorial rows without awkward mid-word wrapping.
- P2 — Decorative arcs and the development-only fixed `N` indicator could overlap content. Resolved by pushing mobile arcs farther outside their section bounds and disabling Next.js development indicators; production remains unaffected.
- P2 — The dark Training × Care concept was too wide and separated its heading from the photographic composition. Resolved by rebuilding it as a single three-column editorial frame: left heading/copy, center horizontal Training image, and right portrait Care image. Mobile retains the hierarchy as copy, wide primary image, then a narrower right-aligned portrait image. Post-fix evidence is `qa/implementation-desktop-concept.png` and `qa/implementation-mobile-concept.png`.
- P2 — The first concept revision allowed Japanese particles to wrap alone in the narrow desktop copy column. Resolved with viewport-specific authored phrase groups for the heading and supporting text. The repeated capture confirms no isolated “の” or split “短期／的” remains.
- P2 — Body Care still read as a full-width split and its service rows retained too much list-UI structure. Resolved by constraining the section to 1180 px, removing row rules and generated separators, and using typography plus 28 px vertical rhythm as the only list structure. Mobile keeps a 20 px outer margin and natural phrase wrapping without horizontal overflow.
- P2 — Body Care and InBody remained vertically long after adjacent sections were compacted. Body Care now preserves its desktop split at 737 px while tightening copy/list rhythm; its mobile image uses a shorter near-square crop. InBody now measures 624 px on desktop and 936 px on mobile, with a natural 4:3 mobile image, tighter message spacing, compact fact rows, and reduced note spacing. The 390 px check reports no horizontal overflow.
- P2 — Space and Guest remained too tall in sequence. Desktop Space now uses 88 px outer padding and a 500 px gallery field; mobile replaces the three-image vertical stack with one 16:10 main image and two square supporting images in a shared row, reducing the section to 796 px. Guest now measures 439 px on desktop and 597 px on mobile, uses a 16:9 image, keeps “LA LEGENDA” unbroken, and renders its factual note with lower visual emphasis.
- P2 — Menu & Price and First Visit retained excessive vertical rhythm. Price now uses reduced section/row/note/CTA spacing, a fixed two-line mobile heading, and single-line duration labels without horizontal overflow. First Visit reduces the desktop photo width by roughly 13%, shortens the mobile crop, trims step padding from 22 px to 13–14 px, and tightens supporting-copy line height while preserving all five steps. A further desktop-only pass reduces section padding from 88 px to 64 px, shortens the image by about 10%, and bottom-aligns the image and five-step list, bringing the section from 970 px to 827 px.
- P2 — Access, Final CTA, and Footer made the closing sequence feel vertically extended. Access now uses tighter section/copy spacing, authored phrase-safe desktop/mobile headings, and a lower mobile image crop. Final CTA uses fixed two-line desktop and three-line mobile headings and is reduced to about 600 px on desktop (roughly 17% shorter than the former 720 px minimum). Footer padding, navigation rhythm, and the mobile logo were reduced while preserving the existing palette and information. Both checked widths retain zero document-level horizontal overflow.
- P2 — The FOR YOUR BODY section was vertically too generous after its copy was shortened. Resolved by changing the heading to “動きたい。でも、自分に合う方法が分からない。”, reducing desktop vertical padding to 72 px, tightening the heading/list gap to 30 px and row padding to 14 px, while preserving the existing mobile spacing. Dedicated desktop/mobile phrase groups prevent unnatural Japanese wrapping. The Training × Care heading was shortened to “鍛える。整える。これからの身体へ。” without changing its image composition.
- P2 — Concept still read as three separate columns rather than the layered editorial composition in the reference. Resolved by placing the dominant horizontal TRAIN image on the upper plane, shifting a cropped CARE image down and right with a light overlap, and moving both descriptions into a narrow charcoal panel on the far right. Desktop height was reduced from 720 px to 642 px; Mobile retains the existing TRAIN → CARE vertical sequence and image captions.
- P2 — Mobile BODY retained full-width row rules and excessive vertical space, while Concept copy split “必要” unnaturally and the portrait CARE image outweighed TRAIN. Resolved by removing BODY row borders, tightening its frame to 24 px side margins and 534 px total height, authoring phrase-safe Concept body lines, cropping TRAIN to 16:9 and CARE to a smaller right-aligned 4:3, and attaching both captions as restrained charcoal bands. The revised Concept measures 390 × 1102 px with no horizontal overflow.
- P2 — The desktop Concept's right information panel competed with the photography, while CARE was too small yet overlapped TRAIN too deeply. Resolved by removing the panel, integrating labels directly beneath each photo, sizing CARE at roughly 73% of TRAIN's width, reducing image overlap to about 55 px, and increasing the surrounding black field. A shared tonal filter plus additional CARE desaturation/darkening brings the two source images into a closer brightness and color range. Mobile retains the established vertical order.
- P2 — Why LA LEGENDA's first revision overemphasized 01 and centered the composition around a reception photo. Reworked to a narrower 1040 px split frame: fixed natural heading lines on the left and four equal cards on the right, with no image. Mobile retains equal emphasis in a compact one-column sequence, and the 390 px check confirms no horizontal overflow.
- Capture note — Initial blank below-fold images and an apparent 500 px “mobile” viewport were tooling artifacts. Captures were repeated after scrolling lazy images into view and applying a true 390 px device emulation.

## Accepted constraints

- The supplied gold brand logo is used without recoloring; it differs from the white logo treatment shown in some references but follows the repository's logo-use rule.
- System Mincho/Gothic fallbacks are used because no licensed local webfont files are supplied. The implementation remains self-contained for static export.
- Reservation and Instagram destinations are not invented. CTAs currently lead to the on-page reservation/access guidance until official destinations are confirmed.
- Pricing is labeled as a September 2026 source-based sample and explicitly flags tax treatment/latest-price confirmation.

## Result

No unresolved P0–P2 visual, responsive, or interaction defects remain in the checked states.

final result: passed
