export default function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Badruk Design</p>
      <p>Codaiq LTD, 71-75 Shelton Street, London, UK, Geschäftsführer Hasan Ali Badruk</p>
      <nav className="nav" style={{justifyContent:'center'}}>
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
        <a href="#">DSGVO</a>
      </nav>
    </footer>
  );
}
