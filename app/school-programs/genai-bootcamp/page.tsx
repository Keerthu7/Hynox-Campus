"use client"

import { useEffect } from "react"
import Link from "next/link"
import SchoolHeader from "@/components/SchoolHeader"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Shield, Rocket, Download } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

// ── DATA ─────────────────────────────────────────────────────

const ACTS = [
  {
    act: "Act 1",
    title: "WOW THEM",
    duration: "45 mins",
    icon: <Rocket className="w-5 h-5" />,
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-500",
    description:
      "Live GenAI demos that genuinely surprise students. AI writes about their school. AI translates. AI generates images and songs. Students lean forward from the very first minute.",
  },
  {
    act: "Act 2",
    title: "INVOLVE THEM",
    duration: "60 mins",
    icon: <Zap className="w-5 h-5" />,
    color: "text-teal-700",
    bg: "bg-teal-50",
    border: "border-teal-500",
    description:
      "3 rounds of hands-on activities — Prompt Battle, Predict the AI and Real vs Fake challenge. Every student writes, participates and thinks actively.",
  },
  {
    act: "Act 3",
    title: "EMPOWER THEM",
    duration: "45 mins",
    icon: <Shield className="w-5 h-5" />,
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-500",
    description:
      "Students design their own GenAI product idea, pitch it to the class in 45 seconds and receive a certificate of completion with their idea name on it.",
  },
];

const TIERS = [
  {
    name: "Junior Innovators",
    grade: "Grade 6 – 7",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-500",
    focus: "Fun, stories and AI in daily life. Spark curiosity and excitement around AI.",
  },
  {
    name: "Tech Explorers",
    grade: "Grade 8 – 9",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-500",
    focus: "How AI works, prompt engineering and hands-on AI tools. Build real understanding.",
  },
  {
    name: "Future Builders",
    grade: "Grade 10 – 12",
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-500",
    focus: "LLMs, AI careers, prompt engineering and designing a real AI startup concept.",
  },
];

const STUDENT_BENEFITS = [
  "Live exposure to ChatGPT, Gemini and AI tools",
  "Prompt Engineering skills through live challenges",
  "Their own GenAI product idea designed from scratch",
  "Certificate of Completion with their name",
  "AI thinking skills they carry beyond the classroom",
];

const SCHOOL_BENEFITS = [
  "Zero infrastructure requirement — just a projector",
  "Fully managed session by a trained facilitator",
  "Student feedback report after every session",
  "Future-ready institution positioning",
  "Option to scale to a full week or month program",
];

const PROGRAM_DETAILS = [
  ["Duration",        "1 day", "bg-[#00C365]/5"],
  ["Grade",           "Grade 6 to 12", "bg-white"],
  ["Batch Size",      "25 to 60 Students", "bg-[#00C365]/5"],
  ["Infrastructure",  "Projector only", "bg-white"],
  ["Certification",   "Yes — per participant", "bg-[#00C365]/5"],
  ["Availability",    "Weekdays and Weekends", "bg-white"],
];

const STEPS = [
  "Fill the Partnership Request Form",
  "Our team will contact you within 24h",
  "We align on session date & tier",
  "Session delivered by facilitator",
  "Feedback report shared with school",
];

// ── COMPONENT ────────────────────────────────────────────────

