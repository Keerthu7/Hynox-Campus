"use client"

import { useEffect, useState } from "react"
import { Briefcase, Users, Zap, Heart, ArrowRight, Mail } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import your components
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // 1. Initialize Animation Library
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    })

    // 2. Add Scroll Listener for Header Effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    // Cleanup listener
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const jobOpenings = [
    {
      department: "Academics & Mentorship",
      roles: [
        { title: "STEM Curriculum Designer", type: "Full-time", location: "Remote / Hybrid" },
        { title: "Lead Technology Instructor", type: "Full-time", location: "On-site" },
      ]
    },
    {
      department: "Growth & Partnerships",
      roles: [
        { title: "School Partnership Manager", type: "Full-time", location: "Remote" },
        { title: "Community Manager", type: "Part-time", location: "Remote" },
      ]
    },
    {
      department: "Product & Engineering",
      roles: [
        { title: "Frontend Developer (Next.js)", type: "Full-time", location: "Remote" },
        { title: "UI/UX Designer", type: "Full-time", location: "Hybrid" },
      ]
    }
  ]

  // Replace this with your actual HR/Careers email address
  const contactEmail = "hello.hynoxcampus@gmail.com" 

  return (
    <>
      {/* --- HEADER --- */}
      <Header  />

      {/* --- MAIN CONTENT --- */}
      <main className="min-h-screen bg-white text-gray-600 font-poppins pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          
          {/* 1. HERO SECTION */}
          <div className="text-center mb-24" data-aos="fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Build the Future of <span className="text-[#00C365]">Learning</span>
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto text-gray-600">
              We are always looking for passionate educators, creators, and innovators to help us bridge the gap between education and real-world skills.
            </p>
          </div>

          {/* 2. WHY JOIN US */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center" data-aos="fade-up">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Zap size={32} />, title: "Impact Driven", desc: "Every line of code and every lesson plan directly impacts a student's career trajectory." },
                { icon: <Heart size={32} />, title: "Culture of Growth", desc: "Just like our students, we believe in continuous learning. We invest in your upskilling." },
                { icon: <Users size={32} />, title: "Flexible & Collaborative", desc: "Work with a high-energy, mission-aligned team that values output over micromanagement." }
              ].map((perk, index) => (
                <div 
                  key={index} 
                  className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#00C365]/30 hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-[#00C365] mb-6 bg-[#00C365]/10 w-fit p-4 rounded-xl">{perk.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{perk.title}</h3>
                  <p className="text-gray-600">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. OPEN POSITIONS */}
          <div className="mb-24" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Open Positions</h2>
            <div className="space-y-10">
              {jobOpenings.map((dept, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-[#00C365] mb-4 uppercase tracking-wider text-sm">{dept.department}</h3>
                  <div className="space-y-4">
                    {dept.roles.map((role, rIndex) => (
                      <div 
                        key={rIndex} 
                        className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl border border-gray-200 hover:border-[#00C365] bg-white hover:shadow-md transition-all duration-300"
                      >
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#00C365] transition-colors">{role.title}</h4>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><Briefcase size={14} /> {role.type}</span>
                            <span className="flex items-center gap-1">📍 {role.location}</span>
                          </div>
                        </div>
                        
                        {/* FIXED: USING ONCLICK INSTEAD OF <a> TAG */}
                        <Button 
                          onClick={() => window.location.href = `mailto:${contactEmail}?subject=Application for ${role.title}`}
                          className="mt-4 sm:mt-0 bg-gray-900 hover:bg-[#00C365] text-white rounded-lg px-6 flex items-center gap-2 transition-colors cursor-pointer w-full sm:w-auto"
                        >
                          Apply Now <ArrowRight size={16} />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. DON'T SEE A FIT? */}
          <div 
            className="bg-gray-900 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden"
            data-aos="zoom-in"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C365]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <Mail className="mx-auto text-[#00C365] mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-4">Don't see a perfect fit?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                We are always excited to meet talented people. Send us your resume and let us know how you can add value to Hynox Campus.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                
                {/* FIXED: USING ONCLICK INSTEAD OF <a> TAG */}
                <Button 
                  onClick={() => window.location.href = `mailto:${contactEmail}?subject=Spontaneous Application - Hynox Campus`}
                  className="bg-[#00C365] hover:bg-[#00ad58] text-white font-bold h-12 rounded-xl px-8 shadow-xl shadow-[#00C365]/20 cursor-pointer w-full sm:w-auto"
                >
                  Email Your Resume
                </Button>
                
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </>
  )
}