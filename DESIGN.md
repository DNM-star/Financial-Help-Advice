---
name: Warm Contemporary Minimalism
colors:
  surface: '#fbf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fbf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#eae8e2'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c18'
  on-surface-variant: '#424843'
  inverse-surface: '#30312d'
  inverse-on-surface: '#f3f1eb'
  outline: '#727973'
  outline-variant: '#c2c8c1'
  surface-tint: '#496552'
  primary: '#1a3425'
  on-primary: '#ffffff'
  primary-container: '#304b3a'
  on-primary-container: '#9cbaa4'
  inverse-primary: '#afceb7'
  secondary: '#566250'
  on-secondary: '#ffffff'
  secondary-container: '#d9e7d0'
  on-secondary-container: '#5c6856'
  tertiary: '#462808'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f3e1c'
  on-tertiary-container: '#d9aa7f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cbead3'
  primary-fixed-dim: '#afceb7'
  on-primary-fixed: '#052012'
  on-primary-fixed-variant: '#324d3b'
  secondary-fixed: '#d9e7d0'
  secondary-fixed-dim: '#bdcbb5'
  on-secondary-fixed: '#141e10'
  on-secondary-fixed-variant: '#3e4a39'
  tertiary-fixed: '#ffdcbf'
  tertiary-fixed-dim: '#eebd91'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#613f1e'
  background: '#fbf9f3'
  on-background: '#1b1c18'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: DM Serif Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: DM Serif Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: DM Serif Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: DM Serif Display
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 3rem
---

## Brand & Style

SmartMoney KE is a financial education platform designed for Kenyan teenagers aged 14–17. The brand personality is calm, grounded, and quietly empowering—treating young learners with maturity and respect rather than infantilizing them with loud gamification. 

Drawing inspiration from Scandinavian architecture, Japandi design, and Organic Modernism, the interface evokes a sense of clarity, focus, and understated luxury. The design style is **Warm Contemporary Minimalism**: generous whitespace, natural tactile tones, and editorial typography work together to make financial concepts—such as budgeting, saving, and M-Pesa literacy—feel approachable, structured, and timeless.

## Colors

The palette is rooted in natural, organic tones that reduce visual fatigue and create a serene learning environment:

- **Primary (`#304B3A` - Deep Forest Green):** Reserved for primary call-to-action buttons, active navigation states, progress indicators, and key highlights.
- **Secondary (`#A8B5A0` - Muted Sage Green):** Used for secondary accents, completed lesson badges, subtle tags, and supportive data visualizations.
- **Tertiary (`#B68A62` - Natural Oak):** Applied sparingly for warm editorial accents, milestone markers, and category dividers.
- **Backgrounds & Surfaces:** The primary canvas uses **Warm Off-White (`#F5F3ED`)**, while secondary surfaces, cards, and sidebars use **Soft Ivory (`#EAE7DF`)** to create gentle tonal separation without harsh contrast.
- **Typography & Borders:** Primary text is set in **Warm Charcoal (`#292B27`)** for high legibility without the starkness of pure black. Dividers, hairlines, and structural outlines use **Soft Stone Grey (`#C9C7BF`)**.

Avoid pure `#FFFFFF` or `#000000`, neon hues, and decorative gradients.

## Typography

This design system pairs the editorial warmth of **DM Serif Display** with the utilitarian clarity of **Inter**.

- **Editorial Headings:** `DM Serif Display` is used for `display-lg`, `headline-lg`, and `headline-md` to give module titles, hero statements, and financial concepts a calm, authoritative presence.
- **Functional UI & Body:** `Inter` handles all body copy, interactive labels, numeric data, and smaller subheadings (`headline-sm` and below). Use tabular numerals (`font-variant-numeric: tabular-nums`) whenever displaying currency (KES), percentages, or savings goals.
- **Responsive Scaling:** On mobile viewports, `display-lg` scales down to `display-lg-mobile` (32px) to maintain comfortable reading proportions without overwhelming smaller screens.

