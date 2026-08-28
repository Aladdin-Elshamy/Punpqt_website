import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface MeetTheTeamCardProps {
  initials: string;
  name: string;
  role: string;
  location: string;
}

export default function MeetTheTeamCard({
  initials,
  name,
  role,
  location,
}: MeetTheTeamCardProps) {
  return (
    <Card className="h-full gap-0 rounded-3xl border border-black/6 bg-white py-0 text-center shadow-xs ring-0">
      <CardContent className="flex min-h-46 flex-col items-center justify-center p-5 sm:p-6">
        <div className="flex size-13 items-center justify-center rounded-full bg-[#090A12] text-xs font-semibold text-white">
          {initials}
        </div>
        <h3 className="mt-4 text-base font-semibold">{name}</h3>
        <p className="mt-2 text-xs font-semibold text-primary">{role}</p>
        <p className="mt-3 flex items-center gap-1 text-xs font-medium text-muted-foreground">
          <MapPin className="size-3" aria-hidden="true" />
          {location}
        </p>
      </CardContent>
    </Card>
  );
}
