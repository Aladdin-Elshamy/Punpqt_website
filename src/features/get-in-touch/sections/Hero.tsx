import { Badge } from "@/components/ui/badge";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import ContactInfoCard from "../components/ContactInfoCard";
import Star from "@/shared/icons/Star";

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
    <div className="container mx-auto mt-36 pb-16 md:px-8 lg:px-6 sm:pb-36 2xl:w-full 2xl:px-0">
      <Badge className="h-8! border-[#0D73771A] px-4 font-semibold">
        <Star /> Egypt&apos;s Premier Printing Marketplace
      </Badge>
      <h1 className="mt-6 text-3xl font-bold sm:text-4xl">Get in touch</h1>
      <p className="mt-5 max-w-lg font-semibold text-muted-foreground">
        Have a question, need help with an order, or want to join PUNQT as a
        printer? We&apos;re here to help.
      </p>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 z-10 relative">
        {contactDetails.map(({ label, value, description, icon }) => (
          <ContactInfoCard
            key={label}
            label={label}
            value={value}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </div>
  );
}
