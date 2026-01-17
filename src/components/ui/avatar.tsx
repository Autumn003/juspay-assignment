import { useState } from "react";
import { cn } from "../../lib/utils";

export default function Avatar({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "h-6 min-w-6 rounded-full bg-primary-light overflow-hidden",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0 animate-pulse",
        )}
      />
    </div>
  );
}
