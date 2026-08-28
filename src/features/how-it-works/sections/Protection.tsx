import { Eye, LockKeyhole, ShieldCheck, Star } from "lucide-react";

const protections = [
  {
    title: "Escrow Protection",
    description:
      "Your payment is never sent directly to the printer. It's held in a secure escrow account and released only after you confirm satisfactory delivery.",
    icon: LockKeyhole,
    cardClassName: "border-[#D9E7E8] bg-[#EEF6F6]",
    iconClassName: "text-[#0D7377]",
  },
  {
    title: "Sample Approval",
    description:
      "Production cannot begin until you've reviewed and approved a digital proof. No surprises — you sign off on the design before it goes to press.",
    icon: Eye,
    cardClassName: "border-[#DCE5F4] bg-[#F0F5FF]",
    iconClassName: "text-[#2563EB]",
  },
  {
    title: "Verified Printers Only",
    description:
      "Every printer on PUNQT is manually vetted for quality, reliability, and business legitimacy before being listed on the platform.",
    icon: ShieldCheck,
    cardClassName: "border-[#D8EBE5] bg-[#EEFAF5]",
    iconClassName: "text-[#059669]",
  },
  {
    title: "Real Reviews",
    description:
      "All ratings come from verified orders — not open submissions. You see authentic feedback from real customers who actually placed orders.",
    icon: Star,
    cardClassName: "border-[#F2E7CF] bg-[#FFF9ED]",
    iconClassName: "text-[#EA580C]",
  },
];

export default function Protection() {
  return (
    <section className="relative z-20 bg-white pt-16 sm:pt-36 mb-16 sm:mb-0">
      <div className="container px-6 md:px-8 lg:px-6">
        <div className="mx-auto max-w-2xl text-center font-semibold">
          <h2 className="text-2xl sm:text-3xl">
            Built-in protection at every step
          </h2>
          <p className="mt-3 text-muted-foreground">
            We designed PUNQT so neither party can lose. Customers are protected
            by escrow. Printers are protected by clear approvals.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {protections.map(
            ({ title, description, icon: Icon, cardClassName, iconClassName }) => (
              <article
                key={title}
                className={`rounded-3xl border border-black/6 p-5 ${cardClassName}`}
              >
                <div
                  className={`flex size-10 items-center justify-center rounded-full bg-white ${iconClassName}`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}