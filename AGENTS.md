<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Protocols & Project Context

## Agent Session Workflow (Mandatory)
Every AI agent or automated workflow operating on this repository must adhere to the following sequence:

1. **Before Starting Any Task:**
   - Always read [`PROGRESS.md`](./PROGRESS.md) to understand current implementation status, active priorities, known issues, and established patterns.
   - Verify where the requested work fits within the existing feature structure.

2. **During Task Execution:**
   - Follow the architectural patterns, styling approaches, and coding standards defined in this document.
   - Preserve existing comments and docstrings.
   - Keep bilingual translations (English & Arabic) in sync when creating or modifying UI text.

3. **Upon Task Completion:**
   - Update [`PROGRESS.md`](./PROGRESS.md) immediately:
     - Mark completed items.
     - Document any newly added features, modules, or changed configurations.
     - Record any new architectural decisions in the "Key Decisions / Conventions" section.
     - Note any newly discovered bugs, technical debt, or follow-up tasks under "Next Steps".

---

## Project Overview

**Punpqt** is a commercial printing marketplace and custom quotation platform targeting the Egyptian / MENA market. It connects individual customers, designers, and businesses with commercial printing houses.

- **Primary URL / Routes:** Product catalog, custom RFQ multistep wizard, printer profiles, shopping cart & multi-step checkout flow, and company information pages.
- **Language / Locale:** Fully bilingual in Arabic (`ar`) and English (`en`), with default Arabic RTL (Right-to-Left) rendering.

---

## Tech Stack & Key Libraries

