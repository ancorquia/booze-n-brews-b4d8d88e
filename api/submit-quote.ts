import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      eventDate,
      eventLocation,
      guestCount,
      eventType,
      additionalDetails
    } = body;

    // Basic required field check (optional but helpful)
    if (!fullName || !email || !eventDate || !eventLocation) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const response = await resend.emails.send({
      from: 'hello@boozenbrews.ca',
      to: ['andreanicoleorquia@gmail.com'],
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

    // Optional: Check if Resend responded with an error
    if (response.error) {
      console.error("Resend send error:", response.error);
      return new Response(JSON.stringify({ message: 'Failed to send email', error: response.error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ message: 'Quote received and email sent!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error("Email send error:", error?.message || error);
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: error?.message || String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
