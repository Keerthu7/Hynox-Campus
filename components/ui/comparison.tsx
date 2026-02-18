"use client"

import { useEffect } from "react"
import { CheckCircle2, XCircle } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const comparisons = [
  {
    feature: "Learning Format",
    normal: "Recorded videos only",
    hynox: "Live & guided learning",
  },
  {
    feature: "Real Projects",
    normal: "No real projects",
    hynox: "Real industry projects",
  },
  {
    feature: "Certification",
    normal: "Certificate without proof",
    hynox: "Guaranteed internship exposure",
  },
  {
    feature: "Collaboration",
    normal: "Individual learning",
    hynox: "Multi-level teams",
  },
  {
    feature: "Portfolio Value",
    normal: "Certificate only",
    hynox: "Portfolio + certification",
  },
  {
    feature: "After Course",
    normal: "Learning ends",
    hynox: "Long-term ecosystem access",
  },
]

export default function ProgramComparison() {
  
  // Initialize Animation Library
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <section className="py-24 bg-white text-gray-900 font-poppins relative overflow-hidden">
      
      {/* Background Pattern (Grid) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Text */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-black">
            Hynox Campus <span className="text-gray-400 text-2xl md:text-4xl align-middle mx-2">vs</span> Normal Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See why students choose our ecosystem over traditional learning methods.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          
          {/* Comparison Table Box */}
          <div className="min-w-[700px] bg-[#0f172a] text-white border border-gray-800 rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-5xl">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left p-6 font-bold text-gray-300 text-lg w-1/3">Feature</th>
                  <th className="text-left p-6 font-bold text-gray-500 text-lg w-1/3">Normal Courses</th>
                  <th className="text-left p-6 font-bold text-[#00C365] text-lg w-1/3 bg-[#00C365]/10 border-l border-white/10">
                    Hynox Campus
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comp, index) => (
                  <tr
                    key={index}
                    // AOS Animation Attributes (Replaces manual IntersectionObserver)
                    data-aos="fade-up"
                    data-aos-delay={index * 50} 
                    className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors"
                  >
                    {/* Feature Name */}
                    <td className="p-6 font-medium text-gray-200">
                        {comp.feature}
                    </td>

                    {/* Normal Course (Negative) */}
                    <td className="p-6">
                      <div className="flex items-center gap-3 text-gray-500">
                        <XCircle size={20} className="text-red-500/70 shrink-0" />
                        <span className="text-sm md:text-base">{comp.normal}</span>
                      </div>
                    </td>

                    {/* Hynox Campus (Positive) */}
                    <td className="p-6 bg-[#00C365]/5 border-l border-white/10">
                      <div className="flex items-center gap-3 text-white">
                        <CheckCircle2 size={20} className="text-[#00C365] shrink-0" />
                        <span className="text-sm md:text-base font-medium">{comp.hynox}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}