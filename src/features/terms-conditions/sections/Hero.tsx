import { Badge } from "@/components/ui/badge";

import Shield from "@/shared/icons/Shield";

export default function Hero() {
  return (
    <div className="container mx-auto mt-36 pb-40 md:px-8 lg:px-6 sm:pb-60 2xl:w-full 2xl:px-0">
      <Badge className="h-8! border-[#0D73771A] px-4 font-semibold">
        <Shield /> Legal
      </Badge>
      <h1 className="mt-6 text-3xl font-bold sm:text-4xl text-primary">
        Terms and Conditions
      </h1>
      <p className="mt-5 max-w-lg font-semibold text-muted-foreground">
        These terms govern your use of the PUNQT platform as a customer or
        vendor. Please read them carefully before using the platform.
      </p>
      <p className="text-sm mt-12 text-muted-foreground font-semibold">
        Last updated: July 1, 2026 · Effective date: July 1, 2026
      </p>
    </div>
  );
}
