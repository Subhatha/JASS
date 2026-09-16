import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main
      id="main"
      className="shared-split-home"
    >
      <Image
        src={assetPath("/images/restaurant.jpg")}
        alt="Restaurant Background"
        fill
        priority
        sizes="100vw"
        className="shared-split-wallpaper"
      />
      <div
        className="shared-split-overlay"
        aria-hidden="true"
      />

      <header className="shared-split-brand">
        <Image
          src={assetPath("/images/logo.png")}
          alt="Four Friends Logo"
          width={48}
          height={48}
        />
        <h1>Four Friends Restaurant</h1>
      </header>

      <div className="shared-split-sections">
        <Link
          href="/cookbook"
          className="shared-split-side"
        >
          <h2>📖 Cookbook</h2>
        </Link>
        <Link
          href="/restaurant"
          className="shared-split-side"
        >
          <h2>🍽️ Restaurant</h2>
        </Link>
      </div>

      <footer className="shared-split-footer">
        © {new Date().getFullYear()} Four Friends Kitchen. All rights reserved.
      </footer>
    </main>
  );
}
