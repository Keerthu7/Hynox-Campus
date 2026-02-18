"use client"

import { useEffect } from "react"
import { 
  Handshake, 
  ClipboardList, 
  Presentation, 
  Medal, 
  MessageCircle 
} from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const steps = [
  {
    step: 1,
    title: "Partnership Discussion",
    description: "We align with your school's academic calendar and goals.",
    icon: <Handshake className="w-6 h-6" />
  },
  {
    step: 2,
    title: "Student Batch Planning",
    description: "Customized batch sizes and scheduling for seamless integration.",
    icon: <ClipboardList className="w-6 h-6" />
  },
  {
    step: 3,
    title: "4-Week In-School Sessions",
    description: "Structured weekly sessions conducted by trained facilitators.",
    icon: <Presentation className="w-6 h-6" />
  },
  {
    step: 4,
    title: "Assessment & Recognition",
    description: "Comprehensive evaluation and certification for all participants.",
    icon: <Medal className="w-6 h-6" />
  },
  {
    step: 5,
    title: "Feedback & Continuation",
    description: "Detailed reports and pathway guidance for continued growth.",
    icon: <MessageCircle className="w-6 h-6" />
  }
]

export default function ImplementationSection() {
  
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true, 
      easing: 'ease-out-cubic'
    })
  }, [])

  return (
    <section className="py-24 bg-white relative z-10 overflow-hidden">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header - Reduced Boldness */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C365]"> {/* font-bold -> font-semibold */}
            How It Works
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight"> {/* font-black -> font-bold */}
            Simple & School-Friendly <br className="hidden md:block" />
            Implementation
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div 
            className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-[#00C365]/50 to-slate-200 -z-10"
            data-aos="fade-in"
            data-aos-delay="200"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
            {steps.map((item, index) => (
              <div 
                key={item.step}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Circle Container */}
                <div className="w-[120px] h-[120px] rounded-full bg-white border border-slate-100 shadow-lg shadow-slate-200/50 
                              flex flex-col items-center justify-center gap-2 mb-6 group-hover:scale-110 group-hover:border-[#00C365]/50 
                              group-hover:shadow-[#00C365]/20 transition-all duration-500 ease-out cursor-default z-10 relative">
                  
                  {/* Icon */}
                  <div className="text-[#00C365] group-hover:rotate-12 transition-transform duration-500">
                    {item.icon}
                  </div>
                  
                  {/* Step Label - Reduced Boldness */}
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 group-hover:text-[#00C365] transition-colors"> {/* font-bold -> font-medium */}
                    Step {item.step}
                  </span>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-[#00C365] opacity-0 scale-75 group-hover:scale-110 group-hover:opacity-20 transition-all duration-700" />
                </div>

                {/* Content - Reduced Boldness */}
                <div className="max-w-[220px] md:max-w-none">
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-3 group-hover:text-[#00C365] transition-colors duration-300"> {/* font-bold -> font-semibold */}
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed"> {/* Removed font-medium to make it normal */}
                    {item.description}
                  </p>
                </div>

                {/* Mobile Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute bottom-[-48px] left-1/2 w-0.5 h-12 bg-slate-200 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}