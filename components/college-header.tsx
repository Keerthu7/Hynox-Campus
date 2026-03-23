"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image" 
import { Menu, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CollegeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Local scroll state
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: ''
  });

  // --- SCROLL TRACK LOGIC ---
  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Program", href: "#programs" },
    { name: "Streams", href: "#streams" },
    { name: "Training", href: "#training" },
    { name: "Internship", href: "#internship" },
    { name: "Workshop", href: "/workshop" },
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
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 py-3" // Light glass effect on scroll
            : "bg-transparent py-5" // Transparent at top
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            
            {/* --- UPDATED LOGO SECTION --- */}
            <Link href="/" className="flex items-center gap-3 group md:ml-16">
            <div className="flex-shrink-0 flex items-center">
              <Image 
                src="/logo.png"  
                alt="Hynox Campus Logo"
                width={50} 
                height={50}
                priority
                className="w-auto h-10 md:h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            {/* Hynox Campus Text ah thirumba add panniyachu */}
               <div className="flex flex-col justify-center">
  {/* text-base ah text-sm nu maathiyachu */}
  <span className="font-black text-sm text-black leading-none tracking-tighter uppercase">
    Hynox
  </span> 
  {/* text-[8px] ah text-[7px] nu adjust pannirukom */}
  <span className="text-[7px] font-bold uppercase tracking-[0.35em] text-[#00C365] mt-0.5 pl-0.5">
    Campus
  </span>
</div>
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm font-medium text-black hover:text-[#00C365] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex rounded-full bg-[#00C365] hover:bg-[#00ad58] text-white border border-transparent px-6 font-bold transition-all duration-300 shadow-[0_0_15px_rgba(0,195,101,0.3)]"
              >
                Partner With Us
              </Button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-black ml-2 hover:text-[#00C365]">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-6 border-t border-gray-200 bg-white/90 backdrop-blur-md rounded-b-3xl absolute left-0 w-full px-6 shadow-2xl animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col gap-4 py-6">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} onClick={(e) => handleScroll(e, item.href)} className="text-lg font-bold text-black hover:text-[#00C365] border-b border-gray-100 py-2">
                    {item.name}
                  </Link>
                ))}
                <Button onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }} className="w-full bg-[#00C365] hover:bg-[#00ad58] text-white font-bold h-12 rounded-xl mt-4">
                  Partner With Us
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* --- PARTNER MODAL --- (Kept Dark) */}
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
                <Button onClick={() => setIsModalOpen(false)} className="mt-8 bg-[#00C365] hover:bg-[#00ad58] w-full text-white font-bold h-12 rounded-xl">Close</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Institutional Partnership</h3>
                <input required name="username" value={formData.username} onChange={handleInputChange} placeholder="College Name" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[#00C365] outline-none" />
                <input required name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Admin Email" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[#00C365] outline-none" />
                <input required name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Official Phone" className="w-full bg-[#0f111a] border border-white/10 rounded-xl px-5 py-3 text-white focus:border-[#00C365] outline-none" />
                <Button type="submit" disabled={formStatus === 'loading'} className="w-full bg-[#00C365] hover:bg-[#00ad58] text-white font-bold h-14 rounded-xl mt-4 shadow-xl shadow-[#00C365]/20 active:scale-95 transition-all">
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