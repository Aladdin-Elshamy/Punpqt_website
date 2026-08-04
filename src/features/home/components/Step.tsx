export default function Step({
  step,
  title,
  description,
  icon,
}: {
  step?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={step ? 'border rounded-2xl shadow-sm py-1' : ``}>
      <div className={`${step ? 'px-5' : ''} flex flex-row items-start  py-4 gap-4`}>
        <div className="p-1.5">{icon}</div>
        <div className="flex flex-col items-start gap-1.5">
          {step && <span className="text-[#6B6B80] text-sm">{step}</span>}
          <h4 className="font-semibold">{title}</h4>
          <p className="text-[#6B6B80] text-sm font-semibold">{description}</p>
        </div>
      </div>
    </div>
  );
}
