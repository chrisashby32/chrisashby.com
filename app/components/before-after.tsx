"use client";

import { CSSProperties, useEffect, useState } from "react";

type BeforeAfterProps = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
};

export default function BeforeAfter({ beforeSrc, beforeAlt, afterSrc, afterAlt }: BeforeAfterProps) {
  const [position, setPosition] = useState(18);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    if (isInteracting) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      setPosition(50);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 6800;

    const sweep = (now: number) => {
      const phase = ((now - start) % duration) / duration;
      const next = phase < 0.5
        ? 14 + (phase / 0.5) * 72
        : 86 - ((phase - 0.5) / 0.5) * 72;

      setPosition(next);
      frame = window.requestAnimationFrame(sweep);
    };

    frame = window.requestAnimationFrame(sweep);
    return () => window.cancelAnimationFrame(frame);
  }, [isInteracting]);

  const style = { "--reveal": `${position}%` } as CSSProperties;

  return (
    <div className="before-after styled-comparison" style={style}>
      <img className="before-after-image before-after-before" src={beforeSrc} alt={beforeAlt} />
      <img className="before-after-image before-after-after" src={afterSrc} alt={afterAlt} />

      <span className="before-after-label before-label">Before</span>
      <span className="before-after-label after-label">After</span>
      <span className="before-after-divider" aria-hidden="true">
        <i>‹ ›</i>
      </span>

      <input
        className="before-after-range"
        type="range"
        min="0"
        max="100"
        step="1"
        value={Math.round(position)}
        aria-label="Compare the room before and after its StyledSpace redesign"
        onPointerDown={() => setIsInteracting(true)}
        onFocus={() => setIsInteracting(true)}
        onKeyDown={() => setIsInteracting(true)}
        onChange={(event) => {
          setIsInteracting(true);
          setPosition(Number(event.target.value));
        }}
      />

      <span className="before-after-hint" aria-hidden="true">Drag to compare</span>
    </div>
  );
}
