import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
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

    await resend.emails.send({
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

    return new Response(JSON.stringify({ message: 'Quote received and email sent!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
