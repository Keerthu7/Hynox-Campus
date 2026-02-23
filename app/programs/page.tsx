"use client"

import { useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AudiencePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Animation Initialize
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
    
    // Header Scroll Logic
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen font-poppins relative bg-white">
      
      {/* --- BACKGROUND GRID (Graph Paper Effect) --- */}
      {/* Fixed Background - z-0 */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-white"
        style={{
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* --- HEADER --- */}
      <Header  />

      {/* --- MAIN CONTENT --- */}
      {/* Added relative z-10 to bring content above background */}
      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
            
            {/* Title Section */}
            <div className="text-center mb-16" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Who Is <span className="text-[#00C365]">Hynox Campus</span> For?
              </h1>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                Tailored learning paths designed to meet you exactly where you are.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* --- CARD 1: SCHOOLS --- */}
              <div 
                className="bg-white rounded-[2rem] p-8 shadow-xl border-t-[6px] border-[#00C365] flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-aos="fade-up" data-aos-delay="0"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl">🎒</span>
                  <span className="bg-blue-50 text-blue-600 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Grades 8-12
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Schools</h3>
                <p className="text-slate-500 text-sm mb-6">Foundational years to spark curiosity.</p>
                <ul className="space-y-4 flex-grow mb-8 text-slate-700 text-sm font-medium">
                  {["Early career awareness", "Building logical thinking", "NEP 2020 aligned"].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C365] shrink-0" /> 
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#00C365] hover:bg-[#00ad58] text-white py-6 text-sm font-bold rounded-xl shadow-lg mt-auto">
                  <Link href="/school-programs"> 
                    View School Programs
                  </Link>
                </Button>
              </div>

              {/* --- CARD 2: COLLEGES --- */}
              <div 
                className="bg-white rounded-[2rem] p-8 shadow-xl border-t-[6px] border-[#00C365] flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-aos="fade-up" data-aos-delay="100"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl">🎓</span>
                  <span className="bg-blue-50 text-blue-600 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Undergrads & Grads
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Colleges</h3>
                <p className="text-slate-500 text-sm mb-6">Bridging theory and industry.</p>
                <ul className="space-y-4 flex-grow mb-8 text-slate-700 text-sm font-medium">
                  {["Industry-ready skill tracks", "Live projects & internships", "Placement-oriented"].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C365] shrink-0" /> 
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-[#0f172a] hover:bg-slate-800 text-white py-6 text-sm font-bold rounded-xl shadow-lg mt-auto">
                  {/* 👇 UPDATED LINK HERE 👇 */}
                  <Link href="/college-programs">View College Programs</Link>
                </Button>
              </div>

              {/* --- CARD 3: OPEN LEARNERS --- */}
              <div 
                className="bg-white rounded-[2rem] p-8 shadow-xl border-t-[6px] border-[#00C365] flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-aos="fade-up" data-aos-delay="200"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-5xl">🚀</span>
                  <span className="bg-blue-50 text-blue-600 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Pro & Dropouts
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Open Learners</h3>
                <p className="text-slate-500 text-sm mb-6">For those looking to pivot or upskill.</p>
                <ul className="space-y-4 flex-grow mb-8 text-slate-700 text-sm font-medium">
                  {["Upskilling for transitions", "Practical tech programs", "Learn by building products"].map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-[#00C365] shrink-0" /> 
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/programs/open" className="w-full mt-auto">
  <Button className="w-full bg-[#0f172a] hover:bg-slate-800 text-white py-6 text-sm font-bold rounded-xl shadow-lg">
    View Open Programs
  </Button>
</Link>
              </div>

            </div> {/* Closing Grid */}
        </div> {/* Closing Container */}
      </main>

      {/* --- FOOTER --- */}
      {/* 🔥 IMPORTANT: Added 'relative z-10' to make sure Footer sits ABOVE the background */}
      <div className="relative z-10">
        <Footer />
      </div>

    </div>
  )
}