## Layout & Spacing

The layout follows a **12-column fluid grid** with generous breathing room, reflecting Japandi spatial harmony.

- **Desktop (`>= 1024px`):** 12-column grid with `24px` (`1.5rem`) gutters and a maximum content width of `1200px`, centered with generous outer margins (`space-xl` / `48px` minimum).
- **Tablet (`768px – 1023px`):** 8-column grid with `24px` gutters and `24px` (`1.5rem`) outer margins. Multi-column lesson cards reflow into 2-column grids.
- **Mobile (`< 768px`):** 4-column grid with `16px` (`1rem`) gutters and `20px` (`1.25rem`) outer margins. All content stacks vertically into a single-column reading flow.

Maintain a strict `8px` (`0.5rem`) baseline rhythm. Leave at least 30% of the viewport as open Warm Off-White (`#F5F3ED`) canvas to prevent cognitive overload.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than drop shadows.

- **Surface Stacking:** Place Soft Ivory (`#EAE7DF`) cards and containers directly on the Warm Off-White (`#F5F3ED`) canvas.
- **Hairline Borders:** Use crisp `1px` solid borders in Soft Stone Grey (`#C9C7BF`) to define card boundaries, input fields, and section dividers.
- **No Heavy Shadows:** Avoid ambient or drop shadows on static elements. Only floating overlays (such as dropdown menus or modals) may use a subtle, diffused shadow (`0 8px 24px rgba(41, 43, 39, 0.06)`) paired with a `1px` `#C9C7BF` border.

## Shapes

The shape language is **Soft** (`roundedness: 1`), balancing architectural precision with organic warmth.

- **Standard Controls (`0.25rem` / `4px`):** Buttons, input fields, and checkboxes use subtle `4px` corners.
- **Cards & Containers (`0.5rem` / `8px`):** Lesson cards, interactive calculators, and modal dialogs use `8px` (`rounded-lg`) corners.
- **Pills & Badges (`9999px`):** Status chips and progress tags may use full pill rounding to contrast gently against rectangular cards.

## Components

- **Buttons:**
  - *Primary:* Solid Deep Forest Green (`#304B3A`) fill with Warm Off-White (`#F5F3ED`) text, `4px` border radius, `12px 24px` padding. Hover state darkens slightly to `#253B2D`.
  - *Secondary:* Transparent fill with a `1px` Soft Stone Grey (`#C9C7BF`) border and Warm Charcoal (`#292B27`) text.
  - *Ghost:* Text-only in Deep Forest Green (`#304B3A`) with an underline on hover.
- **Cards:** Soft Ivory (`#EAE7DF`) background, `1px` solid `#C9C7BF` border, `8px` border radius, and `24px` (`space-lg`) internal padding.
- **Chips & Tags:** Muted Sage Green (`#A8B5A0`) at 20% opacity for background, `#304B3A` text, `12px` (`label-md`) typography, and `4px 10px` padding.
- **Input Fields:** Warm Off-White (`#F5F3ED`) background, `1px` solid `#C9C7BF` border, `4px` radius, `12px 16px` padding. Focus state shifts the border to Deep Forest Green (`#304B3A`).
- **Lists & Dividers:** Clean vertical lists separated by `1px` horizontal hairlines in `#C9C7BF` with `16px` (`space-md`) vertical padding per row.
- **Checkboxes & Radio Buttons:** `18px` × `18px` with `1px` `#C9C7BF` border; checked state fills with Deep Forest Green (`#304B3A`) and a `#F5F3ED` checkmark.
- **Financial Progress & Savings Trackers:** Thin `6px` height horizontal bars with Soft Ivory (`#EAE7DF`) tracks and Deep Forest Green (`#304B3A`) or Natural Oak (`#B68A62`) fills, paired with tabular `Inter` numeric readouts.