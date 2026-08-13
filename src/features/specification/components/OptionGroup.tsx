import { cn } from "@/lib/utils";
import OptionButton from "./OptionButton";

export type SpecificationOption = {
  label: string;
  value: string;
  description?: string;
  suffix?: string;
};

type OptionGroupProps = {
  title: string;
  options: SpecificationOption[];
  value: string;
  onChange: (value: string) => void;
  columns?: "one" | "two" | "three" | "four";
  optionClassName?: string;
};

const columnsClassName = {
  one: "grid-cols-1",
  two: "grid-cols-2",
  three: "grid-cols-2 sm:grid-cols-3",
  four: "grid-cols-2 sm:grid-cols-4",
};

export default function OptionGroup({
  title,
  options,
  value,
  onChange,
  columns = "two",
  optionClassName,
}: OptionGroupProps) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-bold">{title}</h3>
      <div className={cn("grid gap-2", columnsClassName[columns])}>
        {options.map((option) => (
          <OptionButton
            key={option.value}
            title={option.label}
            description={option.description}
            suffix={option.suffix}
            selected={value === option.value}
            onClick={() => onChange(option.value)}
            className={optionClassName}
          />
        ))}
      </div>
    </section>
  );
}