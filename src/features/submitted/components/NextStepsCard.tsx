import { Card, CardContent } from "@/components/ui/card";

const NEXT_STEPS = [
  "Printers review your request and submit offers",
  "You compare offers in our side-by-side comparison view",
  "Select the best offer and pay via escrow",
  "Approve a digital sample before production begins",
  "Track production live and confirm delivery",
];

export default function NextStepsCard() {
  return (
    <Card className="gap-0 rounded-3xl border-border/80 bg-primary/6 py-0 shadow-sm ring-0 border">
      <CardContent className="p-6 sm:p-7">
        <h2 className="text-base font-semibold text-foreground">
          What happens next
        </h2>

        <ol className="mt-6 grid gap-4">
          {NEXT_STEPS.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-4 text-sm font-semibold text-primary"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}
