import { useState } from "react";
import Button from "../ui/button";
import { cn } from "../../lib/utils";

type ToggleChild = {
  id: string;
  label: string;
};

type ToggleItem = {
  label: string;
  children: ToggleChild[];
};

type ToggleSectionProps = {
  items: ToggleItem[];
};

export default function Tab({ items }: ToggleSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = items[activeIndex];

  return (
    <div className="flex flex-col gap-2 pb-3">
      {/* Tabs */}
      <div className="flex items-center justify-between gap-2 text-sm">
        {items.map((item, index) => (
          <Button
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "py-1 px-2 transition-colors w-full",
              index === activeIndex
                ? "text-foreground/40"
                : "text-foreground/20 hover:text-foreground/40",
            )}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Active Content */}
      <div className="px-2 py-1 flex flex-col gap-2">
        {activeItem.children.map((child) => (
          <ToggleItemRow key={child.id} label={child.label} />
        ))}
      </div>
    </div>
  );
}

function ToggleItemRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1">
      <div className="h-4 w-4 flex items-center justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
      </div>
      <p className="text-sm">{label}</p>
    </div>
  );
}
