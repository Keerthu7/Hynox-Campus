"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import SchoolHeader from "@/components/SchoolHeader"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Shield, Rocket, Download, ArrowLeft, PlayCircle, Layers, Database, Workflow, Cpu, ChevronRight, Loader2, ChevronDown, Award, Globe, MessageSquare } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import { workshopApply } from "@/actions/workshop-apply"

// ── DATA ─────────────────────────────────────────────────────

const ACTS = [
  {
    act: "Act 1",
    title: "Foundations of Automation",
    duration: "45 mins",
    icon: <Layers className="w-5 h-5" />,
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-500",
    description: "Understanding Nodes, Triggers, and Actions. Setting up your first n8n environment and building a basic connection.",
  },
  {
    act: "Act 2",
    title: "Data flow & Webhooks",
    duration: "60 mins",
    icon: <Database className="w-5 h-5" />,
    color: "text-teal-700",
    bg: "bg-teal-50",
    border: "border-teal-500",
    description: "How to capture data from any app and move it across platforms using JSON and Webhooks. Mastery of mapping.",
  },
  {
    act: "Act 3",
    title: "AI Integration",
    duration: "45 mins",
    icon: <Cpu className="w-5 h-5" />,
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-500",
    description: "Connecting AI models like ChatGPT/Claude to your workflows for intelligent automations and production agents.",
  },
];

const PROGRAM_DETAILS = [
  ["Duration",        "4 Hours Intensive", "bg-[#00C365]/5"],
  ["Level",           "Beginner to Intermediate", "bg-white"],
  ["Tools",           "n8n Desktop/Cloud, OpenAI", "bg-[#00C365]/5"],
  ["Certification",   "n8n Automation Professional", "bg-white"],
  ["Projects",        "3 Real-world Automations", "bg-[#00C365]/5"],
];

// ── COMPONENT ────────────────────────────────────────────────

