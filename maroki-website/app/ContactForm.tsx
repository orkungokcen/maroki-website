"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905057234007";

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Mesaj gönderilemedi.");
      }

      setStatus("✅ Mesajınız başarıyla gönderildi! WhatsApp açılıyor...");

      const text =
        `Merhaba, Maroki Yazılım ile iletişime geçmek istiyorum.\n\n` +
        `Ad Soyad: ${form.name}\n` +
        `E-posta: ${form.email}\n` +
        `Telefon: ${form.phone}\n` +
        `Mesaj: ${form.message}`;

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
        "_blank"
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Beklenmeyen bir hata oluştu.";
      setStatus(`❌ ${message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Ad Soyad"
        value={form.name}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none placeholder:text-gray-500"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="E-posta"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none placeholder:text-gray-500"
        required
      />

      <input
        name="phone"
        type="text"
        placeholder="Telefon"
        value={form.phone}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none placeholder:text-gray-500"
      />

      <textarea
        name="message"
        placeholder="Mesajınız"
        rows={5}
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-xl border border-white/10 bg-[#0B1120] px-4 py-3 text-white outline-none placeholder:text-gray-500"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-blue-500 px-8 py-4 text-lg font-semibold transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Gönderiliyor..." : "Gönder"}
      </button>

      {status && (
        <div className="rounded-xl border border-green-400/30 bg-green-500/10 p-4 text-sm text-green-300">
          {status}
        </div>
      )}
    </form>
  );
}