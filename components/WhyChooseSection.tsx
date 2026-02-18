"use client"

import { useEffect } from "react"
import { 
  Calendar, 
  GraduationCap, 
  Compass, 
  ShieldCheck, 
  FileCheck, 
  Award 
} from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const features = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Structured Curriculum",
    description: "Not a one-day seminar. A comprehensive 4-week program with progressive learning modules."
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Skill-Based Learning Model",
    description: "Focus on practical skills that matter in real-world careers and higher education."
  },
  {
    icon: <Compass className="w-6 h-6" />,
    title: "Early Career Awareness",
    description: "Expose students to emerging career paths before they make critical academic choices."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Safe & Guided Technology Exposure",
    description: "Age-appropriate, supervised introduction to technology and digital tools."
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "NEP 2020 Aligned",
    description: "Fully aligned with the National Education Policy's emphasis on skill development."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Assessment & Recognition",
    description: "Structured evaluation with certification to validate student achievements."
  }
]

export default function WhyChooseSection() {
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true, 
      easing: 'ease-out-back' // Added a slight "bounce" for a more attractive feel
    })
  }, [])

  return (
    <section id="whyus" className="py-24 bg-white relative z-10 overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header - Staggered entrance */}
        <div className="text-center mb-16">
          <span 
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#00C365] block mb-3"
            data-aos="fade-up"
            data-aos-delay="0" // Appears instantly
          >
            Trust & Credibility
          </span>
          <h2 
            className="mt-2 text-3xl md:text-5xl font-black text-[#0F172A] tracking-tight"
            data-aos="fade-up" 
            data-aos-delay="200" // Appears after tagline
          >
            Why Schools Choose <br className="hidden md:block" />
            Hynox Campus
          </h2>
        </div>

        {/* Features Grid - Cards appear one by one */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              // Staggered delay: 400, 500, 600... ensures they follow the header
              data-aos-delay={400 + (index * 100)} 
              className="group p-8 rounded-[32px] border border-white/5 bg-[#1a2138] shadow-2xl
                         hover:border-[#00C365]/30 hover:shadow-xl hover:shadow-[#00C365]/10 
                         transition-all duration-700 ease-out hover:-translate-y-2 cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="flex items-start gap-5 relative z-10">
                {/* Icon Box with internal staggered animation logic */}
                <div className="shrink-0 h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-[#00C365] 
                               group-hover:bg-[#00C365]/20 group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 ease-out">
                  {feature.icon}
                </div>
                
                {/* Text Content */}
                <div 
                  data-aos="fade-up" 
                  data-aos-delay={600 + (index * 100)} // Text within card arrives slightly after the card itself
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00C365] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#94a3b8] leading-relaxed font-medium transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}