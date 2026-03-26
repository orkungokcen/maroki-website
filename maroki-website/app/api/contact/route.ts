import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body ?? {};

    if (!name || !email || !message) {
      return Response.json(
        { error: "Ad Soyad, e-posta ve mesaj zorunludur." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return Response.json(
        { error: "CONTACT_TO_EMAIL tanımlı değil." },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Maroki Yazılım <info@marokiyazilim.com>",
      to,
      subject: `Yeni İletişim Formu - ${name}`,
      html: `
        <h2>Yeni İletişim Formu</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Mesaj gönderilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}