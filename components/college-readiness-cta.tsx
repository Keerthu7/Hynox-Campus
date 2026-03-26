"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function CollegeReadinessCta() {
  const [ref, isVisible] = useScrollAnimation()

  // Open Calendly on tomorrow's date (never today)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const tomorrowStr = tomorrow.toISOString().split('T')[0] // "YYYY-MM-DD"
  const meetingLink = `https://calendly.com/hello-hynoxcampus/30min?date=${tomorrowStr}`

  return (
    <section 
      ref={ref}
      className="relative px-6 py-28 md:py-36 overflow-hidden flex items-center justify-center"
      // EXACT Background Color from the image (Deep Dark Purple)
      style={{ backgroundColor: '#181024' }} 
    >
      
      {/* Subtle Glow Effect in the center (Optional, to match the lighting in image) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(45,35,75,0.4)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          Elevate Your College's
          <br />
          Industry Readiness
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-slate-400 font-medium mb-10"
        >
          Partner with Hynox Campus to deliver structured skill development and
          <br className="hidden md:block" />
          internship pathways.
        </motion.p>

        {/* Buttons Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Button 1: Schedule Meeting (Dark Filled) */}
          <Link
            href={meetingLink}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice for opening new tabs
            className="group relative inline-flex items-center justify-center rounded-full bg-[#2a223a] border border-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#352b4a] hover:scale-105"
          >
            Schedule Institutional Meeting
          </Link>
          
        </motion.div>

      </div>
    </section>
  )
}