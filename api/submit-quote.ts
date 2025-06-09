export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const scriptUrl = "https://script.google.com/macros/s/AKfycbzZbI99_DCfgAkFyaVoOAGR1kyJS3sCOz1HhakmMWeZWpaicY4MoyPTHZ9aBsIOAbFZwA/exec";

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

    try {
      const result = JSON.parse(text); // Try to parse it as JSON
      return res.status(200).json(result);
    } catch {
      // Fallback if Apps Script returns plain text
      return res.status(200).json({ message: text });
    }

  } catch (error) {
    console.error("Proxy failed:", error);
    return res.status(500).json({ message: "Failed to submit to Google Sheets", error: error.toString() });
  }
}
