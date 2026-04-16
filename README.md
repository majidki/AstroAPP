# Astro Shop

A demo e-commerce storefront built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

It ships as a fully static site with a client-side cart backed by `localStorage` and a fake checkout flow. No backend, no payments — a solid starting point if you want to add Stripe, Snipcart, a real CMS, or swap in server-rendered pages.

## Features

- Home page with hero + featured products
- Product catalog with client-side category filtering
- Per-product pages generated at build time via `getStaticPaths`
- **Product data lives in markdown files** (Astro content collection, validated with Zod)
- Cart with add / update qty / remove / clear, persisted in `localStorage`
- Cart badge in the header that updates live across tabs
- Checkout form with order summary and a "demo" success state
- Tailwind CSS v4 (via the Vite plugin)
- Strict TypeScript

## Project structure

```
├── public/                     # static assets (favicon, etc.)
├── src/
│   ├── components/             # Header, Footer, ProductCard
│   ├── content/
│   │   └── products/           # one .md file per product (source of truth)
│   ├── content.config.ts       # Astro content collection schema (Zod)
│   ├── layouts/Layout.astro
│   ├── pages/
│   │   ├── index.astro             # home
│   │   ├── cart.astro              # cart page
│   │   ├── checkout.astro          # fake checkout
│   │   └── products/
│   │       ├── index.astro         # catalog with filters
│   │       └── [slug].astro        # product detail (static paths)
│   ├── scripts/cart.ts         # localStorage cart module (shared by pages)
│   ├── styles/global.css       # Tailwind import + base styles
│   └── utils/format.ts         # currency formatter
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

Drop a new `.md` file in [`src/content/products/`](src/content/products/). The filename (e.g. `my-thing.md`) becomes the product slug and the URL (`/products/my-thing`). Frontmatter is validated against the Zod schema in [`src/content.config.ts`](src/content.config.ts):

```md
---
name: My Thing
price: 42.00
currency: USD
image: https://example.com/image.jpg
tagline: Short pitch under 80 chars.
category: apparel
inStock: true
---

The long-form product description goes here as regular markdown.
You can use **bold**, *italics*, lists, links, etc. — it's rendered
on the product detail page through the `<Content />` component.
```

Add a new `category` and it will automatically appear in the filter bar on the shop page.

## Where to go next

- Swap `localStorage` cart for a real backend (server endpoints or an API route).
- Replace the demo checkout with Stripe Checkout, Snipcart, or Shopify Buy SDK.
- Swap markdown for a headless CMS (Sanity, Contentful, Storyblok) — the `glob` loader can be replaced with a custom loader.
- Add search, pagination, or faceted filtering.
