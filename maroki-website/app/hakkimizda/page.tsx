import Navbar from "../Navbar";

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#020b2d] px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Hakkımızda
          </h1>

          <p className="text-lg text-gray-400 leading-8">
            Maroki Yazılım; ERP, Logo entegrasyonu ve özel yazılım geliştirme
            alanlarında işletmelere dijital dönüşüm çözümleri sunan teknoloji
            firmasıdır.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Kurumsal Yaklaşım
              </h3>
              <p className="text-gray-400">
                İş süreçlerine uygun sürdürülebilir çözümler sunarız.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Güçlü Entegrasyon
              </h3>
              <p className="text-gray-400">
                Logo ve diğer sistemlerle güçlü entegrasyonlar kurarız.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}