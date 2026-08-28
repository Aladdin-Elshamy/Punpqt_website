import { CircleCheck, ShieldCheck, UsersRound, Zap } from "lucide-react";

import WhatWeStandForCard from "../components/WhatWeStandForCard";

const principles = [
  {
    title: "Trust & Transparency",
    description:
      "Every payment is held in escrow and released only after you confirm delivery. No surprises, no hidden fees.",
    icon: ShieldCheck,
  },
  {
    title: "Verified Quality",
    description:
      "Every printer on PUNQT is manually vetted and rated. You see real reviews from real customers before you commit.",
    icon: CircleCheck,
  },
  {
    title: "Speed & Simplicity",
    description:
      "Configure your spec, choose a printer, and order — all in minutes. No phone calls, no back-and-forth emails.",
    icon: Zap,
  },
  {
    title: "Supporting Local Business",
    description:
      "We connect Egyptian businesses with Egyptian printers. Every order supports the local printing industry.",
    icon: UsersRound,
  },
];

export default function WhatWeStandFor() {
  return (
    <section className="container mt-16 sm:mt-36 px-6 md:px-8 lg:px-6">
      <div className="mx-auto max-w-2xl text-center font-semibold">
        <h2 className="text-2xl sm:text-3xl">What we stand for</h2>
        <p className="mt-3 text-muted-foreground">
          The principles that guide every decision we make
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
        {principles.map(({ title, description, icon }) => (
          <WhatWeStandForCard
            key={title}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
}