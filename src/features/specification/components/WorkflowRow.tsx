import type { ComponentType } from "react";

type WorkflowRowProps = {
  title: string;
  duration: string;
  icon: ComponentType<{ className?: string }>;
};

export default function WorkflowRow({
  title,
  duration,
  icon: Icon,
}: WorkflowRowProps) {
  return (
    <div className="flex min-h-12 items-center justify-between gap-4 rounded-xl bg-muted/70 px-4 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <Icon className="size-4 shrink-0 text-primary" />
        <span className="text-sm font-semibold text-black">{title}</span>
      </div>
      <span className="shrink-0 text-xs font-medium text-muted-foreground">
        {duration}
      </span>
    </div>
  );
}