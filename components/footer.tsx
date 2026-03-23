import Link from "next/link";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border text-foreground pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-10 h-10 bg-[#00C365] rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-[0_0_15px_rgba(0,195,101,0.3)] transition-transform group-hover:scale-105">
                H
              </div>
              <span className="font-bold text-xl tracking-tight">Hynox Campus</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Industry-first learning ecosystem designed to convert students into real contributors through hands-on skills, career discovery, and modern technology.
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-6 text-foreground tracking-wide">Company</h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path}
                    className="text-muted-foreground hover:text-[#00C365] transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-6 text-foreground tracking-wide">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              {[
                // CHANGED: Direct Gmail compose URL added here!
                { 
                  icon: Mail, 
                  label: "Email", 
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=hello.hynoxcampus@gmail.com" 
                },
                { 
                  icon: Linkedin, 
                  label: "LinkedIn", 
                  href: "https://www.linkedin.com/company/112427831/admin/dashboard/" 
                },
                { 
                  icon: Instagram, 
                  label: "Instagram", 
                  href: "https://www.instagram.com/hynoxcampus?igsh=ZDNyOHJxdnVrN2lr" 
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 bg-secondary hover:bg-[#00C365] rounded-xl flex items-center justify-center transition-all duration-300 text-muted-foreground hover:text-white hover:shadow-[0_0_15px_rgba(0,195,101,0.4)]"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-sm text-muted-foreground text-center md:text-left">
          <p>© {currentYear} Hynox Campus. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-medium">
            <Link href="/privacy" className="hover:text-[#00C365] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#00C365] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}