import { useEffect, useState } from "react";

/**
 * Loads an image, removes near-white pixels (chroma-key style),
 * and returns a transparent-background data URL.
 */
export function useTransparentLogo(src: string, threshold = 235) {
  const [transparentSrc, setTransparentSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // If pixel is near-white, make it transparent.
        // Fade edges smoothly instead of a hard cutoff to avoid jagged edges.
        if (r > threshold && g > threshold && b > threshold) {
          data[i + 3] = 0;
        } else if (r > threshold - 25 && g > threshold - 25 && b > threshold - 25) {
          // soft edge feather
          const avg = (r + g + b) / 3;
          const alpha = Math.max(0, Math.min(255, (255 - avg) * 8));
          data[i + 3] = alpha;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      if (!cancelled) {
        setTransparentSrc(canvas.toDataURL("image/png"));
      }
    };

    return () => {
      cancelled = true;
    };
  }, [src, threshold]);

  return transparentSrc ?? src; // fall back to original while processing
}