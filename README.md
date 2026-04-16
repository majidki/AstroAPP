# Astro Shop

A demo e-commerce storefront built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

It ships as a fully static site with a client-side cart backed by `localStorage` and a fake checkout flow. No backend, no payments — a solid starting point if you want to add Stripe, Snipcart, a real CMS, or swap in server-rendered pages.

## Features

- Home page with hero + featured products
- Product catalog with client-side category filtering
- Per-product pages generated at build time via `getStaticPaths`
- Cart with add / update qty / remove / clear, persisted in `localStorage`
- Cart badge in the header that updates live across tabs
- Checkout form with order summary and a "demo" success state
- Tailwind CSS v4 (via the Vite plugin)
- Strict TypeScript

## Project structure

```
├── public/                # static assets (favicon, etc.)
├── src/
│   ├── components/        # Header, Footer, ProductCard
│   ├── data/products.ts   # product catalog (source of truth)
│   ├── layouts/Layout.astro
│   ├── pages/
│   │   ├── index.astro            # home
│   │   ├── cart.astro             # cart page
│   │   ├── checkout.astro         # fake checkout
│   │   └── products/
│   │       ├── index.astro        # catalog with filters
│   │       └── [slug].astro       # product detail (static paths)
│   ├── scripts/cart.ts    # localStorage cart module (shared by pages)
│   └── styles/global.css  # Tailwind import + base styles
└── astro.config.mjs
```

## Commands

All commands run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Install dependencies                             |
| `npm run dev`       | Start the dev server at `localhost:4321`         |
| `npm run build`     | Build the production site to `./dist/`           |
| `npm run preview`   | Preview the build locally                        |

## Adding products

Edit [`src/data/products.ts`](src/data/products.ts) — each entry becomes both a catalog card and a dedicated `/products/<slug>` page at build time. Add a new category and it will automatically appear in the filter bar.

## Where to go next

- Swap `localStorage` cart for a real backend (server endpoints or an API route).
- Replace the demo checkout with Stripe Checkout, Snipcart, or Shopify Buy SDK.
- Move product data into an Astro content collection or a headless CMS.
- Add search, pagination, or faceted filtering.
