"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AutoManualCarousel() {
  const images = [
    "/pics/ken1.jpg",
    "/pics/ken2.jpg",
    "/pics/nm.jpg",
  ];

  const [index, setIndex] = useState(0);

  // --- Auto slide ---
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // --- Manual controls ---
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Image container */}
      <div className="relative h-[700px]">
        <Image
          src={images[index]}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover transition-opacity duration-700 ease-in-out"
          priority
        />
      </div>

      {/* Left / Right buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
      >
        ❯
      </button>

      {/* Dots / indicators */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
