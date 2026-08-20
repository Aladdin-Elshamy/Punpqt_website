import { Badge } from "@/components/ui/badge";
import PrinterProfileCard from "@/features/printers/components/PrinterProfileCard";
import Shield from "@/shared/icons/Shield";
import { Award } from "lucide-react";

const printers = [
    {
        id: "elite-printing",
        name: "Elite Printing Co.",
        initials: "EP",
        location: "Nasr City, Cairo",
        description:
            "Premium full-service print shop with 15 years experience. Specializes in high-volume offset and digital runs.",
        rating: 4.9,
        reviewsCount: 324,
        ordersCount: 2450,
        turnaround: "2–3 days",
        onTimeRate: 96,
        responseTime: "1.5h",
        isVerified: true,
        isTopRated: true,
        services: ["Business Cards", "Brochures", "Banners"],
    },
    {
        id: "cairo-print-hub",
        name: "Cairo Print Hub",
        initials: "CP",
        location: "Maadi, Cairo",
        description:
            "Reliable commercial printing partner for branded stationery, marketing materials, and premium packaging.",
        rating: 4.8,
        reviewsCount: 218,
        ordersCount: 1870,
        turnaround: "2–4 days",
        onTimeRate: 94,
        responseTime: "2h",
        isVerified: true,
        isTopRated: false,
        services: ["Packaging", "Flyers", "Stationery"],
    },
    {
        id: "alexandria-press",
        name: "Alexandria Press",
        initials: "AP",
        location: "Smouha, Alexandria",
        description:
            "Modern digital and offset printing with careful color matching, quality finishing, and dependable delivery.",
        rating: 4.7,
        reviewsCount: 186,
        ordersCount: 1320,
        turnaround: "3–4 days",
        onTimeRate: 93,
        responseTime: "2.5h",
        isVerified: true,
        isTopRated: false,
        services: ["Catalogs", "Posters", "Booklets"],
    },
    {
        id: "prime-packaging",
        name: "Prime Packaging",
        initials: "PP",
        location: "6th of October, Giza",
        description:
            "Specialist packaging printer delivering custom boxes, labels, and retail displays for growing brands.",
        rating: 4.9,
        reviewsCount: 271,
        ordersCount: 2090,
        turnaround: "3–5 days",
        onTimeRate: 97,
        responseTime: "1h",
        isVerified: true,
        isTopRated: true,
        services: ["Custom Boxes", "Labels", "Displays"],
    },
];

export default function PrintersGrid() {
    return (
        <section className="container mx-auto px-6 pb-12 md:px-8 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6.5 mt-16">
                {printers.map((printer) => (
                    <PrinterProfileCard
                        key={printer.id}
                        name={printer.name}
                        initials={printer.initials}
                        location={printer.location}
                        description={printer.description}
                        rating={printer.rating}
                        reviewsCount={printer.reviewsCount}
                        ordersCount={printer.ordersCount}
                        turnaround={printer.turnaround}
                        onTimeRate={printer.onTimeRate}
                        responseTime={printer.responseTime}
                        statusBadges={
                            <>
                                {printer.isVerified && (
                                    <Badge
                                        variant="secondary"
                                        className="h-7 rounded-full bg-primary/10 px-3 font-semibold text-primary"
                                    >
                                        <Shield />
                                        <span className="trim">Verified</span>
                                    </Badge>
                                )}

                                {printer.isTopRated && (
                                    <Badge
                                        variant="secondary"
                                        className="h-7 rounded-full bg-orange-50 px-3 font-semibold text-orange-700 items-center"
                                    >
                                        <Award />
                                        <span className="trim">Top Rated</span>
                                    </Badge>

                                )}
                            </>
                        }
                        serviceBadges={
                            <>
                                {printer.services.map((service) => (
                                    <Badge
                                        key={service}
                                        className=" px-4 h-6 text-sm font-semibold"
                                    >
                                        {service}
                                    </Badge>
                                ))}
                            </>
                        }
                    />
                ))}
            </div>
        </section>
    );
}