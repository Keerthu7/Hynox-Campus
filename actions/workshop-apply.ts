"use server"

import nodemailer from "nodemailer"

export async function workshopApply(formData: FormData) {
  const fullname = formData.get("fullname") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const college = formData.get("college") as string
  const year = formData.get("year") as string
  const domain = formData.get("domain") as string
  const experience = formData.get("experience") as string

  // Simple validation
  if (!fullname || !email || !phone || !college || !year || !domain || !experience) {
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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "hello.hynoxcampus@gmail.com",
      subject: `New Workshop Application: ${domain} - ${fullname}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #00C365; padding-bottom: 10px; margin-bottom: 25px;">New Workshop Application</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; width: 140px;">Full Name</td>
              <td style="padding: 10px 0; color: #0f172a;">${fullname}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Email Address</td>
              <td style="padding: 10px 0; color: #0f172a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Phone Number</td>
              <td style="padding: 10px 0; color: #0f172a;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">College Name</td>
              <td style="padding: 10px 0; color: #0f172a;">${college}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Year of Study</td>
              <td style="padding: 10px 0; color: #0f172a;">${year}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Preferred Domain</td>
              <td style="padding: 10px 0; color: #0f172a;">${domain}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Experience Level</td>
              <td style="padding: 10px 0; color: #0f172a;">${experience}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            This application was submitted via the Hynox Campus workshop hub.
          </div>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Email Error:", error)
    return { success: false, message: "Failed to send email" }
  }
}
