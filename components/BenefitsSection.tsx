"use client"

import { useEffect } from "react"
import { Building2, User, Check } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const benefitsData = [
  {
    category: "For Schools",
    icon: <Building2 className="w-8 h-8 text-white" />,
    iconBg: "bg-white/5",
    checkColor: "text-[#00C365]",
    checkBg: "bg-[#00C365]/10",
    items: [
      "Enhances institutional profile",
      "Adds structured career exposure",
      "Boosts student engagement",
      "Future-ready positioning",
      "NEP 2020 compliance support"
    ]
  },
  {
    category: "For Students",
    icon: <User className="w-8 h-8 text-white" />,
    iconBg: "bg-[#00C365]/20",
    checkColor: "text-[#00C365]",
    checkBg: "bg-[#00C365]/10",
    items: [
      "Improved logical thinking",
      "Exposure to emerging careers",
      "Confidence in technology",
      "Clearer career direction",
      "Recognized certification"
    ]
  }
]

export default function BenefitsSection() {
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true, 
      easing: 'ease-out-back' 
    })
  }, [])

  return (
    <section id="benefits" className="py-24 bg-white relative z-10 overflow-hidden">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header - Animates first */}
        <div className="text-center mb-16">
          <span 
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#00C365] block mb-4"
            data-aos="fade-up"
          >
            Value Proposition
          </span>
          <h2 
            className="mt-2 text-3xl md:text-5xl font-black text-[#0F172A] tracking-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Benefits for Everyone
          </h2>
        </div>

        {/* Benefits Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 300} // Cards stagger slightly
              className="group bg-[#1a2138] rounded-[32px] border border-white/5 p-8 md:p-12 shadow-2xl 
                         hover:border-[#00C365]/30 hover:shadow-[#00C365]/10 hover:-translate-y-2 
                         transition-all duration-500 ease-out cursor-default relative overflow-hidden"
            >
              {/* Internal Lighting Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center gap-6 mb-10">
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center border border-white/10 ${benefit.iconBg} group-hover:bg-[#00C365]/30 transition-all duration-500`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {benefit.category}
                  </h3>
                </div>

                {/* List Items - Animating one by one */}
                <ul className="space-y-6">
                  {benefit.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-4"
                      data-aos="fade-up"
                      // Each line comes after the previous one (0ms, 100ms, 200ms...)
                      data-aos-delay={(index * 300) + (i * 100)} 
                    >
                      <div className={`mt-0.5 shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${benefit.checkBg}`}>
                        <Check className={`w-3.5 h-3.5 ${benefit.checkColor} stroke-[3]`} />
                      </div>
                      
                      <span className="text-[#94a3b8] font-medium text-[15.5px] leading-relaxed group-hover:text-white transition-colors">
                        {item}
                      </span>
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