"use client"

import { useState, useEffect } from "react"
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AOS from 'aos'
import 'aos/dist/aos.css'

const countries = [
  { code: "IN", dial: "+91", name: "India" },
  { code: "US", dial: "+1", name: "USA" },
  { code: "UK", dial: "+44", name: "UK" },
  { code: "AE", dial: "+971", name: "UAE" },
  { code: "CA", dial: "+1", name: "Canada" },
  { code: "AU", dial: "+61", name: "Australia" },
  { code: "SG", dial: "+65", name: "Singapore" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out-cubic' })
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    const subject = encodeURIComponent(`New Contact Inquiry from ${email}`)
    const body = encodeURIComponent(
      `Email: ${email}\nPhone: ${selectedCountry.dial} ${phone}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:hello.hynoxcampus@gmail.com?subject=${subject}&body=${body}`

    form.reset()
    setAgreed(false)
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white relative overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-20 relative">
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `linear-gradient(#f1f5f9 1px, transparent 1px), linear-gradient(90deg, #f1f5f9 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <div className="grid gap-12 mb-20 lg:grid-cols-2 lg:gap-20">
            <div 
              className="relative flex flex-col justify-center overflow-hidden bg-[#0B1C2E] rounded-[2rem] p-8 md:p-14 min-h-[300px] md:min-h-[500px] shadow-2xl transition-transform hover:scale-[1.01]"
              data-aos="fade-right"
            >
              <h2 className="relative z-10 text-4xl font-medium leading-tight text-white md:text-5xl font-poppins">
                “If you’re not <br />
                learning, you’re not <br />
                <span className="text-[#00C365]">growing.</span>”
              </h2>
              <div className="absolute bottom-10 right-10 z-0">
                <div className="relative w-24 h-24 transition-transform duration-500 group-hover:scale-110">
                  <div className="absolute top-0 left-0 w-20 h-20 border-4 rounded-sm border-white/20 transform -translate-x-4 -translate-y-4"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center" data-aos="fade-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Email address</label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    placeholder="yourname@email.com" 
                    className="bg-white border-slate-200 h-12 rounded-xl text-slate-900 focus-visible:ring-[#00C365] shadow-sm"
                    required 
                  />
                </div>

                <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone number</label>
                  <div className="flex gap-3">
                    <div className="relative shrink-0">
                      <div className="flex items-center justify-between w-[115px] h-12 px-3 bg-white border border-slate-200 rounded-xl cursor-pointer shadow-sm">
                        <div className="flex items-center gap-2">
                          <img 
                            src={`https://flagcdn.com/${selectedCountry.code.toLowerCase()}.svg`} 
                            alt={selectedCountry.name}
                            className="w-6 h-auto rounded-sm shadow-sm object-cover"
                          />
                          <span className="text-sm font-medium text-slate-700">{selectedCountry.dial}</span>
                        </div>
                        <ChevronDown size={14} className="text-slate-400" />
                      </div>
                      <select 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer font-sans text-gray-900"
                        value={selectedCountry.code}
                        onChange={(e) => {
                          const country = countries.find(c => c.code === e.target.value)
                          if (country) setSelectedCountry(country)
                        }}
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code} className="text-gray-900 bg-white">
                            {country.name} ({country.dial})
                          </option>
                        ))}
                      </select>
                    </div>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      placeholder="98765 43210"
                      className="w-full bg-white border-slate-200 h-12 rounded-xl text-slate-900 focus-visible:ring-[#00C365] shadow-sm"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Have a question about a specific course?..." 
                    className="bg-white border-slate-200 min-h-[120px] rounded-xl text-slate-900 focus-visible:ring-[#00C365] resize-none p-4 shadow-sm"
                    required 
                  />
                </div>

                <div className="flex items-start gap-3 cursor-pointer group" onClick={() => setAgreed(!agreed)} data-aos="fade-up" data-aos-delay="400">
                  <div className="pt-1">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${agreed ? "bg-[#00C365] border-[#00C365]" : "border-slate-300 bg-white"}`}>
                      {agreed && <div className="w-2 h-2 bg-white rounded-sm" />}
                    </div>
                  </div>
                  <label className="text-xs leading-relaxed text-slate-500 cursor-pointer select-none group-hover:text-slate-700">
                    I authorize Hynox Campus to contact me with updates via Email, SMS, WhatsApp, and Call.
                  </label>
                </div>

                <div data-aos="fade-up" data-aos-delay="500">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#00C365] hover:bg-[#00A855] text-white font-bold h-12 rounded-xl text-lg shadow-lg shadow-[#00C365]/20 transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            <div className="flex items-center gap-4 p-5 md:p-6 bg-white border border-slate-100 shadow-lg rounded-2xl" data-aos="fade-up" data-aos-delay="600">
              <div className="flex items-center justify-center shrink-0 w-10 h-10 md:w-12 md:h-12 text-slate-900 border-2 border-slate-900 rounded-xl">
                <Phone size={20} />
              </div>
              <span className="font-bold text-slate-900 text-sm md:text-base">(+91)  88070 01442</span>
            </div>
            <div className="flex items-center gap-4 p-5 md:p-6 bg-white border border-slate-100 shadow-lg rounded-2xl" data-aos="fade-up" data-aos-delay="700">
              <div className="flex items-center justify-center shrink-0 w-10 h-10 md:w-12 md:h-12 text-slate-900 border-2 border-slate-900 rounded-xl">
                <Mail size={20} />
              </div>
              <span className="font-bold text-slate-900 text-sm md:text-base break-all">hello.hynoxcampus@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 p-5 md:p-6 bg-white border border-slate-100 shadow-lg rounded-2xl" data-aos="fade-up" data-aos-delay="800">
              <div className="flex items-center justify-center shrink-0 w-10 h-10 md:w-12 md:h-12 text-slate-900 border-2 border-slate-900 rounded-xl">
                <MapPin size={20} />
              </div>
              <span className="font-bold text-slate-900 text-sm md:text-base">Coimbatore</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
