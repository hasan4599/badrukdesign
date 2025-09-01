import './globals.css';

export const metadata = {
  title: 'Badruk Design',
  description: 'Blitzschnelle, professionelle Webseiten in unter 48 Stunden.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="font-sans text-white">
        {children}
      </body>
    </html>
  );
}
