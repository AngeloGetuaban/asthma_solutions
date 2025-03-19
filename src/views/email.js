import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, name, question } = req.body;

  if (!email || !name || !question) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create transporter
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    let mailOptions = {
      from: process.env.SMTP_USER,
      to: "chirohealot.cdo@gmail.com",
      subject: "New Inquiry from ChiroHealot Asthma Solutions",
      text: `Name: ${name}\nEmail: ${email}\n\nQuestion:\n${question}`,
      html: `
        <h3>New Inquiry from ChiroHealot Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Question:</strong><br>${question}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
}
