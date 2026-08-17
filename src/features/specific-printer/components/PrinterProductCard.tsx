import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import businessCardImage from "@/assets/images/buisness-cards-2.png";
import Image from "next/image";

interface PrinterProductCardProps {
    title: string;
    description: string;
    startingPrice: string;
    turnaround: string;
    minimumOrder: string;
}

export default function PrinterProductCard({
    title,
    description,
    startingPrice,
    turnaround,
    minimumOrder,
}: PrinterProductCardProps) {
    return (
        <Card className="h-full gap-0 rounded-xl border-border/80 py-0 shadow-none">
            <CardContent className="flex h-full flex-col px-9 py-6">
                <div className="flex min-h-24 items-center sm:items-start justify-between gap-4 flex-wrap">
                    <div className="relative min-w-20 max-w-36 flex-1 h-24">
                        <Image
                            src={businessCardImage}
                            alt={title}
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 640px) 9rem, 10rem"
                        />
                    </div>

                    <div className="shrink-0 pt-1 text-start">
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-lg font-semibold text-primary">{startingPrice}</p>
                    </div>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>

                <p className="mt-2 text-sm leading-relaxed">
                    {description}
                </p>

                <dl className="mt-5 grid gap-2 text-sm">
                    <div className="flex items-center justify-between gap-4">
                        <dt className="font-semibold text-muted-foreground">Turnaround:</dt>
                        <dd className="font-semibold text-foreground">{turnaround}</dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <dt className="font-semibold text-muted-foreground">
                            Min. Order:
                        </dt>
                        <dd className="font-semibold text-foreground">{minimumOrder}</dd>
                    </div>
                </dl>

                <Button className="mt-14 h-10 w-full rounded-xl text-sm">
                    View Product
                </Button>
            </CardContent>
        </Card>
    );
}