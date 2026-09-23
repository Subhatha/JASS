import Link from "next/link";
import { Intro } from "@/components/site";
import { Stories } from "../_components/stories";
export const metadata = { title: "The story behind JASS" };
export default function AboutBook() {
  return (
    <main id="main">
      <Intro
        eyebrow="BEHIND THE PAGES"
        title="Food is only the beginning."
        description="JASS connects a love of cooking with the courage to learn, create and grow."
      />
      <Stories />
      <section className="cta">
        <p className="eyebrow">THE SAME PASSION. ANOTHER PLACE TO FIND IT.</p>
        <h2>
          Read the story.
          <br />
          <em>Meet the kitchen.</em>
        </h2>
        <Link
          className="button"
          href="/restaurant"
        >
          Visit Four Friends Kitchen ↗
        </Link>
      </section>
    </main>
  );
}
