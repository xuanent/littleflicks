"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./LocationBar.module.css";

const LOCATIONS = [
  { label: "All", slug: "all" , desc: "Everything everywhere all at once"},
  { label: "Olympic", slug: "olympic", desc: "Oct'24 with sinyuen and cheryl, and again in May'25 with xuan's parents" },
  { label: "Yosemite", slug: "yose", desc: "May'25 with xuan's parents" },
  { label: "Cabo", slug: "cabo", desc: "Mar'25 spring break" },
  { label: "Pinnacle", slug: "pinn", desc: "Jan'25 club spring retreat" },
  { label: "Rocky Mt", slug: "rockymt", desc: "Jan'25 with eric" },
  { label: "NYC", slug: "newyork", desc: "Nov'24 just us. mostly central park and the MET, didn't wanna bring the camera on our other days" },
  { label: "Mt Rainier", slug: "rainier", desc: "Oct'24 with sinyuen and cheryl" },
  { label: "Maui", slug: "maui", desc: "Nov'24 with jessica, nabo, and eric. pre-thanksgiving break." },
  { label: "Bass Lake", slug: "bass", desc: "Sept'24 club fall retreat" },
  { label: "Sequoia", slug: "sequoia", desc: "Sept'24 club fall retreat" }
];

export default function LocationBar( {locationSlug} ) {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const locationSlug = searchParams.get("location") || "all";

  const containerRef = useRef(null);
  const [touchStartX, setTouchStartX] = useState(0);

  const currentIndex = LOCATIONS.findIndex(loc => loc.slug === locationSlug);

  const handleSwipe = (direction) => {
    let nextIndex = currentIndex;
    if (direction === "left" && currentIndex < locations.length - 1) {
      nextIndex++;
    } else if (direction === "right" && currentIndex > 0) {
      nextIndex--;
    }

    const nextLocation = LOCATIONS[nextIndex];
    if (nextLocation) {
      router.push(`?location=${encodeURIComponent(nextLocation.slug)}`);
    }
  };

  return (
    <div
      className={styles.locationBar}
      ref={containerRef}
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(deltaX) > 50) {
          handleSwipe(deltaX < 0 ? "left" : "right");
        }
      }}
    >
      <button
          onClick={() => router.push("/alltrips")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 11.25L12 4l9 7.25M4.5 10.75V20a1 1 0 001 1h13a1 1 0 001-1v-9.25M9 21V13h6v8"
            />
          </svg>
        </button>
      {LOCATIONS.map((loc) => (
        <button
          key={loc.slug}
          className={`${styles.locationButton} ${
            loc.slug === locationSlug ? styles.active : ""
          }`}
          onClick={() => router.push(`?location=${encodeURIComponent(loc.slug)}`)}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}
