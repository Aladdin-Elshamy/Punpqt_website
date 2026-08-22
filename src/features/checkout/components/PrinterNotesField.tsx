import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";

interface PrinterNotesFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PrinterNotesField({
  value,
  onChange,
}: PrinterNotesFieldProps) {
  const notesId = useId();

  return (
    <div className="mt-3">
      <label
        htmlFor={notesId}
        className="block text-xs font-semibold text-foreground"
      >
        Notes for printer{" "}
        <span className="text-muted-foreground">(optional)</span>
      </label>
      <Textarea
        id={notesId}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Bleed settings, special instructions, color references..."
        className="mt-2 min-h-20 resize-none rounded-xl bg-[#F4F4F6] text-sm font-semibold shadow-none"
      />
    </div>
  );
}