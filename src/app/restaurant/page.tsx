import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import Image from "next/image";
import { Photo, BookingCTA } from "@/components/site";
export default function Restaurant() {
  return (
    <main id="main">
      <section className="restaurant-hero">
        <Image
          src={assetPath("/images/restaurant.jpg")}
          alt="The dining room at Four Friends Kitchen"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">FOUR FRIENDS KITCHEN · CANADA</p>
          <h1>
            Good food.
            <br />
            Better <em>company.</em>
          </h1>
          <p>
            A kitchen full of curiosity. A table full of friends.
            <br />
            Discover flavours with a story to tell.
          </p>
          <div className="actions">
            <Link
              className="button"
              href="/restaurant/menu"
            >
              Explore our menu ↗
            </Link>
            <Link
              className="text-link"
              href="/restaurant/reservations"
            >
              Join us at the table →
            </Link>
          </div>
        </div>
        <span className="hero-note">
          FOOD, FRIENDSHIP & EVERYTHING IN BETWEEN
        </span>
      </section>
      <section className="section two-col">
        <div>
          <p className="eyebrow">WELCOME TO OUR TABLE</p>
          <h2>
            Some things are
            <br />
            <em>better shared.</em>
          </h2>
        </div>
        <div>
          <p className="lead">
            A favourite dish. A new discovery. An evening that turns into a
            story.
          </p>
          <p>
            At Four Friends Kitchen, we bring a love of cooking and good company
            to every plate. Familiar comfort meets a little adventure, with
            flavours inspired by Eastern and Western kitchens.
          </p>
          <Link
            className="text-link"
            href="/restaurant/about"
          >
            Get to know us ↗
          </Link>
        </div>
      </section>
      <section className="section shaded">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FROM OUR KITCHEN</p>
            <h2>
              Signature <em>favourites.</em>
            </h2>
          </div>
          <Link
            className="text-link"
            href="/restaurant/menu"
          >
            View the full menu ↗
          </Link>
        </div>
        <div className="cards">
          {[
            "Pineapple Nachos Pizza",
            "Spicy JASS Burger",
            "JASS Bourbon Wings",
          ].map((name, i) => (
            <Link
              className="dish-card"
              href="/restaurant/menu"
              key={name}
            >
              <Photo
                src={`/images/${name}.jpg`}
                alt={name}
                sizes="(max-width: 650px) 88vw, 28vw"
              />
              <div>
                <span className="eyebrow">0{i + 1} / MADE TO BE SAVOURED</span>
                <h3>
                  {name} <span>↗</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section two-col feature">
        <Photo
          src="/images/chef.JPG"
          alt="Chef Susan"
        />
        <div>
          <p className="eyebrow">THE PERSON BEHIND THE PLATES</p>
          <h2>
            A little passion.
            <br />
            <em>A lot of heart.</em>
          </h2>
          <p>
            For Chef Susan, cooking is a way to connect. Bringing together
            different influences, bold ideas and the pleasure of sharing a meal,
            every dish is part of a bigger story.
          </p>
          <Link
            className="text-link"
            href="/cookbook"
          >
            Discover the story in JASS ↗
          </Link>
        </div>
      </section>
      <BookingCTA />
    </main>
  );
}
