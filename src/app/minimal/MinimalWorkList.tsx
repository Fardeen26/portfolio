"use client";

import { useState } from "react";

export type MinimalWorkItem = {
  title: string;
  meta: string;
  description: string;
  link: string;
  source?: string;
};

export function MinimalWorkList({ items }: { items: MinimalWorkItem[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, 3);
  const hasMore = items.length > 3;

  return (
    <>
      {visible.map((item) => (
        <article key={item.title} className="minimal-entry">
          <h3 className="minimal-entry-title">{item.title}</h3>
          {/* <p className="minimal-entry-meta">{item.meta}</p> */}
          <p className="minimal-entry-desc">{item.description}</p>
          <p className="minimal-entry-links">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              site
            </a>
            {item.source && (
              <a href={item.source} target="_blank" rel="noopener noreferrer">
                source
              </a>
            )}
          </p>
        </article>
      ))}
      {hasMore && !showAll && (
        <button
          type="button"
          className="minimal-show-more"
          onClick={() => setShowAll(true)}
        >
          show more
        </button>
      )}
    </>
  );
}
