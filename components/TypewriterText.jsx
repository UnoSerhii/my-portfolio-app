"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({ text, speed = 60, className = "h1 mb-6" }) {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  const fullText = text.replace(/\\n/g, "\n");

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [index, fullText, speed]);

  const getHighlightedText = (str) => {
    const words = str.split(" ");
    return words.map((word, i) => {
      const cleanWord = word.replace(/[^a-zA-Zа-яА-ЯіІїЇєЄґҐʼ]/g, "");
      const isName = cleanWord === "Serhii" || cleanWord === "Kokorskyi";

      return (
        <span key={i} className={isName ? "text-accent" : ""}>
          {word + " "}
        </span>
      );
    });
  };

  return (
    <div className={`${className} relative`}>
      <div className="invisible whitespace-pre-line">
        {fullText.split("\n").map((line, i) => (
          <div key={i}>{getHighlightedText(line)}</div>
        ))}
      </div>

      <div className="absolute top-0 left-0 whitespace-pre-line">
        {fullText
          .substring(0, index)
          .split("\n")
          .map((line, i) => (
            <div key={i}>{getHighlightedText(line)}</div>
          ))}
        {!done && (
          <span className="inline-block w-[1ch] bg-accent ml-1 animate-pulse" />
        )}
      </div>
    </div>
  );
}
