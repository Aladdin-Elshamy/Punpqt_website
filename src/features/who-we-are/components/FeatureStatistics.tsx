export default function FeatureStatistics({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="font-semibold text-center h-30 shadow-xs flex flex-col items-center justify-center border border-black/6  rounded-3xl">
      <div className="text-2xl text-primary">{number}</div>
      <p className="text-xs mt-1 text-muted-foreground">{title}</p>
    </div>
  );
}
