"use client"

import { useEffect } from "react"
import { BookOpen, Briefcase, TrendingUp } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const modelFeatures = [
  {
    // Updated Icon color to Green to match the new theme
    icon: <BookOpen className="w-6 h-6 text-[#00C365]" />, 
    title: "3-Month Skill Development",
    description: "Intensive, project-based training with industry mentors building core competencies across chosen specialization."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#00C365]" />,
    title: "6-Month Internship Integration",
    description: "Structured industry exposure through real-time projects, KPI tracking, and dedicated mentor reviews."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#00C365]" />,
    title: "Performance-Based Career Pathway",
    description: "Career support, interview preparation, and job pathway access driven by measurable performance outcomes."
  }
]

export default function CollegeLearningModel() {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    // Changed Main Background to WHITE
    <section id="programs" className="py-24 bg-white relative z-10 overflow-hidden">
      
      {/* Added the Grid Pattern Background (Light Theme) */}
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section - Updated Text Colors for Light Background */}
        <div className="text-center mb-16 space-y-4">
          <span 
            className="text-[12px] font-bold tracking-[0.2em] text-[#00C365] uppercase block"
            data-aos="fade-up"
          >
            Program Overview
          </span>
          
          <h2 
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f111a]" // Dark text for white bg
            data-aos="fade-up"
            data-aos-delay="100"
          >
            An Industry-Embedded Learning Model
          </h2>
          
          <p 
            className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium" // Slate text for white bg
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hynox Campus is a structured college collaboration program integrating 3 months of 
            intensive skill training followed by 6 months of guided internship exposure.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modelFeatures.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 + (index * 150)}
              // KEPT CARD BACKGROUND DARK (bg-[#161b2c])
              // Updated hover border to Green (#00C365)
              className="group bg-[#161b2c] border border-white/5 p-8 rounded-2xl hover:border-[#00C365]/30 hover:bg-[#1c2237] hover:shadow-xl hover:shadow-[#00C365]/10 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Container - Dark background inside card */}
              <div className="w-14 h-14 bg-[#00C365]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Content - Kept Text White for readability on Dark Card */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C365] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}