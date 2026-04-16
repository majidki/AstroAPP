export type Product = {
  slug: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  tagline: string;
  description: string;
  category: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    slug: "nebula-hoodie",
    name: "Nebula Hoodie",
    price: 59.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
    tagline: "Cozy fleece, deep-space print.",
    description:
      "A heavyweight cotton-blend hoodie with a subtle nebula print across the back. Kangaroo pocket, ribbed cuffs, drawstring hood.",
    category: "apparel",
    inStock: true,
  },
  {
    slug: "orbit-mug",
    name: "Orbit Ceramic Mug",
    price: 18.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80",
    tagline: "12oz. Dishwasher safe.",
    description:
      "Hand-glazed ceramic mug with a minimalist ring design. Holds 12oz of your morning fuel. Microwave and dishwasher safe.",
    category: "home",
    inStock: true,
  },
  {
    slug: "lunar-backpack",
    name: "Lunar Backpack",
    price: 129.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    tagline: "Water-resistant daily carry.",
    description:
      "20L backpack with a padded laptop sleeve (fits 16\"), water-resistant shell, and a magnetic top closure. Built for commutes and weekend trips.",
    category: "accessories",
    inStock: true,
  },
  {
    slug: "stellar-notebook",
    name: "Stellar Dot-Grid Notebook",
    price: 14.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80",
    tagline: "160 pages. Lay-flat binding.",
    description:
      "A5 dot-grid notebook with 120gsm paper, lay-flat sewn binding, and a soft-touch cover. Perfect for journaling or sketching.",
    category: "stationery",
    inStock: true,
  },
  {
    slug: "cosmos-tee",
    name: "Cosmos Tee",
    price: 29.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    tagline: "100% organic cotton.",
    description:
      "Soft organic cotton tee with a screen-printed chest graphic. Regular fit. Pre-shrunk.",
    category: "apparel",
    inStock: true,
  },
  {
    slug: "eclipse-headphones",
    name: "Eclipse Wireless Headphones",
    price: 219.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    tagline: "40h battery. Active noise cancelling.",
    description:
      "Over-ear wireless headphones with hybrid active noise cancelling, 40-hour battery life, and multipoint Bluetooth. USB-C charging.",
    category: "electronics",
    inStock: false,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price);
}
