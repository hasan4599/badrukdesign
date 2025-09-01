import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export default function Leistungen() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="glass">
          <h1>Leistungen & Pakete</h1>
          <p>Wir liefern individuelle Weblösungen ohne Plugins oder Vorlagen. Jedes Projekt wird von Hand mit Next.js und Node.js entwickelt.</p>
          <p>Unser All-Inclusive-Paket umfasst Domain, Hosting, Logo, Branding, Texte und Bilder. Auf Wunsch integrieren wir einen Online-Shop.</p>
          <CTAButton href="/kontakt">Angebot anfordern</CTAButton>
        </section>
      </main>
      <Footer />
    </>
  );
}
