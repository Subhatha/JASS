import Link from "next/link";
import { Intro, Photo } from "@/components/site";
import { address, contactEmail, contactPhone, mapUrl } from "@/lib/site-config";
export const metadata = { title: "Visit us" };
export default function Contact() {
  return (
    <main id="main">
      <Intro
        eyebrow="FIND YOUR WAY TO OUR TABLE"
        title="We’d love to welcome you."
        description="Come for the food. Stay for the company. Find Four Friends Kitchen in Canada."
      />
      <section className="section two-col feature">
        <div>
          <p className="eyebrow">COME ON IN</p>
          <h2>
            A little corner
            <br />
            <em>of Canada.</em>
          </h2>
          <address>{address}</address>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Get directions ↗
          </a>
          <div className="info-block">
            <h3>Before your visit</h3>
            <p>
              Please check opening hours and table availability with our team
              before travelling.
            </p>
            {contactPhone && (
              <p>
                <a href={`tel:${contactPhone.replace(/[^+\d]/g, "")}`}>
                  {contactPhone}
                </a>
              </p>
            )}
            {contactEmail && (
              <p>
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </p>
            )}
          </div>
          <Link
            className="button"
            href="/restaurant/reservations"
          >
            Plan a reservation ↗
          </Link>
        </div>
        <Photo
          src="/images/restaurant.jpg"
          alt="A look inside the restaurant"
        />
      </section>
      <section className="section shaded two-col">
        <div>
          <p className="eyebrow">MAKE IT YOUR OCCASION</p>
          <h2>
            Big moments.
            <br />
            <em>Small gatherings.</em>
          </h2>
        </div>
        <div>
          <p>
            Celebrating with friends, bringing the family or planning a group
            dinner? Include the occasion and any dietary needs in your
            reservation enquiry.
          </p>
          <p>
            Our team can help you plan the details and confirm what is available
            for your visit.
          </p>
          <Link
            className="text-link"
            href="/restaurant/reservations"
          >
            Start planning →
          </Link>
        </div>
      </section>
    </main>
  );
}
