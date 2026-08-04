export default function Heading({
  title,
  description,
  className,
}: {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h2 className="font-bold text-sm text-primary">{title}</h2>
      {typeof description === "string" ? <p>{description}</p> : description}
    </div>
  );
}
