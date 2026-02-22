"use client"

import { useState, useEffect } from "react"
import SchoolHeader from "@/components/SchoolHeader" 
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, Users, Lightbulb, BarChart3, Award, 
  Compass, Brain, Cpu, Trophy, Lock, X, Loader2, CheckCircle
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import AOS from 'aos'
import 'aos/dist/aos.css'
import WhyChooseSection from "@/components/WhyChooseSection"
import BenefitsSection from "@/components/BenefitsSection"
import ImplementationSection from "@/components/ImplementationSection"
import CTASection from "@/components/CTASection"
import ApplyModal from "@/components/ui/apply-modal" 

// --- DATA CONFIGURATION ---
const aboutFeatures = [
  { icon: <BookOpen className="w-6 h-6 text-[#00C365]" />, title: "4-Week Structured Model", description: "Organized curriculum with clear weekly milestones" },
  { icon: <Users className="w-6 h-6 text-[#00C365]" />, title: "Designed for Classes 8-12", description: "Age-appropriate content for secondary students" },
  { icon: <Lightbulb className="w-6 h-6 text-[#00C365]" />, title: "Interactive & Activity-Based", description: "Hands-on learning beyond textbooks" },
  { icon: <BarChart3 className="w-6 h-6 text-[#00C365]" />, title: "Skill Assessment & Mapping", description: "Personalized evaluation of student strengths" },
  { icon: <Award className="w-6 h-6 text-[#00C365]" />, title: "Certification & Recognition", description: "Recognized credentials upon completion" },
]

const journeyWeeks = [
  { week: 1, title: "Career & Future Awareness", icon: Compass, items: ["Careers Beyond Marks", "Introduction to STEM Careers"], color: "bg-[#0F172A] text-white" },
  { week: 2, title: "Foundational Skills", icon: Brain, items: ["Logical & Critical Thinking", "Technology Basics"], color: "bg-[#00C365] text-white" },
  { week: 3, title: "Guided Track Experience", icon: Cpu, items: ["Technology & Engineering Track", "Medical, Science & Business Track"], color: "bg-[#0F172A] text-white" },
  { week: 4, title: "Assessment & Recognition", icon: Trophy, items: ["Skill Evaluation", "Career Pathway Guidance"], color: "bg-[#FFB800] text-[#0F172A]" },
]

const sessions = [
  { id: "s1", title: "Session 1: Careers Beyond Marks", topics: ["Understanding non-traditional paths", "Skills vs. Degrees"], activities: ["Career mapping", "Discussion"], outcomes: ["Discover diverse possibilities"] },
  { id: "s2", title: "Session 2: Introduction to STEM", topics: ["STEM importance", "Career landscape"], activities: ["STEM quiz", "Case studies"], outcomes: ["Clear STEM understanding"] },
  { id: "s3", title: "Session 3: Logical & Critical Thinking", topics: ["Reasoning foundations", "Decomposition"], activities: ["Logic puzzles", "Challenges"], outcomes: ["Enhanced thinking"] },
  { id: "s4", title: "Session 4: Technology Basics", topics: ["Programming concepts", "Digital tools"], activities: ["Coding activity", "Literacy exercise"], outcomes: ["Tech fluency"] },
  { id: "s5", title: "Session 5: Tech & Engineering Track", topics: ["Engineering disciplines", "AI/IoT intro"], activities: ["Design challenge", "Brainstorming"], outcomes: ["Engineering mindset"] },
  { id: "s6", title: "Session 6: Medical, Science & Business Track", topics: ["Medical research", "Business fundamentals"], activities: ["Experiments", "Idea pitching"], outcomes: ["Diverse track awareness"] },
  { id: "s7", title: "Session 7: Assessment & Skill Evaluation", topics: ["Personalized assessment", "Interest mapping"], activities: ["Evaluation test", "Guidance interaction"], outcomes: ["Personalized skill profile"] },
  { id: "s8", title: "Session 8: Feedback & Pathway", topics: ["Program recap", "Continued learning"], activities: ["Feedback reflections", "Pathway planning"], outcomes: ["Clear future roadmap"] },
]

