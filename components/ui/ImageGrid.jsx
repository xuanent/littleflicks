"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./ImageGrid.module.css";
import { imagesByLocation } from "@/lib/imagesByLocation";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"



export default function ImageGrid({ locationSlug }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setImages([]);

    const newImages =
      locationSlug === "all"
        ? Object.values(imagesByLocation).flat()
        : imagesByLocation[locationSlug] || [];

    setImages(newImages);
    setLoading(false);
  }, [locationSlug]);
      

  return (
    <div className = "flex justify-center p-[4%]">

      <div className={styles.gridContainer}>
        {loading ? (
         
          Array.from({ length: 8 }).map((_, i) => (
            <div className={styles.gridItem} key={i}>
              <Skeleton className="h-[300px] w-full"/>
            </div>
          ))
          
         ) : (
          images.map((img, index) => (
            <div className={styles.gridItem} key={index} onClick={() => setSelectedImage(img)}>
              <Image className={styles.gridImage} src={img} alt={`Image ${index}`} width={300} height={300} loading="lazy" 
              // unoptimized
              />
            </div>
          ))
          )} 
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <img className={styles.fullImage} src={selectedImage} alt="Zoomed" />
          <button
            className={styles.downloadButton}
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from closing
              const link = document.createElement("a");
              link.href = selectedImage;
              link.download = "cantdecidewhatname.jpg"; 
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            love it? save it
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}