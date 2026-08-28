import { Card, CardContent } from "@/components/ui/card";
import File from "@/shared/icons/File";
import People from "@/shared/icons/People";
import { Lock, Star } from "lucide-react";
import Step from "../components/Step";

const steps = [
  {
    icon: <File />,
    title: "Submit Your Request",
    description:
      "Describe your spec, upload reference files, and set your delivery deadline. Takes 3 minutes.",
  },
  {
    icon: <People />,
    title: "Receive Competing Quotes",
    description:
      "Verified printers submit their best price. You get multiple offers to compare side-by-side.",
  },
  {
    icon: <Star />,
    title: "Choose the Best Offer",
    description:
      "Compare price, turnaround, rating, and location. Select the printer that fits your needs.",
  },
  {
    icon: <Lock />,
    title: "Pay Securely via Escrow",
    description:
      "Your payment is protected. Released to the printer only after you confirm delivery.",
  },
];

export default function Steps() {
  return (
    <div className="mt-12.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:px-14">
      {steps.map((step, index) => (
        <Step key={step.title} step={step} index={index} />
      ))}
    </div>
  );
}
