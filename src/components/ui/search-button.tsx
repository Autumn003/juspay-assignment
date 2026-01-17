import { Search } from "lucide-react";
import { cn } from "../../lib/utils";
import Button from "./button";

export default function SearchButton({
  className,
  CMDClassName,
  onClick,
}: {
  className?: string;
  CMDClassName?: string;
  onClick?: () => void;
}) {
  return (
    <div>
      <button
        onClick={onClick}
        className={cn(
          "items-center justify-between py-1 px-2 rounded-lg bg-foreground/10 text-foreground/20 md:flex hidden h-7",
          className
        )}
      >
        <div className="flex gap-1 items-center">
          <Search size={16} />
          <p className="inline-flex gap-1 text-sm w-24">Search</p>
        </div>
        <div
          className={cn(
            "bg-muted-background flex items-center gap-1 rounded-md px-2 py-1 text-sm",
            CMDClassName
          )}
        >
          <p>⌘/</p>
        </div>
      </button>
      <Button className="w-7 h-7 p-1 md:hidden block" onClick={onClick}>
        <Search size={20} />
      </Button>
    </div>
  );
}
