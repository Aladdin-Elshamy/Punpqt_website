import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FormField from "./FormField";

type SelectFieldProps = { id: string; label: string; value: string | null; onValueChange: (value: string | null) => void; placeholder: string; options: { value: string; label: string }[]; required?: boolean; requiredLabel?: string };
export default function SelectField({ id, label, value, onValueChange, placeholder, options, required, requiredLabel }: SelectFieldProps) {
    return <FormField label={label} htmlFor={id} required={required} requiredLabel={requiredLabel}><Select value={value} onValueChange={onValueChange} items={options}><SelectTrigger id={id} className="h-11! w-full rounded-xl bg-[#F4F4F6] px-3! shadow-none"><SelectValue placeholder={placeholder} /></SelectTrigger><SelectContent><SelectGroup>{options.map((option) => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>)}</SelectGroup></SelectContent></Select></FormField>;
}