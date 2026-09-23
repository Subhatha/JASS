import Link from "next/link";
import Stripe from "stripe";
import { Header, Footer } from "@/components/site";
export const metadata = { title: "Order status" };
export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{
    session_id?: string;
  }>;
}) {
  const { session_id } = await searchParams;
  let paid = false;
  if (session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await new Stripe(
        process.env.STRIPE_SECRET_KEY,
      ).checkout.sessions.retrieve(session_id);
      paid = session.payment_status === "paid";
    } catch {
      /* Show unverified state without exposing payment details. */
    }
  }
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
            {paid ? "Thank you for your order." : "Check your order status."}
          </h1>
          <p>
            {paid
              ? "Your payment has been confirmed. Thank you for bringing a piece of our kitchen into your story."
              : "We couldn’t verify a completed payment on this page. Please check your payment confirmation before trying again."}
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
