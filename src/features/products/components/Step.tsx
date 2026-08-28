import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

export default function Step({
  step,
  index,
}: {
  step: {
    title: string;
    description: string;
    icon: ReactNode;
  };
  index: number;
}) {
  return (
    <Card className="rounded-3xl! p-7! font-semibold">
      <CardContent className="p-0">
        <div className="flex items-center gap-4">
          <span className="size-12 rounded-3xl flex items-center justify-center bg-black text-white">
            {step.icon}
          </span>
          <span className="trim text-muted-foreground ">STEP {index + 1}</span>
        </div>
        <h3 className="mt-4 text-xl">{step.title}</h3>
        <p className="mt-2 text-muted-foreground text-balance">
          {step.description}
        </p>
      </CardContent>
    </Card>
  );
}
