import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* About Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-[#00C365] rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,195,101,0.3)] transition-transform group-hover:scale-105">
                H
              </div>
              <span className="font-bold text-lg">Hynox Campus</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Industry-first learning ecosystem designed to convert students into real contributors.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Programs</h3>
            <ul className="space-y-3 text-sm">
              {["Software Development", "AI & ML", "UI/UX Design", "Digital Marketing"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/programs/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-muted-foreground hover:text-[#00C365] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-[#00C365] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-4 text-foreground">Connect With Us</h3>
            <div className="flex gap-3">
              {[
                { icon: Mail, label: "Email", href: "mailto:hello@hynox.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary/50 hover:bg-[#00C365] rounded-lg flex items-center justify-center transition-all duration-300 text-foreground hover:text-white hover:shadow-[0_0_15px_rgba(0,195,101,0.4)]"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Hynox Campus. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
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