| Technology | Version / Spec | Purpose / Details |
|---|---|---|
| **Framework** | Next.js 16.2.12 (App Router) | Modern App Router with React Server Components (RSC) by default. React Compiler enabled. |
| **Runtime / Library** | React 19.2.4 | Modern React with Server Actions, async cookies (`await cookies()`), and modern hooks. |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/postcss`) | CSS-first configuration via `@theme inline` in `src/app/globals.css`, OKLCH color palettes, custom `@utility` rules. |
| **UI Components** | Shadcn UI (`base-nova` style) + `@base-ui/react` | Accessible headless primitives wrapped in styled, customizable components. |
| **Internationalization** | `next-intl` 4.13.4 | Cookie-backed locale detection (`src/i18n/request.ts`), JSON message bundles in `/messages/`. |
| **Icons** | `lucide-react` + Custom SVG icons | Standard Lucide icons + custom brand and UI SVGs in `src/shared/icons/`. |
| **Carousels / Sliders**| `react-slick` & `slick-carousel` | Product specification preview swipers (`src/features/specification/sections/Swiper.tsx`). |
| **Animation** | `gsap` (3.15) & `@gsap/react` (2.1) | Installed for high-fidelity animations. |
| **Utility Libraries** | `clsx`, `tailwind-merge`, `class-variance-authority` | Conditional styling and variant management via `cn()` helper in `src/lib/utils.ts`. |
| **Language & Tooling** | TypeScript 5, ESLint 9 (`eslint-config-next`), Prettier | Strict typing and linting configurations. |

---

## Directory Structure

```text
punpqt-website/
├── messages/                    # Translation JSON dictionaries
│   ├── ar.json                  # Arabic translations (default)
│   └── en.json                  # English translations
├── public/                      # Static public assets
├── src/
│   ├── app/                     # Next.js App Router (thin route pages & layouts)
│   │   ├── custom-rfq/          # RFQ flow pages (/custom-rfq, /submitted)
│   │   ├── get-in-touch/        # Contact page
│   │   ├── how-it-works/        # How it works explainer
│   │   ├── printers/            # Printers listing & [printer] dynamic profile
│   │   ├── privacy-policy/      # Legal privacy policy
│   │   ├── products/            # Product catalog & [product]/[specification]
│   │   ├── shopping-cart/       # Cart, /checkout, and /checkout/success
│   │   ├── terms-conditions/    # Legal terms & conditions
│   │   ├── who-we-are/          # About Us
│   │   ├── globals.css          # Tailwind v4 theme, OKLCH tokens, base layer
│   │   ├── layout.tsx           # Root layout: font injection, next-intl provider, Navbar & Footer
│   │   └── page.tsx             # Homepage combining feature sections
│   ├── assets/                  # Local fonts (AtypText) and images
│   ├── components/
│   │   └── ui/                  # Shadcn / Base UI primitives (Button, Card, Select, Sheet, etc.)
│   ├── features/                # Domain-driven feature modules (Feature-Sliced structure)
│   │   ├── checkout/
│   │   ├── checkout-success/
│   │   ├── custom-rfq/
│   │   ├── get-in-touch/
│   │   ├── home/
│   │   ├── how-it-works/
│   │   ├── printers/
│   │   ├── privacy-policy/
│   │   ├── products/
│   │   ├── shopping-cart/
│   │   ├── specific-printer/
│   │   ├── specific-product/
│   │   ├── specification/
│   │   ├── submitted/
│   │   ├── terms-conditions/
│   │   └── who-we-are/
│   ├── i18n/                    # next-intl server request configuration
│   │   └── request.ts
│   ├── lib/
│   │   └── utils.ts             # cn() classnames helper
│   └── shared/                  # Cross-feature reusable code
│       ├── components/          # Shared UI (Navbar, BreadCrumb, FormField, LangSwitcher, etc.)
│       ├── functions/           # Shared actions (e.g., changeLocaleAction)
│       ├── hooks/               # Custom hooks (e.g., useWindowSize)
│       ├── icons/               # Custom SVG icon components
│       └── sections/            # Shared structural sections (CirclePattern)
├── components.json              # Shadcn CLI config (base-nova, rtl: true)
├── next.config.ts               # Next.js configuration (NextIntl plugin, reactCompiler: true)
├── package.json                 # Project dependencies & npm scripts
├── tsconfig.json                # TypeScript compiler configuration with path aliases
└── PROGRESS.md                  # Active task tracker and implementation progress
```

---

## Architectural Patterns & Conventions

### 1. Feature-Driven Modular Architecture
- Route files in `src/app/**/page.tsx` should remain thin controllers. They fetch server-side translations, read search params / cookies, and assemble feature sections.
- Business logic, feature-specific UI, and mock data belong inside `src/features/<feature-name>/`:
  - `components/`: Granular, feature-scoped UI units.
  - `sections/`: High-level layout blocks rendered on pages.
  - `<feature>.types.ts` or `models/`: Feature data contracts.
  - `<feature>.data.ts`: Static configurations, mock items, and option lists.
  - `functions/`: Pure helpers specific to that domain (e.g. `catalog-state.ts`).

### 2. Server Components vs Client Components
- Next.js Server Components (RSC) are default.
- Add `"use client"` only when components need browser events, React state (`useState`, `useReducer`), client hooks (`usePathname`, `useLocale`), or DOM interactions.
- In Next.js 16 / React 19, `cookies()` is asynchronous: always call `await cookies()`.

### 3. Internationalization & Bi-directional (RTL/LTR) Layouts
- Every user-facing string must be localized via `next-intl` (using `messages/en.json` and `messages/ar.json`).
- Arabic (`ar`) is the default locale; the HTML attribute sets `dir="rtl"` and loads `IBM_Plex_Sans_Arabic`. English (`en`) sets `dir="ltr"` and loads `AtypText`.
- Use Tailwind logical properties (`ms-`, `me-`, `ps-`, `pe-`, `inset-inline-start`) or explicit direction variants (`rtl:`, `ltr:`) rather than hardcoded left/right alignments.

### 4. Styling Conventions
- Tailwind CSS v4 is used with CSS variables defined in `@theme inline` in `src/app/globals.css`.
- Use the `cn(...)` utility (`src/lib/utils.ts`) when merging Tailwind class names or computing conditional classes.
- The brand primary color is teal: `#0D7377` / `var(--primary)`. Backgrounds typically use `#FAFAFA` for contrast sections.
- Container widths and typography trims are managed via custom `@utility container` and `@utility trim` rules in `globals.css`.

### 5. URL-Driven State Management
- For filtering, tabs, and pagination (such as in `specific-product` catalog view), encode state directly in query parameters (`parseCatalogSearchParams`, `catalogQueryString`) to support deep linking and shareable URLs.

---

## Commands Reference

```bash
# Start development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start

# Run ESLint validation
npm run lint
```
