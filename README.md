# Savera Coffee Roasters - Landing Page

A responsive static landing page developed for **Track: Web Development & Designing — Level 1, Task 1**.

# 🔗 Live Preview
_(Place your GitHub Pages URL link here after deployment — instructions below)_

# 🛠 Tech Stack
- HTML5
- CSS3 (Flexbox + Grid, without a framework)
- Google Fonts (Fraunces + Work Sans)

#  File Structure
```
WebDev-L1-LandingPage/
├── index.html            # All page content markup
├── css/
│   └── style.css         # All styles (tokens, layout, components, media queries)
├── images/                # All image assets (not used right now — inline SVG)
└── README.md
```

#  Features List
- [x] Sticky nav with 4 links (Process, About, Visit, Order Beans CTA)
- [x] Hero section — eyebrow, heading, subheading, two CTAs
- [x] 3 separate content sections — Process (features), About, Testimonials
- [x] Footer with contact and social links placeholders
- [x] Consistent color palette set through CSS custom properties (design tokens)
- [x] Responsive layout using CSS Grid/Flexbox — validated at 1440px, 768px, 480px 
- [x] `box-sizing: border-box` globally applied; no overlapping elements at any breakpoints
- [x] Typography scale including different display (Fraunces) vs body (Work Sans) faces,
      and various font sizes (h1/h2/h3/body/small)

# Design Tokens
| Token       | Value             | Purpose                 |
| ----------- | ------------------ | ----------------------- |
| `--color-espresso`  | `#2B1B12`  | Main text, footer bg color |
| `--color-cream`     | `#e5e5b5`  | Background for sections |
| `--color-rust`      | `#bb9883`  | Accent / CTA           |
| `--color-gold`      | `#d4eb55`  | Secondary accent       |
| `--color-charcoal`  | `#3A2E27`  | Body text              |

#  Running Locally
No building needed! It’s a static webpage.
```bash

# Inspiration Sources
Layout learned from youtubes guides
