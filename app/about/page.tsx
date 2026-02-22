"use client"

import { useEffect, useState } from "react"
import { Target, Lightbulb, GraduationCap, Users, Rocket, Globe } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import your components
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
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

    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* --- HEADER --- */}
      <Header  />

      {/* --- MAIN CONTENT --- */}
      <main>
        <section className="min-h-screen bg-white text-gray-600 font-poppins pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">

            {/* 1. HERO TEXT */}
            <div className="mb-20 text-center" data-aos="fade-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                About <span className="text-[#00C365]">Hynox Campus</span>
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto text-gray-600">
                Hynox Campus is a future-skills learning platform designed to help learners discover, build, and apply real-world skills — regardless of age, background, or academic stream.
              </p>
            </div>

            {/* 2. CORE BELIEFS */}
            <div 
              className="mb-20 space-y-6 border-l-4 border-[#00C365] pl-8 py-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-xl leading-relaxed text-gray-700">
                We believe education should not be limited to marks, memorization, or fixed career paths. Instead, it should help learners understand their interests, develop practical skills, and prepare for a fast-changing world.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-gray-900">
                Hynox Campus brings together STEM education, technology exposure, career discovery, and hands-on learning under one flexible campus model.
              </p>
            </div>

            {/* 3. VISION & MISSION GRID */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Vision */}
              <div 
                className="bg-gray-900 p-8 lg:p-10 rounded-2xl border border-gray-800 hover:border-[#00C365]/40 transition-all duration-300 group shadow-lg"
                data-aos="fade-right"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#00C365]/10 rounded-lg group-hover:bg-[#00C365]/20 transition-colors">
                    <Globe className="text-[#00C365]" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-300">
                  To create a single learning ecosystem where school students, college students, and open learners can explore career paths, build future-ready skills, and grow with confidence.
                </p>
              </div>

              {/* Mission */}
              <div 
                className="bg-gray-900 p-8 lg:p-10 rounded-2xl border border-gray-800 hover:border-[#00C365]/40 transition-all duration-300 group shadow-lg"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#00C365]/10 rounded-lg group-hover:bg-[#00C365]/20 transition-colors">
                    <Target className="text-[#00C365]" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <ul className="space-y-4 text-gray-300 text-lg">
                  {[
                    "Introduce learners to real-world skills at the right stage",
                    "Bridge the gap between education and industry",
                    "Promote hands-on, experiential learning",
                    "Support the NEP 2020 multidisciplinary approach",
                    "Make career discovery accessible and practical"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#00C365] mt-1.5 font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. WHO IS IT FOR? */}
            <div className="mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center" data-aos="fade-up">Who Hynox Campus Is For</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div data-aos="fade-up" data-aos-delay="0">
                  <AudienceCard 
                    icon={<GraduationCap size={36} />}
                    title="School Students"
                    subtitle="We help school students:"
                    points={[
                      "Understand careers beyond marks",
                      "Explore STEM and emerging tech",
                      "Build logical thinking skills",
                      "Gain early real-world exposure"
                    ]}
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                  <AudienceCard 
                    icon={<Users size={36} />}
                    title="College Students"
                    subtitle="We support college students by:"
                    points={[
                      "Providing industry-oriented skills",
                      "Offering hands-on projects",
                      "Creating internship opportunities",
                      "Preparing for real work environments"
                    ]}
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <AudienceCard 
                    icon={<Lightbulb size={36} />}
                    title="Open Learners"
                    subtitle="We welcome anyone who wants to:"
                    points={[
                      "Learn new skills",
                      "Upskill or switch careers",
                      "Explore technology & innovation",
                      "Build practical knowledge at own pace"
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* 5. WHY DIFFERENT */}
            <div 
              className="mb-20 bg-gray-900 p-8 lg:p-12 rounded-3xl border border-gray-800 relative overflow-hidden shadow-xl"
              data-aos="zoom-in-up"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C365]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="text-3xl font-bold text-white mb-10 text-center relative z-10">What Makes Hynox Campus Different</h2>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                {[
                  "One Campus, Multiple Paths – Learn, explore, and grow continuously",
                  "Career Discovery First – Choose skills with clarity, not confusion",
                  "Learn by Doing – Projects, activities, and real-world exposure",
                  "STEM & Technology Focused – Aligned with future industry needs",
                  "Inclusive & Flexible – Open to all age groups and backgrounds",
                  "Industry-Connected Learning – From awareness to application"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={index * 50}>
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#00C365] shrink-0 shadow-[0_0_8px_#00C365]" />
                    <p className="text-gray-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. LEARNING APPROACH */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8" data-aos="fade-right">
                <h2 className="text-3xl font-bold text-gray-900">Our Learning Approach</h2>
                <p className="italic text-gray-600 text-lg">At Hynox Campus, learning is:</p>
                <ul className="space-y-4 font-medium text-gray-700 text-lg">
                  <li className="flex items-center gap-3"><Rocket size={24} className="text-[#00C365]"/> Practical, not theoretical</li>
                  <li className="flex items-center gap-3"><Rocket size={24} className="text-[#00C365]"/> Skill-focused, not exam-focused</li>
                  <li className="flex items-center gap-3"><Rocket size={24} className="text-[#00C365]"/> Guided, not overwhelming</li>
                  <li className="flex items-center gap-3"><Rocket size={24} className="text-[#00C365]"/> Designed to build confidence</li>
                </ul>
                <div className="pt-6 border-l-4 border-[#00C365] pl-6">
                  <p className="text-gray-700 text-lg">
                    We don’t believe in forcing learners into predefined paths. <br/>
                    <span className="text-gray-900 font-semibold">We help them discover the right path and walk it with support.</span>
                  </p>
                </div>
              </div>

              <div 
                className="bg-gradient-to-br from-[#00C365] to-[#004d29] p-10 rounded-2xl text-white shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h2 className="text-3xl font-bold mb-6 relative z-10">Our Promise</h2>
                <p className="text-xl leading-relaxed font-medium opacity-95 relative z-10">
                  "Hynox Campus is not just a training platform. It is a learning journey that grows with the learner — from curiosity to capability."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <Footer />
    </>
  )
}

// --- HELPER COMPONENT ---

interface AudienceCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  points: string[]
}

function AudienceCard({ icon, title, subtitle, points }: AudienceCardProps) {
  return (
    <div className="p-8 rounded-xl border border-gray-800 bg-gray-900 hover:border-[#00C365] transition-all duration-300 group flex flex-col h-full shadow-md">
      <div className="mb-5 text-gray-400 group-hover:text-[#00C365] transition-colors bg-white/5 w-fit p-3 rounded-lg group-hover:bg-[#00C365]/10">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="mb-5 text-sm text-[#00C365] font-bold uppercase tracking-wider">{subtitle}</p>
      <ul className="space-y-3 text-gray-400 text-sm flex-grow">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-white/40">•</span> {p}
          </li>
        ))}
      </ul>
    </div>
  )
}