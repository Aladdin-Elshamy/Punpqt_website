export default function Feature({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white text-center flex flex-col items-center justify-center">
      <div className="text-2xl mx-auto rounded-2xl border-[#0000000F] shadow-xs p-4 border-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold mt-3.5">{title}</h3>
      <p className="text-[#6B6B80] mt-1 font-semibold">{description}</p>
    </div>
  );
}
