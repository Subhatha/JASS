import Link from "next/link";
import { Header, Footer } from "@/components/site";
export const metadata = { title: "Checkout cancelled" };
export default function Cancel() {
  return (
    <>
      <Header book />
      <main
        id="main"
        className="status-page"
      >
        <div className="status-card">
          <p className="eyebrow">TAKE YOUR TIME</p>
          <h1>
            Your story can wait
            <br />
            <em>a little longer.</em>
          </h1>
          <p>
            Checkout was cancelled. You can return to JASS whenever you’re
            ready, or read a little more about the book first.
          </p>
          <div className="actions">
            <Link
              className="button"
              href="/cookbook#order"
            >
              Return to the book ↗
            </Link>
            <Link
              className="text-link"
              href="/cookbook/faq"
            >
              Read the FAQs →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
