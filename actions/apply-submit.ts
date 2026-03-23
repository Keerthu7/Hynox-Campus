"use server"

import nodemailer from "nodemailer"

export async function applySubmit(name: string, email: string, mobile: string) {
  // Simple validation
  if (!name || !email || !mobile) {
    return { success: false, message: "Missing required fields" }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "hello.hynoxcampus@gmail.com",
      subject: `New Discovery Session / Sign-In Request: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #00C365; padding-bottom: 10px; margin-bottom: 25px;">New Application / Sign-In</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; width: 140px;">Full Name</td>
              <td style="padding: 10px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Email Address</td>
              <td style="padding: 10px 0; color: #0f172a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Mobile Number</td>
              <td style="padding: 10px 0; color: #0f172a;">${mobile}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            This form was submitted via the Hynox Campus dynamic modal (Discovery Session / Content Unlock).
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
