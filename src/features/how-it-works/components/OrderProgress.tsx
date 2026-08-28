import { cn } from "@/lib/utils";
import Search from "@/shared/icons/Search";
import Settings from "@/shared/icons/Settings";
import { Eye, Printer, Store, Truck } from "lucide-react";

const steps = [
  {
    title: "Browse Or Search",
    description:
      "Start by browsing our product categories — Business Cards, Flyers, Brochures, Packaging, and more — or search for what you need directly.",
    hint: "Every product shows verified printers, specifications, and starting prices upfront.",
    icon: <Search className="size-6" />,
  },
  {
    title: "Choose Your Specification",
    description:
      "Select the exact specification you need: size, paper, finishing, print color, and quantity. Prices update live as you configure.",
    hint: "Fixed-price specs let you checkout instantly. Custom specs (Kraft, Spot UV, Foil) go to a quote flow.",
    icon: <Settings className="size-6" />,
  },
  {
    title: "Pick a Verified Printer",
    description:
      "See all printers who can fulfill your spec — with their price for exactly what you configured, turnaround, and rating.",
    hint: "Each printer is manually verified by PUNQT. You see real reviews from real customers.",
    icon: <Store className="size-6" />,
  },
  {
    title: "Approve a Digital Sample",
    description:
      "Before production begins, your printer uploads a digital proof for your review. Production only starts after your explicit approval.",
    hint: "You can request revisions or reject the proof — no obligation until you approve.",
    icon: <Eye className="size-6" />,
  },
  {
    title: "Track Production Live",
    description: "Follow every stage of your order in real time — from file review to production to quality check to shipping.",
    hint: "Get notified at each milestone. Communicate directly with your printer through the platform.",
    icon: <Printer className="size-6" />
  },
  {
    title: "Confirm & Release Payment",
    description: "Your payment is held in escrow until delivery. Once you confirm receipt, the funds are released to the printer.",
    hint: "If there's an issue with your order, raise a dispute within 48 hours and our team will mediate.",
    icon: <Truck className="size-6" />
  }
];

export default function OrderProgress() {
  return (
    <ol
      className="flex w-full flex-col mt-16.5"
      aria-label="Request for quote progress"
    >
      {steps.map((step, index) => {
        const stepNumber = "0" + (index + 1);

        return (
          <li className="w-full" key={step.title}>
            <div className="flex h-100 sm:h-60 items-start gap-4 sm:gap-8">
              <div className="flex flex-col justify-center min-w-0 h-full items-center last:flex-none">
                <div
                  className={cn(
                    "flex size-14 items-center justify-center rounded-2xl bg-primary text-white mb-auto",
                  )}
                >
                  {step.icon}
                </div>
                {index < steps.length - 1 ? (
                  <span className="h-12 w-0.5 flex-1 bg-border" />
                ) : null}
              </div>
              <div className="border border-black/6 shadow-xs py-5 px-6 font-semibold rounded-3xl flex-1">
                <h3 className="flex items-baseline gap-4 sm:text-lg">
                  <span className="text-xs text-primary">{stepNumber}</span>
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mt-3">
                  {step.description}
                </p>
                <p className="text-primary text-xs sm:text-sm mt-2.5">
                  {step.hint}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
