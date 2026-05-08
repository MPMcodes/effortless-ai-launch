import { useEffect, useRef } from "react";

interface PingPongVideoProps {
  src: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Plays a video forward to the end, then reverses back to the start,
 * then loops indefinitely. Reverse is implemented by manually animating
 * currentTime via requestAnimationFrame, since negative playbackRate
 * is not reliably supported across browsers.
 */
export function PingPongVideo({ src, className, ariaLabel }: PingPongVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number | null = null;
    let direction: "forward" | "reverse" = "forward";
    let lastTs: number | null = null;

    const startForward = () => {
      direction = "forward";
      video.playbackRate = 1;
      void video.play().catch(() => {});
    };

    const startReverse = () => {
      direction = "reverse";
      video.pause();
      lastTs = null;
      const step = (ts: number) => {
        if (lastTs == null) lastTs = ts;
        const dt = (ts - lastTs) / 1000;
        lastTs = ts;
        const next = video.currentTime - dt;
        if (next <= 0) {
          video.currentTime = 0;
          rafId = null;
          startForward();
          return;
        }
        video.currentTime = next;
        rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };

    const onEnded = () => {
      if (direction === "forward") startReverse();
    };

    video.addEventListener("ended", onEnded);
    startForward();

    return () => {
      video.removeEventListener("ended", onEnded);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="auto"
      aria-label={ariaLabel}
      className={className}
    />
  );
}

export default PingPongVideo;
