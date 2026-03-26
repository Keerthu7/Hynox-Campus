// Quick email test — run with: node test-email.mjs
// This will tell us the EXACT error from Gmail/Nodemailer
import nodemailer from 'nodemailer'
import { config } from 'dotenv'

config() // Load .env

console.log("EMAIL_USER:", process.env.EMAIL_USER)
console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

try {
  await transporter.verify()
  console.log("✅ SMTP connection verified! Credentials are working.")
  
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'hello.hynoxcampus@gmail.com',
    subject: 'TEST: Hynox Campus Form Test',
    text: 'This is a test email from the debug script. If you see this, all forms should work!',
  })
  console.log("✅ Test email sent successfully!")
} catch (err) {
  console.error("❌ ERROR:", err.message)
  console.error("Full error:", err)
}
