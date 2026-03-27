import Navbar from "../Navbar";
import ContactForm from "../ContactForm";

export default function IletisimPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020b2d] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2">
          
          {/* Sol */}
          <div>
            <h1 className="mb-6 text-4xl font-bold">İletişim</h1>

            <div className="space-y-4 text-gray-300">
              <p>📞 +90 505 723 40 07</p>
              <p>📧 info@marokiyazilim.com</p>
              <p>📍 Antalya</p>
            </div>
          </div>

          {/* Sağ */}
          <ContactForm />
        </div>
      </main>
    </>
  );
}