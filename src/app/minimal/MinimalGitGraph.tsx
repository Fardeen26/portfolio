"use client";

import Link from "next/link";
import { ActivityCalendar, type Activity } from "react-activity-calendar";

const minimalTheme = {
  light: ["#f0f0f0", "#d8d8d8", "#b0b0b0", "#707070", "#111111"],
  dark: ["#f0f0f0", "#d8d8d8", "#b0b0b0", "#707070", "#111111"],
};

type MinimalGitGraphProps = {
  contributions: Activity[];
};

export default function MinimalGitGraph({
  contributions,
}: MinimalGitGraphProps) {
  return (
    <div className="minimal-git-graph">
      <Link
        href="https://github.com/Fardeen26"
        target="_blank"
        rel="noopener noreferrer"
        className="minimal-git-graph-link"
      >
        <ActivityCalendar
          data={contributions}
          blockSize={10}
          blockMargin={3}
          theme={minimalTheme}
          colorScheme="light"
          hideColorLegend
          hideTotalCount
        />
      </Link>
    </div>
  );
}
