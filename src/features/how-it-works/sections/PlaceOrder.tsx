import OrderProgress from "../components/OrderProgress";

export default function PlaceOrder() {
  return (
    <section className="relative z-20 bg-white">
      <div className="container px-6 md:px-8 lg:px-6 ">
        <div className="flex flex-col gap-3 pt-16 sm:pt-36 font-semibold justify-center items-center">
          <h2 className="text-2xl sm:text-3xl">How to Place an order</h2>
          <p className="text-muted-foreground">
            From browsing to delivery — every step happens on PUNQT with full
            transparency.
          </p>
        </div>

        <OrderProgress />
      </div>
    </section>
  );
}
