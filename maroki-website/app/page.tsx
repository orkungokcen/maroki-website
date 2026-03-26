import type { Metadata } from "next";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Maroki Yazılım | ERP, Logo Yazılım Entegrasyonu ve Özel Yazılım Çözümleri",
  description:
    "Maroki Yazılım olarak ERP çözümleri, Logo Yazılım entegrasyonu, e-Dönüşüm hizmetleri ve özel yazılım geliştirme çözümleri sunuyoruz.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-96px)] overflow-x-hidden bg-[#020b2d] text-white">
        {/* Hero */}
        <section className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div className="animate-[fadeUp_1s_ease-out]">
            <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Logo Yazılım İş Ortağı
            </p>

            <h1 className="mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-7xl">
              ERP, Logo Yazılım Entegrasyonu
              <br />
              ve Özel Yazılım Çözümleri
            </h1>

            <p className="mb-10 max-w-2xl text-xl text-gray-300">
              Maroki Yazılım olarak işletmelere özel ERP çözümleri, Logo Yazılım
              entegrasyonu, e-Dönüşüm hizmetleri ve kurumsal yazılım geliştirme
              çözümleri sunuyoruz. İşinizi dijitalleştiren güçlü ve ölçeklenebilir
              sistemler geliştiriyoruz.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-4">
              <a
                href="#iletisim"
                className="rounded-2xl bg-blue-500 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-blue-600"
              >
                Demo Talep Et
              </a>

              <a
                href="#cozumler"
                className="rounded-2xl border border-white/25 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-white hover:text-black"
              >
                Çözümleri İncele
              </a>
            </div>

            <div className="space-y-3 text-base text-gray-400">
              <p>✔ Logo Yazılım İş Ortağı</p>
              <p>✔ ERP ve Logo Yazılım entegrasyon çözümleri</p>
              <p>✔ Kurumsal ve sektöre özel yazılım geliştirme</p>
            </div>
          </div>

          {/* Sağ Alan */}
          <div className="animate-[fadeUp_1.2s_ease-out]">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md">
              <div className="mb-4 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#0B1120] p-4">
                  <p className="text-sm text-gray-400">Aktif Proje</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">24</h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0B1120] p-4">
                  <p className="text-sm text-gray-400">Entegrasyon</p>
                  <h3 className="mt-2 text-2xl font-bold text-cyan-400">12</h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0B1120] p-4">
                  <p className="text-sm text-gray-400">Aktif Müşteri</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">58</h3>
                </div>
              </div>

              <div className="mb-4 rounded-2xl border border-white/10 bg-[#0B1120] p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Operasyon Analizi</h3>
                  <span className="text-sm text-cyan-400">Bu Ay</span>
                </div>

                <div className="flex h-40 items-end gap-3">
                  <div className="w-full rounded-t-xl bg-blue-500/70" style={{ height: "45%" }} />
                  <div className="w-full rounded-t-xl bg-blue-500/70" style={{ height: "65%" }} />
                  <div className="w-full rounded-t-xl bg-cyan-400/80" style={{ height: "85%" }} />
                  <div className="w-full rounded-t-xl bg-blue-500/70" style={{ height: "55%" }} />
                  <div className="w-full rounded-t-xl bg-blue-500/70" style={{ height: "72%" }} />
                  <div className="w-full rounded-t-xl bg-cyan-400/80" style={{ height: "92%" }} />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0B1120] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Son İşlemler</h3>
                  <span className="text-sm text-gray-400">Güncel</span>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-gray-300">HEP Otomasyon</span>
                    <span className="text-cyan-400">Aktif</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-gray-300">Logo Entegrasyonu</span>
                    <span className="text-green-400">Tamamlandı</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                    <span className="text-gray-300">Özel Yazılım Talebi</span>
                    <span className="text-yellow-400">Beklemede</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Çözümler */}
        <section id="cozumler" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Çözümlerimiz
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              ERP, Entegrasyon ve Özel Yazılım Çözümleri
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
              İşletmelerin dijital dönüşüm süreçlerinde ihtiyaç duyduğu ERP,
              Logo entegrasyonu, e-Dönüşüm ve özel yazılım çözümlerini tek merkezden sunuyoruz.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-2xl font-semibold text-white">ERP Çözümleri</h3>
              <p className="text-sm leading-6 text-gray-400">
                Finans, stok, cari ve operasyon süreçlerini tek sistem üzerinden yönetebilmeniz için
                ölçeklenebilir ERP çözümleri sunuyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-2xl font-semibold text-white">Logo Yazılım Entegrasyonu</h3>
              <p className="text-sm leading-6 text-gray-400">
                Logo Yazılım ürünleri ile muhasebe, satış, operasyon ve raporlama sistemleri arasında
                güçlü veri akışı sağlayan entegrasyonlar geliştiriyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-2xl font-semibold text-white">e-Dönüşüm Hizmetleri</h3>
              <p className="text-sm leading-6 text-gray-400">
                e-Fatura, e-Arşiv, e-İrsaliye ve e-Defter süreçlerinde yasal, hızlı ve sürdürülebilir
                çözümler sunuyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-2xl font-semibold text-white">Özel Yazılım Geliştirme</h3>
              <p className="text-sm leading-6 text-gray-400">
                Firmanıza özel ihtiyaçlar için hazır çözümlerle sınırlı kalmadan süreç odaklı
                özel yazılımlar geliştiriyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Ürünler */}
        <section id="urunler" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Ürünlerimiz
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              ERP, Logo Yazılım ve Kurumsal Ürünlerimiz
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Logo Start 3",
              "Logo Go Wings",
              "Logo Tiger 3",
              "Logo Tiger Wings",
              "Bulut ERP",
              "E-Dönüşüm (e-Fatura, e-Arşiv, e-İrsaliye)",
              "HEP Akaryakıt Otomasyon",
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:scale-105 hover:border-cyan-400"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">{item}</h3>
                <p className="text-sm text-gray-400">
                  İşletmeler için ERP süreçlerini güçlendiren, Logo Yazılım ile uyumlu,
                  ölçeklenebilir ve verimlilik odaklı kurumsal çözüm.
                </p>
                <button className="mt-6 text-sm font-semibold text-cyan-400 hover:underline">
                  Detayları İncele →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* HEP */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 shadow-2xl backdrop-blur-md md:grid-cols-2 md:p-12">
            <div>
              <p className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                Özel Ürünümüz
              </p>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                HEP ile Akaryakıt Operasyonlarınızı
                <br />
                Tek Merkezden Yönetin
              </h2>

              <p className="mb-8 max-w-2xl text-lg text-gray-300">
                Maroki Yazılım tarafından geliştirilen HEP Akaryakıt Otomasyon Sistemi;
                satış, vardiya, operasyon ve raporlama süreçlerini daha kontrollü,
                daha hızlı ve daha verimli hale getirir.
              </p>

              <div className="mb-8 space-y-3 text-gray-300">
                <p>✔ Satış ve operasyon takibi</p>
                <p>✔ Vardiya ve personel yönetimi</p>
                <p>✔ Detaylı raporlama ve analiz</p>
                <p>✔ Logo ERP entegrasyonu</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#iletisim"
                  className="rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
                >
                  Demo Talep Et
                </a>

                <a
                  href="#iletisim"
                  className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-white hover:text-black"
                >
                  HEP’i İncele
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">HEP Akaryakıt Otomasyon</h3>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
                  Aktif Sistem
                </span>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Vardiya Takibi</p>
                  <h4 className="mt-2 text-2xl font-bold text-white">7/24</h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-gray-400">Operasyon Kontrol</p>
                  <h4 className="mt-2 text-2xl font-bold text-cyan-400">Canlı</h4>
                </div>
              </div>

              <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-3 text-sm text-gray-400">Sistem Modülleri</p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-white">Satış Takibi</span>
                  <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-white">Vardiya</span>
                  <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-white">Raporlama</span>
                  <span className="rounded-full bg-white/10 px-3 py-2 text-sm text-white">Entegrasyon</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="mb-3 text-sm text-gray-400">Son Durum</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-xl bg-[#0f172a] px-4 py-3">
                    <span className="text-gray-300">Satış Modülü</span>
                    <span className="text-green-400">Aktif</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-[#0f172a] px-4 py-3">
                    <span className="text-gray-300">Raporlama</span>
                    <span className="text-cyan-400">Hazır</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-[#0f172a] px-4 py-3">
                    <span className="text-gray-300">ERP Entegrasyonu</span>
                    <span className="text-yellow-400">Bağlı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hakkımızda */}
        <section id="hakkimizda" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              Hakkımızda
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Maroki Yazılım
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
              Maroki Yazılım; ERP, Logo entegrasyonu, özel yazılım geliştirme ve
              kurumsal dijital dönüşüm alanlarında çözüm sunan teknoloji firmasıdır.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-3xl font-semibold text-white">Ne Yapıyoruz?</h3>
              <p className="leading-7 text-gray-400">
                İşletmelerin operasyonel süreçlerini daha kontrollü, verimli ve
                ölçülebilir hale getirmek için ERP çözümleri, Logo entegrasyonları
                ve firmaya özel yazılım sistemleri geliştiriyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-3xl font-semibold text-white">
                Neden Maroki Yazılım?
              </h3>
              <p className="leading-7 text-gray-400">
                Kurumsal yaklaşımımız, sektörel tecrübemiz ve entegrasyon gücümüz
                sayesinde işletmelere sadece yazılım değil, sürdürülebilir dijital
                çözüm altyapısı sunuyoruz.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400">
              <div className="mb-4 text-3xl">🏢</div>
              <h3 className="mb-3 text-xl font-semibold text-white">Kurumsal Yaklaşım</h3>
              <p className="text-sm leading-6 text-gray-400">
                İş süreçlerinizi analiz ederek ihtiyaçlarınıza uygun, sürdürülebilir ve profesyonel çözümler sunarız.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400">
              <div className="mb-4 text-3xl">⚙️</div>
              <h3 className="mb-3 text-xl font-semibold text-white">Özel Yazılım Geliştirme</h3>
              <p className="text-sm leading-6 text-gray-400">
                Hazır kalıplarla sınırlı kalmadan, firmanızın operasyonuna uygun özel yazılımlar geliştiririz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400">
              <div className="mb-4 text-3xl">🔗</div>
              <h3 className="mb-3 text-xl font-semibold text-white">Entegrasyon Gücü</h3>
              <p className="text-sm leading-6 text-gray-400">
                Logo Yazılım ürünleri ve farklı iş sistemleriyle uyumlu entegrasyonlar kurarak veri akışını güçlendiririz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-400">
              <div className="mb-4 text-3xl">📊</div>
              <h3 className="mb-3 text-xl font-semibold text-white">Operasyon Odaklı Çözümler</h3>
              <p className="text-sm leading-6 text-gray-400">
                Akaryakıt, filo, vardiya ve ihale süreçleri gibi operasyonel alanlarda verimlilik odaklı sistemler kurarız.
              </p>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="mb-3 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              İletişim
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Bizimle İletişime Geçin
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-400">
              ERP çözümleri, Logo entegrasyonu, HEP Otomasyon ve özel yazılım projeleri için
              bizimle iletişime geçebilir, demo ve teklif talep edebilirsiniz.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-white">İletişim Bilgileri</h3>
              <div className="space-y-4 text-gray-300">
                <p>📞 +90 505 723 40 07</p>
                <p>📧 info@marokiyazilim.com</p>
                <p>📍 Antalya</p>
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6">
                <h4 className="mb-3 text-lg font-semibold text-white">Hızlı Bilgi Alın</h4>
                <p className="text-sm text-gray-300">
                  Logo Yazılım ürünleri, ERP entegrasyonu ve özel yazılım projeleri hakkında
                  hızlı bilgi almak için bize ulaşın.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-white">Demo / Teklif Talebi</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020b2d] px-6 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Maroki Yazılım</h3>
            <p className="text-sm text-gray-400">
              Kurumsal yazılım çözümleri, Logo entegrasyonları ve özel yazılım
              geliştirme hizmetleri sunar.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Menü</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Ana Sayfa</a></li>
              <li><a href="#cozumler" className="hover:text-white">Çözümler</a></li>
              <li><a href="#urunler" className="hover:text-white">Ürünler</a></li>
              <li><a href="#hakkimizda" className="hover:text-white">Hakkımızda</a></li>
              <li><a href="#iletisim" className="hover:text-white">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Ürünler</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Logo Tiger 3</li>
              <li>Logo Go Wings</li>
              <li>Bulut ERP</li>
              <li>HEP Otomasyon</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">İletişim</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +90 505 723 40 07</li>
              <li>📧 info@marokiyazilim.com</li>
              <li>📍 Antalya</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Maroki Yazılım. Tüm hakları saklıdır.
          <span className="mt-2 block text-xs text-gray-500 transition hover:text-cyan-400">
            Developed by Gökçen Yıldırım 🚀
          </span>
        </div>
      </footer>
    </>
  );
}