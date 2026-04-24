"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Attacked AI — Visual Identity",
    tags: ["Branding", "AI Visuals", "Design Strategy"],
    desc: "Startups struggle to visualize complex AI concepts. I architected a comprehensive brand identity that scaled across web and media, resulting in a cohesive, high-trust visual language.",
  },
  {
    title: "EVtron Tech — Conversion Strategy",
    tags: ["Digital Marketing", "Campaigns", "UI Design"],
    desc: "The EV space is saturated with technical jargon. I designed targeted digital campaigns focused on user clarity, streamlining the customer journey and significantly increasing engagement.",
  },
  {
    title: "Viberr — Scalable Design System",
    tags: ["UI Systems", "Iconography", "Architecture"],
    desc: "A fast-growing startup needed a foundation to scale without design debt. I built a comprehensive UI system that eliminated engineering friction and unified the product experience.",
  },
  {
    title: "@designpreneurss — Community Growth",
    tags: ["Content Strategy", "UI/UX", "30K+ Audience"],
    desc: "Aspiring designers lack access to high-signal insights. I built a brand delivering premium UI/UX content, growing an organic audience of 30,000+ and establishing authority in the design community.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
        <p className="text-[var(--color-secondary)] text-lg">Proof of impact across design and tech.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(235,94,40,0.15)] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/0 to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-[var(--color-accent)] transition-colors" />
              </div>
              
              <p className="text-[var(--color-secondary)] mb-8 leading-relaxed">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
