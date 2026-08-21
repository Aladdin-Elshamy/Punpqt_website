import ShoppingCart from "@/features/shopping-cart/sections/ShoppingCart";

export default function ShoppingCartPage() {
    return (
        <main className="relative overflow-hidden">
            <div className="relative 2xl:container">
                <div
                    className="pointer-events-none absolute ltr:-left-12 rtl:-right-12 top-8
             h-82 w-2/3
             rounded-full
             bg-[#0D7377]/20
             blur-[140px]"
                />
                <ShoppingCart />
            </div>
        </main>
    );
}