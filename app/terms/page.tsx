"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FileText } from "lucide-react"

export default function TermsPage() {
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
      <Header  />

      <main className="min-h-screen bg-white text-gray-600 font-poppins pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-[#00C365]/10 rounded-full">
                <FileText className="text-[#00C365]" size={48} />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>

          <div className="space-y-10 text-lg leading-relaxed text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using Hynox Campus, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
              <p className="mb-4">When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
              <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Platform Usage & Conduct</h2>
              <p className="mb-4">Our platform is intended for educational purposes. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the service for any unlawful purpose.</li>
                <li>Harass, abuse, or harm other users or instructors.</li>
                <li>Attempt to bypass any security measures of the platform.</li>
                <li>Copy, distribute, or disclose any part of the service in any medium.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>The Service and its original content (excluding Content provided by users), features, curriculum, and functionality are and will remain the exclusive property of Hynox Campus and its licensors. The Service is protected by copyright, trademark, and other laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p>In no event shall Hynox Campus, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}