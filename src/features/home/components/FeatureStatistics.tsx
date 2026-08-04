export default function FeatureStatistics({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="font-semibold">
      <div className="text-2xl text-primary">{number}</div>
      <p className="text-xs mt-1 text-[#6B6B80]">{title}</p>
    </div>
  );
}
