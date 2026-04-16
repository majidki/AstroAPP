export type CartItem = {
  slug: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

const STORAGE_KEY = "astro-ecommerce-cart:v1";

export function readCart(): CartItem[] {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as CartItem[];
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("cart:change", { detail: items }));
}

export function addToCart(item: Omit<CartItem, "qty">, qty = 1): void {
  const items = readCart();
  const existing = items.find((i) => i.slug === item.slug);
  if (existing) {
    existing.qty += qty;
  } else {
    items.push({ ...item, qty });
  }
  writeCart(items);
}

export function updateQty(slug: string, qty: number): void {
  const items = readCart();
  const existing = items.find((i) => i.slug === slug);
  if (!existing) return;
  if (qty <= 0) {
    writeCart(items.filter((i) => i.slug !== slug));
  } else {
    existing.qty = qty;
    writeCart(items);
  }
}

export function removeFromCart(slug: string): void {
  writeCart(readCart().filter((i) => i.slug !== slug));
}

export function clearCart(): void {
  writeCart([]);
}

export function cartCount(items: CartItem[] = readCart()): number {
  return items.reduce((sum, i) => sum + i.qty, 0);
}

export function cartTotal(items: CartItem[] = readCart()): number {
  return items.reduce((sum, i) => sum + i.qty * i.price, 0);
}
