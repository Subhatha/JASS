import Link from "next/link";
import { Intro } from "@/components/site";
export const metadata = { title: "JASS book questions" };
const questions = [
  [
    "What is JASS about?",
    "JASS is an inspirational book connecting food, creativity and personal stories with reflections on purpose, motivation and confidence.",
  ],
  [
    "How much does the book cost?",
    "The listed price is $24.99 USD. Review the total shown at checkout before paying.",
  ],
  [
    "How do I buy a copy?",
    "Select ‘Get your copy’ on the book page to open secure Stripe checkout. If checkout is temporarily unavailable, please return later.",
  ],
  [
    "What about the format, delivery and returns?",
    "Book format, delivery arrangements and return terms have not yet been published here. Please confirm these details with the seller before purchasing.",
  ],
  [
    "Is JASS connected to Four Friends Kitchen?",
    "Yes. The book shares the passion for cooking, learning and bringing people together that inspires Four Friends Kitchen.",
  ],
  [
    "My checkout was cancelled. Was my order placed?",
    "A cancelled checkout does not complete an order. You can return to the book page and try again. If you are unsure whether a payment went through, check your payment confirmation before retrying.",
  ],
];
export default function FAQ() {
  return (
    <main id="main">
      <Intro
        eyebrow="A FEW THINGS YOU MIGHT WONDER"
        title="Good questions. Simple answers."
        description="A little more about JASS and getting your own copy."
      />
      <section className="section faq">
        {questions.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
        <Link
          className="button"
          href="/cookbook"
        >
          Back to the book ↗
        </Link>
      </section>
    </main>
  );
}
