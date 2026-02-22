"use client"

import { useEffect } from "react"
import { Search, Compass, Hammer, Briefcase as BriefcaseIcon, LucideIcon, CheckCircle2, ArrowRight } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link"; 

// --- Data Types ---
interface AudienceCardItem {
  emoji: string
  title: string
  subtitle?: string
  description: string
  points: string[]
  link: string 
}

interface WorkflowStepItem {
  icon: LucideIcon
  title: string
  points: string[]
}

// --- Data Configuration ---
const audienceData: AudienceCardItem[] = [
  {
    emoji: "🎒",
    title: "Schools",
    subtitle: "Grades 8–12",
    description: "Foundational years to spark curiosity.",
    points: [
      "Early career awareness",
      "Building logical thinking",
      "NEP 2020 aligned",
    ],
    // Points directly to your programs/page.tsx
    link: "/programs", 
  },
  {
    emoji: "🎓",
    title: "Colleges",
    subtitle: "Undergrads & Grads",
    description: "Bridging theory and industry.",
    points: [
      "Industry-ready skill tracks",
      "Live projects & internships",
      "Placement-oriented",
    ],
    // Points directly to your programs/page.tsx
    link: "/programs", 
  },
  {
    emoji: "🚀",
    title: "Open Learners",
    subtitle: "Pro & Dropouts",
    description: "For those looking to pivot or upskill.",
    points: [
      "Upskilling for transitions",
      "Practical tech programs",
      "Learn by building products",
    ],
    // Points directly to your programs/page.tsx
    link: "/programs", 
  },
]

const workflowData: WorkflowStepItem[] = [
  {
    icon: Search,
    title: "1. Discover",
    points: ["Career awareness", "STEM exposure"],
  },
  {
    icon: Compass,
    title: "2. Explore",
    points: ["Industry skill tracks", "Live Projects"],
  },
  {
    icon: Hammer,
    title: "3. Build",
    points: ["Real-world internships", "Portfolio building"],
  },
  {
    icon: BriefcaseIcon,
    title: "4. Experience",
    points: ["Placement support", "Outcome appreciation"],
  },
]

export default function AudienceSection() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* ================= SECTION 1: Audiences ================= */}
      <section className="py-20 bg-white text-gray-900 font-poppins relative overflow-hidden">
        
        {/* Decorative Blur */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00C365]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center md:text-left mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-[42px] font-bold mb-4 text-gray-900 tracking-tight">
              Who Is <span className="text-[#00C365]">Hynox Campus</span> For?
            </h2>
            <p className="text-gray-500 font-medium text-base max-w-2xl">
              Tailored learning paths designed to meet you exactly where you are.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {audienceData.map((item, index) => (
              <div 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group bg-[#1a2138] rounded-[32px] p-8 flex flex-col h-full shadow-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                <div className="relative z-10 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl filter drop-shadow-md">{item.emoji}</span>
                    {item.subtitle && (
                      <span className="px-3 py-1 bg-white/5 border border-white/10 text-[#00C365] text-[10px] font-black uppercase tracking-widest rounded-full">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00C365] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="h-px w-full bg-white/10 mb-6" />

                <ul className="space-y-4 flex-grow relative z-10 mb-8">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#00C365] shrink-0 mt-0.5" />
                      <span className="text-[#94a3b8] text-[13.5px] font-medium leading-relaxed group-hover:text-white transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* --- "KNOW MORE" BUTTON --- */}
                <div className="relative z-10 mt-auto pt-2">
                  <Link href={item.link}>
                    <button className="w-full py-3.5 rounded-xl border border-white/10 text-white font-semibold text-sm hover:bg-[#00C365] hover:border-[#00C365] hover:shadow-[0_0_20px_rgba(0,195,101,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer">
                      Know More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: Workflow ================= */}
      <section className="py-20 bg-white text-gray-900 font-poppins relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center md:text-left mb-16" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
              How Hynox Campus Works
            </h2>
            <p className="text-gray-600">Our proven 4-step methodology for success.</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00C365]/40 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {workflowData.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center lg:items-start lg:text-left group"
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                  >
                    <div className="mb-6 relative">
                        <div className="w-20 h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-[#00C365] shadow-sm group-hover:border-[#00C365] group-hover:shadow-[0_0_30px_rgba(0,195,101,0.2)] transition-all duration-300 relative z-10">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#00C365] transition-colors">
                      {step.title}
                    </h3>
                    
                    <ul className="space-y-3">
                      {step.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#00C365] transition-colors shrink-0"></span>
                            <span className="text-gray-600 text-sm font-medium leading-snug group-hover:text-gray-900 transition-colors">
                              {point}
                            </span>
                          </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}