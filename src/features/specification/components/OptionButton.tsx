import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type OptionButtonProps = {
  title: string;
  description?: string;
  suffix?: string;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function OptionButton({
  title,
  description,
  suffix,
  selected = false,
  className,
  onClick,
}: OptionButtonProps) {
  return (
    <Button
      type="button"
      variant={selected ? "default" : "outline"}
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "h-auto min-h-11 w-full rounded-xl px-3 py-2 text-center shadow-xs",
        selected
          ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
          : "border-black/8 shadow-white bg-white text-primary hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
        (description || suffix) && "justify-between text-start",
        className,
      )}
    >
      <span className="min-w-0">
        <span
          className={cn(
            "block text-xs font-bold leading-tight",
            selected ? "text-[#FAFAFA]" : "text-black",
          )}
        >
          {title}
        </span>
        {description && (
          <span
            className={cn(
              "mt-1 block text-xs font-medium leading-tight",
              selected ? "text-[#bfd8d9]" : "text-muted-foreground",
            )}
          >
            {description}
          </span>
        )}
      </span>

      {suffix && (
        <span
          className={cn(
            "ms-3 shrink-0 text-xs font-semibold",
            selected ? "text-[#FAFAFA]" : "text-muted-foreground",
          )}
        >
          {suffix}
        </span>
      )}
    </Button>
  );
}