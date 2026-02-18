"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Import Next.js Image component
import { Menu, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SchoolHeader({ isScrolled }: { isScrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modal & Form States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  });

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Sessions", href: "#sessions" },
    { name: "Why Us", href: "#whyus" },
  ];

  // --- SMOOTH SCROLL LOGIC ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setMobileMenuOpen(false);
      }
    }
  };

  // --- FORM HANDLERS ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg border-b border-white/5" : "bg-black py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* LOGO SECTION - Updated with your Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white">
              <Image 
                src="/logo.jpg" // Put your logo file in the /public folder and rename it logo.jpg
                alt="Hynox Campus Logo"
                fill
                priority // Ensures the logo loads immediately
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-none tracking-tight font-poppins">
                Hynox
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00C365]">
                Campus
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#00C365] hover:bg-[#00ad58] text-white font-bold rounded-xl px-6 transition-all active:scale-95 shadow-[0_0_15px_rgba(0,195,101,0.3)]"
            >
              Partner With Us
            </Button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden text-white transition-colors hover:text-[#00C365]"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-white/10 px-4 py-6 absolute w-full left-0 animate-in slide-in-from-top duration-300 shadow-2xl">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-lg font-medium text-gray-300 hover:text-[#00C365] py-2 border-b border-white/5"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* --- PARTNER MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#161b2c] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-all hover:rotate-90"
            >
              <X size={24} />
            </button>

            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#00C365]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#00C365] text-3xl">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Thanks for signing!</h3>
                <p className="text-slate-400">Application delivered. We will contact you soon!</p>
                <Button 
                  onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }}
                  className="mt-6 bg-[#00C365] text-white w-full rounded-xl h-12"
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Partner With Us</h3>
                  <p className="text-slate-400 text-sm">Enter details to schedule school STEM program.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-black text-[#00C365] uppercase block mb-1 tracking-widest">School Name</label>
                    <input required type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Name / School Name" className="w-full bg-[#0f111a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00C365] outline-none transition-all placeholder:text-slate-600" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-[#00C365] uppercase block mb-1 tracking-widest">Official Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="official@school.com" className="w-full bg-[#0f111a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00C365] outline-none transition-all placeholder:text-slate-600" />
                  </div>
                  <div>
                    <label className="text-xs font-black text-[#00C365] uppercase block mb-1 tracking-widest">Phone Number</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Contact Number" className="w-full bg-[#0f111a] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00C365] outline-none transition-all placeholder:text-slate-600" />
                  </div>

                  {formStatus === 'error' && <p className="text-red-500 text-xs bg-red-500/10 p-2 rounded">Submission failed. Please check internet.</p>}

                  <Button type="submit" disabled={formStatus === 'loading'} className="w-full bg-[#00C365] hover:bg-[#00ad58] text-white font-bold h-12 rounded-xl mt-4 shadow-xl shadow-[#00C365]/20 active:scale-95 transition-all">
                    {formStatus === 'loading' ? <Loader2 className="animate-spin" /> : "Submit Partnership Request"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}