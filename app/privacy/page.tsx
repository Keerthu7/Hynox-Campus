"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ShieldCheck } from "lucide-react"

export default function PrivacyPolicyPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header isScrolled={isScrolled} />

      <main className="min-h-screen bg-white text-gray-600 font-poppins pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#00C365]/10 rounded-full">
                <ShieldCheck className="text-[#00C365]" size={48} />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>

          <div className="space-y-10 text-lg leading-relaxed text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">At Hynox Campus, we collect information that you provide directly to us, such as when you create an account, update your profile, participate in our programs, or communicate with us.</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and educational background.</li>
                <li><strong>Usage Data:</strong> Information about how you use our platform, courses viewed, and interaction metrics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide, maintain, and improve our educational services.</li>
                <li>Process transactions and send related information.</li>
                <li>Send technical notices, updates, and support messages.</li>
                <li>Communicate with you about new programs, events, and offers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our platform is at your own risk.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h2>
              <p>We do not sell or rent your personal data to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
              <p>If you have any questions or comments about this Privacy Policy, please contact us at:</p>
              <p className="mt-4 font-semibold text-[#00C365]">hello@hynox.com</p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}