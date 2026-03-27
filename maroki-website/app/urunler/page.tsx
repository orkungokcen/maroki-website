import Navbar from "../Navbar";

export default function UrunlerPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020b2d] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-10 text-4xl font-bold md:text-5xl">
            Ürünlerimiz
          </h1>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Logo Start 3",
              "Logo Go Wings",
              "Logo Tiger 3",
              "Logo Tiger Wings",
              "Bulut ERP",
              "HEP Otomasyon",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-3 text-xl font-semibold">{item}</h3>
                <p className="text-sm text-gray-400">
                  Kurumsal ERP ve entegrasyon çözümleri.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}