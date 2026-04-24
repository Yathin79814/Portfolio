"use client";

import { useRef, useEffect, useState } from "react";
import { useScrollFrames } from "@/lib/useScrollFrames";
import { preloadImages, FRAME_COUNT } from "@/lib/preloadImages";
import { useMotionValueEvent } from "framer-motion";
import { Overlay } from "./Overlay";

export const ScrollyCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress, frameIndex } = useScrollFrames(containerRef, FRAME_COUNT);

  useEffect(() => {
    const preloaded = preloadImages();
    setImages(preloaded);
  }, []);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = images[index];
    if (!img) return;

    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let drawX = 0;
      let drawY = 0;

      if (imgRatio > canvasRatio) {
        drawWidth = canvas.height * imgRatio;
        drawX = (canvas.width - drawWidth) / 2;
      } else {
        drawHeight = canvas.width / imgRatio;
        drawY = (canvas.height - drawHeight) / 2;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };

    if (img.complete) {
      render();
    } else {
      img.onload = render;
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    requestAnimationFrame(() => drawFrame(Math.round(latest)));
  });

  useEffect(() => {
    const handleResize = () => {
      drawFrame(Math.round(frameIndex.get()));
    };
    window.addEventListener("resize", handleResize);
    
    if (images.length > 0) {
      drawFrame(0);
    }
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  return (
    <div id="home" ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 bg-black/40" />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
};
