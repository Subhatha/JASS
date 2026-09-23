import Link from "next/link";
import { Header, Footer } from "@/components/site";
export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main"
        className="status-page"
      >
        <div className="status-card">
          <p className="eyebrow">404 · A LITTLE OFF THE MENU</p>
          <h1>
            Let’s find your
            <br />
            <em>way back.</em>
          </h1>
          <p>
            This page isn’t here. There’s still plenty to discover at our table.
          </p>
          <Link
            className="button"
            href="/"
          >
            Back to the beginning ↗
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
