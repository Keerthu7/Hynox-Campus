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
  const selectedPackage = formData.get("package") as string
  const utrNumber = formData.get("utr_number") as string
  const screenshot = formData.get("screenshot") as File | null

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

    // Prepare attachment if screenshot exists
    const attachments = []
    if (screenshot && screenshot.size > 0) {
      const buffer = Buffer.from(await screenshot.arrayBuffer())
      attachments.push({
        filename: screenshot.name || "payment-screenshot.png",
        content: buffer,
      })
    }

    // 1. Email to Admin (hello.hynoxcampus@gmail.com)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "hello.hynoxcampus@gmail.com",
      subject: `New Workshop Application: ${domain} - ${fullname}`,
      attachments: attachments,
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
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; color: #00C365; font-weight: bold;">Selected Package</td>
              <td style="padding: 10px; color: #0f172a; font-weight: bold;">${selectedPackage}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 10px; color: #00C365; font-weight: bold;">UTR / Trans ID</td>
              <td style="padding: 10px; color: #0f172a; font-weight: bold;">${utrNumber}</td>
            </tr>
          </table>
          
          ${attachments.length > 0 ? `<p style="margin-top: 20px; color: #64748b; font-style: italic;">Note: A payment screenshot has been attached to this email.</p>` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            This application was submitted via the Hynox Campus workshop hub.
          </div>
        </div>
      `,
    }

    // 2. Email to User (Registration Success)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Registration Successful: ${domain} Workshop - Hynox Campus`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 40px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff; color: #0F172A;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="width: 60px; hieght: 60px; background-color: #00C365; border-radius: 50%; display: inline-block; padding: 15px; margin-bottom: 20px;">
               <span style="color: white; font-size: 30px; font-weight: bold;">✓</span>
            </div>
            <h1 style="font-size: 24px; font-weight: 800; margin: 0; color: #0F172A;">Registration Successful!</h1>
          </div>
          
          <p style="font-size: 16px; color: #475569; line-height: 1.6;">Hello <strong>${fullname}</strong>,</p>
          <p style="font-size: 16px; color: #475569; line-height: 1.6;">We have successfully received your payment for the <strong>${domain} Workshop</strong>. Your registration is now confirmed!</p>
          
          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 25px; margin: 30px 0;">
            <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 15px 0; color: #0F172A;">Important: Join our Workshop Group</h3>
            <p style="font-size: 14px; color: #64748B; margin-bottom: 20px;">To receive the workshop link, schedule updates, and learning resources, please join our official WhatsApp community:</p>
            <a href="https://chat.whatsapp.com/KI1HWDxkXXsCaNqgAz4lTX?mode=gi_t" style="display: block; background-color: #25D366; color: white; text-align: center; padding: 14px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 16px;">
              Join "workshop n8n automation" Group
            </a>
          </div>
          
          <p style="font-size: 14px; color: #94A3B8; margin-top: 30px; border-top: 1px solid #E2E8F0; padding-top: 20px; text-align: center;">
            If you have any questions, feel free to reply to this email or contact us at hello.hynoxcampus@gmail.com
          </p>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="font-size: 12px; font-weight: 800; color: #00C365; text-transform: uppercase; letter-spacing: 2px;">Hynox Campus</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ])

    return { success: true }
  } catch (error) {
    console.error("Email Error:", error)
    return { success: false, message: "Failed to send email" }
  }
}
