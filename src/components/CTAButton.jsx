export default function CTAButton({ href, children }) {
  return (
    <a href={href} className="cta">
      {children}
    </a>
  );
}
