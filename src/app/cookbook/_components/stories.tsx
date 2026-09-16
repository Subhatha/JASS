"use client";

import { assetPath } from "@/lib/asset-path";
import { useState } from "react";
import Image from "next/image";
import { jassStories } from "@/lib/jass-content";
import styles from "./storytelling.module.css";

function ExpandableText({ id, paragraphs }: { id: string; paragraphs: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const opening = paragraphs[0] ?? "";
  const needsExpansion = opening.length > 240 || paragraphs.length > 1;
  const preview = opening.length > 240
    ? `${opening.slice(0, 240).replace(/\s+\S*$/, "")}…`
    : opening;
  const visibleParagraphs = expanded ? paragraphs : [preview];

  return (
    <>
      <div id={`${id}-text`} className={styles.paragraphs}>
        {visibleParagraphs.map((paragraph, index) => (
          <p key={`${id}-${index}`}>
            {paragraph.split(/(\*\*[^*]+\*\*)/g).map((part, partIndex) =>
              part.startsWith("**") && part.endsWith("**")
                ? <strong key={partIndex}>{part.slice(2, -2)}</strong>
                : part
            )}
          </p>
        ))}
      </div>
      {needsExpansion && (
        <button
          type="button"
          className={styles.storyToggle}
          aria-expanded={expanded}
          aria-controls={`${id}-text`}
          onClick={() => setExpanded(current => !current)}
        >
          {expanded ? "Read less" : "Read more"}
          <span aria-hidden="true">{expanded ? "−" : "+"}</span>
        </button>
      )}
    </>
  );
}

export function Stories() {
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
                <div className={styles.summaries}>
                  {story.summaries.every(summary => !summary.title) && (
                    <h4 className={styles.textHeading}>How it all started</h4>
                  )}
                  {story.summaries.map(summary => (
                    <section key={summary.id} className={styles.summary} aria-labelledby={summary.title ? `${story.id}-${summary.id}-heading` : undefined}>
                      {summary.title && <h4 id={`${story.id}-${summary.id}-heading`} className={styles.textHeading}>{summary.title}</h4>}
                      <ExpandableText id={`${story.id}-${summary.id}`} paragraphs={summary.paragraphs} />
                    </section>
                  ))}
                </div>
                <section className={styles.introduction} aria-labelledby={`${story.id}-intro-heading`}>
                  <h4 id={`${story.id}-intro-heading`} className={styles.textHeading}>About {story.name}</h4>
                  <ExpandableText id={story.id} paragraphs={story.paragraphs} />
                </section>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
