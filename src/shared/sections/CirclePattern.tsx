"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const container = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  let rows = defaultRows || 12,
    cols = defaultCols || 10;
  if (width && !defaultCols && !defaultRows) {
    rows = width >= 1280 ? 12 : 13;
    cols = width >= 1280 ? 10 : 8;
  }

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const circles = gsap.utils.toArray<HTMLElement>(".circle");

      const ordered: HTMLElement[] = [];

      for (let row = rows - 1; row >= 0; row--) {
        for (let col = 0; col < cols; col++) {
          ordered.push(circles[row * cols + col]);
        }
      }

      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          duration: 1,
          ease: "power1.inOut",
        },
      });

      ordered.forEach((circle) => {
        tl.to(circle, {
          backgroundColor: "#0D7377",
          opacity: 1,
        });

        tl.to(
          circle,
          {
            backgroundColor: "transparent",
            opacity: 0.3,
          },
          "+=0.15",
        );
      });
    },
    { scope: container },
  );
  return (
    <div
      ref={container}
      className={`lg:grid ${defaultCols || defaultRows ? "grid-cols-8 xl:grid-cols-10" : "grid-cols-8 xl:grid-cols-10"}  gap-0 absolute -top-10 ltr:right-0 rtl:left-0 z-[-9999] hidden`}
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
          className="circle h-20 w-20 rounded-full border-[0.5px] border-primary opacity-30"
        />
      ))}
    </div>
  );
}
