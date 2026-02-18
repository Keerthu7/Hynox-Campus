"use client"

import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"

const COUNTRIES = [
  { code: "+91", iso: "in", name: "India" },
  { code: "+1", iso: "us", name: "USA" },
  { code: "+44", iso: "gb", name: "UK" },
  { code: "+971", iso: "ae", name: "UAE" },
  { code: "+61", iso: "au", name: "Australia" },
  { code: "+49", iso: "de", name: "Germany" },
  { code: "+33", iso: "fr", name: "France" },
  { code: "+81", iso: "jp", name: "Japan" },
]

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" })
  const [errors, setErrors] = useState({ name: "", email: "", mobile: "" })

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Reset form when closing
  const handleClose = () => {
    setErrors({ name: "", email: "", mobile: "" })
    setFormData({ name: "", email: "", mobile: "" })
    setIsDropdownOpen(false)
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user types
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = () => {
    const newErrors = { name: "", email: "", mobile: "" }
    let isValid = true

    if (!formData.name.trim()) { newErrors.name = "Name is required"; isValid = false }
    if (!formData.email.trim()) { newErrors.email = "Email is required"; isValid = false }
    if (!formData.mobile.trim()) { newErrors.mobile = "Number is required"; isValid = false }

    setErrors(newErrors)

    if (isValid) {
      // You can replace this with your API call later
      console.log("Submitted:", { ...formData, fullMobile: `${selectedCountry.code} ${formData.mobile}` })
      alert("Application Submitted Successfully!") 
      handleClose()
    }
  }

  // Don't render anything if not open
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      
      {/* Backdrop (Dark Overlay) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-[400px] p-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all"
        >
          <X size={20} />
        </button>

        <div className="mt-2">
          

          <div className="space-y-4">
            
            {/* Name Field */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`w-full px-3 py-2.5 border rounded-lg text-sm outline-none transition-all placeholder:text-gray-400 text-gray-900
                  ${errors.name ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-200 focus:border-[#00C365] focus:ring-4 focus:ring-[#00C365]/10"}`}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full px-3 py-2.5 border rounded-lg text-sm outline-none transition-all placeholder:text-gray-400 text-gray-900
                  ${errors.email ? "border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-200 focus:border-[#00C365] focus:ring-4 focus:ring-[#00C365]/10"}`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Mobile Field with Dropdown */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              
              <div className={`flex w-full border rounded-lg overflow-visible relative transition-all
                  ${errors.mobile ? "border-red-500 ring-2 ring-red-200" : "border-gray-200 focus-within:border-[#00C365] focus-within:ring-4 focus-within:ring-[#00C365]/10"}`}
              >
                {/* Country Code Dropdown */}
                <div ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 px-3 h-full bg-gray-50 hover:bg-gray-100 border-r border-gray-200 transition-colors rounded-l-lg min-w-[100px]"
                  >
                    <img 
                      src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`} 
                      alt={selectedCountry.name} 
                      className="w-5 h-auto rounded-[2px] shadow-sm" 
                    />
                    <span className="text-sm font-medium text-gray-700">{selectedCountry.code}</span>
                    <ChevronDown size={14} className="text-gray-400 ml-auto" />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-[110%] left-0 w-[240px] max-h-[250px] overflow-y-auto bg-white border border-gray-100 rounded-lg shadow-xl z-50 py-1">
                      {COUNTRIES.map((country) => (
                        <button
                          key={country.name}
                          type="button"
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 text-left transition-colors"
                          onClick={() => { setSelectedCountry(country); setIsDropdownOpen(false); }}
                        >
                          <img src={`https://flagcdn.com/w40/${country.iso}.png`} alt={country.name} className="w-5 h-auto rounded-[2px]" />
                          <span className="text-gray-900 font-medium w-8">{country.code}</span>
                          <span className="text-gray-500 truncate">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Input Field */}
                <input 
                  type="tel"
                  placeholder="98765 43210"
                  value={formData.mobile}
                  onChange={(e) => handleChange("mobile", e.target.value)}
                  className="flex-1 px-3 py-2.5 text-sm outline-none bg-transparent placeholder:text-gray-400 text-gray-900"
                />
              </div>
              {errors.mobile && <p className="text-xs text-red-500">{errors.mobile}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button 
                onClick={handleSubmit} 
                className="w-full bg-[#00C365] hover:bg-[#00A855] text-white font-semibold h-11 rounded-lg shadow-lg shadow-[#00C365]/20 active:scale-[0.98] transition-all"
              >
                Submit 
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}