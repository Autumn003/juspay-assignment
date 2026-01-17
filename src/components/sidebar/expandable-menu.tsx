import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { useNavigate } from "react-router-dom";

type MenuItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  url?: string;
  children?: MenuItem[];
};

type Props = {
  item: MenuItem;
  activeId?: string;
  onSelect?: (id: string) => void;
};

export function ExpandableMenu({ item, activeId, onSelect }: Props) {
  const navigate = useNavigate();

  const hasChildren = !!item.children?.length;

  // Parent active only if any child is active
  const isChildActive = hasChildren
    ? item.children!.some((child) => child.id === activeId)
    : false;

  // Leaf active if directly link (have no child)
  const isActive = !hasChildren && activeId === item.id;

  const [open, setOpen] = useState(isChildActive);

  useEffect(() => {
    if (isChildActive) setOpen(true);
  }, [isChildActive]);

  return (
    <div>
      {/* Parent */}
      <button
        onClick={() => {
          if (hasChildren) {
            setOpen((o) => !o);
          } else {
            onSelect?.(item.id);
            if (item.url) navigate(item.url);
          }
        }}
        className={cn(
          "flex w-full items-center gap-1 rounded-md  py-1 text-sm transition",
          "hover:bg-foreground/5",
          (isActive || isChildActive) && "bg-foreground/5",
        )}
      >
        <div className="flex h-5 w-6 items-center text-foreground/20">
          <span
            className={cn(
              "h-0 w-1 bg-primary-brand rounded-full",
              (isActive || isChildActive) && "h-4",
            )}
          />
          {hasChildren && (
            <ChevronRight
              size={16}
              className={cn(
                "transition-transform duration-200 ",
                open && "rotate-90",
                isChildActive && "hidden",
              )}
            />
          )}
        </div>

        <span className="flex items-center gap-1">
          {item.icon && <span className="h-5 w-5">{item.icon}</span>}
          <span>{item.label}</span>
        </span>
      </button>

      {/* Children */}
      {hasChildren && open && (
        <div className="mt-1 space-y-1">
          {item.children!.map((child) => (
            <button
              key={child.id}
              onClick={() => {
                onSelect?.(child.id);
                if (child.url) navigate(child.url);
              }}
              className={cn(
                "flex w-full items-center gap-1 rounded-md px-2 py-1 text-sm transition",
                "hover:bg-foreground/5",
                activeId === child.id && "bg-foreground/5",
              )}
            >
              <div className="h-5 w-6" />
              <span className="h-5 w-5" />
              {child.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
