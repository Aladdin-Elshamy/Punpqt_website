export default function Question({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article
      key={title}
      className={`rounded-3xl font-semibold border p-6 shadow-xs border-black/6`}
    >
      <h3>{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
