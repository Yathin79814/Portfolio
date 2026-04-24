import { useScroll, useTransform } from "framer-motion";
import { RefObject } from "react";

export const useScrollFrames = (
  containerRef: RefObject<HTMLElement | null>,
  frameCount: number
) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  return { scrollYProgress, frameIndex };
};
