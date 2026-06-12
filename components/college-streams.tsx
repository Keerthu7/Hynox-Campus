"use client"

import { useEffect } from "react"
import { Code, Cloud, Brain, Cpu, ShieldCheck, Network } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const specializations = [
  {
    icon: <Brain className="w-6 h-6 text-[#00C365]" />,
    category: "Artificial Intelligence & Machine Learning",
    focus: "Build predictive models, neural networks, and analytical architectures.",
    modules: [
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Data Engineering & Analytics",
      "Model Deployment & Monitoring"
    ]
  },
  {
    icon: <Cpu className="w-6 h-6 text-[#00C365]" />,
    category: "Generative AI & Prompt Engineering",
    focus: "Design LLM workflows, intelligent agents, and multi-agent frameworks.",
    modules: [
      "Prompt Optimization & Workflows",
      "Agentic Orchestration (CrewAI/LangGraph)",
      "Cognitive RAG & Vector Databases",
      "LLM APIs & Custom Fine-Tuning"
    ]
  },
  {
    icon: <Code className="w-6 h-6 text-[#00C365]" />,
    category: "Full Stack Development",
    focus: "Develop end-to-end web architectures, backend systems, and web/mobile apps.",
    modules: [
      "Modern Frontend Frameworks",
      "Serverless Backend Architectures",
      "API Integration & Management",
      "Cloud-Native Databases"
    ]
  },
  {
    icon: <Cloud className="w-6 h-6 text-[#00C365]" />,
    category: "Cloud Computing",
    focus: "Deploy, secure, and manage scalable cloud platforms and infrastructure.",
    modules: [
      "AWS & Cloud Architecture",
      "CI/CD Deployment Pipelines",
      "Docker & Containerization",
      "Security & Governance Rules"
    ]
  },
  {
    icon: <Network className="w-6 h-6 text-[#00C365]" />,
    category: "Automation Engineering",
    focus: "Streamline processes using event-driven tools, custom scripting, and integrations.",
    modules: [
      "Intelligent Workflow Orchestration",
      "n8n & Zapier Automations",
      "Custom Scripting & Webhooks",
      "System Integration & Alerts"
    ]
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#00C365]" />,
    category: "Blockchain Technologies",
    focus: "Build decentralized applications, smart contracts, and Web3 solutions.",
    modules: [
      "Smart Contract Development",
      "Decentralized Applications (DApps)",
      "Web3 APIs & Wallets",
      "Cryptographic Security & Ledgers"
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
        <div className="text-center mb-16 space-y-4">
          <span 
            className="text-[12px] font-bold tracking-[0.2em] text-[#00C365] uppercase block"
            data-aos="fade-up"
          >
            Specializations
          </span>
          
          <h2 
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#0f111a]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            High-Demand Specializations
          </h2>
          <p 
            className="text-slate-500 text-sm md:text-base font-medium max-w-2xl mx-auto mt-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Explore the 6 core technological domains integrated into the Hynox ISDIP program.
          </p>
        </div>

        {/* Cards Grid - 3 Columns on desktop, 6 cards total */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specializations.map((stream, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
              className="group bg-[#161b2c] border border-white/5 p-8 rounded-[2rem] hover:border-[#00C365]/30 hover:shadow-2xl hover:shadow-[#00C365]/5 transition-all duration-300 hover:-translate-y-2 cursor-default flex flex-col h-full relative overflow-hidden"
            >
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#00C365]/5 rounded-full blur-[50px] pointer-events-none" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 bg-[#00C365]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stream.icon}
                </div>
                <span className="text-[9px] font-bold text-[#00C365] uppercase tracking-widest bg-[#00C365]/10 px-2 py-0.5 rounded-full">
                  Domain
                </span>
              </div>
              
              <div className="mb-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00C365] transition-colors leading-tight">
                  {stream.category}
                </h3>
              </div>

              <div className="mb-6 pt-5 border-t border-white/5 relative z-10">
                <p className="text-slate-300 text-xs font-semibold leading-relaxed">
                  {stream.focus}
                </p>
              </div>
              
              <div className="mt-auto relative z-10">
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-3">Key Focus Modules:</p>
                <ul className="space-y-2">
                  {stream.modules.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 font-medium text-xs group-hover:text-slate-300 transition-colors leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-[#00C365]/50 group-hover:bg-[#00C365] mt-2 shrink-0" />
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