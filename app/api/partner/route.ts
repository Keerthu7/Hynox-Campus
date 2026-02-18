// app/api/partner/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { username, email, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'keerthanasubbu5@gmail.com',
        // 👇 PASTE YOUR GENERATED APP PASSWORD BELOW (NO SPACES)
        // ❌ DO NOT use your normal Gmail password
        pass: 'srcl djnx ccng roor', 
      },
    });

    const mailOptions = {
      from: 'Hynox Campus Website <keerthanasubbu5@gmail.com>',
      to: 'keerthanasubbu5@gmail.com', 
      subject: `New Partner Inquiry from ${username}`,
      html: `
        <h2>New Partner Inquiry</h2>
        <p><strong>Name:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}