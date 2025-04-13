import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, contact, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yuvrajsingh019990@gmail.com',           // <-- replace with your Gmail
        pass: 'qclgtzpqjafogpto',    // <-- replace with your App Password
      },
    });

    const mailOptions = {
      from: '"Contact Form" <yuvrajsingh019990@gmail.com>',
      to: 'akhileshraturi06@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Contact Form Submission</h3>
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
