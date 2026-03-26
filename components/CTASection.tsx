"use client"

import { useEffect } from "react"
import { Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Define props to receive the click handler from the parent page
interface CTASectionProps {
  onPartnerClick: () => void;
}

export default function CTASection({ onPartnerClick }: CTASectionProps) {
  
  useEffect(() => {
    // Initialize animations with a slight bounce for a more attractive feel
    AOS.init({ 
      duration: 1000, 
      once: true, 
      easing: 'ease-out-cubic'
    })
  }, [])

  // Open Calendly on tomorrow's date (never today)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toISOString().split('T')[0] // "YYYY-MM-DD"
  const meetingLink = `https://calendly.com/hello-hynoxcampus/30min?date=${tomorrowStr}`

  return (
    <section className="relative py-24 bg-[#0F172A] overflow-hidden">
      
      {/* --- BACKGROUND ANIMATION (Particles & Glow) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Large Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C365]/5 rounded-full blur-[100px]" />
        
        {/* Floating Design Elements */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-slate-600 rounded-full animate-pulse opacity-40" />
        <div className="absolute top-40 right-[20%] w-3 h-3 bg-[#00C365] rounded-full opacity-20 blur-[1px] animate-bounce duration-[3000ms]" />
        <div className="absolute bottom-20 left-[20%] w-2 h-2 bg-[#00C365] rounded-full opacity-30 animate-pulse delay-700" />
        <div className="absolute bottom-32 right-[10%] w-4 h-4 bg-slate-700 rounded-full opacity-50 blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Headline - First staggered text */}
        <h2 
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6"
          data-aos="fade-up"
        >
          Bring Future Skills to Your Campus
        </h2>

        {/* Subtext - Second staggered text */}
        <p 
          className="text-slate-400 text-base md:text-lg font-normal leading-relaxed mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Empower your students with structured STEM career exposure. Partner with 
          Hynox Campus and transform your school into a future-ready institution.
        </p>

        {/* Buttons Container - Third staggered element */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Green Button (Schedule a Call) */}
          <Button 
            onClick={() => window.open(meetingLink, "_blank", "noopener noreferrer")}
            className="h-[52px] px-8 bg-[#00C365] hover:bg-[#00b05b] text-white font-semibold text-[15px] rounded-xl 
                       shadow-lg shadow-[#00C365]/20 hover:shadow-[#00C365]/40 hover:-translate-y-1 transition-all duration-300"
          >
            <Phone className="w-4 h-4 mr-2.5" />
            Schedule a Call
          </Button>

          {/* Partner Button - Opens the modal that sends data to api/partner/route.js */}
          <Button 
            onClick={onPartnerClick}
            className="h-[52px] px-8 bg-slate-800/50 border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 font-semibold text-[15px] rounded-xl 
                       hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm shadow-xl shadow-black/20"
          >
            Partner With Hynox Campus
            <ArrowRight className="w-4 h-4 ml-2.5" />
          </Button>
        </div>

      </div>
    </section>
  )
}