"use client"

import { motion } from "framer-motion"
import { Building2, GraduationCap } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const collegeBenefits = [
  "Improved Placement Metrics",
  "Industry Collaboration Framework",
  "Enhanced NAAC/NIRF Positioning",
  "Employability-Focused Curriculum",
  "Structured Internship Pipeline",
  "Increased Institutional Credibility"
]

const studentBenefits = [
  "Real Industry Exposure",
  "Portfolio Development",
  "Internship Opportunity (T&C Apply)",
  "Career-Ready Skillset",
  "Interview Preparation",
  "Performance-Based Growth"
]

export default function CollegeBenefits() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="benefits" className="relative px-6 py-24 md:py-32 bg-white overflow-hidden" ref={ref}>
      
      {/* Light Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(226, 232, 240, 0.4) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(226, 232, 240, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#00C365]"
          >
            Benefits
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-[#0f111a] md:text-5xl"
          >
            For Colleges & Students
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD 1: FOR COLLEGES */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-[#161b2c] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#00C365]/5 hover:border-[#00C365]/30 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#00C365]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-6 h-6 text-[#00C365]" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Colleges</h3>
            </div>

            <ul className="space-y-4">
              {collegeBenefits.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + (i * 0.1) }} 
                  className="flex items-center gap-3 text-slate-400 font-medium group-hover:text-slate-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C365]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CARD 2: FOR STUDENTS */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group bg-[#161b2c] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#00C365]/5 hover:border-[#00C365]/30 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#00C365]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-[#00C365]" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Students</h3>
            </div>

            <ul className="space-y-4">
              {studentBenefits.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + (i * 0.1) }} 
                  className="flex items-center gap-3 text-slate-400 font-medium group-hover:text-slate-300 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C365]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  )
}