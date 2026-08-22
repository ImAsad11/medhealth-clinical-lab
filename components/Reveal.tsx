"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the animation starts once visible — useful for staggering lists. */
  delay?: number;
  /** Direction the element travels in from. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance in px the element travels. */
  distance?: number;
  /** Animate every time it enters the viewport instead of just once. */
  repeat?: boolean;
  as?: "div" | "span";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
  repeat = false,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  const offset =
    direction === "up"
      ? `translateY(${distance}px)`
      : direction === "down"
      ? `translateY(-${distance}px)`
      : direction === "left"
      ? `translateX(${distance}px)`
      : direction === "right"
      ? `translateX(-${distance}px)`
      : "none";

  const Tag = as;

  return (
    <Tag
      ref={ref as any}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : offset,
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
