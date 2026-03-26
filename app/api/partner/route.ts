// app/api/partner/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { username, email, phone } = await req.json();

    if (!username || !email || !phone) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Hynox Campus <onboarding@resend.dev>',
      to: ['hello.hynoxcampus@gmail.com'],
      subject: `New Institutional Partner Inquiry: ${username}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 20px auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #00C365; padding-bottom: 10px; margin-bottom: 25px;">New Partner Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold; width: 140px;">Institution Name</td>
              <td style="padding: 10px 0; color: #0f172a;">${username}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Official Email</td>
              <td style="padding: 10px 0; color: #0f172a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-weight: bold;">Phone Number</td>
              <td style="padding: 10px 0; color: #0f172a;">${phone}</td>
            </tr>
          </table>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            This inquiry was submitted via the Hynox Campus partnership portal.
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}