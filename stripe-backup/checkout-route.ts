import Stripe from "stripe";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY)
    return NextResponse.json(
      { error: "Book checkout is not available yet. Please check back soon." },
      { status: 503 },
    );
  let quantity: unknown;
  try {
    ({ quantity } = await req.json());
  } catch {
    return NextResponse.json(
      { error: "Invalid checkout request." },
      { status: 400 },
    );
  }
  if (
    !Number.isInteger(quantity) ||
    Number(quantity) < 1 ||
    Number(quantity) > 10
  )
    return NextResponse.json(
      { error: "Please choose between 1 and 10 copies." },
      { status: 400 },
    );
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const origin = process.env.SITE_URL || new URL(req.url).origin;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "JASS Cookbook — Chef Susan" },
            unit_amount: 2499,
          },
          quantity: Number(quantity),
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
    });
    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "We couldn’t open checkout. Please try again shortly." },
      { status: 500 },
    );
  }
}
