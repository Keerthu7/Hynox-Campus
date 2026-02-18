"use client"

import { useEffect } from "react"
import { MonitorPlay, Users, Rocket } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const ecosystemFeatures = [
  {
    icon: <MonitorPlay className="w-6 h-6 text-[#00C365]" />,
    title: "Online Model",
    items: [
      "Live Interactive Sessions",
      "Recorded Modules",
      "Mentor Q&A"
    ]
  },
  {
    icon: <Users className="w-6 h-6 text-[#00C365]" />,
    title: "Offline Model",
    items: [
      "On-Campus Workshops",
      "Practical Labs",
      "Team-Based Projects"
    ]
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#00C365]" />,
    title: "Practical Execution",
    items: [
      "Live Client Projects",
      "Internship Simulations",
      "Portfolio Reviews",
      "Performance Evaluation"
    ]
  }
]

export default function CollegeLearningEcosystem() {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <section className="py-24 bg-white relative z-10 overflow-hidden">
      
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          <span 
            className="text-[12px] font-bold tracking-[0.2em] text-[#00C365] uppercase block"
            data-aos="fade-up"
          >
            Learning Ecosystem
          </span>
          
          <h2 
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f111a]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Online. Offline. Practical.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystemFeatures.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + (index * 150)} // Staggered delay
              // DARK CARD BACKGROUND KEPT (bg-[#161b2c])
              className="group bg-[#161b2c] border border-white/5 p-8 rounded-2xl hover:border-[#00C365]/30 hover:shadow-xl hover:shadow-[#00C365]/10 transition-all duration-300 hover:-translate-y-2 cursor-default"
            >
              {/* Icon Container - Dark background inside card */}
              <div className="w-14 h-14 bg-[#00C365]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#00C365] transition-colors">
                {feature.title}
              </h3>
              
              {/* List Items */}
              <ul className="space-y-4">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 font-medium text-sm group-hover:text-slate-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C365]/50 group-hover:bg-[#00C365]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}