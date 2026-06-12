"use client";

import React from "react";
import { motion, Variants } from "framer-motion"; 
import { CheckCircle2 } from "lucide-react";

// --- DATA CONFIGURATION ---
const modules = [
  {
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Module A (Mandatory)",
    description: "Learn model training, predictive analytics, and neural network deployments.",
    badge: "Mandatory Track",
    topics: [
      {
        name: "Predictive Modeling",
        description: "Regressions, classification, and algorithmic models."
      },
      {
        name: "Deep Learning & Neural Nets",
        description: "Designing feedforward nets and multi-layer models."
      }
    ]
  },
  {
    title: "Generative AI & Prompt Engineering",
    subtitle: "Module B (Mandatory)",
    description: "Master language model prompting, vector databases, and agent orchestration.",
    badge: "Mandatory Track",
    topics: [
      {
        name: "Prompt Optimization",
        description: "Advanced system instructions and LLM orchestration."
      },
      {
        name: "AI Agents & RAG",
        description: "Retrieval-Augmented Generation (RAG) and agent crews."
      }
    ]
  },
  {
    title: "Elective Specialization",
    subtitle: "Module C (Student's Choice)",
    description: "Choose one domain to complete your curriculum track:",
    badge: "Elective (Choose 1)",
    electives: [
      "Full Stack Development",
      "Cloud Computing",
      "Automation Engineering",
      "Blockchain Technologies"
    ]
  }
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
      ease: "easeOut", 
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
          <span className="text-xs font-bold uppercase tracking-wider text-[#00C365] mb-2 block">Phase 1</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Course Learning (3 Months)</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A structured learning program covering 6 high-demand technological specializations. Students master two mandatory core tracks and select one elective track.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {modules.map((module, i) => (
            <motion.div
              key={i}
              className="bg-[#1a2138] border border-white/5 p-8 rounded-[32px] shadow-2xl relative group flex flex-col justify-between"
              variants={textVariants}
            >
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#00C365]/5 rounded-full blur-[50px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <motion.p 
                      variants={textVariants} 
                      className="text-xs font-bold uppercase tracking-wider text-[#00C365]"
                    >
                      {module.subtitle}
                    </motion.p>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      module.badge.includes("Mandatory") 
                        ? "text-[#00C365] bg-[#00C365]/10 border border-[#00C365]/20" 
                        : "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                    }`}>
                      {module.badge}
                    </span>
                  </div>
                  
                  <motion.h3 
                    variants={textVariants} 
                    className="mb-2 text-xl font-bold text-white group-hover:text-[#00C365] transition-colors duration-300"
                  >
                    {module.title}
                  </motion.h3>
                  
                  <p className="text-slate-400 text-xs font-medium leading-relaxed mb-5">
                    {module.description}
                  </p>

                  <div className="h-px w-full bg-white/10 mb-6" />
                </div>

                {module.topics ? (
                  <div className="space-y-6">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#00C365] shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-base font-bold text-white group-hover/item:text-[#00C365] transition-colors leading-snug">
                              {topic.name}
                            </h4>
                            <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">
                              {topic.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {module.electives?.map((elective, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 bg-white/5 border border-white/5 px-4 py-2.5 rounded-xl hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-xs font-semibold text-slate-300">{elective}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}