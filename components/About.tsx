"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#FFFCF2]">
          Engineered for <span className="text-[var(--color-accent)]">Impact</span>
        </h2>
        
        <p className="text-xl text-[var(--color-secondary)] leading-relaxed mb-6">
          I engineer digital experiences at the intersection of UI/UX design, AI-driven content creation, and creative technology. Currently pursuing my B.Tech in CSE (AI) at IIITDM Kancheepuram, I combine analytical systems thinking with high-end visual execution.
        </p>
        
        <p className="text-lg text-white/60 leading-relaxed mb-12">
          Beyond pixel-pushing, I've founded and grown a community of 30,000+ designers. My focus is on designing for clarity, engagement, and measurable value—whether architecting scalable design systems or directing large-scale university initiatives.
        </p>
      </motion.div>
    </section>
  );
};
