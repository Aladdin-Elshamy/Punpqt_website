import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import NextStepsCard from "../components/NextStepsCard";

export default function Submitted() {
  return (
    <section className="container mx-auto mb-10 mt-20 px-6 sm:mt-24 md:px-8 lg:mb-20 lg:mt-28 lg:px-6 2xl:w-full 2xl:px-0 relative z-10">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#e8f4f4] border sm:size-24">
            <Check className="size-10 text-primary sm:size-12" />
          </div>

          <h1 className="mt-7 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            RFQ Submitted!
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 font-semibold text-muted-foreground sm:text-lg">
            Your request has been sent to 1 selected printer.
          </p>
          <p className="mt-3 text-sm font-semibold text-muted-foreground sm:text-base">
            {`You'll receive quotes within a few hours. We'll notify you by email as offers arrive.`}
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <NextStepsCard />
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <Button className="h-12 rounded-2xl text-base font-medium">
            View My Requests
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-2xl border-border/80 bg-background text-base font-medium text-foreground"
            nativeButton={false}
            render={<Link href="/">Back to Marketplace</Link>}
          />
        </div>
      </div>
    </section>
  );
}