const GenAIBootcamp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins overflow-x-hidden">
      <SchoolHeader />

      <main className="relative z-10 flex-grow">
        
        {/* ── HERO ───────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-4 flex items-center justify-center relative overflow-hidden bg-white">
           <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.5) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="w-full max-w-4xl bg-[#0f111a] border border-slate-800 rounded-[32px] p-8 md:p-14 text-center relative shadow-2xl overflow-hidden" data-aos="zoom-in-up">
            <div className="relative z-10">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#00C365] uppercase mb-6 block" data-aos="fade-up">One-Day Program</span>
              <h1 className="text-[28px] md:text-[48px] font-bold text-white leading-[1.2] mb-6">
                GenAI Bootcamp for <br /><span className="text-[#00C365]">School Students</span>
              </h1>
              <p className="text-[#94a3b8] text-base md:text-xl font-medium mb-10 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                2.5 Hours. No Laptops. Real AI Skills. <br />
                A high-energy session designed for curious minds.
              </p>
              <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="h-12 px-8 rounded-xl bg-[#00C365] hover:bg-[#00ad58] text-white font-bold text-base transition-all active:scale-95 shadow-lg shadow-[#00C365]/20">
                    Request a Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT IS THIS PROGRAM ───────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-3xl text-center" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8">What is This <span className="text-[#00C365]">Program?</span></h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              <p>
                A classroom-based AI awareness and skill session for students from Grade 6 to Grade 12.
                Delivered by a trained facilitator using just a projector — <span className="text-[#0F172A] font-bold">no student
                laptops needed.</span>
              </p>
              <p>
                Students walk away having experienced AI firsthand, designed their own
                AI product idea and earned a certificate of completion.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3-ACT FORMAT ───────────────────────────────── */}
        <section className="py-16 bg-slate-50 relative overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">The 3-Act Learning Format</h2>
              <p className="text-slate-500 text-base font-medium">Designed to keep every student engaged throughout the session.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ACTS.map((a, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                  className={`bg-white border-b-4 ${a.border} rounded-[24px] p-6 shadow-lg transition-all duration-500 hover:-translate-y-1`}
                >
                  <div className={`w-10 h-10 ${a.bg} ${a.color} rounded-lg flex items-center justify-center mb-4`}>
                    {a.icon}
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${a.color} block mb-2`}>{a.act}</span>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">{a.title}</h3>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 mb-4`}>
                    {a.duration}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIERS ──────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">Program Tiers</h2>
              <p className="text-slate-500 text-base font-medium">Customised depth based on the grade group.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TIERS.map((t, i) => (
                <div
                  key={i}
                  data-aos="zoom-in"
                  data-aos-delay={i * 200}
                  className={`border border-slate-100 rounded-[24px] p-6 flex flex-col gap-4 shadow-xl transition-all hover:bg-slate-50/50`}
                >
                  <h3 className={`text-xl font-bold ${t.color}`}>{t.name}</h3>
                  <span className={`px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest w-fit border ${t.border} ${t.bg} ${t.color}`}>
                    {t.grade}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium italic">"{t.focus}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ───────────────────────────────────── */}
        <section className="py-16 bg-slate-900 text-white overflow-hidden relative">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div data-aos="fade-right">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">What <span className="text-[#00C365]">Students Get</span></h2>
                <ul className="space-y-4">
                  {STUDENT_BENEFITS.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-base font-medium group">
                      <div className="w-5 h-5 rounded-full bg-[#00C365]/20 flex items-center justify-center text-[#00C365] flex-shrink-0 mt-0.5 transition-all group-hover:scale-110">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">What <span className="text-[#00C365]">Schools Get</span></h2>
                <ul className="space-y-4">
                  {SCHOOL_BENEFITS.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-base font-medium group">
                      <div className="w-5 h-5 rounded-full bg-[#00C365]/20 flex items-center justify-center text-[#00C365] flex-shrink-0 mt-0.5 transition-all group-hover:scale-110">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00C365] rounded-full blur-[120px] opacity-10" />
        </section>

        {/* ── PROGRAM DETAILS ────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8 text-center" data-aos="fade-up">Program <span className="text-[#00C365]">Details</span></h2>
            <div className="rounded-[24px] overflow-hidden border border-slate-100 shadow-xl" data-aos="fade-up">
              {PROGRAM_DETAILS.map(([label, value, bg], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 md:grid-cols-3 p-5 md:p-6 items-center gap-2 ${bg} border-b border-slate-50 last:border-0`}
                >
                  <span className="text-[10px] font-black uppercase text-[#00C365] tracking-widest">{label}</span>
                  <span className="md:col-span-2 text-[#0F172A] font-bold text-base md:text-lg">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO GET STARTED ─────────────────────────── */}
        <section className="py-16 bg-slate-50 relative">
          <div className="container mx-auto px-6 max-w-3xl text-center mb-10" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">How to Get Started</h2>
            <p className="text-slate-500 text-base font-medium">Simple 5-step process to transform your classroom.</p>
          </div>
          
          <div className="container mx-auto px-6 max-w-3xl space-y-3">
            {STEPS.map((step, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex items-center gap-5 bg-white p-5 md:p-6 rounded-[24px] border border-slate-100 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 bg-[#00C365] text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md shadow-[#00C365]/20 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <p className="text-slate-700 font-bold text-base md:text-lg">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────── */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-4xl mx-auto bg-[#00C365] rounded-[40px] p-10 md:p-16 text-center text-white relative shadow-2xl overflow-hidden shadow-[#00C365]/30" data-aos="zoom-in">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-black leading-tight mb-6">
                Ready to Bring GenAI to <br />Your Students?
              </h2>
              <p className="text-white/80 text-base md:text-xl font-medium mb-10 max-w-xl mx-auto">
                No laptops. No complexity. Just 2.5 hours that your students will never forget.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link href="/contact">
                  <Button className="h-14 px-10 rounded-xl bg-white text-[#00C365] hover:bg-slate-50 font-black text-lg shadow-xl shadow-black/10 transition-all active:scale-95">
                    Request a Session
                  </Button>
                </Link>
                <Link href="/contact" className="flex items-center gap-2 group text-white/90 hover:text-white transition-colors font-bold text-base">
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Overview</span>
                </Link>
              </div>
            </div>
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-[80px]" />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default GenAIBootcamp;
