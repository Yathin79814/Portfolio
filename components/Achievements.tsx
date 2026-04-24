"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Shield, Medal } from "lucide-react";

const achievements = [
  {
    title: "HackAdThon Winner",
    icon: Trophy,
    description: "Prototyped and shipped an award-winning product solution under extreme time constraints, securing first place."
  },
  {
    title: "Built a 30K+ Audience",
    icon: Users,
    description: "Scaled @designpreneurss to over 30,000 engaged followers through pure organic UI/UX content strategy."
  },
  {
    title: "Elite Leadership Excellence",
    icon: Shield,
    description: "Earned the rank of Senior Under Officer in the NCC, leading major operations and training large contingents."
  },
  {
    title: "2nd Place – IBCN Innovation Event",
    icon: Medal,
    description: "Secured 2nd place by crafting highly engaging presentation visuals. Blended visual storytelling with generative AI and tools like CapCut and ElevenLabs to create high-impact, real-world media."
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Milestones & Achievements</h2>
        <p className="text-[var(--color-secondary)] text-lg">Measurable impact beyond the screen.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl hover:border-[var(--color-accent)]/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-6">
                <Icon className="text-[var(--color-accent)]" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#FFFCF2] mb-4">{item.title}</h3>
              <p className="text-[var(--color-secondary)] leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
