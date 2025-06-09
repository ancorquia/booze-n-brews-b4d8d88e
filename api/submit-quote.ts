export default async function handler(req: Request) {
  if (req.method === 'POST') {
    const body = await req.json();

    console.log("Quote received:", body);

    return new Response(
      JSON.stringify({ message: 'Quote received successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(
    JSON.stringify({ message: 'Method not allowed' }),
    { status: 405, headers: { 'Content-Type': 'application/json' } }
  );
}
