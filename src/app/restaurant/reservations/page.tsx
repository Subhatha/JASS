"use client";
import { useState } from "react";
import { Intro } from "@/components/site";
import { contactEmail, address, mapUrl } from "@/lib/site-config";
export default function Reservations() {
  const [prepared, setPrepared] = useState(false);
  const [error, setError] = useState("");
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  return (
    <main id="main">
      <Intro
        eyebrow="MAKE TIME FOR GOOD COMPANY"
        title="A seat at our table."
        description="Tell us what you have in mind. Every good evening starts with a plan."
      />
      <section className="section reservation-grid">
        <aside>
          <p className="eyebrow">YOUR VISIT</p>
          <h2>
            We’ll take care
            <br />
            of the <em>details.</em>
          </h2>
          <p>
            Share your preferred date, time and group size. A reservation is
            only confirmed once you hear back from our team.
          </p>
          <div className="info-block">
            <h3>Something to celebrate?</h3>
            <p>
              Add your occasion, accessibility needs or dietary requirements
              below.
            </p>
          </div>
          <div className="info-block">
            <h3>Find us</h3>
            <p>{address}</p>
            <a
              className="text-link"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions ↗
            </a>
          </div>
        </aside>
        <form
          className="reservation-form"
          onChange={() => {
            setPrepared(false);
            setError("");
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            if (
              `${data.get("date")}T${data.get("time")}` <
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .slice(0, 16)
            ) {
              setError("Please choose a future date and time.");
              return;
            }
            if (!contactEmail) {
              setError(
                "Online reservation enquiries are not available yet. Please contact the restaurant directly to confirm your visit.",
              );
              return;
            }
            const body = [
              "Reservation enquiry",
              ...Array.from(data.entries()).map(
                ([key, value]) => `${key}: ${value}`,
              ),
            ].join("\n");
            window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent("Table reservation enquiry")}&body=${encodeURIComponent(body)}`;
            setPrepared(true);
          }}
        >
          <h3>Your reservation enquiry</h3>
          <p className="form-note">
            {contactEmail
              ? "Your enquiry opens in your email app. Send the email to request your table."
              : "Online enquiries are coming soon. Please arrange your reservation directly with the restaurant."}
          </p>
          <div className="form-grid">
            <label>
              Full name
              <input
                required
                name="name"
                autoComplete="name"
                placeholder="Your name"
                maxLength={100}
              />
            </label>
            <label>
              Email address
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <label>
              Preferred date
              <input
                required
                type="date"
                name="date"
                min={minDate}
              />
            </label>
            <label>
              Preferred time
              <input
                required
                type="time"
                name="time"
              />
            </label>
            <label>
              Number of guests
              <select
                name="guests"
                required
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                >
                  Select party size
                </option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option
                    key={i}
                    value={i + 1}
                  >
                    {i + 1} {i === 0 ? "guest" : "guests"}
                  </option>
                ))}
                <option value="11+">11+ guests</option>
              </select>
            </label>
            <label>
              Phone (optional)
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Include country code"
              />
            </label>
            <label className="full">
              Anything we should know? (optional)
              <textarea
                name="notes"
                rows={4}
                maxLength={2000}
                placeholder="An occasion, dietary requirements or special requests…"
              />
            </label>
          </div>
          {error && (
            <p
              role="alert"
              className="notice"
            >
              {error}
            </p>
          )}
          {prepared && (
            <p
              role="status"
              className="notice"
            >
              Your email draft is ready. Please send it from your email app.
              Your table is not confirmed until our team replies.
            </p>
          )}
          <button
            className="button"
            type="submit"
            disabled={!contactEmail}
          >
            {contactEmail
              ? "Prepare reservation email ↗"
              : "Online enquiries coming soon"}
          </button>
          <p className="form-note">
            Your details are used to prepare your enquiry. This form does not
            confirm a booking.
          </p>
        </form>
      </section>
    </main>
  );
}
