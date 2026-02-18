"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const internshipFeatures = [
  "Online Internship Projects",
  "Offline Industry Exposure (Where Applicable)",
  "Practical Task-Based Execution",
  "Weekly Mentor Reviews",
  "KPI-Based Evaluation",
  "Paid & Unpaid Internship Opportunities",
  "Performance-Based Job Support"
]

export default function InternshipPhase() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="internship"className="relative px-6 py-24 md:py-32 bg-white overflow-hidden" ref={ref}>
      
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

      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center" // Reduced margin-bottom
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#00C365]"
          >
            Phase 2
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-4 text-3xl font-bold tracking-tight text-[#0f111a] md:text-4xl" // Reduced text size slightly
          >
            Structured Industry Internship
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium" // Reduced text size
          >
            Students transition into real-time industry projects with structured mentoring and performance tracking.
          </motion.p>
        </motion.div>

        {/* Main Content Card - SIZE REDUCED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          // Changed: Added max-w-2xl mx-auto and reduced padding to p-6 md:p-8
          className="bg-[#161b2c] border border-white/5 rounded-3xl p-6 md:p-8 max-w-2xl mx-auto shadow-xl shadow-[#00C365]/5 hover:border-[#00C365]/20 transition-all duration-500"
        >
          {/* Changed gap from 6 to 4 */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {internshipFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                // Changed gap from 5 to 4
                className="flex items-center gap-4 group"
              >
                {/* Check Icon Circle - Reduced size */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00C365]/10 flex items-center justify-center group-hover:bg-[#00C365] transition-colors duration-300">
                  <Check className="w-4 h-4 text-[#00C365] group-hover:text-white transition-colors duration-300" strokeWidth={3} />
                </div>
                
                {/* Text Content - Reduced font size */}
                <span className="text-base font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}