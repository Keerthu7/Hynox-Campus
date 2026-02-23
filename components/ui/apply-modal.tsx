"use client"

import { X, ChevronDown, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import emailjs from '@emailjs/browser'

const COUNTRIES = [
  { code: "+91", iso: "in", name: "India" },
  { code: "+1", iso: "us", name: "USA" },
  { code: "+44", iso: "gb", name: "UK" },
  { code: "+971", iso: "ae", name: "UAE" },
]

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export default function ApplyModal({ isOpen, onClose, onSuccess }: ApplyModalProps) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" })
  const [errors, setErrors] = useState({ name: "", email: "", mobile: "" })

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleClose = () => {
    setErrors({ name: "", email: "", mobile: "" })
    setFormData({ name: "", email: "", mobile: "" })
    setIsDropdownOpen(false)
    setShowSuccess(false)
    setIsSubmitting(false)
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async () => {
    const newErrors = { name: "", email: "", mobile: "" }
    let isValid = true

    if (!formData.name.trim()) { newErrors.name = "Name is required"; isValid = false }
    if (!formData.email.trim()) { newErrors.email = "Email is required"; isValid = false }
    if (!formData.mobile.trim()) { newErrors.mobile = "Number is required"; isValid = false }

    setErrors(newErrors)

    if (isValid) {
      setIsSubmitting(true)
      
      try {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          mobile: `${selectedCountry.code} ${formData.mobile}`,
        }

        await emailjs.send(
          'service_c4bc3js',
          'template_c0xssaj',
          templateParams,
          'oZz5NzhfynPb643iX'
        )

        setShowSuccess(true)
        if (onSuccess) onSuccess()
      } catch (error) {
        console.error("Failed to send email:", error)
        alert("Submission failed. Please try again.")
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[400px] p-8 animate-in fade-in zoom-in-95 duration-300">
        
        {!showSuccess ? (
          <>
            <button onClick={handleClose} className="absolute right-4 top-4 p-2 text-gray-400 hover:text-black rounded-full transition-all">
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
            
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl text-sm outline-none transition-all ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#00C365] focus:ring-4 focus:ring-[#00C365]/10"}`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Email *</label>
                <input 
                  type="email" 
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl text-sm outline-none transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-[#00C365] focus:ring-4 focus:ring-[#00C365]/10"}`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Mobile Number *</label>
                <div className={`flex w-full border rounded-xl overflow-hidden ${errors.mobile ? "border-red-500 bg-red-50" : "border-gray-200 focus-within:border-[#00C365] focus-within:ring-4 focus-within:ring-[#00C365]/10"}`}>
                  <div ref={dropdownRef} className="relative">
                    <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 px-3 h-full bg-gray-50 border-r border-gray-200 min-w-[90px]">
                      <img src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`} className="w-5 h-auto rounded-sm" alt="flag" />
                      <span className="text-sm font-bold text-gray-700">{selectedCountry.code}</span>
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-[200px] bg-white border border-gray-100 rounded-lg shadow-xl z-50">
                        {COUNTRIES.map((c) => (
                          <button key={c.iso} onClick={() => { setSelectedCountry(c); setIsDropdownOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-50 text-left">
                            <span className="font-bold">{c.code}</span> <span className="text-gray-400">{c.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <input 
                    type="tel" placeholder="98765 43210" value={formData.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    className="flex-1 px-4 py-3 text-sm outline-none bg-transparent"
                  />
                </div>
              </div>

              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className="w-full bg-[#00C365] hover:bg-[#00A855] text-white font-bold h-12 rounded-xl shadow-lg transition-all mt-4"
              >
                {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : "Submit Application"}
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-6 animate-in zoom-in-90 duration-300">
            <div className="w-20 h-20 bg-[#00C365]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#00C365]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thanks for signing in!</h2>
            <p className="text-gray-500 mb-8">We have received your application and the curriculum is now unlocked.</p>
            <Button onClick={handleClose} className="w-full bg-gray-900 hover:bg-black text-white font-bold h-12 rounded-xl">
              Start Exploring
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}