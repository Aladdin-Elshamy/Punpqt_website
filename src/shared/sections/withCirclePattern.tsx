'use client'
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
        defaultCols={width! >= 1280 ? 12 : 10}
        defaultRows={width! >= 1280 ? 9 : 8}
      />
    );
  };
}
export const EnhancedCirclePattern = withCirclePattern(CirclePattern);

