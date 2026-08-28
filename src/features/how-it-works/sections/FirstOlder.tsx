import { Button } from "@/components/ui/button";
import ArrowRight from "@/shared/icons/ArrowRight";

export default function FirstOlder() {
  return (
    <section className="relative z-20 px-6 sm:px-0">
      <div className="container px-6 md:px-8 lg:px-6 my-16 sm:my-20 bg-primary rounded-3xl flex flex-col gap-3 py-16 font-semibold justify-center items-start sm:items-center">
        <h2 className="text-2xl sm:text-3xl text-white">
          Ready to place your first order?
        </h2>
        <p className="text-white/70 sm:text-center max-w-md mt-2">
          Browse products, configure your spec, and compare verified printers —
          all in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <Button
            variant={"secondary"}
            className={
              "text-base items-center text-primary font-medium h-13 ltr:w-50 rounded-3xl gap-2! rtl:w-48"
            }
          >
            <span className="trim">Browse Products</span>{" "}
            <ArrowRight className="text-[#0D7377] stroke-3! rtl:-scale-x-100" />
          </Button>
          <Button
            variant={"default"}
            className={
              "text-base items-center font-medium h-13 w-40 rounded-3xl gap-2! bg-[#31888b] text-white hover:bg-[#118589]"
            }
          >
            Submit an RFQ
          </Button>
        </div>
      </div>
    </section>
  );
}
