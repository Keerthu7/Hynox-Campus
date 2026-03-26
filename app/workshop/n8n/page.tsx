"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import SchoolHeader from "@/components/SchoolHeader"
import { Button } from "@/components/ui/button"
import { CheckCircle, Zap, Shield, Rocket, Download, ArrowLeft, PlayCircle, Layers, Database, Workflow, Cpu, ChevronRight, Loader2, ChevronDown, Award, Globe, MessageSquare } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"
import Footer from "@/components/footer"

// ── DATA ─────────────────────────────────────────────────────────────────

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

// ── COMPONENT ────────────────────────────────────────────────────────────

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
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null)
  const [screenshotError, setScreenshotError] = useState(false)

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshotFile(e.target.files[0])
      setScreenshotError(false)
    }
  }

  const handlePaymentComplete = async () => {
    let hasError = false
    
    if (!utrNumber || utrNumber.length < 10) {
      setUtrError(true)
      hasError = true
    }
    
    if (!screenshotFile) {
      setScreenshotError(true)
      hasError = true
    }

    if (hasError) return

    setUtrError(false)
    setScreenshotError(false)
    setPaymentStatus('processing')

    if (pendingFormData) {
      const fullname = pendingFormData.get('fullname') as string
      const email = pendingFormData.get('email') as string
      const phone = pendingFormData.get('phone') as string
      const college = pendingFormData.get('college') as string
      const year = pendingFormData.get('year') as string
      const domain = pendingFormData.get('domain') as string
      const experience = pendingFormData.get('experience') as string
      const pkg = selectedOption === 'standard' ? 'Standard (₹199)' : 'Premium (₹298)'

      const data = {
        name: fullname,
        email: email,
        phone: phone,
        college: college,
        year: year,
        domain: domain,
        experience: experience,
        package: pkg,
        utr_number: utrNumber,
        _subject: `New Workshop Application: ${domain} - ${fullname}`,
        _template: "table",
        _captcha: "false"
      }

      try {
        const response = await fetch("https://formsubmit.co/ajax/hello.hynoxcampus@gmail.com", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(data)
        })

        if (response.ok) {
          setShowPayment(false)
          setFormStatus('success')
        } else {
          alert("Submission failed. Please try again.")
          setPaymentStatus('idle')
        }
      } catch (error) {
        console.error("Submission error:", error)
        alert("Submission failed. Please check internet.")
        setPaymentStatus('idle')
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <SchoolHeader />

      <main className="relative z-10 flex-grow">
        
        {/* HERO SECTION */}
        <section className="pt-24 pb-12 px-4 flex items-center justify-center relative overflow-hidden bg-white">
           <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]"
            style={{
              backgroundImage: `linear-gradient(rgba(226, 232, 240, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226, 232, 240, 0.5) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
          <div className="w-full max-w-4xl bg-[#0f111a] border border-slate-800 rounded-[28px] p-6 md:p-12 text-center relative shadow-2xl overflow-hidden" data-aos="zoom-in-up">
            <Link href="/workshop" className="absolute top-6 left-6 flex items-center gap-2 text-slate-400 hover:text-[#00C365] transition-colors text-xs md:text-sm font-bold group/back font-poppins z-20">
              <ArrowLeft className="w-3.5 h-3.5 md:w-4 h-4 transition-transform group-hover/back:-translate-x-1" />
              <span>Back</span>
            </Link>
            <div className="relative z-10 font-poppins pt-8 md:pt-0">
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.3em] text-[#00C365] uppercase mb-4 md:mb-6 block" data-aos="fade-up">Domain: Automation</span>
              <h1 className="text-[24px] md:text-[40px] font-bold text-white leading-[1.2] mb-4 md:mb-6">
                Master <span className="text-[#00C365]">n8n Automations</span> & AI Workflows
              </h1>
              <p className="text-[#94a3b8] text-sm md:text-lg font-medium mb-8 md:mb-10 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                Stop doing repetitive tasks. Build powerful, self-running systems using the world's best low-code automation tool.
              </p>
              <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToForm}
                  className="h-11 md:h-12 px-6 md:px-8 rounded-xl bg-[#00C365] hover:bg-[#00ad58] text-white font-bold text-sm md:text-base transition-all active:scale-95 shadow-lg shadow-[#00C365]/20"
                >
                  Apply Now
                </Button>
                <button className="flex items-center justify-center gap-2 text-white font-bold text-sm md:text-base px-6 hover:text-[#00C365] transition-colors">
                  <PlayCircle className="w-4 h-4 md:w-5 h-5 text-[#00C365]" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 3-ACT FORMAT */}
        <section className="py-12 bg-slate-50 relative overflow-hidden font-poppins">
          <div className="container mx-auto px-6 max-w-5xl relative z-10">
            <div className="text-center mb-8" data-aos="fade-up">
              <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-2">Workshop Modules</h2>
              <p className="text-slate-500 text-sm md:text-base font-medium">From zero to automation pro in 3 intensive acts.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {ACTS.map((a, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                  className={`bg-white border-b-4 ${a.border} rounded-[20px] p-5 shadow-lg transition-all duration-500 hover:-translate-y-1`}
                >
                  <div className={`w-9 h-9 ${a.bg} ${a.color} rounded-lg flex items-center justify-center mb-3`}>
                    {a.icon}
                  </div>
                  <span className={`text-[8px] font-black uppercase tracking-widest ${a.color} block mb-1.5`}>{a.act}</span>
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">{a.title}</h3>
                  <span className={`inline-block px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-600 mb-3`}>
                    {a.duration}
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-12 bg-white font-poppins">
          <div className="container mx-auto px-6 max-w-xl">
            <h2 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-6 text-center" data-aos="fade-up">Workshop <span className="text-[#00C365]">Details</span></h2>
            <div className="rounded-[20px] overflow-hidden border border-slate-100 shadow-xl" data-aos="fade-up">
              {PROGRAM_DETAILS.map(([label, value, bg], i) => (
                <div
                  key={i}
                  className={`grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 items-center gap-1 md:gap-2 ${bg} border-b border-slate-50 last:border-0`}
                >
                  <span className="text-[9px] font-black uppercase text-[#00C365] tracking-widest">{label}</span>
                  <span className="md:col-span-2 text-[#0F172A] font-bold text-sm md:text-base">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATION FORM SECTION */}
        <section ref={formRef} id="apply-form" className="py-16 md:py-20 bg-white relative">
           <div className="container mx-auto px-4 md:px-6 max-w-4xl">
             <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
               <h2 className="text-[26px] md:text-[36px] font-bold text-[#0F172A] mb-2 tracking-tight">Apply for the Workshop</h2>
               <p className="text-slate-500 text-base md:text-lg font-medium">Fill in your details below and let's start your journey</p>
             </div>

             <div className="bg-white rounded-[24px] p-6 md:p-10 shadow-[0_24px_48px_-8px_rgba(0,0,0,0.06)] border border-slate-100 relative min-h-[350px]" data-aos="fade-up">
               
               {/* MODAL 1: PRICING SELECTION */}
               {showPricing && (
                 <div className="absolute inset-0 z-[100] bg-white/95 backdrop-blur-md rounded-[24px] flex items-center justify-center p-4 md:p-8 animate-in fade-in zoom-in duration-300">
                    <div className="w-full max-w-lg">
                       <h3 className="text-lg md:text-xl font-bold text-center text-[#0F172A] mb-6">Select Your Workshop Package</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {/* Standard Option */}
                          <div 
                            onClick={() => handleSelectOption('standard')}
                            className="bg-zinc-50 border-2 border-slate-100 rounded-xl p-5 hover:border-[#00C365] hover:bg-white hover:shadow-lg transition-all cursor-pointer group relative overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                              <Zap className="w-6 h-6" />
                            </div>
                            <h4 className="text-base font-bold text-slate-800 mb-1">Standard</h4>
                            <div className="flex items-baseline gap-1 mb-3">
                               <span className="text-2xl font-black text-black">₹199</span>
                               <span className="text-slate-500 text-[10px]">/only</span>
                            </div>
                            <ul className="space-y-1.5 mb-4">
                               <li className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                                 <CheckCircle className="w-3 h-3 text-[#00C365]" /> 4h Workshop Access
                               </li>
                               <li className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                                 <CheckCircle className="w-3 h-3 text-[#00C365]" /> Project Files
                               </li>
                            </ul>
                            <Button className="w-full h-9 rounded-lg bg-white border border-slate-200 text-black font-bold group-hover:bg-black group-hover:text-white transition-colors text-xs">Select Package</Button>
                          </div>

                          {/* Premium Option */}
                          <div 
                            onClick={() => handleSelectOption('premium')}
                            className="bg-black border-2 border-zinc-800 rounded-xl p-5 hover:border-[#00C365] hover:shadow-[0_16px_32px_-8px_rgba(0,195,101,0.2)] transition-all cursor-pointer group relative overflow-hidden"
                          >
                            <div className="absolute -top-1 -right-1 bg-[#00C365] text-white text-[8px] font-black uppercase tracking-tighter px-2.5 py-0.5 rounded-bl-lg z-20">
                              Recommended
                            </div>
                            <h4 className="text-base font-bold text-white mb-1">Workshop + Cert</h4>
                            <div className="flex items-baseline gap-1 mb-3">
                               <span className="text-2xl font-black text-[#00C365]">₹298</span>
                            </div>
                            <ul className="space-y-1.5 mb-4">
                               <li className="flex items-center gap-2 text-[11px] text-zinc-400 font-medium">
                                 <CheckCircle className="w-3 h-3 text-[#00C365]" /> All Standard Perks
                               </li>
                               <li className="flex items-center gap-2 text-[11px] text-zinc-400 font-medium">
                                 <CheckCircle className="w-3 h-3 text-[#00C365]" /> Official Certificate
                               </li>
                            </ul>
                            <Button className="w-full h-9 rounded-lg bg-[#00C365] hover:bg-white hover:text-black text-white font-bold transition-colors text-xs">Select Package</Button>
                          </div>
                       </div>
                       <button onClick={() => setShowPricing(false)} className="mt-6 text-slate-400 hover:text-black text-[11px] font-bold flex items-center gap-2 mx-auto decoration-dotted underline underline-offset-4">
                         Go back to form
                       </button>
                    </div>
                 </div>
               )}

               {/* MODAL 2: PAYMENT SCREEN */}
               {showPayment && (
                 <div className="absolute inset-0 z-[110] bg-white rounded-[24px] flex items-center justify-center p-4 md:p-8 animate-in slide-in-from-bottom-4 duration-500">
                    <div className="w-full max-w-[320px] text-center">
                       {paymentStatus === 'idle' ? (
                         <>
                           <h3 className="text-lg font-bold text-[#0F172A] mb-1">Complete Your Payment</h3>
                           <p className="text-slate-400 mb-4 text-xs font-medium">Scan the QR code below using any UPI app</p>
                           
                           <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl mb-4 flex flex-col items-center">
                              <div className="relative w-32 h-32 bg-white rounded-lg shadow-inner flex items-center justify-center overflow-hidden mb-3 p-1.5">
                                <Image 
                                  src={selectedOption === 'standard' ? "/images/199.jpg" : "/images/298.jpg"} 
                                  alt="UPI Payment QR" 
                                  width={120} 
                                  height={120}
                                  className="object-contain"
                                />
                              </div>
                              <div className="text-center w-full">
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 block">Payable Amount</span>
                                <span className="text-xl font-black text-black font-poppins block mb-3">₹{selectedOption === 'standard' ? '199' : '298'}</span>
                                
                                <div className="text-left mb-3">
                                  <label className="text-[10px] font-bold text-slate-700 ml-1 mb-1 block uppercase tracking-wider">Step 1: Enter UTR / Trans ID</label>
                                  <input 
                                    type="text" 
                                    value={utrNumber}
                                    onChange={(e) => {
                                      setUtrNumber(e.target.value);
                                      if (e.target.value.length >= 10) setUtrError(false);
                                    }}
                                    placeholder="12-digit UPI Transaction ID"
                                    className={`w-full bg-white border ${utrError ? 'border-red-500' : 'border-slate-200'} rounded-lg px-3 py-2 text-slate-900 focus:ring-2 focus:ring-[#00C365]/20 focus:border-[#00C365] outline-none transition-all placeholder:text-slate-300 text-xs font-medium`}
                                  />
                                  {utrError && <p className="text-[9px] text-red-500 mt-1 font-bold ml-1">Please enter a valid 12-digit UTR number</p>}
                                </div>

                                <div className="text-left">
                                  <label className="text-[10px] font-bold text-slate-700 ml-1 mb-1 block uppercase tracking-wider">Step 2: Upload Screenshot</label>
                                  <div className={`relative group border-2 border-dashed ${screenshotError ? 'border-red-500 bg-red-50/30' : 'border-slate-200 bg-white'} rounded-xl p-3 transition-all hover:bg-slate-50`}>
                                    <input 
                                      type="file" 
                                      accept="image/*"
                                      onChange={handleFileChange}
                                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                    />
                                    <div className="flex items-center gap-3">
                                      <div className={`w-8 h-8 rounded-lg ${screenshotFile ? 'bg-[#00C365]/10 text-[#00C365]' : 'bg-slate-100 text-slate-400'} flex items-center justify-center`}>
                                        <Download className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-[10px] font-bold text-slate-900 truncate">
                                          {screenshotFile ? screenshotFile.name : "Choose Payment Screenshot"}
                                        </p>
                                        <p className="text-[9px] text-slate-400">JPG, PNG up to 5MB</p>
                                      </div>
                                    </div>
                                  </div>
                                  {screenshotError && <p className="text-[9px] text-red-500 mt-1 font-bold ml-1">Please upload your payment screenshot</p>}
                                </div>
                              </div>
                           </div>

                           <Button 
                             onClick={handlePaymentComplete}
                             className="w-full h-11 bg-black hover:bg-zinc-900 text-white font-bold text-sm rounded-lg shadow-lg"
                           >
                             I've Paid — Complete Registration
                           </Button>
                           <button onClick={() => { setShowPayment(false); setShowPricing(true); }} className="mt-3 text-slate-400 hover:text-black text-[10px] font-bold">
                             Change Package
                           </button>
                         </>
                       ) : paymentStatus === 'processing' ? (
                         <div className="flex flex-col items-center py-16">
                           <Loader2 className="w-12 h-12 text-[#00C365] animate-spin mb-4" />
                           <h3 className="text-xl font-bold text-[#0F172A]">Verifying Payment...</h3>
                           <p className="text-slate-500 mt-2 text-sm font-medium">Please wait while we confirm your transaction</p>
                         </div>
                       ) : (
                         <div className="flex flex-col items-center py-8 animate-in zoom-in duration-500">
                           <div className="w-16 h-16 bg-[#00C365]/10 rounded-full flex items-center justify-center mb-4 text-[#00C365]">
                             <CheckCircle className="w-8 h-8" />
                           </div>
                           <h3 className="text-2xl font-black text-[#0F172A] mb-2">Payment Successful!</h3>
                           <p className="text-slate-500 text-sm font-medium">Completing your registration...</p>
                         </div>
                       )}
                    </div>
                 </div>
               )}

               {formStatus === 'success' ? (
                 <div className="text-center py-10 animate-in zoom-in duration-700">
                   <div className="relative mb-8">
                      <div className="w-20 h-20 bg-[#00C365]/10 rounded-full flex items-center justify-center mx-auto text-[#00C365]">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] mb-2">Registration Successful!</h3>
                   <p className="text-slate-500 text-base md:text-lg mb-8 font-medium">We've received your details.<br/>Expect a confirmation email shortly.</p>
                   <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/workshop">
                      <Button className="h-11 px-8 rounded-xl bg-black text-white font-bold transition-all active:scale-95">Explore More</Button>
                    </Link>
                    <Button onClick={() => { setFormStatus('idle'); setShowPricing(false); setShowPayment(false); setPaymentStatus('idle'); }} variant="outline" className="h-11 border-slate-200 rounded-xl px-8 font-bold">Register Again</Button>
                   </div>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                   <div className="space-y-1.5">
                     <label className="text-[12px] md:text-[13px] font-bold text-slate-700 ml-1">Full Name</label>
                     <input 
                       required
                       name="fullname"
                       type="text" 
                       placeholder="Your full name"
                       className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-3 md:py-3.5 text-slate-900 focus:ring-2 focus:ring-[#00C365]/10 focus:border-[#00C365] outline-none transition-all placeholder:text-slate-400 text-sm"
                     />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                     <div className="space-y-1.5">
                       <label className="text-[12px] md:text-[13px] font-bold text-slate-700 ml-1">Email Address</label>
                       <input 
                         required
                         name="email"
                         type="email" 
                         placeholder="your@email.com"
                         className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-3 md:py-3.5 text-slate-900 focus:ring-2 focus:ring-[#00C365]/10 focus:border-[#00C365] outline-none transition-all placeholder:text-slate-400 text-sm"
                       />
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-[12px] md:text-[13px] font-bold text-slate-700 ml-1">Phone Number</label>
                       <input 
                         required
                         name="phone"
                         type="tel" 
                         placeholder="+91 98765 43210"
                         className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-3 md:py-3.5 text-slate-900 focus:ring-2 focus:ring-[#00C365]/10 focus:border-[#00C365] outline-none transition-all placeholder:text-slate-400 text-sm"
                       />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                     <div className="space-y-1.5">
                       <label className="text-[12px] md:text-[13px] font-bold text-slate-700 ml-1">College Name</label>
                       <input 
                         required
                         name="college"
                         type="text" 
                         placeholder="Your college/university"
                         className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-3 md:py-3.5 text-slate-900 focus:ring-2 focus:ring-[#00C365]/10 focus:border-[#00C365] outline-none transition-all placeholder:text-slate-400 text-sm"
                       />
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-[12px] md:text-[13px] font-bold text-slate-700 ml-1">Year of Study</label>
                       <div className="relative">
                         <select required name="year" className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-3 md:py-3.5 text-slate-900 focus:ring-2 focus:ring-[#00C365]/10 focus:border-[#00C365] outline-none transition-all appearance-none text-sm cursor-pointer">
                           <option value="">Select Year</option>
                           <option>1st Year</option>
                           <option>2nd Year</option>
                           <option>3rd Year</option>
                           <option>4th Year</option>
                           <option>Graduate</option>
                         </select>
                         <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                       </div>
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                     <div className="space-y-1.5">
                       <label className="text-[12px] md:text-[13px] font-bold text-slate-700 ml-1">Preferred Domain</label>
                       <div className="relative">
                         <select 
                           required 
                           name="domain"
                           className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-3 md:py-3.5 text-slate-900 focus:ring-2 focus:ring-[#00C365]/10 focus:border-[#00C365] outline-none transition-all appearance-none text-sm cursor-pointer"
                         >
                           <option value="">Select Domain</option>
                           <option>n8n Automation</option>
                           <option>AI Engineering</option>
                           <option>Fullstack Development</option>
                           <option>UI/UX Design</option>
                         </select>
                         <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                       </div>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-[12px] md:text-[13px] font-bold text-slate-700 ml-1">Experience Level</label>
                       <div className="relative">
                         <select 
                           required 
                           name="experience"
                           className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-5 py-3 md:py-3.5 text-slate-900 focus:ring-2 focus:ring-[#00C365]/10 focus:border-[#00C365] outline-none transition-all appearance-none text-sm cursor-pointer"
                         >
                           <option value="">Select level</option>
                           <option>Beginner (0-1 Projects)</option>
                           <option>Intermediate (Built few apps)</option>
                           <option>Advanced (Industry ready)</option>
                         </select>
                         <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                       </div>
                     </div>
                   </div>

                   <Button 
                     type="submit" 
                     disabled={formStatus === 'loading'}
                     className="w-full h-11 md:h-12 bg-black hover:bg-zinc-900 text-white font-bold text-base md:text-lg rounded-xl shadow-lg transition-all active:scale-[0.98] mt-3 md:mt-4"
                   >
                     {formStatus === 'loading' ? <Loader2 className="animate-spin" /> : "Continue to Packages"}
                   </Button>
                 </form>
               )}
             </div>
           </div>
        </section>

        {/* BLACK CTA SECTION */}
        <section className="py-20 md:py-24 bg-[#000000] px-4 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10" data-aos="fade-up">
            <h2 className="text-[28px] md:text-[42px] font-bold text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Kickstart Your Tech Career <br className="hidden md:block" /> with Real Industry Projects
            </h2>
            <p className="text-zinc-400 text-sm md:text-lg font-medium mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Limited seats available for our comprehensive workshop. Master low-code tools, build production-grade automations, and get industry-recognized certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToForm} 
                className="h-14 md:h-15 px-10 md:px-12 rounded-full bg-white text-black hover:bg-slate-100 font-bold text-base md:text-lg shadow-2xl transition-all active:scale-95"
              >
                Apply Now — Secure Your Seat
              </Button>
            </div>
          </div>
          
          {/* Subtle reflection/gradient for premium feel */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default N8NWorkshop;
