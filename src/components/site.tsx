import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import Image from "next/image";
export { Header } from "./header";
export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <Link
          href="/"
          className="footer-brand"
        >
          Four Friends Kitchen<span className="gold">.</span>
        </Link>
        <p>Good food. Good company. Stories to share.</p>
      </div>
      <div className="footer-links">
        <Link href="/restaurant/menu">Our menu</Link>
        <Link href="/restaurant/contact">Visit us</Link>
        <Link href="/cookbook">JASS cookbook</Link>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Four Friends Kitchen</span>
        <span>Made in Greece</span>
        <Link href="/">Two sides. One story. ↗</Link>
      </div>
    </footer>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(max-width: 650px) 88vw, 44vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={assetPath(src)}
        alt={alt}
        fill
        sizes={sizes}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
export function Intro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
    </section>
  );
}
export function BookingCTA() {
  return (
    <section className="cta">
      <p className="eyebrow">THERE’S A PLACE FOR YOU HERE</p>
      <h2>
        Come hungry.
        <br />
        <em>Leave among friends.</em>
      </h2>
      <Link
        className="button"
        href="/restaurant/reservations"
      >
        Plan your visit <span>↗</span>
      </Link>
    </section>
  );
}
