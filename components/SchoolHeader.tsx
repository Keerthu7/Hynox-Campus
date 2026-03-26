"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ApplyModal from "@/components/ui/apply-modal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Internship", href: "https://campus-internship.vercel.app/" },
    { name: "Workshop", href: "/workshop" },
    { name: "Contact", href: "/contact" },
  ];

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
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
            ? "bg-white/80 backdrop-blur-md py-3 shadow-sm border-b border-gray-200"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">

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

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollClick(e, item.href)}
                target={item.name === "Internship" ? "_blank" : undefined}
                rel={item.name === "Internship" ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-black hover:text-[#00C365] transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#00C365] hover:bg-[#00ad58] text-white font-bold rounded-xl px-6 transition-all active:scale-95 shadow-[0_0_15px_rgba(0,195,101,0.3)] hidden sm:flex"
            >
              Partner With Us
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-black transition-colors hover:text-[#00C365]"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-6 absolute w-full left-0 animate-in slide-in-from-top duration-300 shadow-2xl rounded-b-3xl">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleScrollClick(e, item.href);
                    if (!item.href.startsWith("#")) setMobileMenuOpen(false);
                  }}
                  target={item.name === "Internship" ? "_blank" : undefined}
                  rel={item.name === "Internship" ? "noopener noreferrer" : undefined}
                  className="text-lg font-bold text-black hover:text-[#00C365] py-2 border-b border-gray-100"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                onClick={() => { setIsModalOpen(true); setMobileMenuOpen(false); }}
                className="bg-[#00C365] hover:bg-[#00ad58] text-white font-bold rounded-xl w-full h-12 mt-2 transition-all active:scale-95 sm:hidden"
              >
                Partner With Us
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* ApplyModal — same Sign In form used across the site */}
      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}