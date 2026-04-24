"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder & Creative Lead",
    company: "@designpreneurss",
    description: "Founded an educational design platform, conceptualizing and executing high-impact visual content strategies. Scaled an organic audience to 30,000+ followers by translating complex UI/UX principles into highly digestible, premium digital media."
  },
  {
    role: "Placement Cell Coordinator",
    company: "IIITDM Kancheepuram",
    description: "Orchestrated end-to-end communication and logistics between a talented student body and top-tier industry recruiters. Streamlined placement workflows, significantly improving recruiter engagement and institutional placement metrics."
  },
  {
    role: "Senior Under Officer",
    company: "National Cadet Corps (NCC)",
    description: "Directed and trained large cadet contingents, enforcing strict disciplinary frameworks and operational excellence. Led cross-functional teams to execute major institutional events with zero logistical friction."
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
        <p className="text-[var(--color-secondary)] text-lg">Where I've delivered impact.</p>
      </div>

      <div className="space-y-12 border-l border-white/10 pl-8 ml-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_rgba(235,94,40,0.5)]" />
            <h3 className="text-2xl font-bold text-[#FFFCF2] mb-1">{exp.role}</h3>
            <p className="text-sm font-medium text-[var(--color-accent)] mb-4 tracking-wider uppercase">{exp.company}</p>
            <p className="text-[var(--color-secondary)] leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
