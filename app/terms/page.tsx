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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Enrollment & Access</h2>
              <p className="mb-4">By enrolling in any Hynox Campus workshop or program, you agree to provide accurate information and abide by the learning community guidelines. Access to workshop materials and sessions is restricted to the registered user and cannot be shared.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Payments & Refund Policy</h2>
              <p className="mb-4">All workshops are paid programs. We offer a transparent refund policy based on your participation:</p>
              <div className="bg-slate-50 border-l-4 border-[#00C365] p-6 rounded-r-xl space-y-3">
                <p className="font-bold text-[#0F172A]">Workshop Refund Rules:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Zero Participation:</strong> If you do not attend any workshop sessions within your enrolled program, you are eligible for a <strong>50% refund</strong> of the program fee.</li>
                  <li><strong>Active Participation:</strong> If you attend even a <strong>single workshop session</strong>, you will <strong>not be eligible</strong> for any refund.</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2 italic">Refund requests must be submitted via email within 7 days of the program start date.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Certification & Attendance</h2>
              <p className="mb-4">Certificates are awarded based on successful completion of the required workshop hours and assessments. Hynox Campus reserved the right to withhold certification if the user fails to meet the minimum attendance or project submission criteria.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>The curriculum, teaching methods, digital resources, and software provided during the program are the exclusive intellectual property of Hynox Campus. Redistribution, recording, or commercial use of our training materials is strictly prohibited.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p>Hynox Campus aims to provide high-quality industry skills but does not guarantee specific employment outcomes. We are not liable for any indirect or consequential issues arising from the use of our educational tools or platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact for Queries</h2>
              <p>If you have any questions regarding these terms or your refund eligibility, please reach out to us at:</p>
              <p className="mt-4 font-semibold text-[#00C365]">hello.hynoxcampus@gmail.com</p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}