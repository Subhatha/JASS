"use client";

import { assetPath } from "@/lib/asset-path";
import { useState } from "react";
import Image from "next/image";
import { jassStories } from "@/lib/jass-content";
import styles from "./storytelling.module.css";

export function Stories() {
  const [expandedStories, setExpandedStories] = useState<string[]>([]);

  function toggleStory(id: string) {
    setExpandedStories((current) => {
      if (current.includes(id)) {
        return current.filter((storyId) => storyId !== id);
      }

      return [...current, id];
    });
  }

  return (
    <section
      id="stories"
      className="section"
      aria-labelledby="stories-heading"
    >
      <div className={styles.heading}>
        <p className="eyebrow">THE PEOPLE BEHIND THE PAGES</p>
        <h2 id="stories-heading">
          Three people.
          <br />
          <em>Three stories to discover.</em>
        </h2>
        <p>
          Take a moment to meet the people behind JASS. Each story has its own
          space, ready to be read at your pace.
        </p>
      </div>

      <div className={styles.stories}>
        {jassStories.map((story, index) => {
          const expanded = expandedStories.includes(story.id);
          const opening = story.paragraphs[0] ?? "";
          const needsExpansion = opening.length > 240 || story.paragraphs.length > 1;
          const preview = opening.length > 240
            ? `${opening.slice(0, 240).replace(/\s+\S*$/, "")}…`
            : opening;
          const visibleParagraphs = expanded ? story.paragraphs : [preview];

          return (
            <article
              key={story.id}
              className={styles.story}
              aria-labelledby={`${story.id}-heading`}
            >
              <div className={styles.portrait}>
                {story.portrait ? (
                  <Image
                    src={assetPath(story.portrait)}
                    alt={story.portraitAlt}
                    fill
                    sizes="(max-width: 400px) 88vw, 320px"
                    className={styles.portraitImage}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.placeholderNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>Portrait coming soon</span>
                  </div>
                )}
              </div>

              <div className={styles.storyCopy}>
                <p className="eyebrow">{story.role}</p>
                <h3 id={`${story.id}-heading`}>{story.name}</h3>
                <div
                  id={`${story.id}-text`}
                  className={styles.paragraphs}
                >
                  {visibleParagraphs.map((paragraph, paragraphIndex) => (
                    <p key={`${story.id}-${paragraphIndex}`}>{paragraph}</p>
                  ))}
                </div>
                {needsExpansion && (
                  <button
                    type="button"
                    className={styles.storyToggle}
                    aria-expanded={expanded}
                    aria-controls={`${story.id}-text`}
                    onClick={() => toggleStory(story.id)}
                  >
                    {expanded ? "Read less" : "Read more"}
                    <span aria-hidden="true">{expanded ? "−" : "+"}</span>
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
