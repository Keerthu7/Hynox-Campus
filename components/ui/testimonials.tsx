"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" })
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden z-10 border-t border-slate-100">
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
        <div className="text-center mb-12 space-y-3">
          <span 
            className="text-[12px] font-bold tracking-[0.2em] text-[#00C365] uppercase block"
            data-aos="fade-up"
          >
            Campus Engagements
          </span>
          
          <h2 
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f111a]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hynox Campus in Action
          </h2>
          
          <p 
            className="text-slate-500 text-sm md:text-base font-medium max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Real hands-on training sessions and bootcamps conducted directly at partner institutions.
          </p>
        </div>

        {/* Single Centered Blue Card */}
        <div className="flex justify-center">
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="group w-full max-w-lg bg-[#0f172a] border border-slate-800 p-5 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-slate-900/50 hover:border-[#00C365]/30 transition-all duration-300 hover:-translate-y-1 cursor-default text-white"
          >
            {/* Card Image */}
            <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-4 border border-white/5 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/school_session.jpg" 
                alt="Innovative World School Class Session" 
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="text-center pt-2 pb-1">
              <span className="text-[9px] font-bold text-[#00C365] bg-[#00C365]/10 border border-[#00C365]/20 px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mx-auto mb-3">
                School Session
              </span>
              <h4 className="text-lg font-bold text-white group-hover:text-[#00C365] transition-colors duration-300 leading-tight">
                Innovative World School, Hosur
              </h4>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
