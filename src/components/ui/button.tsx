import { cn } from "../../lib/utils";

export default function Button({
  children,
  className,
  onClick,
}: {
  children: any;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={cn(
        "w-7 h-7 p-1 gap-1 rounded-lg hover hover:bg-foreground/10 transition-colors duration-300 text-sm flex items-center justify-center cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
