"use client";

import DotField from "./DotField";
import React from "react";

export type DotFieldProps = {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  [key: string]: any;
};

export default function DotFieldClient(props: DotFieldProps) {
  return <DotField {...(props as any)} />;
}
