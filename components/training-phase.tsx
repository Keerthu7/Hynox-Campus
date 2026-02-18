"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; // Added Variants type import
import { CheckCircle2 } from "lucide-react";

// --- DATA CONFIGURATION ---
const months = [
  {
    title: "Month 1",
    subtitle: "Foundations & Awareness",
    points: ["Career Vision Mapping", "Logical Thinking Basics", "STEM Industry Overview"],
  },
  {
    title: "Month 2",
    subtitle: "Skill Immersion",
    points: ["Technology Fundamentals", "Critical Problem Solving", "Hands-on Workshop"],
  },
  // Add other months as needed
];

// --- ANIMATION VARIANTS ---
// Explicitly typing as 'Variants' fixes the Vercel/TypeScript build error
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Now correctly typed
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function TrainingPhase() {
  return (
    <section id="training" className="py-24 bg-[#0f111a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Training Roadmap</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our structured step-by-step approach to mastering future skills.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {months.map((month, i) => (
            <motion.div
              key={i}
              className="bg-[#1a2138] border border-white/5 p-8 rounded-[32px] shadow-2xl relative group"
              variants={textVariants}
            >
              <div className="relative z-10">
                {/* Error occurred here - motion.p now uses corrected textVariants */}
                <motion.p 
                  variants={textVariants} 
                  className="mb-2 text-xs font-bold uppercase tracking-wider text-[#00C365]"
                >
                  {month.title}
                </motion.p>
                
                <motion.h3 
                  variants={textVariants} 
                  className="mb-3 text-lg font-bold text-white"
                >
                  {month.subtitle}
                </motion.h3>

                <div className="h-px w-full bg-white/10 mb-6" />

                <ul className="space-y-3">
                  {month.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-[#00C365] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}