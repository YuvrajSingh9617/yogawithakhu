// app/api/contact/route.js

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, contact, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App-specific password
      },
    });

    const mailOptions = {
      from: `<${process.env.EMAIL_USER}>`,
      to: 'akhileshraturi06@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { success: false, error: 'Failed to send email: ' + error.message },
      { status: 500 }
    );
  }
}
