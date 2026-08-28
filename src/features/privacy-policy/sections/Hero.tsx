import { Badge } from "@/components/ui/badge";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import Star from "@/shared/icons/Star";
import Shield from "@/shared/icons/Shield";

const contactDetails = [
  {
    label: "Email",
    value: "hello@punqt.com",
    description: "We reply within 24 hours",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+20 10 0000 0000",
    description: "Sun–Thu, 9am–6pm Cairo time",
    icon: Phone,
  },
  {
    label: "Office",
    value: "Nasr City, Cairo",
    description: "Egypt headquarters",
    icon: MapPin,
  },
  {
    label: "Support hours",
    value: "Sun–Thu 9am–6pm",
    description: "Emergency support 24/7 for active orders",
    icon: Clock,
  },
];

export default function Hero() {
  return (
    <div className="container mx-auto mt-36 pb-40 md:px-8 lg:px-6 sm:pb-60 2xl:w-full 2xl:px-0">
      <Badge className="h-8! border-[#0D73771A] px-4 font-semibold">
        <Shield /> Legal
      </Badge>
      <h1 className="mt-6 text-3xl font-bold sm:text-4xl text-primary">Privacy Policy</h1>
      <p className="mt-5 max-w-lg font-semibold text-muted-foreground">
        This policy explains what information PUNQT collects, how we use it, and
        your rights regarding your personal data. We are committed to protecting
        your privacy.
      </p>
      <p className="text-sm mt-12 text-muted-foreground font-semibold">
        Last updated: July 1, 2026 · Effective date: July 1, 2026
      </p>
    </div>
  );
}
