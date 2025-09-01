import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="glass" style={{position:'relative'}}>
          <div className="blob" />
          <h1>Badruk Design</h1>
          <p>Blitzschnelle und extrem professionelle Webseiten in unter 48 Stunden.</p>
          <CTAButton href="/kontakt">Projekt starten</CTAButton>
        </section>
        <section className="glass">
          <h2>Unser Angebot</h2>
          <ul>
            <li>Keine Plugins, keine Updates, kein WordPress.</li>
            <li>Hand-codierte Next.js und Node.js Webseiten.</li>
            <li>Individuelles Design ohne Themes.</li>
            <li>Preis: 1999 € statt 3700 €, 0 € Vorauszahlung.</li>
            <li>All-Inclusive: Domain, Hosting, Logo, Branding, Texte, Bilder, optional Shop.</li>
            <li>SEO & Pagespeed Score 100.</li>
            <li>SSL Zertifikat, 6 Monate Support, 24/7 WhatsApp Notfall-Support.</li>
            <li>Limitierung: nur 6–8 Webseiten pro Monat.</li>
            <li>Garantie: Kein Wow-Effekt = keine Zahlung.</li>
          </ul>
        </section>
        <section className="glass">
          <h2>Performance-Versprechen</h2>
          <ul>
            <li>Speed Guarantee: Unter 1 Sekunde Ladezeit (Google Lighthouse).</li>
            <li>SEO-Booster: Ranking-Optimierung inklusive.</li>
            <li>Conversion Design: Webseiten, die verkaufen.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
