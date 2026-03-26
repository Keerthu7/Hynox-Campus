"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ApplyModal from "@/components/ui/apply-modal"

export default function CollegeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => setIsScrolled(window.scrollY > 10);
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
      const elem = document.getElementById(href.replace("#", ""));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">

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
              <div className="flex flex-col justify-center">
                <span className="font-black text-sm text-black leading-none tracking-tighter uppercase">Hynox</span>
                <span className="text-[7px] font-bold uppercase tracking-[0.35em] text-[#00C365] mt-0.5 pl-0.5">Campus</span>
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
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-black ml-2 hover:text-[#00C365]"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-6 border-t border-gray-200 bg-white/90 backdrop-blur-md rounded-b-3xl absolute left-0 w-full px-6 shadow-2xl animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col gap-4 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-lg font-bold text-black hover:text-[#00C365] border-b border-gray-100 py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}
                  className="w-full bg-[#00C365] hover:bg-[#00ad58] text-white font-bold h-12 rounded-xl mt-4"
                >
                  Partner With Us
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ApplyModal — same Sign In form used across the site */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}