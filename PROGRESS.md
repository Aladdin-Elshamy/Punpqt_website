# Punpqt Project Progress & Tracker

*Last Updated: 2026-11-07*

---

## 1. Project Status Overview
The Punpqt website is currently a comprehensive, highly responsive frontend prototype built on **Next.js 16 (App Router)** and **React 19**, with full **English** and **Arabic (RTL)** bilingual support powered by `next-intl`. The design system uses **Tailwind CSS v4** and **Shadcn UI (base-nova style)** with headless Base UI primitives.

All core user journeys (Landing, Product Browsing, Product Configuration, Printer Profiles, RFQ Wizard, Cart, and Checkout) have polished UI implementations with structured mock data.

---

## 2. Implemented Features & Modules

### Home & Marketing (`/`, `src/features/home/`)
- [x] **Hero Section:** Responsive search bar, visual callouts, and background glow effects.
- [x] **Features & Statistics:** Platform metrics and key selling points.
- [x] **Choose Us & Why Punpqt:** Value proposition grids for customers and print businesses.
- [x] **Popular Products & Category Showcase:** Dynamic product cards with hover states.
- [x] **Top Printers Showcase:** Verified printer profile highlights with ratings and badges.
- [x] **Customer Stories:** Testimonials and feedback carousel.
- [x] **Printing House CTA & Find Your Printer:** Dual CTAs for clients and printer vendors.
- [x] **Global Footer:** Multilingual navigation links, newsletter signup UI, social links, and copyright notices.

### Products & Catalog (`/products`, `src/features/products/`, `src/features/specific-product/`)
- [x] **Product Listing:** Filterable catalog of print products (business cards, packaging, flyers, stickers, etc.).
- [x] **URL-Driven Catalog State:** Tab switching (Products vs. Printers), view toggling (Grid vs. List), and category selection preserved via URL search params (`catalog-state.ts`).
- [x] **Filters & Search:** Visual category filters and search inputs.

### Product Configurator & Specifications (`/products/[product]/[specification]`, `src/features/specification/`)
- [x] **Interactive Configurator:** Option pickers for sizing, paper stock/weight, print color (single/double sided), finishing options, and quantity tiers.
- [x] **Live Summary Sidebar:** Pricing summary card, delivery estimate notice, and design upload preference toggle.
- [x] **Media Gallery:** Product preview swiper and image gallery (`react-slick`).
- [x] **Product Details Tabs:** Structured tabs for specifications, reviews with star rating breakdown, and description.

### Printing Houses Network (`/printers`, `/printers/[printer]`, `src/features/printers/`, `src/features/specific-printer/`)
- [x] **Printers Directory:** Searchable listing of verified printing houses with capability tags, ratings, and location info.
- [x] **"Can't Decide" Callout:** Direct CTA routing users to the RFQ wizard.
- [x] **Detailed Printer Profile:** Cover header, badges, operating metrics (completed orders, ratings, years active), About Us, equipment/machinery list, portfolio gallery, and customer reviews.

### Custom Request for Quotation (RFQ) Flow (`/custom-rfq`, `src/features/custom-rfq/`, `src/features/submitted/`)
- [x] **5-Step RFQ Wizard:**
  1. Product Type selection (with icon cards)
  2. Specification inputs (dimensions, materials, quantity, custom notes)
  3. Vendor selection (open tender vs selected verified printers)
  4. Delivery details (location, timeline, delivery method)
  5. Review & Submit overview
- [x] **Wizard Navigation & Stepper:** Interactive step transition controls and step progress indicator.
- [x] **Submission Confirmation Page (`/custom-rfq/submitted`):** Success confirmation with RFQ tracking advice and next steps.

### Shopping Cart & Checkout Flow (`/shopping-cart`, `/shopping-cart/checkout`, `src/features/shopping-cart/`, `src/features/checkout/`, `src/features/checkout-success/`)
- [x] **Cart Page:** Item list with custom specification pills, printer attribution, delivery estimates, promo code input, order summary calculations, and order protection guarantee badges.
- [x] **Two-Step Checkout Flow:**
  - *Step 1 (Review):* Line item breakdown and summary check.
  - *Step 2 (Upload):* File dropzone allowing customers to upload print-ready PDF/artwork files per product item.
- [x] **Checkout Summary:** Dynamic file status tracker and printer special instructions field.
- [x] **Checkout Success Page (`/shopping-cart/checkout/success`):** Order confirmation banner, next steps guide, and ordered product chips.

### Informational & Legal Pages
- [x] **Who We Are (`/who-we-are`):** Company mission, core values, team showcase, and platform milestones.
- [x] **How It Works (`/how-it-works`):** Client and printer workflow guides.
- [x] **Get In Touch (`/get-in-touch`):** Support contact details, office location, and contact inquiry form.
- [x] **Terms & Conditions (`/terms-conditions`):** Legal terms, printing warranties, cancellation terms, and IP policies.
- [x] **Privacy Policy (`/privacy-policy`):** Data collection, usage, cookies, and user rights.

