

import LocationBar from "@/components/ui/LocationBar.jsx";
import { getImagesByLocation } from "@/lib/getImages";
import ImageGrid from "@/components/ui/ImageGrid";
import styles from "./page.module.css";

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

export default async function LocationsPage({searchParams}) {
    const locationSlug =
    typeof searchParams?.location === "string"
      ? searchParams.location.toLowerCase()
      : "all";

    const locationObj = LOCATIONS.find(loc => loc.slug === locationSlug);
    const locationLabel = locationObj.label; 
    const locationDesc = locationObj.desc;

  const imagesByLocation = getImagesByLocation();
  const images =
    locationSlug === "all"
      ? Object.values(imagesByLocation).flat()
      : imagesByLocation[locationSlug] || [];

  return (
    <div>
      <LocationBar/>
      <div className={styles.header}>
        <div className={styles.place}> {locationLabel} </div>
        <div className={styles.desc}> {locationDesc} </div>
      </div>
      <ImageGrid images={images} />
    </div>
  );
}
