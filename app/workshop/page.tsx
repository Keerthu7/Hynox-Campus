"use client"

import { useEffect } from "react"
import Link from "next/link"
import SchoolHeader from "@/components/SchoolHeader"
import Footer from "@/components/footer"
import { Workflow, Cpu, Code, Layout, Megaphone, Database, ChevronRight } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const WORKSHOPS = [
  {
    id: "n8n",
    title: "n8n Automation",
    link: "/workshop/n8n",
    status: "OPEN",
    icon: <Workflow className="w-8 h-8 text-[#00C365]" />,
    description: "Master low-code automation and AI workflows."
  },
  {
    id: "ai-eng",
    title: "AI Engineering",
    link: "#",
    status: "COMING SOON",
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    description: "Build and deploy production-grade AI agents."
  },
  {
    id: "fullstack",
    title: "Modern Fullstack",
    link: "#",
    status: "COMING SOON",
    icon: <Code className="w-8 h-8 text-purple-400" />,
    description: "End-to-end web apps with Next.js & Node."
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    link: "#",
    status: "COMING SOON",
    icon: <Layout className="w-8 h-8 text-pink-400" />,
    description: "Design pixel-perfect, user-centric interfaces."
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    link: "#",
    status: "COMING SOON",
    icon: <Megaphone className="w-8 h-8 text-orange-400" />,
    description: "Data-driven strategies for brand growth."
  },
  {
    id: "devops",
    title: "DevOps Basics",
    link: "#",
    status: "COMING SOON",
    icon: <Database className="w-8 h-8 text-cyan-400" />,
    description: "Cloud infrastructure and CI/CD mastery."
  },
]

const WorkshopHub = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins overflow-x-hidden relative">
      <SchoolHeader />

      {/* BACKGROUND GRID */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.7) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <main className="relative z-10 flex-grow pt-32 pb-24">
        <section className="container mx-auto px-6 md:px-16 max-w-7xl">
          
          {/* Section Header */}
          <div className="mb-10 text-left" data-aos="fade-up">
            <h1 className="text-[32px] md:text-[40px] font-black text-[#0F172A] leading-tight mb-3 tracking-tight">
              Extensive Workshops
            </h1>
            <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl leading-relaxed">
              Elevate your tech stack with hands-on, project-based workshops led by industry experts.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKSHOPS.map((workshop, index) => {
              const isCardClickable = workshop.status === "OPEN"
              
              const CardContent = (
                <div
                  className={`group relative h-full bg-gradient-to-br from-[#0F172A] to-[#010101] rounded-[24px] p-6 md:p-8 flex flex-col justify-between overflow-hidden border border-slate-800 transition-all duration-500 shadow-2xl ${
                    isCardClickable ? "hover:-translate-y-2 hover:shadow-[#00C365]/10 cursor-pointer" : "opacity-80 grayscale-[0.5]"
                  }`}
                >
                  {/* Icon & Status */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#00C365]/50 transition-colors duration-500">
                      {workshop.icon}
                    </div>
                    {workshop.status === "COMING SOON" && (
                      <span className="text-[7px] font-black tracking-[0.2em] bg-white/10 text-white/60 px-2.5 py-1 rounded-full uppercase">
                        {workshop.status}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="relative z-10 mb-8">
                    <h3 className="text-white text-xl md:text-2xl font-black mb-2 tracking-tight group-hover:text-[#00C365] transition-colors duration-500">
                      {workshop.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-[95%]">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Know More Link */}
                  <div className="flex items-center gap-2 group/link relative z-10">
                    <span className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      isCardClickable ? "text-[#00C365] group-hover/link:gap-3" : "text-slate-500"
                    }`}>
                      Know More
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isCardClickable ? "text-[#00C365] group-hover/link:translate-x-1.5" : "text-slate-500"
                    }`} />
                  </div>

                  {/* Aesthetic Overlays */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C365]/5 rounded-full blur-[60px] group-hover:bg-[#00C365]/10 transition-colors duration-500" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#00C365]/5 rounded-full blur-[80px]" />
                </div>
              )

              return (
                <div key={workshop.id} data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                  {isCardClickable ? (
                    <Link href={workshop.link} className="block h-full">
                      {CardContent}
                    </Link>
                  ) : (
                    <div className="h-full">
                      {CardContent}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default WorkshopHub
