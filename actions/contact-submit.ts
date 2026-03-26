"use server"

import nodemailer from "nodemailer"

export async function contactSubmit(formData: FormData) {
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const dialCode = formData.get("dialCode") as string
  const message = formData.get("message") as string

  // Simple validation
  if (!email || !phone || !message) {
    return { success: false, message: "Missing required fields" }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to Admin (hello.hynoxcampus@gmail.com)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "hello.hynoxcampus@gmail.com",
      subject: `New Contact Form Inquiry from ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #00C365; padding-bottom: 10px; margin-bottom: 25px;">New Contact Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; width: 140px;">Email Address</td>
              <td style="padding: 10px 0; color: #0f172a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Phone Number</td>
              <td style="padding: 10px 0; color: #0f172a;">${dialCode} ${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0f172a; line-height: 1.6;">${message}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            This inquiry was submitted via the Hynox Campus contact page.
          </div>
        </div>
      `,
    }

    await transporter.sendMail(adminMailOptions)

    return { success: true }
  } catch (error) {
    console.error("Email Error:", error)
    return { success: false, message: "Failed to send email" }
  }
}
