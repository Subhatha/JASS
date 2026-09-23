"use client";
import { useState } from "react";
export function BuyButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <div>
      <button
        className="button"
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          setError("");
          try {
            const response = await fetch("/api/checkout", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ quantity: 1 }),
            });
            const data = await response.json();
            if (!response.ok || !data.url)
              throw new Error(
                data.error || "Unable to open checkout. Please try again.",
              );
            window.location.assign(data.url);
          } catch (e) {
            setError(
              e instanceof Error
                ? e.message
                : "Unable to open checkout. Please try again.",
            );
            setLoading(false);
          }
        }}
      >
        {loading ? "Opening checkout…" : "Get your copy · $24.99 ↗"}
      </button>
      {error && (
        <p
          className="notice"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
