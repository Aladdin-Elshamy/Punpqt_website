import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Steps from "@/features/products/sections/Steps";
import ArrowRight from "@/shared/icons/ArrowRight";
import Fast from "@/shared/icons/Fast";

export default function RFQFlow() {
  return (
    <section className="relative z-20 bg-white">
      <div className="container px-6 md:px-8 lg:px-6 bg-[#FAFAFA] border sm:rounded-3xl">
        <div className="flex flex-col gap-3 pt-16 sm:pt-36 font-semibold justify-center items-center">
          <Badge className="bg-[#FBBF24]/10 border border-[#FBBF24]/30 h-8 px-6 gap-2 font-semibold text-[#B45309]">
            <Fast />
            <span className="trim">For custom or complex jobs</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl">
            The RFQ (Request for Quote) flow
          </h2>
          <p className="text-muted-foreground max-w-2xl text-center">
            Need something custom — unusual size, specialty material, or
            high-volume? Submit one request and let printers compete with their
            best price.
          </p>
        </div>
        <Steps />
        <div className="text-center mt-10 pb-24">
          <Button variant={"secondary"} className={"bg-black text-white rounded-3xl h-12 px-7 hover:text-black/70"}>
            <span className="trim">Submit a Free RFQ</span> <ArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
