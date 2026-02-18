"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const rows = [
  { feature: "Duration", typical: "1-2 Months", hynox: "Structured 9-Month Model" },
  { feature: "Internship", typical: "Not Assured", hynox: "100% Internship Opportunity" },
  { feature: "Industry Exposure", typical: "Theoretical", hynox: "Real-Time Projects + KPI Tracking" },
  { feature: "Portfolio", typical: "Basic Assignments", hynox: "Live Client-Based Portfolio" },
  { feature: "Mentorship", typical: "Limited", hynox: "Dedicated Industry Mentors" },
  { feature: "College Integration", typical: "External Vendor", hynox: "Institutional Collaboration Model" },
  { feature: "Mode", typical: "Mostly Online", hynox: "Hybrid (Online + Offline + Practical)" },
  { feature: "Outcome", typical: "Certificate", hynox: "Internship + Career Pathway Support" },
]

export default function ComparisonSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    // 'pt-10' adds just enough space from the header
    <section id="compare" className="relative px-6 pt-10 pb-24 bg-white overflow-hidden" ref={ref}>
      
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

      <div className="mx-auto max-w-5xl relative z-10">
        
        <div className="mb-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#00C365]"
          >
            Why Hynox Campus
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-balance text-3xl font-bold tracking-tight text-[#0f111a] md:text-5xl"
          >
            Why Hynox Campus Stands Apart
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-4 max-w-xl text-sm md:text-base leading-relaxed text-slate-500 font-medium"
          >
            A structured institutional model — not just a short-term training course.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="overflow-hidden rounded-3xl border border-white/5 bg-[#161b2c] shadow-2xl shadow-[#00C365]/5"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0f111a] border-b border-white/5">
                  <th className="px-6 py-6 font-bold text-white uppercase tracking-wider text-xs">Feature</th>
                  <th className="px-6 py-6 font-bold text-slate-400 uppercase tracking-wider text-xs">Typical Training Institutes</th>
                  <th className="px-6 py-6 font-bold text-[#00C365] uppercase tracking-wider text-xs bg-[#00C365]/5 border-l border-[#00C365]/10">Hynox Campus</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }} 
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-5 font-semibold text-white">{row.feature}</td>
                    <td className="px-6 py-5 text-slate-400 font-medium">{row.typical}</td>
                    <td className="px-6 py-5 font-bold text-white bg-[#00C365]/5 border-l border-[#00C365]/10">
                      <span className="text-[#00C365] drop-shadow-sm">{row.hynox}</span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}