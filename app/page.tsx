"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const [slide, setSlide] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={`${styles.introDiv} ${slide ? styles.slideUp : ""}`}>
        <div>
          <p className="font-serif text-xl">
            {" "}
            Welcome to j
            <Dialog>
              <DialogTrigger> i </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    happy anniversary jiff!{" "}
                    <Image
                      src="/images/Heart-PNG-Image.png"
                      alt="yosemite"
                      width={20}
                      height={20}
                    />
                  </DialogTitle>
                  <DialogDescription>
                    here is a compilation of our travel diaries and i can't wait
                    to make many more memories with you. i love you!
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            ff and xuan's travel flicks{" "}
          </p>
        </div>

        <Image
          src="/images/IMG_2507.jpg"
          alt="yosemite"
          width={300}
          height={200}
          className={`${styles.borderRadius}`}
          onClick={() => setSlide(!slide)}
        />
      </div>
      <div
        className={`${styles.hiddenContent} ${slide ? styles.slideDown : ""}`}
      >
        <p>Open sesame!</p>
        <p>Bring me to the flicks</p>
        <div className={styles.buttonWrapper}>
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push("/alltrips")}
            className="hover:bg-blue-200"
          >
            <Image
              src="/library-photo.svg"
              alt="gallery"
              width={15}
              height={32}
            />{" "}
            Flicks
          </Button>
        </div>
      </div>
    </div>
  );
}
