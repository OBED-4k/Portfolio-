import type { Request, Response } from "express";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactMessage = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: process.env.RESEND_TO_EMAIL!,
    replyTo: email,
    subject: `New contact message from ${name}`,
    html: `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `,
  });

  if (error) {
    console.error("Error sending contact message:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send contact message",
      error: error.message,
    });
  }

  // console.log("Name:", name);
  console.log("Email sent:", data);
  // console.log("Message:", message);

  res.json({
    success: true,
    message: "Message sent successfully",
  });
};
