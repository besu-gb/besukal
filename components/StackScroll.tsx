"use client";

import React, { useCallback, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card relative w-full overflow-visible rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 120,
  itemScale = 0.03,
  itemStackDistance = 32,
  stackPosition = "18vh",
  scaleEndPosition = "10vh",
  baseScale = 0.88,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTransformsRef = useRef(
    new Map<number, { translateY: number; scale: number; rotation: number; blur: number }>(),
  );
  const isUpdatingRef = useRef(false);

  const clamp = useCallback((value: number, min = 0, max = 1) => {
    return Math.min(max, Math.max(min, value));
  }, []);

  const parseValue = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value as string);
    },
    [],
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        viewport: window.innerHeight,
      };
    }

    const scroller = scrollerRef.current;
    return {
      scrollTop: scroller ? scroller.scrollTop : 0,
      viewport: scroller ? scroller.clientHeight : window.innerHeight,
    };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        return element.getBoundingClientRect().top + window.scrollY;
      }
      return element.offsetTop;
    },
    [useWindowScroll],
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, viewport } = getScrollData();
    const stackPositionPx = parseValue(stackPosition, viewport);
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      const cardTop = getElementOffset(card);
      const start = cardTop - viewport + stackPositionPx;
      const end = start + itemDistance;
      const progress = clamp((scrollTop - start) / Math.max(1, end - start), 0, 1);

      const targetScale = Math.max(0.72, baseScale - index * itemScale);
      const scale = 1 - progress * (1 - targetScale);
      const translateY = -index * itemStackDistance - progress * itemStackDistance;
      const rotation = rotationAmount * progress;

      let blur = 0;
      if (blurAmount && index > 0) {
        const prevStart = getElementOffset(cards[index - 1]) - viewport + stackPositionPx;
        if (scrollTop > prevStart) {
          blur = Math.min(blurAmount * index, blurAmount * 3);
        }
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const prev = lastTransformsRef.current.get(index);
      const changed =
        !prev ||
        Math.abs(prev.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(prev.scale - newTransform.scale) > 0.001 ||
        Math.abs(prev.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(prev.blur - newTransform.blur) > 0.1;

      if (changed) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        card.style.filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";
        card.style.zIndex = `${cards.length + index}`;
        lastTransformsRef.current.set(index, newTransform);
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    clamp,
    parseValue,
    getScrollData,
    getElementOffset,
  ]);

  const setupLenis = useCallback(() => {
    if (!useWindowScroll) {
      const scroller = scrollerRef.current;
      const content = scroller?.querySelector(".scroll-stack-inner");

      if (!scroller || !(content instanceof HTMLElement)) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
      });

      lenis.on("scroll", () => updateCardTransforms());

      const tick = (time: number) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);

      lenisRef.current = lenis;
      return lenis;
    }

    const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        gestureOrientation: 'vertical',
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075
    });

    lenis.on("scroll", () => updateCardTransforms());

    const tick = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    lenisRef.current = lenis;
    return lenis;
  }, [updateCardTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? []),
    ) as HTMLElement[];

    cardsRef.current = cards;
    lastTransformsRef.current.clear();

    cards.forEach((card, index) => {
       card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    setupLenis();
    updateCardTransforms();

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    setupLenis,
    updateCardTransforms,
    useWindowScroll,
  ]);

  return (
    <div
      className={`relative w-full ${useWindowScroll ? "overflow-visible" : "h-full overflow-y-auto overflow-x-visible"} ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: useWindowScroll ? "auto" : "contain",
        WebkitOverflowScrolling: useWindowScroll ? "auto" : "touch",
        scrollBehavior: "smooth",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        willChange: useWindowScroll ? "auto" : "scroll-position",
      }}
    >
      <div className="scroll-stack-inner pt-[18vh] pb-[40vh] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-[12vh]" />
      </div>
    </div>
  );
};

export default ScrollStack;
