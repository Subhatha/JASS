import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import Image from "next/image";
import { BuyButton } from "@/components/buy-button";
import { Stories } from "./_components/stories";
import { Slideshow } from "./_components/slideshow";
export const metadata = { title: "JASS | An inspirational book" };
export default function Book() {
  return (
    <main id="main">
      <section className="book-hero">
        <div className="book-cover">
          <span className="eyebrow">A BOOK TO FIND YOURSELF IN</span>
          <Image
            src={assetPath("/images/cookbook.jpg")}
            width={500}
            height={640}
            alt="JASS book cover"
            priority
          />
          <span className="book-caption">FOOD · CREATIVITY · PURPOSE</span>
        </div>
        <div className="book-copy">
          <p className="eyebrow">JASS · AN INSPIRATIONAL BOOK</p>
          <h1>
            A little food.
            <br />A little soul.
            <br />
            <em>A lot of JASS.</em>
          </h1>
          <p className="lead">
            A journey through food, creativity and the stories that inspire us
            to keep growing — in the kitchen and beyond.
          </p>
          <div id="order">
            <BuyButton />
          </div>
          <p className="form-note">$24.99 USD · Secure payment with Stripe</p>
          <Link
            href="/cookbook/about"
            className="text-link"
          >
            Discover the story behind the book →
          </Link>
        </div>
      </section>
      <Stories />
      <Slideshow />
      <section className="section shaded">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHERE THE STORY BEGINS</p>
            <h2>
              Something to inspire.
              <br />
              <em>Something to carry with you.</em>
            </h2>
          </div>
        </div>
        <div className="cards values">
          {[
            [
              "01",
              "Find your flavour",
              "Explore the meeting of Eastern and Western influences, and bring your own curiosity to the kitchen.",
            ],
            [
              "02",
              "Create with confidence",
              "Let cooking become a space to learn, experiment and find joy in making something your own.",
            ],
            [
              "03",
              "Make it meaningful",
              "Discover the connection between food, purpose and the small moments that bring people together.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span className="eyebrow">{n} / INSIDE JASS</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="cta">
        <p className="eyebrow">YOUR NEXT CHAPTER</p>
        <h2>
          Bring the inspiration
          <br />
          <em>home.</em>
        </h2>
        <BuyButton />
        <Link
          href="/cookbook/faq"
          className="text-link"
        >
          Questions about the book? →
        </Link>
      </section>
    </main>
  );
}