const N8NWorkshop = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" })
  }, [])

  const formRef = useRef<HTMLDivElement>(null)
  
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Flow State
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [showPricing, setShowPricing] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [selectedOption, setSelectedOption] = useState<'standard' | 'premium' | null>(null)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle')
  const [pendingFormData, setPendingFormData] = useState<FormData | null>(null)
  const [utrNumber, setUtrNumber] = useState('')
  const [utrError, setUtrError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('loading')
    
    // Save form data for later submission after payment
    const formData = new FormData(e.currentTarget)
    setPendingFormData(formData)
    
    // Show pricing modal instead of immediate submission
    setTimeout(() => {
      setShowPricing(true)
      setFormStatus('idle')
    }, 800)
  }

  const handleSelectOption = (option: 'standard' | 'premium') => {
    setSelectedOption(option)
    setShowPricing(false)
    setShowPayment(true)
  }

  const handlePaymentComplete = async () => {
    if (!utrNumber || utrNumber.length < 10) {
      setUtrError(true)
      return
    }
    setUtrError(false)
    setPaymentStatus('processing')
    
    // Mock processing delay
    setTimeout(async () => {
      setPaymentStatus('success')
      
      // Final submission of the form data
      if (pendingFormData) {
        // We append the package info and UTR to the form data
        pendingFormData.append('package', selectedOption === 'standard' ? 'Standard (₹199)' : 'Premium (₹298)')
        pendingFormData.append('utr_number', utrNumber)
        await workshopApply(pendingFormData)
      }
      
      // Final transition to success state
      setTimeout(() => {
        setShowPayment(false)
        setFormStatus('success')
      }, 1500)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <SchoolHeader />

      <main className="relative z-10 flex-grow">
        
        {/* HERO SECTION */}
        <section className="pt-32 pb-16 px-4 flex items-center justify-center relative overflow-hidden bg-white">
           <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.5) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="w-full max-w-4xl bg-[#0f111a] border border-slate-800 rounded-[32px] p-8 md:p-14 text-center relative shadow-2xl overflow-hidden" data-aos="zoom-in-up">
            <Link href="/workshop" className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-[#00C365] transition-colors text-sm font-bold group/back font-poppins">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover/back:-translate-x-1" />
              <span>Back to Workshops</span>
            </Link>
            <div className="relative z-10 font-poppins">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#00C365] uppercase mb-6 block" data-aos="fade-up">Domain: Automation</span>
              <h1 className="text-[28px] md:text-[48px] font-bold text-white leading-[1.2] mb-6">
                Master <span className="text-[#00C365]">n8n Automations</span> & AI Workflows
              </h1>
              <p className="text-[#94a3b8] text-base md:text-xl font-medium mb-10 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                Stop doing repetitive tasks. Build powerful, self-running systems using the world's best low-code automation tool.
              </p>
              <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToForm}
                  className="h-12 px-8 rounded-xl bg-[#00C365] hover:bg-[#00ad58] text-white font-bold text-base transition-all active:scale-95 shadow-lg shadow-[#00C365]/20"
                >
                  Apply Now
                </Button>
                <button className="flex items-center justify-center gap-2 text-white font-bold text-base px-6 hover:text-[#00C365] transition-colors">
                  <PlayCircle className="w-5 h-5 text-[#00C365]" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3-ACT FORMAT */}
        <section className="py-16 bg-slate-50 relative overflow-hidden font-poppins">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">Workshop Modules</h2>
              <p className="text-slate-500 text-base font-medium">From zero to automation pro in 3 intensive acts.</p>
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

        {/* DETAILS */}
        <section className="py-16 bg-white font-poppins">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-8 text-center" data-aos="fade-up">Workshop <span className="text-[#00C365]">Details</span></h2>
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

        {/* APPLICATION FORM SECTION */}
        <section ref={formRef} id="apply-form" className="py-24 bg-white relative">
           <div className="container mx-auto px-6 max-w-4xl">
             <div className="text-center mb-16" data-aos="fade-up">
               <h2 className="text-[32px] md:text-[48px] font-bold text-[#0F172A] mb-4 tracking-tight">Apply for the Workshop</h2>
               <p className="text-slate-500 text-lg md:text-xl font-medium">Fill in your details below and let's start your journey</p>
             </div>

             <div className="bg-white rounded-[24px] p-8 md:p-16 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 relative min-h-[400px]" data-aos="fade-up">
               
               {/* MODAL 1: PRICING SELECTION */}
               {showPricing && (
                 <div className="absolute inset-0 z-[100] bg-white/95 backdrop-blur-md rounded-[24px] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
                    <div className="w-full max-w-xl">
                       <h3 className="text-[22px] font-bold text-center text-[#0F172A] mb-8">Select Your Workshop Package</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Standard Option */}
                          <div 
                            onClick={() => handleSelectOption('standard')}
                            className="bg-zinc-50 border-2 border-slate-100 rounded-2xl p-6 hover:border-[#00C365] hover:bg-white hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                              <Zap className="w-8 h-8" />
                            </div>
                            <h4 className="text-lg font-bold text-slate-800 mb-1">Standard</h4>
                            <div className="flex items-baseline gap-1 mb-4">
                               <span className="text-3xl font-black text-black">₹199</span>
                               <span className="text-slate-500 text-xs">/only</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                               <li className="flex items-center gap-2 text-[13px] text-slate-600 font-medium">
                                 <CheckCircle className="w-3.5 h-3.5 text-[#00C365]" /> 4h Workshop Access
                               </li>
                               <li className="flex items-center gap-2 text-[13px] text-slate-600 font-medium">
                                 <CheckCircle className="w-3.5 h-3.5 text-[#00C365]" /> Project Files
                               </li>
                               <li className="flex items-center gap-2 text-[13px] text-slate-600 font-medium">
                                 <CheckCircle className="w-3.5 h-3.5 text-[#00C365]" /> Community Access
                               </li>
                            </ul>
                            <Button className="w-full h-10 rounded-lg bg-white border border-slate-200 text-black font-bold group-hover:bg-black group-hover:text-white transition-colors text-sm">Select Package</Button>
                          </div>

                          {/* Premium Option */}
                          <div 
                            onClick={() => handleSelectOption('premium')}
                            className="bg-black border-2 border-zinc-800 rounded-2xl p-6 hover:border-[#00C365] hover:shadow-[0_16px_32px_-8px_rgba(0,195,101,0.2)] transition-all cursor-pointer group relative overflow-hidden"
                          >
                            <div className="absolute -top-1 -right-1 bg-[#00C365] text-white text-[9px] font-black uppercase tracking-tighter px-3 py-1 rounded-bl-lg z-20">
                              Recommended
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">Workshop + Cert</h4>
                            <div className="flex items-baseline gap-1 mb-4">
                               <span className="text-3xl font-black text-[#00C365]">₹298</span>
                            </div>
                            <ul className="space-y-2 mb-6">
                               <li className="flex items-center gap-2 text-[13px] text-zinc-400 font-medium">
                                 <CheckCircle className="w-3.5 h-3.5 text-[#00C365]" /> All Standard Perks
                               </li>
                               <li className="flex items-center gap-2 text-[13px] text-zinc-400 font-medium">
                                 <CheckCircle className="w-3.5 h-3.5 text-[#00C365]" /> Official Certificate
                               </li>
                               <li className="flex items-center gap-2 text-[13px] text-zinc-400 font-medium">
                                 <CheckCircle className="w-3.5 h-3.5 text-[#00C365]" /> Project Review
                               </li>
                            </ul>
                            <Button className="w-full h-10 rounded-lg bg-[#00C365] hover:bg-white hover:text-black text-white font-bold transition-colors text-sm">Select Package</Button>
                          </div>
                       </div>
                       <button onClick={() => setShowPricing(false)} className="mt-6 text-slate-400 hover:text-black text-[13px] font-bold flex items-center gap-2 mx-auto decoration-dotted underline underline-offset-4">
                         Go back to form
                       </button>
                    </div>
                 </div>
               )}

               {/* MODAL 2: PAYMENT SCREEN */}
               {showPayment && (
                 <div className="absolute inset-0 z-[110] bg-white rounded-[24px] flex items-center justify-center p-4 md:p-8 animate-in slide-in-from-bottom-4 duration-500">
                    <div className="w-full max-w-[380px] text-center">
                       {paymentStatus === 'idle' ? (
                         <>
                           <h3 className="text-xl font-bold text-[#0F172A] mb-1">Complete Your Payment</h3>
                           <p className="text-slate-500 mb-6 text-sm font-medium">Scan the QR code below using any UPI app</p>
                           
                           <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl mb-6 flex flex-col items-center">
                              <div className="relative w-44 h-44 bg-white rounded-xl shadow-inner flex items-center justify-center overflow-hidden mb-3 p-2">
                                <Image 
                                  src="/images/qr-placeholder.png" 
                                  alt="UPI Payment QR" 
                                  width={180} 
                                  height={180}
                                  className="object-contain"
                                />
                              </div>
                              <div className="text-center w-full">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 block">Payable Amount</span>
                                <span className="text-2xl font-black text-black font-poppins block mb-4">₹{selectedOption === 'standard' ? '199' : '298'}</span>
                                
                                <div className="text-left">
                                  <label className="text-[11px] font-bold text-slate-700 ml-1 mb-1 block">Enter UTR / Transaction ID</label>
                                  <input 
                                    type="text" 
                                    value={utrNumber}
                                    onChange={(e) => {
                                      setUtrNumber(e.target.value);
                                      if (e.target.value.length >= 10) setUtrError(false);
                                    }}
                                    placeholder="12-digit UPI Transaction ID"
                                    className={`w-full bg-white border ${utrError ? 'border-red-500' : 'border-slate-200'} rounded-lg px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-[#00C365]/20 focus:border-[#00C365] outline-none transition-all placeholder:text-slate-300 text-sm font-medium`}
                                  />
                                  {utrError && <p className="text-[10px] text-red-500 mt-1 font-bold ml-1">Please enter a valid 12-digit UTR number</p>}
                                </div>
                              </div>
                           </div>

                           <Button 
                             onClick={handlePaymentComplete}
                             className="w-full h-12 bg-black hover:bg-zinc-900 text-white font-bold text-base rounded-lg shadow-[0_8px_16px_-4px_rgba(0,0,0,0.3)]"
                           >
                             I've Paid — Continue
                           </Button>
                           <button onClick={() => { setShowPayment(false); setShowPricing(true); }} className="mt-4 text-slate-400 hover:text-black text-xs font-bold">
                             Change Package
                           </button>
                         </>
                       ) : paymentStatus === 'processing' ? (
                         <div className="flex flex-col items-center py-20">
                           <Loader2 className="w-16 h-16 text-[#00C365] animate-spin mb-6" />
                           <h3 className="text-2xl font-bold text-[#0F172A]">Verifying Payment...</h3>
                           <p className="text-slate-500 mt-2 font-medium">Please wait while we confirm your transaction</p>
                         </div>
                       ) : (
                         <div className="flex flex-col items-center py-10 animate-in zoom-in duration-500">
                           <div className="w-20 h-20 bg-[#00C365]/10 rounded-full flex items-center justify-center mb-6 text-[#00C365]">
                             <CheckCircle className="w-10 h-10" />
                           </div>
                           <h3 className="text-3xl font-black text-[#0F172A] mb-2">Payment Successful!</h3>
                           <p className="text-slate-500 font-medium">Completing your registration...</p>
                         </div>
                       )}
                    </div>
                 </div>
               )}

               {formStatus === 'success' ? (
                 <div className="text-center py-10 animate-in zoom-in duration-700">
                   <div className="relative mb-10">
                      <div className="w-24 h-24 bg-[#00C365]/10 rounded-full flex items-center justify-center mx-auto text-[#00C365]">
                        <CheckCircle className="w-12 h-12" />
                      </div>
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-32 h-32 pointer-events-none">
                        {/* Confetti effect would go here */}
                      </div>
                   </div>
                   <h3 className="text-[32px] font-black text-[#0F172A] mb-3">Registration Successful!</h3>
                   <p className="text-slate-500 text-lg mb-8 font-medium">We've received your payment and application details.<br/>Expect a confirmation email shortly.</p>
                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/workshop">
                      <Button className="h-12 px-10 rounded-xl bg-black text-white font-bold transition-all active:scale-95">Explore More Workshops</Button>
                    </Link>
                    <Button onClick={() => { setFormStatus('idle'); setShowPricing(false); setShowPayment(false); setPaymentStatus('idle'); }} variant="outline" className="h-12 border-slate-200 rounded-xl px-10 font-bold">Register Again</Button>
                   </div>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="space-y-2">
                     <label className="text-[14px] font-medium text-slate-700 ml-1">Full Name</label>
                     <input 
                       required
                       name="fullname"
                       type="text" 
                       placeholder="Your full name"
                       className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all placeholder:text-slate-400 text-base"
                     />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <label className="text-[14px] font-medium text-slate-700 ml-1">Email Address</label>
                       <input 
                         required
                         name="email"
                         type="email" 
                         placeholder="your@email.com"
                         className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all placeholder:text-slate-400 text-base"
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[14px] font-medium text-slate-700 ml-1">Phone Number</label>
                       <input 
                         required
                         name="phone"
                         type="tel" 
                         placeholder="+91 98765 43210"
                         className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all placeholder:text-slate-400 text-base"
                       />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <label className="text-[14px] font-medium text-slate-700 ml-1">College Name</label>
                       <input 
                         required
                         name="college"
                         type="text" 
                         placeholder="Your college/university"
                         className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all placeholder:text-slate-400 text-base"
                       />
                     </div>
                     <div className="space-y-2">
                       <label className="text-[14px] font-medium text-slate-700 ml-1">Year of Study</label>
                       <div className="relative">
                         <select required name="year" className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all appearance-none text-base cursor-pointer">
                           <option value="">1st Year / 2nd Year / etc</option>
                           <option>1st Year</option>
                           <option>2nd Year</option>
                           <option>3rd Year</option>
                           <option>4th Year</option>
                           <option>Graduate</option>
                         </select>
                         <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                       </div>
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                       <label className="text-[14px] font-medium text-slate-700 ml-1">Preferred Domain</label>
                       <div className="relative">
                         <select 
                           required 
                           name="domain"
                           className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all appearance-none text-base cursor-pointer"
                         >
                           <option value="">Select a domain</option>
                           <option>n8n Automation</option>
                           <option>AI Engineering</option>
                           <option>Fullstack Development</option>
                           <option>UI/UX Design</option>
                         </select>
                         <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                       </div>
                     </div>
                     <div className="space-y-2">
                       <label className="text-[14px] font-medium text-slate-700 ml-1">Experience Level</label>
                       <div className="relative">
                         <select 
                           required 
                           name="experience"
                           className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-black/5 focus:border-black outline-none transition-all appearance-none text-base cursor-pointer"
                         >
                           <option value="">Select level</option>
                           <option>Beginner (0-1 Projects)</option>
                           <option>Intermediate (Built few apps)</option>
                           <option>Advanced (Industry ready)</option>
                         </select>
                         <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                       </div>
                     </div>
                   </div>

                   <Button 
                     type="submit" 
                     disabled={formStatus === 'loading'}
                     className="w-full h-14 bg-black hover:bg-zinc-900 text-white font-bold text-lg rounded-xl shadow-[0_12px_24px_-8px_rgba(0,0,0,0.3)] transition-all active:scale-[0.98] mt-4"
                   >
                     {formStatus === 'loading' ? <Loader2 className="animate-spin" /> : "Continue to Packages"}
                   </Button>
                 </form>
               )}
             </div>
           </div>
        </section>

        {/* BLACK CTA SECTION - Exact Image 2 Match */}
        <section className="py-28 bg-[#000000] px-4 text-center relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10" data-aos="fade-up">
            <h2 className="text-4xl md:text-[64px] font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Kickstart Your Tech Career <br className="hidden md:block" /> with Real Industry Projects
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Limited seats available for our comprehensive workshop. Master low-code tools, build production-grade automations, and get industry-recognized certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToForm} 
                className="h-16 px-12 rounded-full bg-white text-black hover:bg-slate-100 font-bold text-lg shadow-2xl transition-all active:scale-95"
              >
                Apply Now – Secure Your Seat
              </Button>
            </div>
          </div>
          
          {/* Subtle reflection/gradient for premium feel */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </section>

      </main>

      {/* FOOTER - Minimal as seen in Image 2 */}
      <footer className="bg-black py-10 px-6 border-t border-zinc-900">
        <div className="container mx-auto flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-6">
            <span>© 2024 Hynox Campus. All rights reserved.</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default N8NWorkshop;
