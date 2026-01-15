import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../lib/utils";

export default function ProgressCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <p>{title}</p>
        <p>{value}K</p>
      </div>
      <div>
        <Progress value={value} />
      </div>
    </div>
  );
}

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-secondary-cyan/40 relative h-0.5 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-secondary-cyan h-full w-full flex-1 transition-all rounded-full"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}
