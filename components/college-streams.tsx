"use client"

import { useEffect } from "react"
import { Code, Cloud, Brain } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const streams = [
  {
    icon: <Code className="w-6 h-6 text-[#00C365]" />,
    category: "Full-Stack Development",
    level: "Level 1",
    title: "Foundation Level",
    focus: "Building the \"Logic\" of Business.",
    modules: [
      "Python for Industrial Logic",
      "Building \"Digital Employee\" Modules",
      "Database Architecture for SMEs",
      "Direct ERP Feature Ownership"
    ]
  },
  {
    icon: <Brain className="w-6 h-6 text-[#00C365]" />,
    category: "AI & Machine Learning",
    level: "Level 2",
    title: "Professional Level",
    focus: "Building \"Thinking\" Systems (Agents).",
    modules: [
      "Agentic Reasoning (CrewAI & LangGraph)",
      "Multi-Agent System Orchestration",
      "Advanced RAG & Cognitive Memory",
      "Automated Event Triggers & Actions"
    ]
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#00C365]" />,
    category: "Cloud Computing",
    level: "Level 3",
    title: "Enterprise Level",
    focus: "Scaling AI to the Global Cloud.",
    modules: [
      "Scalable SaaS Infrastructure Design",
      "Docker & Production Deployment",
      "AI Security & Data Governance",
      "Enterprise-Grade ERP Integration"
    ]
  }
]

export default function CollegeStreams() {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <section id="streams" className="py-16 bg-white relative z-10 overflow-hidden min-h-[650px] flex items-center">
      
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
        <div className="text-center mb-12 space-y-3">
          <span 
            className="text-[12px] font-bold tracking-[0.2em] text-[#00C365] uppercase block"
            data-aos="fade-up"
          >
            Specializations
          </span>
          
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight text-[#0f111a]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            One Program. <span className="text-[#00C365]">Three Professional Levels.</span>
          </h2>
          <p 
            className="text-slate-500 text-base font-medium max-w-2xl mx-auto mt-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Master the transition from code to autonomous industry solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {streams.map((stream, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + (index * 150)}
              className="group bg-[#161b2c] border border-white/5 p-8 rounded-[2rem] hover:border-[#00C365]/30 hover:shadow-2xl hover:shadow-[#00C365]/5 transition-all duration-300 hover:-translate-y-2 cursor-default flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#00C365]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stream.icon}
                </div>
                <span className="text-[12px] font-bold text-white uppercase tracking-[0.2em]">
                  {stream.level}
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00C365] transition-colors leading-tight">
                  {stream.category}
                </h3>
              </div>

              <div className="mb-6 pt-6 border-t border-white/5">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-2">The Focus:</p>
                <p className="text-slate-300 text-sm font-semibold leading-relaxed">
                  {stream.focus}
                </p>
              </div>
              
              <div className="mt-auto">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">Key Modules:</p>
                <ul className="space-y-3">
                  {stream.modules.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-400 font-medium text-sm group-hover:text-slate-300 transition-colors leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C365]/50 group-hover:bg-[#00C365] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}