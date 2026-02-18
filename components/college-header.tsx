"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // Import for the logo image
import { Menu, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CollegeHeaderProps {
  isScrolled: boolean;
}

export default function CollegeHeader({ isScrolled }: CollegeHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  });

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Program", href: "#programs" },
    { name: "Streams", href: "#streams" },
    { name: "Training", href: "#training" },
    { name: "Internship", href: "#internship" },
    { name: "Compare", href: "#compare" },
    { name: "Benefits", href: "#benefits" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
      }
    }
  };

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
      } else { setFormStatus('error'); }
    } catch (error) { setFormStatus('error'); }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-xl shadow-lg border-b border-white/10 py-3" : "bg-black py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* --- UPDATED LOGO SECTION --- */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white shadow-md">
                <Image 
                  src="/logo.jpg" // Renamed from 4.jpg.jpeg for clarity
                  alt="Hynox Campus Logo"
                  fill
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-none tracking-tight">Hynox</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00C365]">Campus</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
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

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex rounded-full bg-white/5 hover:bg-[#00C365] text-white border border-white/10 px-6 font-bold transition-all duration-300"
              >
                Partner With Us
              </Button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white ml-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-6 border-t border-white/10 bg-black rounded-b-3xl absolute left-0 w-full px-6 shadow-2xl animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col gap-4 py-6">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} onClick={(e) => handleScroll(e, item.href)} className="text-lg font-bold text-gray-300 hover:text-[#00C365]">
                    {item.name}
                  </Link>
                ))}
                <Button onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }} className="w-full bg-[#00C365] text-white font-bold h-12 rounded-xl mt-4">
                  Partner With Us
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* --- PARTNER MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#161b2c] border border-white/10 rounded-[32px] shadow-2xl p-10 animate-in fade-in zoom-in duration-300">
            <button onClick={() => { setIsModalOpen(false); setFormStatus('idle'); }} className="absolute top-6 right-6 text-slate-400 hover:text-white transition-all hover:rotate-90">
              <X size={20} />
            </button>

            {formStatus === 'success' ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00C365]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#00C365] text-3xl">✓</div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Application delivered. We will contact you soon!</p>
                <Button onClick={() => setIsModalOpen(false)} className="mt-8 bg-[#00C365] w-full text-white font-bold h-12 rounded-xl">Close</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Institutional Partnership</h3>
                <input required name="username" value={formData.username} onChange={handleInputChange} placeholder="College Name" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[#00C365] outline-none" />
                <input required name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Admin Email" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[#00C365] outline-none" />
                <input required name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Official Phone" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[#00C365] outline-none" />
                <Button type="submit" disabled={formStatus === 'loading'} className="w-full bg-[#00C365] text-white font-bold h-14 rounded-xl mt-4 shadow-xl shadow-[#00C365]/20 active:scale-95 transition-all">
                  {formStatus === 'loading' ? <Loader2 className="animate-spin" /> : "Send Request"}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}