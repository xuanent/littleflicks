
"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import LocationBar from "@/components/ui/LocationBar.jsx";
import ImageGrid from "@/components/ui/ImageGrid";
import styles from "./page.module.css";
import { imagesByLocation } from "@/lib/imagesByLocation";
import { Skeleton } from "@/components/ui/skeleton"


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

// export const dynamic = "force-dynamic";

export default function LocationsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locationSlug = searchParams.get("location") || "all";

  const locationObj = LOCATIONS.find(loc => loc.slug === locationSlug);
  const locationLabel = locationObj.label; 
  const locationDesc = locationObj.desc;

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setImages([]); // clear old images immediately

    // simulate delay for fetching if needed
    const timeout = setTimeout(() => {
      const imgs =
        locationSlug === "all"
          ? Object.values(imagesByLocation).flat()
          : imagesByLocation[locationSlug] || [];
      setImages(imgs);
      setLoading(false);
    }, 0); // set to 0 if loading is instant

    return () => clearTimeout(timeout);
  }, [locationSlug]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-[125px] w-[250px] rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <LocationBar locationSlug = {locationSlug}/>
      <div className={styles.header}>
        <div className={styles.place}> {locationLabel} </div>
        <div className={styles.desc}> {locationDesc} </div>
      </div>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[125px] w-[250px] rounded-xl" />
          ))}
        </div>
      ) : (
        <ImageGrid images={images} />
      )}
    </div>
  );
}
