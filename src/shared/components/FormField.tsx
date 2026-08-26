type FormFieldProps = {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  requiredLabel?: string;
  optional?: boolean;
  optionalLabel?: string;
};
export default function FormField({
  label,
  htmlFor,
  children,
  required,
  requiredLabel,
  optional,
  optionalLabel,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1 text-sm font-semibold text-foreground"
      >
        {label}
        {required ? <span className="text-destructive">*</span> : null}
        {optional ? (
          <span className="font-medium text-muted-foreground">
            ({optionalLabel})
          </span>
        ) : null}
        <span className="sr-only">{required ? requiredLabel : ""}</span>
      </label>
      {children}
    </div>
  );
}