export default function SchoolProgramsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false) // Student SignIn
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false) // School Form
  const [isUnlocked, setIsUnlocked] = useState(false) 
  
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ username: '', email: '', phone: '' });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      const response = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('success');
        setFormData({ username: '', email: '', phone: '' });
      } else { setFormStatus('error'); }
    } catch (error) { setFormStatus('error'); }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins overflow-x-hidden">
      
      {/* BACKGROUND GRID */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <SchoolHeader isScrolled={isScrolled} />

      <main className="relative z-10 flex-grow">
        
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 flex items-center justify-center px-4">
          <div className="w-full max-w-4xl bg-[#0f111a] border border-slate-800 rounded-[40px] p-10 md:p-16 text-center relative shadow-2xl overflow-hidden" data-aos="zoom-in-up">
            <div className="relative z-10">
              <span className="text-[11px] font-bold tracking-[0.4em] text-[#00C365] uppercase mb-8 block" data-aos="fade-up">Hynox Campus</span>
              <h1 className="text-[32px] md:text-[56px] font-bold text-white leading-[1.1] mb-8" data-aos="fade-up" data-aos-delay="200">Preparing Students for <br /><span className="text-[#00C365]">Careers Beyond Marks</span></h1>
              <p className="text-[#94a3b8] text-base md:text-xl font-medium mb-12" data-aos="fade-up" data-aos-delay="400">A Structured 4-Week STEM Future Skills Program for Schools (Classes 8-12)</p>
              <div data-aos="fade-up" data-aos-delay="600">
                <Button onClick={() => setIsPartnerModalOpen(true)} className="h-12 px-8 rounded-full bg-white/10 border border-white/10 text-white hover:bg-[#00C365] font-bold transition-all">Request School Partnership</Button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-3xl md:text-[42px] font-bold text-[#0F172A] mb-12" data-aos="fade-up">What is Hynox Campus?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {aboutFeatures.map((f, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="bg-[#1a2138] border border-white/5 rounded-[32px] p-8 flex flex-col items-center shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-[#00C365]">{f.icon}</div>
                  <h3 className="text-white font-bold text-[16px] mb-3">{f.title}</h3>
                  <p className="text-[#94a3b8] text-[13px] font-medium leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY SECTION */}
        <section id="journey" className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-center text-3xl md:text-4xl font-black text-[#0F172A] mb-16" data-aos="fade-up">The 4-Week Journey</h2>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 border-l border-dashed border-slate-200 md:-translate-x-px" />
              <div className="space-y-12">
                {journeyWeeks.map((week, i) => (
                  <div key={i} className="relative flex items-start gap-6 md:gap-0" data-aos={i % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={i * 100}>
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${week.color}`}><week.icon size={16} /></div>
                    </div>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:pr-[calc(50%+2.5rem)] md:text-right" : "md:pl-[calc(50%+2.5rem)]"}`}>
                      <div className="bg-[#1a2138] border border-white/5 rounded-[32px] p-8 shadow-2xl transition-all hover:border-[#00C365]/20">
                        <span className="text-[#00C365] text-[10px] font-black uppercase tracking-wider">Week {week.week}</span>
                        <h3 className="text-white text-lg font-bold mt-2">{week.title}</h3>
                        <ul className={`mt-4 space-y-2 text-[#94a3b8] text-[13px] ${i % 2 === 0 ? "md:flex md:flex-col md:items-end" : ""}`}>
                          {week.items.map(item => <li key={item} className="flex items-center gap-2">{item}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SESSIONS SECTION */}
        <section id="sessions" className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-center text-3xl md:text-5xl font-black text-[#0F172A] mb-12" data-aos="fade-up">Inside the Program</h2>
            <Accordion type="single" collapsible defaultValue="s1" className="space-y-4">
              {sessions.map((session, idx) => (
                <AccordionItem key={session.id} value={session.id} data-aos="fade-up" data-aos-delay={idx * 100} className="rounded-[32px] border border-white/5 bg-[#1a2138] overflow-hidden shadow-2xl transition-all">
                  <AccordionTrigger className="px-8 py-6 text-left text-base font-bold text-white hover:text-[#00C365] hover:no-underline">
                    <div className="flex items-center gap-3">
                      {session.title}
                      {isUnlocked && <CheckCircle className="text-[#00C365] w-5 h-5 animate-in zoom-in" />}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 relative">
                    <div className={`grid gap-8 md:grid-cols-3 pt-6 border-t border-white/10 transition-all duration-700 ${!isUnlocked ? "blur-[10px] opacity-30 select-none pointer-events-none" : "blur-0 opacity-100"}`}>
                      <div>
                        <h4 className="mb-3 text-[11px] font-black uppercase text-[#00C365]">Topics</h4>
                        <ul className="text-slate-400 text-sm space-y-1">
                          {session.topics.map(t => <li key={t}>• {t}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-[11px] font-black uppercase text-[#FFB800]">Activities</h4>
                        <ul className="text-slate-400 text-sm space-y-1">
                          {session.activities.map(a => <li key={a}>• {a}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-3 text-[11px] font-black uppercase text-white">Outcomes</h4>
                        <ul className="text-slate-400 text-sm space-y-1">
                          {session.outcomes.map(o => <li key={o}>• {o}</li>)}
                        </ul>
                      </div>
                    </div>
                    {!isUnlocked && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <button onClick={() => setIsApplyModalOpen(true)} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-3 transition-all hover:scale-105 shadow-xl">
                          <Lock size={16} className="text-[#00C365]" />
                          <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">SignIn to Unlock</span>
                        </button>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <WhyChooseSection />
        <BenefitsSection />
        <ImplementationSection />
        <CTASection onPartnerClick={() => setIsPartnerModalOpen(true)} />
      </main>

      <Footer />

      {/* MODAL 1: STUDENT SIGNIN */}
      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        onSuccess={() => setIsUnlocked(true)} 
      />

      {/* MODAL 2: SCHOOL PARTNERSHIP */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#161b2c] border border-white/10 rounded-2xl p-8 shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => { setIsPartnerModalOpen(false); setFormStatus('idle'); }} className="absolute top-6 right-6 text-slate-400 hover:text-white"><X size={24} /></button>
            {formStatus === 'success' ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#00C365]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00C365]">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Thanks for signing!</h3>
                <p className="text-slate-400">Application delivered. We will contact you soon!</p>
                <Button onClick={() => setIsPartnerModalOpen(false)} className="mt-6 bg-[#00C365] w-full rounded-xl h-12">Close</Button>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">School Partnership</h3>
                <input required placeholder="School Name" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00C365] outline-none" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
                <input required type="email" placeholder="Email" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00C365] outline-none" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required type="tel" placeholder="Phone" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00C365] outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                <Button type="submit" disabled={formStatus === 'loading'} className="w-full bg-[#00C365] font-bold h-12 rounded-xl mt-4">
                  {formStatus === 'loading' ? <Loader2 className="animate-spin" /> : "Submit Partnership Request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}