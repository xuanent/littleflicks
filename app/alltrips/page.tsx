"use client";
import MapChart from "./MapChart";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function alltrips() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className="text-lg font-bold">
          where our dslr has been in north america
        </p>
      </div>
      <div className={styles.topMargin}>
        <div className={styles.statDiv}>
          <p className={styles.statText}>6</p>
          <DropdownMenu>
            <DropdownMenuTrigger className={"flex"}>
              National Parks
              <Image
                src="/drop down_icon.svg"
                alt="dropdown"
                width={20}
                height={32}
              />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Yosemite</DropdownMenuItem>
              <DropdownMenuItem>Pinnacle</DropdownMenuItem>
              <DropdownMenuItem>Rocky Mt</DropdownMenuItem>
              <DropdownMenuItem>Mt Rainier</DropdownMenuItem>
              <DropdownMenuItem>Olympic</DropdownMenuItem>
              <DropdownMenuItem>Haleakala/ Maui</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className={styles.statDiv}>
          <p className={styles.statText}>5</p>
          <DropdownMenu>
            <DropdownMenuTrigger className={"flex"}>
              States
              <Image
                src="/drop down_icon.svg"
                alt="dropdown"
                width={20}
                height={32}
              />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>CA</DropdownMenuItem>
              <DropdownMenuItem>CO</DropdownMenuItem>
              <DropdownMenuItem>HI</DropdownMenuItem>
              <DropdownMenuItem>WA</DropdownMenuItem>
              <DropdownMenuItem>NY</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className={styles.statDiv}>
          <p className={styles.statText}>9</p>
          <DropdownMenu>
            <DropdownMenuTrigger className={"flex"}>
              Places
              <Image
                src="/drop down_icon.svg"
                alt="dropdown"
                width={20}
                height={32}
              />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Yosemite</DropdownMenuItem>
              <DropdownMenuItem>Pinnacle</DropdownMenuItem>
              <DropdownMenuItem>Bass Lake</DropdownMenuItem>
              <DropdownMenuItem>Rocky Mt</DropdownMenuItem>
              <DropdownMenuItem>Mt Rainier</DropdownMenuItem>
              <DropdownMenuItem>Olympic</DropdownMenuItem>
              <DropdownMenuItem>Maui</DropdownMenuItem>
              <DropdownMenuItem>NYC</DropdownMenuItem>
              <DropdownMenuItem>Cabo</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className={styles.map}>
        <MapChart />
      </div>
    </div>
  );
}
