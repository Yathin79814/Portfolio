"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-64 h-64 rounded-full mix-blend-screen z-50 blur-[80px]"
      style={{
        background: "radial-gradient(circle, rgba(235,94,40,0.15) 0%, rgba(0,0,0,0) 70%)",
      }}
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    />
  );
};
