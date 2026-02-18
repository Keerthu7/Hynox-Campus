"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  { number: "01", title: "Institutional Collaboration Discussion" },
  { number: "02", title: "Student Orientation & Stream Selection" },
  { number: "03", title: "3-Month Skill Development" },
  { number: "04", title: "Internship Allocation & Monitoring" },
  { number: "05", title: "Performance Evaluation" },
  { number: "06", title: "Career Support & Certification" },
]

export default function ImplementationFlow() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="implementation" className="relative px-6 py-20 md:py-28 bg-white overflow-hidden" ref={ref}>
      
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

      <div className="mx-auto max-w-3xl relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00C365]"
          >
            Implementation
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            // Reduced size: text-2xl on mobile, text-4xl on desktop
            className="text-balance text-2xl font-bold tracking-tight text-[#0f111a] md:text-4xl"
          >
            Structured Institutional Implementation
          </motion.h2>
        </motion.div>

        {/* Steps List */}
        <div className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              // Animation: Mela Mela (Fade Up)
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              // Style: Dark Card on White Background
              // Reduced padding: px-6 py-4
              className="group flex items-center gap-5 rounded-xl bg-[#161b2c] border border-white/5 px-6 py-4 shadow-lg shadow-[#00C365]/5 hover:border-[#00C365]/30 hover:shadow-[#00C365]/10 hover:-translate-x-1 transition-all duration-300"
            >
              {/* Number - Reduced to text-xl */}
              <span className="text-xl font-bold text-slate-500 group-hover:text-[#00C365] transition-colors duration-300">
                {step.number}
              </span>
              
              {/* Divider Line */}
              <div className="h-6 w-px bg-white/10 group-hover:bg-[#00C365]/30 transition-colors duration-300" />
              
              {/* Title - Reduced to text-sm/text-base */}
              <span className="text-sm font-medium text-white md:text-base group-hover:text-slate-100 transition-colors">
                {step.title}
              </span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}