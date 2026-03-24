import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
    }
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, company, email, message, marketingConsent } = body;

    if (!name || !company || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Aspiro AI <noreply@aspiroai.digital>",
      to: ["enquiries@aspiroai.digital"],
      replyTo: email,
      subject: `New enquiry from ${name} (${company})`,
      text: `
New enquiry from aspiroai.digital

Name: ${name}
Company: ${company}
Email: ${email}

Message:
${message || "(No message provided)"}

Marketing consent: ${marketingConsent ? "Yes" : "No"}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
