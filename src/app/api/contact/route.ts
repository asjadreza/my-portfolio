import { Resend } from "resend";
import ContactFormEmail from "@/emails/ContactFormEmail";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const html = await render(ContactFormEmail({ name, email, message })); 

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "asjadreza64@gmail.com", // change if needed
      subject: `New message from ${name}`,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error sending email: ", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