### Shared & Core Infrastructure
- [x] **Bilingual i18n System:** English (`en`) and Arabic (`ar`) translation bundles in `messages/` loaded dynamically via `src/i18n/request.ts`.
- [x] **Language Switcher (`LangSwitcher`):** Client select dropdown with Server Action (`changeLocaleAction.ts`) setting locale cookie and instant re-render.
- [x] **Global Layout & Navigation:** Responsive `Navbar` with mobile drawer sheet, accordion navigation, and desktop menus.
- [x] **RTL / LTR Font Loading:** Dynamic HTML font and direction assignment (`IBM_Plex_Sans_Arabic` for Arabic RTL, `AtypText` for English LTR).

---

## 3. Incomplete Areas, Placeholders & Tech Debt

### High Priority
- [ ] **Linter Error in `src/features/printers/sections/Decide.tsx`:**
  - Unescaped apostrophe in `Can't Decide` (line 13) causing ESLint `react/no-unescaped-entities` error.
  - Variable `t` declared but unused, and text copy is hardcoded rather than reading from `messages/*.json`.
- [ ] **Unused Import / Variable Warnings (16 warnings):**
  - Unused variables across `src/features/custom-rfq/custom-rfq.data.ts`, `src/app/printers/[printer]/page.tsx`, `AboutUs.tsx`, `Steps.tsx`, `PolicyContent.tsx`, and `ProductCard.tsx`.

### State Management & Persistence
- [ ] **Cart State Persistence:** Cart items in `src/features/shopping-cart/` currently use static mock data (`CART_ITEMS`). Adding items from the specification page does not update cart state. Need a shared client store (React Context or Zustand) with local storage sync.
- [ ] **RFQ Form Data Handling:** Multi-step wizard state resets upon page refresh; form data is not serialized or submitted to an API upon completion.
- [ ] **Checkout File Upload:** File upload dropzone simulates file selection locally in component state without actual cloud storage (S3/Cloudinary/Uploadthing) upload.

### Backend & API Integrations (Pending)
- [ ] **API Routes / Server Actions:** No database-backed API endpoints currently exist for:
  - Products fetching and dynamic specification schemas.
  - Printer directory queries and individual profile data.
  - RFQ quote creation and notification dispatches.
  - Order creation and order tracking.
  - Contact form submissions.
- [ ] **Payment Gateway Integration:** Payment section in checkout is visual only (needs integration with Egyptian/regional gateways like Paymob, Fawry, or Stripe).
- [ ] **Authentication System:** User accounts, printer vendor portal, and authentication flows are not yet implemented.

### Libraries & Assets
- [ ] **Unused Dependency:** `gsap` and `@gsap/react` are installed in `package.json` but not yet integrated into interactive component animations.
- [ ] **Metadata & SEO:** Default metadata in `src/app/layout.tsx` still shows `"Create Next App"`. Needs proper OpenGraph tags and bilingual titles/descriptions.

---

## 4. Next Steps & Development Roadmap

### Phase 1: Code Cleanliness & Quality (Immediate)
- Fix the ESLint error in `src/features/printers/sections/Decide.tsx` and localize its text into `en.json` and `ar.json`.
- Clean up unused variables and imports flagged during `npm run lint`.
- Update site metadata in `src/app/layout.tsx` with proper title, description, and favicons for Punpqt.

### Phase 2: Client State Management & Interaction
- Implement a lightweight Global Cart Store (`CartContext` or `zustand`) to persist cart items across navigation.
- Connect the "Add to Cart" button in `src/features/specification/sections/SpecificationPanel.tsx` to add configured products with selected specifications to the cart.
- Connect cart badge count in `Navbar.tsx` to active cart item count.

### Phase 3: Forms & User Input Handlers
- Connect `get-in-touch` contact form to a Server Action / email dispatch service (e.g., Resend).
- Add form validation (using Zod or standard React hook form) to RFQ wizard inputs.
- Wire checkout submit button to redirect to `/shopping-cart/checkout/success` with actual order ID.

### Phase 4: Backend & Database Layer
- Set up database schema (PostgreSQL / Prisma / Drizzle) for products, specifications, vendors/printers, RFQs, and orders.
- Replace mock data files (`*.data.ts`) with Server Action queries and data loaders.

---

## 5. Key Decisions & Conventions

1. **Locale & Direction First:** Arabic is the platform's primary audience locale (`ar` default). All layouts must be built with RTL-first or bi-directional CSS. Do not use hardcoded left/right CSS properties unless paired with `rtl:` / `ltr:` variants.
2. **Feature Isolation:** Keep code strictly inside `src/features/<feature>/` unless it is used across two or more distinct feature domains, in which case promote it to `src/shared/`.
3. **No Pure Mock Data in Route Handlers:** Keep mock datasets strictly inside `<feature>.data.ts` to allow straightforward replacement with API/database queries in the future.
4. **Thin App Router Pages:** Pages inside `src/app/` should only handle route parameters, locale server data loading, and feature section composition.
5. **Next.js 16 + React 19 Strictness:**
   - Always `await cookies()` when retrieving cookie values.
   - Use Server Actions for server mutations (`"use server"`).
   - Keep React Compiler enabled (`reactCompiler: true` in `next.config.ts`).

