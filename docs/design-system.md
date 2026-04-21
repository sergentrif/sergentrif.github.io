# Design System — Adrien Blandin

> Extracted from Figma file `AB` · Page: `1. Homepage`

---

## Colors

| Token            | Hex       | Usage                                           |
| ---------------- | --------- | ----------------------------------------------- |
| `Brand/Midnight` | `#000F1A` | Primary text, dark backgrounds                  |
| `Brand/Giants`   | `#F46036` | Accent, CTA highlights, code separators         |
| `Brand/Powder`   | `#F7F7F2` | Page background, button fill                    |
| `Brand/Lime`     | `#EEF36B` | Accent (highlights, badges)                     |
| `Brand/Glacier`  | `#AAEAFE` | Accent (monogram color highlights)              |
| `Brand/Lavender` | `#C8C6FA` | Card borders, dividers, banner borders          |
| `Body`           | `#49687C` | Secondary text, card text, labels               |
| `Surface`        | `#EFEFEA` | Card backgrounds, review items, tag backgrounds |

---

## Typography

### Fonts

| Family                  | Weights Used                               | Role                                       |
| ----------------------- | ------------------------------------------ | ------------------------------------------ |
| **Bricolage Grotesque** | Regular (400), Bold (700), ExtraBold (800) | Headings, body copy, UI labels             |
| **Fira Code**           | Medium (500)                               | Body text, navigation, CTAs, review quotes |
| **DM Mono**             | Regular (400)                              | Code-style decorators (`</>`, separators)  |

### Type Scale

| Token             | Family              | Weight          | Size | Line Height | Letter Spacing        |
| ----------------- | ------------------- | --------------- | ---- | ----------- | --------------------- |
| `H1`              | Bricolage Grotesque | Bold (700)      | 40px | 1.3         | 0                     |
| `H4`              | Bricolage Grotesque | ExtraBold (800) | 26px | 1.4         | 3px (0.78px tracking) |
| `Caption-Display` | Bricolage Grotesque | Regular (400)   | 16px | 1.4         | 1px (0.16px tracking) |
| `Button`          | Fira Code           | Medium (500)    | 16px | 1.2         | 0                     |
| `Body (code)`     | Fira Code           | Medium (500)    | 16px | 1.4         | 0                     |
| `Mono`            | DM Mono             | Regular (400)   | 14px | 1.4         | 0                     |

> All Bricolage Grotesque text uses `font-variation-settings: 'opsz' 14, 'wdth' 100`

---

## Spacing

| Token | Value | Usage                                   |
| ----- | ----- | --------------------------------------- |
| `xs`  | 8px   | Icon padding, small gaps, tag padding   |
| `sm`  | 16px  | List gaps, heading stacks               |
| `md`  | 22px  | Button horizontal padding               |
| `lg`  | 32px  | Card padding, section gaps, row spacing |
| `xl`  | 44px  | Section breathing room, footer row gaps |
| `2xl` | 60px  | Section vertical padding                |
| `3xl` | 76px  | Hero spacing, content block gaps        |
| `4xl` | 96px  | Page horizontal margins                 |

---

## Border Radius

| Token         | Value | Usage                |
| ------------- | ----- | -------------------- |
| `radius-sm`   | 8px   | Tags, badges         |
| `radius-md`   | 16px  | Cards, image frames  |
| `radius-full` | 99px  | Buttons (pill shape) |

---

## Layout

| Property           | Value       |
| ------------------ | ----------- |
| Page width         | 1440px      |
| Content container  | 1248px      |
| Inner content      | 1034–1035px |
| Horizontal padding | 96px        |

---

## Components

### Navbar

- Width: 1248px, padding-y: 32px
- Monogram logo (left) + navigation links (center) + CTA button (right)
- Nav links: Fira Code Medium 16px, color `Brand/Midnight`
- CTA Button: pill shape (`border-radius: 99px`), border `2px solid Brand/Giants`, background `Brand/Powder`, Fira Code Medium 16px

### Button (Primary / Pill)

```
background: Brand/Powder (#F7F7F2)
border: 2px solid Brand/Giants (#F46036)
border-radius: 99px
padding: 16px 22px
font: Fira Code Medium 16px
color: Brand/Midnight (#000F1A)
```

### ButtonSecondary (Text + Arrow)

```
display: inline-flex
gap: 8px
font: Fira Code Medium 16px
color: Brand/Midnight (#000F1A)
— trailing arrow icon (7×14px)
```

### Card (Service)

```
border: 2px solid Brand/Lavender (#C8C6FA)
border-radius: 16px
padding: 32px
height: 400px
width: 394px
background: transparent

— Heading area: border-bottom 2px solid Lavender, padding-y 8px
  font: Bricolage Grotesque ExtraBold 26px, color Body (#49687C), text-center
— Tag: bg Surface (#EFEFEA), border 1px solid Lavender, border-radius 8px, padding 8px
  font: Bricolage Grotesque Regular 16px, color Body
— CTA: ButtonSecondary at bottom
— Background media: mix-blend-mode plus-lighter, opacity 0.8
```

### Tag / Badge

```
background: Surface (#EFEFEA)
border: 1px solid Brand/Lavender (#C8C6FA)
border-radius: 8px
padding: 8px
font: Bricolage Grotesque Regular 16px
color: Body (#49687C)
```

### ReviewItem

```
background: Surface (#EFEFEA)
border-radius: 16px
padding: 32px
font: Fira Code Medium 16px
color: Body (#49687C)
— Paired with an attribution card (company logo + divider + name/title)
— Divider: 50px line, 2px height
— Name/title: Fira Code Medium 16px, uppercase, color Body
```

### Banner (Trust Strip)

```
border-top + border-bottom: 1px solid Brand/Lavender
padding: 8px
logos separated by DM Mono "</>" in Brand/Giants (#F46036)
```

### Krma Section (Dark)

```
background: Brand/Midnight (#000F1A)
padding: 60px 96px
heading color: Brand/Powder (#F7F7F2)
body color: #B4B4AD (muted warm gray)
CTA color: Brand/Powder
```

### Footer

```
width: 1440px
padding-y: 44px
— Top banner strip (same as trust strip, Lavender borders)
— Row: links left (Bricolage Grotesque ExtraBold 26px, with ## prefix in Glacier)
         + logo + tagline right
— Mentions légales: underlined, 16px, color Midnight
```

---

## Decorative Patterns

- `</>` in **DM Mono Regular 14px** using `Brand/Giants (#F46036)` as separator between trust logos
- `##` prefix in **Bricolage Grotesque ExtraBold** using `Brand/Glacier (#AAEAFE)` before footer nav items
- Headings are **uppercase**
- Rotating stamp/badge decorative elements
- Wavy vector illustrations as card backgrounds (mix-blend-mode: plus-lighter)

---

## Page Sections (Homepage)

1. **Navbar** — logo, nav links, contact CTA
2. **Hero** — full-name wordmark, subtitle tags, decorative stamp
3. **BlocAdrien** — photo + bio text block
4. **Banner** — client trust logos strip
5. **Sections** — 3× service rows (text left, card right)
6. **Reviews** — 3× testimonial rows
7. **Krma** — dark section for partner agency
8. **CII** — tax credit callout with stamp
9. **Footer** — social links, logo, legal
