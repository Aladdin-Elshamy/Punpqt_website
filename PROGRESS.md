# Punpqt Project Progress & Tracker

*Last Updated: 2026-11-07*

---

## 1. Project Status Overview
The Punpqt website is built on **Next.js 16 (App Router)** and **React 19**, with full **English** and **Arabic (RTL)** bilingual support powered by `next-intl`. The design system uses **Tailwind CSS v4** and **Shadcn UI (base-nova style)** with headless Base UI primitives.

The **Home Page** (`src/features/home/`) is fully connected to the live backend API (`https://api-punqt.plana.company/api/v1/home`), rendering dynamic products, popular products bento grid, trusted printers, platform features, and promotional banners with structured loading skeletons and error boundaries.

---

## 2. Implemented Features & Modules

### Home & Marketing (`/`, `src/features/home/`) — *Live API Integrated*
- [x] **Backend API Integration (`getHomeData`):** Feature service layer in `src/features/home/services/home.service.ts` connecting to `https://api-punqt.plana.company/api/v1/home` with ISR revalidation (60s) and language headers.
- [x] **Strict TypeScript Models:** Structured models in `src/features/home/models/` (`ads.model.ts`, `products.model.ts`, `printers.model.ts`, `features.model.ts`) and unified exports in `src/features/home/types/model.ts` (`HomeData`, `HomeApiResponse`).
- [x] **Hero & Promotional Ads:** Dynamic promotional banner binding (`data.ads.large[0]`) in `HeroSection` and billboard slot in `PopularProducts`.
- [x] **Features & Value Propositions (`ChooseUs`):** Bound to `data.features` with key-based icon resolution (`quality_guarantee`, `verified_printers`, `competitive_pricing`) and static copy fallback.
- [x] **Popular Products Showcase (`PopularProducts`):** Dynamic responsive bento grid bound to `data.popular_products` with best seller badges, pricing indicators, description trims, and promotional ad slot.
- [x] **Product Category Showcase (`BrowseByProducts`):** Grid bound to `data.products` with `ProductCategory` cards linking directly to `/products/[slug]`.
- [x] **Top Printers Showcase (`TopPrinters` & `TopPrinter`):** Bound to `data.trusted_printers` rendering dynamic ratings, review counts, order metrics, capability tag badges, company initials fallback, and direct profile navigation.
- [x] **Structured Skeletons & Loading States:** Section-level skeletons (`FeatureCardSkeleton`, `ProductCardSkeleton`, `PrinterCardSkeleton`, `HomeLoadingSkeleton`) and root `src/app/loading.tsx`.
- [x] **Client Error Boundary:** `src/app/error.tsx` handling network/rendering errors with retry capability.
- [x] **Remote Images Configuration:** Added `api-punqt.plana.company` to `images.remotePatterns` in `next.config.ts`.
- [x] **Static Localization Integrity:** Preserved `next-intl` keys for UI labels and section headings; fully localized error boundary (`error.tsx`), empty states across all sections (`TopPrinters`, `BrowseByProducts`, `PopularProducts`), currency indicators, pricing types, and promotional badges into `messages/en.json` and `messages/ar.json`.
- [x] **Customer Stories & Why Punpqt:** High-converting testimonials and value grids.
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
- [x] **"Can't Decide" Callout:** Fully localized RFQ CTA in `Decide.tsx` with English and Arabic copy.
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
- [x] **ESLint & TypeScript Verification:** Zero errors and zero warnings across all project files.

---

## 3. Incomplete Areas, Placeholders & Tech Debt

### Code Quality (Resolved)
- [x] **Linter Error in `Decide.tsx`:** Resolved via proper next-intl translation namespace and escaped entities.
- [x] **Unused Import / Variable Warnings:** Cleaned up unused imports across all features (0 warnings remaining).

### State Management & Persistence
- [ ] **Cart State Persistence:** Cart items in `src/features/shopping-cart/` currently use static mock data (`CART_ITEMS`). Adding items from the specification page does not update cart state. Need a shared client store (React Context or Zustand) with local storage sync.
- [ ] **RFQ Form Data Handling:** Multi-step wizard state resets upon page refresh; form data is not serialized or submitted to an API upon completion.
- [ ] **Checkout File Upload:** File upload dropzone simulates file selection locally in component state without actual cloud storage (S3/Cloudinary/Uploadthing) upload.

### Backend & API Integrations (Pending)
- [ ] **Catalog & Product Detail APIs:** Connect `/products` and `/products/[product]/[specification]` to real API endpoints.
- [ ] **Printer Directory API:** Connect `/printers` and dynamic printer profile `/printers/[printer]` to backend endpoints.
- [ ] **RFQ Submission API:** Connect custom RFQ wizard to submission endpoints.
- [ ] **Order & Payment Integration:** Implement order placement and payment gateway integration (Paymob / Fawry / Stripe).
- [ ] **Contact Form Action:** Connect `get-in-touch` form to an email/CRM API.
- [ ] **Authentication System:** Customer and printer partner authentication portals.

---

## 4. Next Steps & Development Roadmap

### Phase 1: Products & Printer Catalog API Integration (Next Priority)
- Connect `/products` catalog listing to backend product queries with pagination, search, and category filters.
- Connect `/products/[product]` and specification configurator to dynamic product detail and pricing calculations API.
- Connect `/printers` directory and `/printers/[printer]` profile to live printer endpoints.

### Phase 2: Cart & State Management
- Implement global Cart store (Context or Zustand) with local storage persistence.
- Connect product specification "Add to Cart" button to add configured items to the cart.
- Connect cart badge counter in `Navbar`.

### Phase 3: Forms & Transaction Flow
- Connect Custom RFQ wizard submission to backend quote generation API.
- Connect checkout flow to backend order creation with file upload handling.
- Wire `get-in-touch` contact form to Server Action.

---

## 5. Key Decisions & Conventions

1. **Server Component API Fetching:** Data fetching occurs server-side in App Router Server Components (`src/app/page.tsx`) with feature-scoped service functions (`home.service.ts`).
2. **ISR Caching:** Responses use `next: { revalidate: 60 }` for high performance with automatic cache revalidation.
3. **Locale-Aware API Requests:** Fetch calls pass `Accept-Language: locale` alongside `Accept: application/json`.
4. **Remote Image Safety:** External images from `https://api-punqt.plana.company` are whitelisted under `images.remotePatterns` in `next.config.ts`.
5. **Fallback Safety:** All components accept nullable/empty backend values gracefully, rendering initials for missing printer logos and omitting null prices without breaking the layout.
6. **Bilingual RTL/LTR First:** Dynamic data rendered alongside static localized headings with zero hardcoded visual labels.
