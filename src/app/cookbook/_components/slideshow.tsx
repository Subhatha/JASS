"use client";

import { assetPath } from "@/lib/asset-path";
import Image from "next/image";
import { useEffect, useState } from "react";
import { jassSlides } from "@/lib/jass-content";
import styles from "./storytelling.module.css";

export function Slideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const slide = jassSlides[activeIndex];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updatePreference() {
      setPaused(preference.matches);
    }

    updatePreference();
    preference.addEventListener("change", updatePreference);

    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || hovered) {
      return;
    }

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActiveIndex((current) => (current + 1) % jassSlides.length);
      }
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, hovered]);

  function moveSlide(direction: number) {
    setActiveIndex((current) => {
      return (current + direction + jassSlides.length) % jassSlides.length;
    });
  }

  return (
    <section
      className="section shaded"
      aria-labelledby="moments-heading"
      aria-roledescription="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!event.target.closest("[data-playback]")) {
          setPaused(true);
        }
      }}
    >
      <div className={styles.heading}>
        <p className="eyebrow">BETWEEN THE WORDS</p>
        <h2 id="moments-heading">
          A story in words.
          <br />
          <em>And in moments.</em>
        </h2>
        <p>A glimpse into the world of JASS, one photograph at a time.</p>
      </div>

      <figure
        className={styles.slide}
        aria-roledescription="slide"
        aria-label={`${activeIndex + 1} of ${jassSlides.length}`}
      >
        <div className={styles.slideImage}>
          {slide.src ? (
            <Image
              key={slide.id}
              src={assetPath(slide.src)}
              alt={slide.alt}
              fill
              sizes="(max-width: 900px) 88vw, 760px"
              className={styles.galleryImage}
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderNumber}>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span>Photograph coming soon</span>
            </div>
          )}
        </div>
        <figcaption
          className={styles.caption}
          aria-live={paused || hovered ? "polite" : "off"}
          aria-atomic="true"
        >
          <span>{slide.caption}</span>
          <span>{activeIndex + 1} / {jassSlides.length}</span>
        </figcaption>
      </figure>

      <div className={styles.playback}>
        <button
          type="button"
          className={styles.playbackButton}
          data-playback
          onClick={() => setPaused((current) => !current)}
        >
          {paused ? "Play slideshow" : "Pause slideshow"}
        </button>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => moveSlide(-1)}
          aria-label="Previous photograph"
        >
          ←
        </button>
        <div
          className={styles.dots}
          role="group"
          aria-label="Choose a photograph"
        >
          {jassSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={styles.dot}
              aria-label={`Show photograph ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => moveSlide(1)}
          aria-label="Next photograph"
        >
          →
        </button>
      </div>
    </section>
  );
}
