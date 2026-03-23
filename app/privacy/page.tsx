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
      <Header  />

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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">Welcome to Hynox Campus. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, enroll in our workshops, or use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect information that helps us provide a better learning experience for you. This includes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Identity Data:</strong> Full name, age, and educational institution (School/College).</li>
                <li><strong>Contact Data:</strong> Email address and phone number for session links and updates.</li>
                <li><strong>Academic Interest:</strong> Your preferred technology domains (e.g., Coding, AI, Robotics).</li>
                <li><strong>Transaction Data:</strong> Details about payments made for workshops and program enrollments.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
              <p className="mb-4">Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Register you for selected workshops and training tracks.</li>
                <li>Issue digital certificates and performance reports.</li>
                <li>Facilitate internship placements and industry connections.</li>
                <li>Send important program updates via Email, WhatsApp, or SMS.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
              <p className="mb-4">To provide a seamless experience, we use trusted partners:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Calendly:</strong> For scheduling discovery sessions and meetings.</li>
                <li><strong>WhatsApp/Email:</strong> For direct communication and resource sharing.</li>
                <li><strong>Payment Gateways:</strong> We do not store your credit card details; all transactions are processed via secure third-party providers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention & Security</h2>
              <p>We retain your data as long as necessary to provide our educational services. We implement industry-standard security measures to prevent unauthorized access, but please note that no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p>You have the right to request access to your personal data, request corrections, or ask for the deletion of your account. To exercise these rights, please contact our support team.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
              <p>For any privacy-related inquiries, please reach out to us at:</p>
              <p className="mt-4 font-semibold text-[#00C365]">hello.hynoxcampus@gmail.com</p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}