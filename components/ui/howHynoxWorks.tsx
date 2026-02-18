"use client"

import { useEffect } from "react"
import { Atom, Search, Rocket } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Data Configuration ---
const workSteps = [
  {
    icon: Atom,
    iconBg: "bg-white/5",
    iconColor: "text-[#00C365]",
    topBorder: "border-t-[#00C365]",
    title: "Learn by Doing",
    points: [
      "Career awareness & STEM exposure",
      "Logical thinking & future skills",
      "NEP 2020 aligned programs",
    ],
  },
  {
    icon: Search,
    iconBg: "bg-white/5",
    iconColor: "text-blue-400",
    topBorder: "border-t-blue-500",
    title: "Explore",
    points: [
      "Industry-ready skill tracks",
      "Projects + internships",
      "Placement-oriented learning",
    ],
  },
  {
    icon: Rocket,
    iconBg: "bg-white/5",
    iconColor: "text-orange-400",
    topBorder: "border-t-orange-500",
    title: "Experience",
    points: [
      "Upskilling & career transition",
      "Practical tech programs",
      "Learn by doing",
    ],
  },
]

export default function HynoxAudienceTracks() {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  return (
    <section className="py-20 bg-white text-gray-900 font-poppins relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#00C365]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* ================= SECTION: How Hynox Campus Works? ================= */}
        <div>
          <div className="text-center md:text-left mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              How Hynox Campus Works?
            </h2>
            <p className="text-gray-600 text-base max-w-2xl font-medium">
              Our proven methodology for success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {workSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  /* UPDATED: Deep navy background (#1a2138) and premium rounded corners (32px) */
                  className={`group bg-[#1a2138] rounded-[32px] p-8 flex flex-col h-full shadow-2xl border border-white/5 border-t-4 ${step.topBorder} transition-all duration-500 hover:-translate-y-2 relative overflow-hidden`}
                >
                  {/* Internal Lighting Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className={`w-12 h-12 rounded-xl ${step.iconBg} ${step.iconColor} flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10`}>
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00C365] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/10 mb-6 relative z-10" />

                  {/* List */}
                  <ul className="space-y-4 relative z-10">
                    {step.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00C365]/60 group-hover:bg-[#00C365] transition-colors shrink-0" />
                        <span className="text-[#94a3b8] text-[13.5px] font-medium leading-relaxed group-hover:text-white transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}