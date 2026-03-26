"use client"

import { useState, useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Loader2, X } from "lucide-react" // Added Icons for the Modal

// Standard Components
import CollegeHeader from "@/components/college-header" 
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import CollegeLearningModel from "@/components/college-learning-model"
import CollegeStreams from "@/components/college-streams"
import TrainingPhase  from "@/components/training-phase"
import InternshipPhase from "@/components/internship-phase"
import CollegeLearningEcosystem from "@/components/college-learning-ecosystem"
import ComparisonSection from "@/components/comparison-section"
import CollegeBenefits from "@/components/college-benefits"
import ImplementationFlow from "@/components/implementation-flow"
import CollegeReadinessCta from "@/components/college-readiness-cta"

export default function CollegeProgramsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  // --- MODAL STATE ---
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // --- FORM HANDLERS ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    const data = {
      name: formData.username,
      email: formData.email,
      phone: formData.phone,
      _subject: `New College Partnership Request: ${formData.username}`,
      _template: "table",
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello.hynoxcampus@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ username: '', email: '', phone: '' });
      } else {
        setFormStatus('error');
        alert("Failed to send. Please try again.");
      }
    } catch (error) {
      setFormStatus('error');
      alert("Submission failed. Check your internet.");
    }
  };
Transform: (none)

  return (
    <div className="flex flex-col min-h-screen font-poppins relative bg-white overflow-x-hidden">
      
      {/* 1. BACKGROUND: LIGHT GRID */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none bg-white"
        style={{
          backgroundImage: `
            linear-gradient(rgba(226, 232, 240, 0.3) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(226, 232, 240, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* HEADER */}
      <CollegeHeader  />

      <main className="flex-grow flex items-center justify-center pt-28 pb-20 px-4 relative z-10">
        
        {/* --- 2. MAIN DARK CONTENT BOX --- */}
        <div 
          className="relative w-full max-w-3xl bg-[#0f111a] border border-slate-800 rounded-[40px] p-10 md:p-16 overflow-hidden shadow-2xl shadow-slate-400/20"
          data-aos="zoom-in-up" 
        >
          
          {/* Internal Glows */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#00C365]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center">
            
            {/* Top Tagline */}
            <div className="mb-8" data-aos="fade-down" data-aos-delay="200">
              <span className="text-[11px] font-bold tracking-[0.4em] text-[#00C365] uppercase">
                Hynox Campus
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-[32px] md:text-[60px] font-bold text-white tracking-tight leading-[1.1] mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Build Industry-Ready <br />
              Graduates. Not Just <br /> 
              Degree Holders.
            </h1>

            {/* Sub-headline */}
            <div data-aos="fade-up" data-aos-delay="400" className="space-y-3 mb-12">
              <p className="text-[#94a3b8] text-base md:text-xl font-medium">
                A 9-Month Industry Integrated Skill & Internship Program for Colleges
              </p>
              <p className="text-white/60 text-sm md:text-base font-semibold tracking-wider uppercase">
                Training. Internship. Career Pathway.
              </p>
            </div>

            {/* Action Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Button 
                onClick={() => setIsModalOpen(true)} // Opens the Modal
                className="h-12 px-8 rounded-full bg-white/10 border border-white/10 text-white hover:bg-[#00C365] hover:border-[#00C365] transition-all backdrop-blur-md font-bold text-sm md:text-base w-full sm:w-auto"
              >
                Partner With Hynox Campus
              </Button>
            </div>

          </div>
        </div>
      </main>

      {/* Page Sections */}
      <CollegeLearningModel />
      <CollegeStreams />
      <TrainingPhase />
      <InternshipPhase />
      <CollegeLearningEcosystem />
      <ComparisonSection />
      <CollegeBenefits />
      <ImplementationFlow />
      <CollegeReadinessCta />

      {/* FOOTER */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* --- MODAL POPUP (Same logic as Header) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#161b2c] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => {
                setIsModalOpen(false);
                setFormStatus('idle');
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content */}
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#00C365]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00C365] text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thanks for signing!</h3>
                <p className="text-slate-400">We have received your details and will get back to you shortly.</p>
                <Button 
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormStatus('idle');
                  }}
                  className="mt-6 bg-[#00C365] text-white hover:bg-[#00a052]"
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Partner With Us</h3>
                  <p className="text-slate-400 text-sm">Enter your details to schedule an institutional meeting.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Username</label>
                    <input
                      required
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full bg-[#0f111a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00C365] transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full bg-[#0f111a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00C365] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full bg-[#0f111a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-[#00C365] transition-colors"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please check your internet or try again.</p>
                  )}

                  <Button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    className="w-full bg-[#00C365] hover:bg-[#00a052] text-white font-bold h-12 mt-2"
                  >
                    {formStatus === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="animate-spin" size={18} /> Sending...
                      </span>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
      
    </div>
  )
}