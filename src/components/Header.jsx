import Link from 'next/link';

export default function Header() {
  return (
    <header className="container glass" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <Link href="/">Badruk Design</Link>
      <nav className="nav">
        <Link href="/leistungen">Leistungen</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/ueber-uns">Über&nbsp;uns</Link>
        <Link href="/prozess">Prozess</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
    </header>
  );
}
