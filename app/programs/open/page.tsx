"use client"

import { useState, useEffect } from "react"
import { Calendar, ArrowRight, X } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Header from "@/components/header"
import Footer from "@/components/footer"
import ApplyModal from "@/components/ui/apply-modal"

// Program Data with description & features for Popup
const programsData = [
  {
    id: 1, title: "UI/UX Design", duration: "25 WEEKS", originalPrice: "₹85,000", currentPrice: "₹74,990", category: "Design",
    desc: "Master the art of creating functional and aesthetically pleasing products.",
    features: ["Design Thinking Process", "Prototyping & Wireframing", "Material Design Guidelines", "Product Lifecycle Management", "Portfolio Building"]
  },
  {
    id: 2, title: "Product Design", duration: "20 WEEKS", originalPrice: "₹60,000", currentPrice: "₹49,990", category: "Design",
    desc: "Master the art of creating functional and aesthetically pleasing products.",
    features: ["Design Thinking Process", "Prototyping & Wireframing", "Material Design Guidelines", "Product Lifecycle Management", "Portfolio Building"]
  },
  {
    id: 3, title: "D2C Mentorship", duration: "28 WEEKS", originalPrice: "₹60,000", currentPrice: "₹49,990", category: "Business",
    desc: "Learn how to build and scale a direct-to-consumer brand successfully.",
    features: ["Brand Strategy", "Performance Marketing", "Supply Chain Basics", "Customer Retention", "Scaling Operations"]
  },
  {
    id: 4, title: "Full Stack Dev", duration: "30 WEEKS", originalPrice: "₹90,000", currentPrice: "₹79,990", category: "Tech & Data",
    desc: "Become a complete developer with frontend and backend mastery.",
    features: ["MERN Stack", "API Development", "Database Management", "System Design", "Cloud Deployment"]
  },
  {
    id: 5, title: "Digital Marketing", duration: "12 WEEKS", originalPrice: "₹45,000", currentPrice: "₹34,990", category: "Marketing",
    desc: "Drive growth and master online marketing channels.",
    features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics & Reporting"]
  },
  {
    id: 6, title: "Management Consulting", duration: "25 WEEKS", originalPrice: "₹80,000", currentPrice: "₹59,990", category: "Business",
    desc: "Solve complex business problems and drive organizational success.",
    features: ["Problem Solving", "Data Analysis", "Client Communication", "Strategy Frameworks", "Financial Modeling"]
  },
]

const categories = ["All", "Design", "Business", "Marketing", "Tech & Data"]

export default function OpenProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  // Popup state for Program Details
  const [selectedProgram, setSelectedProgram] = useState<typeof programsData[0] | null>(null)
  
  // State for Apply Modal
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
  }, [])

  // Filter Logic with bug fix (.trim)
  const filteredPrograms = programsData.filter((program) => 
    activeCategory === "All" 
      ? true 
      : program.category.trim().toLowerCase() === activeCategory.trim().toLowerCase()
  )

  return (
    <div className="flex flex-col min-h-screen font-poppins bg-white relative">
      
      {/* --- HEADER --- */}
      <div className="relative z-20 bg-white">
        <Header />
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow pt-24 pb-40 relative z-10">
        
        {/* Very Light Background Grid */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            
          <div className="mb-12" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Extensive Programs
            </h1>
            <p className="text-slate-500 text-lg font-medium">
              Build a strong career with our focused programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <div 
                key={program.id}
                className="bg-[#0b131e] rounded-[16px] p-6 flex flex-col h-[230px] shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                data-aos="fade-up" 
                data-aos-delay={index * 50}
              >
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-3">{program.title}</h3>
                  
                  <div className="flex items-center text-slate-400 text-[11px] font-semibold tracking-wider mb-5 uppercase">
                    <Calendar size={14} className="mr-2" />
                    {program.duration}
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-[#00C365] font-bold text-[18px] line-through opacity-90 decoration-2">
                      {program.originalPrice}
                    </span>
                    <span className="text-white font-bold text-[20px]">
                      {program.currentPrice}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProgram(program)}
                  className="inline-flex items-center text-[#00E5FF] hover:text-[#00C365] text-[14px] font-medium transition-colors mt-auto w-fit"
                >
                  Preview <ArrowRight size={16} className="ml-1.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* --- FLOATING FILTER BAR --- */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40 w-[90%] md:w-auto">
        <div className="bg-[#222938] p-1.5 rounded-full shadow-2xl flex items-center gap-1 border border-slate-700/50 overflow-x-auto hide-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? "bg-[#00C365] text-white shadow-md"
                  : "text-slate-300 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-20 bg-white">
        <Footer />
      </div>

      {/* --- POPUP MODAL FOR PROGRAM DETAILS --- */}
      {selectedProgram && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-[24px] w-full max-w-[900px] p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-[32px] font-bold text-black tracking-tight mb-2">{selectedProgram.title}</h2>
                <p className="text-[#64748B] text-[15px]">
                  {selectedProgram.desc}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 text-[13px] font-medium">
                  <Calendar size={14} className="mr-2 opacity-70" />
                  {selectedProgram.duration.toLowerCase()}
                </div>
                <button 
                  onClick={() => setSelectedProgram(null)} 
                  className="bg-black text-white p-1.5 rounded-lg hover:bg-gray-800 transition"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <hr className="border-gray-100 my-6" />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0b131e] rounded-[16px] aspect-square relative overflow-hidden flex items-center justify-center">
                <div 
                  className="absolute inset-0 opacity-10" 
                  style={{ 
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                  }}
                />
                <div className="relative w-20 h-20 z-10">
                  <div className="absolute top-0 right-0 w-[60px] h-[60px] border-[2px] border-[#00C365]"></div>
                  <div className="absolute bottom-0 left-0 w-[60px] h-[60px] bg-[#00C365]"></div>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="text-[#94A3B8] text-[14px] font-medium mb-4">
                  What is encompassed within this program
                </h4>
                
                <div className="border border-gray-200 rounded-[16px] p-6 mb-6 flex-grow">
                  <ul className="space-y-4 text-[#475569] text-[14px]">
                    {selectedProgram.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center before:content-[''] before:w-[5px] before:h-[5px] before:bg-gray-400 before:rounded-full before:mr-3">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end mt-auto">
                  <button 
                    onClick={() => setIsApplyModalOpen(true)}
                    className="border border-gray-300 text-black px-5 py-2 rounded-[6px] text-[13px] font-medium hover:bg-gray-50 transition"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* --- APPLY MODAL --- */}
      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
      />

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}