import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BreadcrumbBasic from "@/shared/components/BreadCrumb";
import Check from "@/shared/icons/Check";
import QLogo from "@/shared/icons/QLogo";
import {
    BadgeCheck,
    Clock3,
    MapPin,
    MessageSquare,
    Star,
} from "lucide-react";

export default function ProfileHeader() {
    return (
        <section className="container 2xl:px-0 2xl:w-full mt-36 mx-auto md:px-8 lg:px-6">
            <BreadcrumbBasic
                links={[
                    {
                        label: "Home",
                        url: "/",
                    },
                    {
                        label: "Printers",
                        url: "/printers",
                    },
                    {
                        label: "Premium Print Co.",
                        url: "/printers/premium-print-co",
                    },
                ]}
            />

            <div className="mt-8 sm:mt-14 font-semibold flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex flex-col gap-5 xl:gap-12 sm:flex-row sm:items-start">
                    <div className="flex w-36.75 h-32 items-center justify-center rounded-3xl bg-primary text-white shadow-xl shadow-primary/20">
                        <QLogo className="size-24 w-auto" />
                    </div>

                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h1 className="text-3xl tracking-tight text-black sm:text-4xl">
                                Premium Print Co.
                            </h1>

                            <Badge
                                variant="secondary"
                                className="h-8 rounded-full px-3 text-sm text-primary [&>svg]:size-4! bg-[#00645D]/20"
                            >
                                <Check />
                                <span className="trim">Verified</span>
                            </Badge>
                        </div>

                        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                            High-quality commercial printing services with over 15 years of
                            experience
                        </p>

                        <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                            <span className="flex items-center gap-2">
                                <MapPin className="size-4 shrink-0 text-primary" />
                                Cairo, Egypt
                            </span>

                            <span className="flex items-center gap-2">
                                <Star className="size-5 shrink-0 fill-amber-400 text-amber-400" />
                                <strong className="text-black">4.8</strong>
                                <span>(1,240)</span>
                            </span>

                            <span className="flex items-center gap-2">
                                <Clock3 className="size-4 shrink-0 text-primary" />
                                Saturday - Thursday 9:00 AM - 6:00 PM
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid w-full  gap-3 sm:grid-cols-2 lg:w-72 lg:grid-cols-1">
                    <Button className="h-12 rounded-2xl text-sm">
                        <MessageSquare className="size-4" />
                        Send Message
                    </Button>

                    <Button
                        variant="outline"
                        className="h-12 rounded-2xl border-primary text-sm text-primary hover:bg-primary/5 hover:text-primary"
                    >
                        Request Quote
                    </Button>
                </div>
            </div>
        </section>
    );
}