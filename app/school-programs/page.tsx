"use client"

import { useEffect } from "react"
import Link from "next/link"
import SchoolHeader from "@/components/SchoolHeader"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import AOS from "aos"
import "aos/dist/aos.css"

const SchoolPrograms = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" })
  }, [])

  const programs = [
    {
      tag: "NEW",
      tagStyle: "bg-blue-100 text-[#1E40AF] border-[#1E40AF]",
      icon: "⚡",
      title: "GenAI One-Day Bootcamp",
      description:
        "A high-energy 2.5-hour hands-on GenAI session for Grade 6–12 students. No laptops needed. Just a projector and curious students.",
      highlights: ["✦ One Day", "✦ No Laptops", "✦ Certificate"],
      highlightColor: "text-[#1E40AF]",
      cardStyle: "border-[#1E40AF] bg-[#F8FAFF]",
      link: "/school-programs/genai-bootcamp",
      btnClass: "bg-[#1E40AF] hover:bg-[#1e3a8a]",
      btnLabel: "Know More",
      aosDelay: 200,
    },
    {
      tag: "STRUCTURED",
      tagStyle: "bg-[#D1FAE5] text-[#00C365] border-[#00C365]",
      icon: "🗓",
      title: "4-Week STEM Future Skills Program",
      description:
        "A comprehensive 4-week structured program building career awareness, logical thinking and STEM foundations for Grade 8–12 students.",
      highlights: ["✦ 4 Weeks", "✦ NEP 2020 Aligned", "✦ Certification"],
      highlightColor: "text-[#00C365]",
      cardStyle: "border-slate-200 bg-white",
      link: "/school-programs/stem-future-skills",
      btnClass: "bg-[#00C365] hover:bg-[#00ad58]",
      btnLabel: "Know More",
      aosDelay: 400,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden relative">
      <SchoolHeader />

      {/* BACKGROUND GRID */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <main className="relative z-10 flex-grow pt-28 pb-16">
        <section className="container mx-auto px-6 max-w-5xl">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#00C365] uppercase mb-3 block">Our Offerings</span>
            <h1 className="text-3xl md:text-4xl font-black text-[#0F172A] mb-4">
              School <span className="text-[#00C365]">Programs</span>
            </h1>
            <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto font-medium">
              Empowering students with future-ready skills through immersive, hands-on learning experiences.
            </p>
          </div>

          {/* Two Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={program.aosDelay}
                className={`group relative rounded-[32px] p-6 md:p-10 flex flex-col gap-5 shadow-xl transition-all duration-500 hover:-translate-y-1.5 border-2 ${program.cardStyle}`}
              >
                {/* Tag */}
                <span className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest w-fit border ${program.tagStyle}`}>
                  {program.tag}
                </span>

                {/* Icon */}
                <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110">
                  {program.icon}
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] leading-tight">
                  {program.title}
                </h2>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mt-1">
                  {program.highlights.map((h, i) => (
                    <span
                      key={i}
                      className={`text-xs font-bold tracking-tight px-2.5 py-0.5 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-100 ${program.highlightColor}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-6 md:mt-4">
                  <Link href={program.link} className="block w-full">
                    <Button 
                      className={`w-full h-12 rounded-xl font-bold text-base shadow-md transition-all active:scale-95 ${program.btnClass} text-white`}
                    >
                      {program.btnLabel}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SchoolPrograms