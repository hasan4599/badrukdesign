import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Kontakt() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="glass">
          <h1>Kontakt & Support</h1>
          <form className="glass" style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            <label>Name<input type="text" name="name" required /></label>
            <label>E-Mail<input type="email" name="email" required /></label>
            <label>Nachricht<textarea name="message" rows="4" required /></label>
            <label>Wunschtermin<input type="datetime-local" name="date" required /></label>
            <button type="submit" className="cta">Absenden</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
