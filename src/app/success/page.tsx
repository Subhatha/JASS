import Link from "next/link";
import { Header, Footer } from "@/components/site";
export const metadata = { title: "Order status" };
export default function Success() {
  return (
    <>
      <Header book />
      <main
        id="main"
        className="status-page"
      >
        <div className="status-card">
          <p className="eyebrow">THE JASS COOKBOOK</p>
          <h1>
            Website preview
          </h1>
          <p>
            Checkout is unavailable in this preview. No payment has been taken.
          </p>
          <div className="actions">
            <Link
              href="/cookbook"
              className="button"
            >
              Back to the book ↗
            </Link>
            <Link
              href="/restaurant"
              className="text-link"
            >
              Explore the restaurant →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
