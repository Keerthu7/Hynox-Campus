"use client"

import { useEffect } from "react"
import { Palette, Code, BarChart3 } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const streams = [
  {
    icon: <Palette className="w-6 h-6 text-[#00C365]" />,
    title: "Design Stream",
    items: [
      "UI/UX Design",
      "Brand Identity",
      "Digital Creatives",
      "Portfolio Development"
    ]
  },
  {
    icon: <Code className="w-6 h-6 text-[#00C365]" />,
    title: "Development Stream",
    items: [
      "Full Stack Web Development",
      "Application Deployment",
      "Real-Time Product Building"
    ]
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-[#00C365]" />,
    title: "Marketing Stream",
    items: [
      "Performance Marketing",
      "Growth Strategy",
      "Campaign Analytics"
    ]
  }
]

export default function CollegeStreams() {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <section id="streams" className="py-24 bg-white relative z-10 overflow-hidden">
      
      {/* --- BACKGROUND: LIGHT GRID PATTERN --- */}
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
            Specializations
          </span>
          
          <h2 
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#0f111a]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Three Career-Focused Specialization Tracks
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {streams.map((stream, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + (index * 150)} // Staggered delay
              // DARK CARD BACKGROUND KEPT (bg-[#161b2c])
              className="group bg-[#161b2c] border border-white/5 p-8 rounded-2xl hover:border-[#00C365]/30 hover:shadow-xl hover:shadow-[#00C365]/10 transition-all duration-300 hover:-translate-y-2 cursor-default"
            >
              {/* Icon Container - Dark background inside card */}
              <div className="w-14 h-14 bg-[#00C365]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {stream.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#00C365] transition-colors">
                {stream.title}
              </h3>
              
              {/* List Items */}
              <ul className="space-y-3">
                {stream.items.map((item, i) => (
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