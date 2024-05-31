// server/middleware/send-email.js
import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  // Extract email details from the request body
  const { to, subject, text } = body;

  // Configure the Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER, // your email address
      pass: process.env.EMAIL_PASS, // your email password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
