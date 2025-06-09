import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const {
      fullName,
      email,
      phone,
      eventDate,
      eventLocation,
      guestCount,
      eventType,
      additionalDetails
    } = req.body;

    await resend.emails.send({
      from: 'hello@boozenbrews.ca', // ✅ must match verified domain in Resend
      to: ['andreanicoleorquia@gmail.com'], // ✅ where you want to receive it
      subject: `New Quote Request from ${fullName}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${eventLocation}</p>
        <p><strong>Guests:</strong> ${guestCount}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Additional Info:</strong> ${additionalDetails}</p>
      `,
    });

    return res.status(200).json({ message: 'Quote received and email sent!' });

  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
