import Star2 from "@/shared/icons/Star2";

interface User {
  name: string;
  department: string;
}

export default function Feedback({
  rating,
  message,
  user,
}: {
  rating: number;
  message: string;
  user: User;
}) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<Star2 key={i} className="text-[#FBBF24]" />);
  }
  return (
    <div className="bg-white flex flex-col gap-4 border rounded-2xl shadow-sm p-7">
      <div className="flex items-center">{stars}</div>
      <p className="font-semibold">&quot;{message}&quot;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-base font-semibold text-white">
          {user.name.slice(0, 2)}
        </div>
        <div className="flex flex-col font-semibold">
          <p>{user.name}</p>
          <p className="text-sm text-[#6B6B80]">{user.department}</p>
        </div>
      </div>
    </div>
  );
}
