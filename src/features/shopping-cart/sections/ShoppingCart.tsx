import { Button } from "@/components/ui/button";
import CartItemCard from "@/features/shopping-cart/components/CartItemCard";
import CartSortTabs from "@/features/shopping-cart/components/CartSortTabs";
import OrderSummaryCard from "@/features/shopping-cart/components/OrderSummaryCard";
import PromoCodeCard from "@/features/shopping-cart/components/PromoCodeCard";
import BreadcrumbBasic from "@/shared/components/BreadCrumb";
import Link from "next/link";

const cartItems = [
    {
        itemNumber: 1,
        title: "Premium Business Cards",
        printerName: "Elite Printing Co.",
        price: "EGP 240",
        specifications: ["9×5cm", "Coated 350gsm", "Gloss Lamination", "2-3 days"],
        deliveryEstimate: "2-3 days",
    },
    {
        itemNumber: 2,
        title: "Premium Business Cards",
        printerName: "Elite Printing Co.",
        price: "EGP 240",
        specifications: ["9×5cm", "Coated 350gsm", "Gloss Lamination", "2-3 days"],
        deliveryEstimate: "2-3 days",
    },
];

export default function ShoppingCart() {
    return (
        <section className="container 2xl:px-0 2xl:w-full mt-36 mx-auto md:px-8 lg:px-6 mb-16 lg:mb-32">
            <BreadcrumbBasic
                links={[
                    { label: "Home", url: "/" },
                    { label: "Shopping Cart", url: "/shopping-cart" },
                ]}
            />

            <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Your Cart (2 items)
                </h1>
                <CartSortTabs />
            </div>

            <div className="mt-8 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_24rem]">
                <div>
                    <div className="grid gap-5">
                        {cartItems.map((item) => (
                            <CartItemCard key={item.itemNumber} {...item} />
                        ))}
                    </div>

                    <Button
                        variant="outline"
                        className="mt-5 h-12 w-full rounded-2xl border-border/80 bg-background text-sm font-semibold text-muted-foreground hover:text-foreground"
                        render={<Link href="/products">+ Continue Shopping</Link>}
                    />
                </div>

                <aside className="grid gap-4 lg:sticky lg:top-28">
                    <PromoCodeCard />
                    <OrderSummaryCard
                        subtotal="EGP 1,220"
                        delivery="EGP 80"
                        total="EGP 1,300"
                    />
                </aside>
            </div>
        </section>
    );
}