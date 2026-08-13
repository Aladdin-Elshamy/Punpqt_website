import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DesignUploadChoiceProps = {
  value: string;
  onChange: (value: string) => void;
};

const choices = [
  {
    label: "Yes, I'll upload my design files after payment.",
    value: "upload-after-payment",
  },
  {
    label: "No, I need the printer to create the design for me.",
    value: "printer-design",
  },
];

export default function DesignUploadChoice({
  value,
  onChange,
}: DesignUploadChoiceProps) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-bold text-primary">
        Will you upload design files for this product after payment?
      </h3>

      <div role="radiogroup" className="space-y-2">
        {choices.map((choice) => {
          const selected = value === choice.value;

          return (
            <Button
              key={choice.value}
              type="button"
              variant="ghost"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(choice.value)}
              className="h-auto w-full justify-start gap-2 rounded-lg px-0 py-1 text-start hover:bg-transparent"
            >
              <span
                className={cn(
                  "flex size-4 shrink-0 items-center justify-center rounded-full border",
                  selected ? "border-primary" : "border-primary/60",
                )}
              >
                {selected && <span className="size-2 rounded-full bg-primary" />}
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {choice.label}
              </span>
            </Button>
          );
        })}
      </div>
    </section>
  );
}