"use client";
import type { ComponentProps, ComponentType } from "react";
import CirclePattern from "./CirclePattern";
import useWindowSize from "../hooks/useWindowSize";

export default function withCirclePattern(
  BaseComponent: ComponentType<ComponentProps<typeof CirclePattern>>,
) {
  return function EnhancedCirclePattern(
    props: ComponentProps<typeof CirclePattern>,
  ) {
    const { width } = useWindowSize();

    return (
      <BaseComponent
        {...props}
        defaultCols={
          props?.defaultCols || (width! >= 1280 ? 10 : width! >= 1120 ? 8 : 20)
        }
        defaultRows={props?.defaultRows || (width! >= 1280 ? 9 : 8)}
      />
    );
  };
}
export const EnhancedCirclePattern = withCirclePattern(CirclePattern);
