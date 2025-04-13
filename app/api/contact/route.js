import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, contact, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'raturiakhilesh882@gmail.com',           // <-- replace with your Gmail
        pass: 'heqxwbwqucxrszfy',    // <-- replace with your App Password
      },
    });

    const mailOptions = {
      from: '"Contact Form" <raturiakhilesh882@gmail.com>',
      to: 'akhileshraturi06@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333;">📩 New Contact Form Submission</h2>
          <p style="font-size: 16px; color: #555;"><strong>Name:</strong> ${fullName}</p>
          <p style="font-size: 16px; color: #555;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 16px; color: #555;"><strong>Contact:</strong> ${contact}</p>
          <p style="font-size: 16px; color: #555;"><strong>Message:</strong></p>
          <p style="font-size: 16px; color: #333; white-space: pre-wrap;">${message}</p>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #999;">This email was generated from your website's contact form.</p>
        </div>
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
