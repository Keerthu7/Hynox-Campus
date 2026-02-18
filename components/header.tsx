"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getPath = (item: string) => {
    if (item === "Home") return "/";
    if (item === "Programs") return "/programs";
    return `/${item.toLowerCase()}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl shadow-lg border-b border-white/10"
          : "bg-black"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO SECTION - Fix: logo.jpg public folder-la irukanum */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white shadow-md">
              <Image 
                src="/logo.jpg" // Renamed 4.jpg to logo.jpg
                alt="Hynox Campus Logo"
                fill
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-none tracking-tight">
                Hynox
              </span> <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00C365]">
                Campus
              </span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">About</Link>
            <Link href="/programs" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">Programs</Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-[#00C365] transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex text-white border-white/20 hover:bg-white/10 bg-transparent hover:text-[#00C365] transition-all rounded-full"
            >
              Sign In
            </Button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 border-t border-white/10 bg-[#0f111a] rounded-b-3xl absolute left-0 w-full px-6 shadow-2xl animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col gap-4 py-6">
              {["Home", "About", "Programs", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={getPath(item)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-gray-300 hover:text-[#00C365] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}