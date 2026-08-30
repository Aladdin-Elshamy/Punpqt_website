"use client";

import useWindowSize from "@/shared/hooks/useWindowSize";

export default function CirclePattern({
  mask,
  defaultRows,
  defaultCols,
}: {
  mask?: boolean;
  defaultRows?: number;
  defaultCols?: number;
}) {
  const { width } = useWindowSize();
  let rows = defaultRows || 12,
    cols = defaultCols || 10;
  if (width && !defaultCols && !defaultRows) {
    rows = width >= 1280 ? 12 : 13;
    cols = width >= 1280 ? 10 : 8;
  }

  return (
    <div
      className={`lg:grid ${defaultCols || defaultRows ? "grid-cols-8 xl:grid-cols-10" : "grid-cols-8 xl:grid-cols-10"}  gap-0 absolute -top-46 ltr:right-0 rtl:left-0 z-10 hidden`}
      style={
        mask
          ? {
              maskImage:
                "linear-gradient(to top, transparent 0%, rgba(0,0,0,.3) 20%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, rgba(0,0,0,.3) 20%, black 100%)",
            }
          : undefined
      }
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          className="circle h-20 w-20 rounded-full border-[0.5px] border-primary opacity-30 cursor-pointer"
        />
      ))}
    </div>
  );
}