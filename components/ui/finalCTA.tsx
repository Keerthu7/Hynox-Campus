"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function FinalCTA() {
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section
      className="py-24 bg-[#030712] text-white relative overflow-hidden font-poppins border-t border-white/5"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C365]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          
          <h2 className="font-bold text-4xl lg:text-6xl mb-6 text-white text-balance tracking-tight">
            Don't Just Learn. <br className="hidden md:block" />
            <span className="text-[#00C365]">Work With Industry.</span>
          </h2>

          <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Join thousands of students who've transformed their careers through real industry experience, guaranteed
            internships, and portfolio-ready projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center" data-aos="fade-up" data-aos-delay="200">
            
            {/* Primary Action - Using asChild for valid HTML */}
            <Button 
              asChild 
              size="lg" 
              className="bg-[#00C365] text-white hover:bg-[#00A855] font-semibold h-14 px-8 text-base rounded-xl shadow-[0_0_20px_rgba(0,195,101,0.3)] hover:shadow-[0_0_30px_rgba(0,195,101,0.5)] transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/audience">
                Join Hynox Campus
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            
            {/* Secondary Action */}
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-base rounded-xl border-white/20 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm w-full sm:w-auto"
            >
              <Link href="/contact">
                Talk to Our Team
              </Link>
            </Button>

          </div>

          
        </div>
      </div>
    </section>
  )
}