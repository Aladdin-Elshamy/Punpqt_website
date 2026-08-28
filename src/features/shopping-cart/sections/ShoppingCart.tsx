"use client";

import { Button } from "@/components/ui/button";
import { CART_ITEMS, CART_ORDER_TOTALS } from "@/features/shopping-cart/shopping-cart.data";
import type {
  CartDesignOption,
  CartItem,
} from "@/features/shopping-cart/shopping-cart.types";
import CartItemCard from "@/features/shopping-cart/components/CartItemCard";
import CartSortTabs from "@/features/shopping-cart/components/CartSortTabs";
import OrderSummaryCard from "@/features/shopping-cart/components/OrderSummaryCard";
import PromoCodeCard from "@/features/shopping-cart/components/PromoCodeCard";
import BreadcrumbBasic from "@/shared/components/BreadCrumb";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingCart() {
  const [items, setItems] = useState<CartItem[]>(CART_ITEMS);

  const updateDesignOption = (itemId: number, designOption: CartDesignOption) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, designOption } : item,
      ),
    );
  };

  const removeItem = (itemId: number) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId),
    );
  };

  const itemCountLabel = `${items.length} ${items.length === 1 ? "item" : "items"}`;

  return (
    <section className="container mx-auto mt-36 mb-16 2xl:w-full 2xl:px-0 md:px-8 lg:mb-32 lg:px-6">
      <BreadcrumbBasic
        links={[
          { label: "Home", url: "/" },
          { label: "Shopping Cart", url: "/shopping-cart" },
        ]}
      />

      <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Your Cart ({itemCountLabel})
        </h1>
        <CartSortTabs />
      </div>

      <div className="mt-8 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <div className="grid gap-5">
            {items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onRemove={() => removeItem(item.id)}
                onDesignOptionChange={(designOption) =>
                  updateDesignOption(item.id, designOption)
                }
              />
            ))}
          </div>

          <Button
            variant="outline"
            className="mt-5 h-12 w-full rounded-2xl border-border/80 bg-background text-sm font-semibold text-muted-foreground hover:text-foreground"
            nativeButton={false}
            render={<Link href="/products">+ Continue Shopping</Link>}
          />
        </div>

        <aside className="grid gap-4 lg:sticky lg:top-28">
          <PromoCodeCard />
          <OrderSummaryCard itemCount={items.length} totals={CART_ORDER_TOTALS} />
        </aside>
      </div>
    </section>
  );
}