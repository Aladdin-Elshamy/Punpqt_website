import CheckoutSuccess from "@/features/checkout-success/sections/CheckoutSuccess";

export default function CheckoutSuccessPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="relative 2xl:container">
        <div
          className="pointer-events-none absolute top-8 h-82 w-2/3 rounded-full bg-[#0D7377]/20 blur-[140px] ltr:-left-12 rtl:-right-12"
          aria-hidden="true"
        />
        <CheckoutSuccess />
      </div>
    </main>
  );
}