import StatisticCard from "@/features/specific-printer/components/StatisticCard";
import { ChartNoAxesCombined, Clock3, Package, Zap } from "lucide-react";

const statistics = [
  {
    title: "Completed",
    value: "156",
    description: "Orders",
    icon: Package,
  },
  {
    title: "Response",
    value: "2.3h",
    description: "Avg time",
    icon: Clock3,
  },
  {
    title: "Acceptance",
    value: "87%",
    description: "Rate",
    icon: ChartNoAxesCombined,
  },
  {
    title: "On-Time",
    value: "94%",
    description: "Delivery",
    icon: Zap,
  },
];

export default function Statistics() {
  return (
    <section className="container mt-16 mx-auto px-6 md:px-8 lg:px-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((statistic) => (
          <StatisticCard key={statistic.title} {...statistic} />
        ))}
      </div>
    </section>
  );
}