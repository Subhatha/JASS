"use client";
import { useState } from "react";
import { Intro, Photo, BookingCTA } from "@/components/site";
import { menu } from "@/lib/menu";
const categories = ["All", "Starters", "Main course", "Desserts & drinks"];
export default function Menu() {
  const [category, setCategory] = useState("All");
  return (
    <main id="main">
      <Intro
        eyebrow="SOMETHING FOR EVERY APPETITE"
        title="Made with heart. Shared with friends."
        description="Comforting classics, bold combinations and a few house favourites. Find your next favourite plate."
      />
      <section className="section menu-section">
        <div
          className="filters"
          aria-label="Filter menu"
        >
          {categories.map((c) => (
            <button
              key={c}
              aria-pressed={c === category}
              className={c === category ? "active" : ""}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="menu-note">
          Please let our team know about allergies or dietary requirements
          before ordering. Some photographs are representative.
        </p>
        <div className="menu-grid">
          {menu
            .filter((d) => category === "All" || d.category === category)
            .map((d) => (
              <article
                className="menu-item"
                key={d.name}
              >
                <Photo
                  src={`/images/${d.image}`}
                  alt={d.name}
                  sizes="(max-width: 650px) 100px, (max-width: 800px) 135px, (max-width: 1050px) 95px, 125px"
                />
                <div>
                  <span className="eyebrow">{d.category}</span>
                  <div className="menu-title">
                    <h2>{d.name}</h2>
                    <span>${d.price}</span>
                  </div>
                  <p>{d.description}</p>
                </div>
              </article>
            ))}
        </div>
        <p className="menu-note">
          Prices shown in USD, as listed in our current menu. Please confirm
          prices and availability with the restaurant.
        </p>
      </section>
      <BookingCTA />
    </main>
  );
}
