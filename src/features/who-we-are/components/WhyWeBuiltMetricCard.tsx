import { Card, CardContent } from "@/components/ui/card";

interface WhyWeBuiltMetricCardProps {
  value: string;
  label: string;
}

export default function WhyWeBuiltMetricCard({
  value,
  label,
}: WhyWeBuiltMetricCardProps) {
  return (
    <Card className="gap-0 rounded-3xl border-0 bg-[#F4F4F6] py-0 shadow-none ring-0">
      <CardContent className="p-5 sm:p-6">
        <p className="text-xl font-bold text-primary sm:text-2xl">{value}</p>
        <p className="mt-1 text-xs font-semibold text-muted-foreground sm:text-sm">
          {label}
        </p>
      </CardContent>
    </Card>
  );
}