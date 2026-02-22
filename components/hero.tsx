"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ApplyModal from "@/components/ui/apply-modal"

export default function Hero() {
  const [animated, setAnimated] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  return (
    <>
      <section className="relative min-h-screen text-gray-900 flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white z-0" />
        
        {/* Subtle Green Glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00C365]/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT CONTENT */}
            <div 
              className={`space-y-6 transition-all duration-1000 ease-out ${
                animated ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h1 className="text-4xl lg:text-[38px] font-bold leading-[1.15] tracking-tight text-gray-900">
                Building <span className="text-[#00C365]">Future-Ready Learners,</span> <br />
                Not Just Exam-Ready Students.
              </h1>

              <p className="text-[#00C365] font-medium text-lg tracking-wide">
                School • College • Open Learners
              </p>

              <p className="text-lg text-gray-600 font-normal max-w-lg leading-relaxed">
                Helping students discover careers, <strong className="text-gray-900">build real-world skills</strong>, 
                and gain hands-on experience through STEM and industry-aligned programs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/programs">
                  <Button
                    className="h-12 px-8 rounded-lg bg-[#00C365] hover:bg-[#00A855] text-white border-none text-base font-medium shadow-[0_4px_20px_rgba(0,195,101,0.25)] transition-all w-full sm:w-auto"
                  >
                    Explore Programs
                  </Button>
                </Link>

                <Button 
                  onClick={() => setIsModalOpen(true)} 
                  variant="outline"
                  className="h-12 px-8 rounded-lg border-gray-300 bg-transparent hover:bg-gray-100 text-gray-800 text-base font-medium transition-all w-full sm:w-auto"
                >
                  Free Discovery Session
                </Button>
              </div>

              <div className="pt-0.5 flex flex-wrap items-center gap-2 text-sm md:text-base font-medium text-gray-500">
                <span>STEM <span className="text-[#00C365]">+</span> Technology Focused</span>
                <span className="text-[#00C365] hidden sm:inline">•</span>
                <span>Internship & Career Pathway</span>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div 
              className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-out ${
                animated ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative p-2 rounded-3xl border border-[#00C365]/20 w-full max-w-[600px] bg-white shadow-xl">
                  <div className="relative h-[350px] lg:h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100">
                      {/* CHANGED IMAGE HERE: Realistic, clear faces, natural campus interaction */}
                      <Image 
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" 
                          alt="Students with clear faces collaborating"
                          fill
                          className="object-cover hover:scale-105 transition-all duration-700"
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {isModalOpen && (
        <ApplyModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  )
}