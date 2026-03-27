import Navbar from "../Navbar";

export default function CozumlerPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020b2d] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            Çözümlerimiz
          </h1>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              "ERP Çözümleri",
              "Logo Entegrasyonu",
              "e-Dönüşüm",
              "Özel Yazılım",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold">{item}</h3>
                <p className="text-sm text-gray-400">
                  İş süreçlerinizi dijitalleştiren güçlü ve ölçeklenebilir çözümler.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}