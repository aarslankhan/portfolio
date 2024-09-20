// api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { from_name, from_email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Your SMTP server
      port: 465, // SMTP port
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your SMTP username
        pass: process.env.SMTP_PASS, // Your SMTP password
      },
    });

    const mailOptions = {
        from: process.env.SMTP_USER, // Your authenticated SMTP user
        to: 'arslan@clickflow.tech', // Your email address
        subject: 'New Contact Form Submission',
        text: `Name: ${from_name}\nEmail: ${from_email}\nMessage: ${message}`,
        headers: {
          'Reply-To': from_email, // Set reply-to header to sender's email
        },
      };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ status: 'error', error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
