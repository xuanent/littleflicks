"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/north-america.json";

const markers = [
  { markerOffset: 15, name: "NYC", slug: "newyork", coordinates: [-74.006, 40.7128] },
  { markerOffset: 15, name: "Mt Rainier", slug: "rainier", coordinates: [-121.726906, 46.879967] },
  { markerOffset: 15, name: "Cabo", slug: "cabo", coordinates: [-109.9152, 22.8948] },
  { markerOffset: -30, name: "Olympic", slug: "olympic", coordinates: [-123.6044, 47.8021] },
  { markerOffset: 20, name: "Pinnacle", slug: "pinn", coordinates: [-121.1825, 36.4906] },
  { markerOffset: -30, name: "Yosemite", slug: "yose", coordinates: [-119.5383, 37.8651] },
  { markerOffset: 17, horizontalOffset: 10, name: "Bass Lake", slug: "bass", coordinates: [-117.0775, 37.3309]},
  { markerOffset: 15, name: "Rocky Mountains", slug: "rockymt", coordinates: [-105.7364, 40.3466] },
  { markerOffset: 15, name: "Maui", slug: "maui", coordinates: [-156.3319, 20.7984] },
  { markerOffset: 23, horizontalOffset: 35, name: "Sequoia", slug: "sequoia", coordinates: [-118.5658, 36.4864] }
];

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 500,
        center: [-115, 30]
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#ADD8E6"
        stroke="#FFFFFF"
        strokeWidth={0.5}
    
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} 
            style={{
                default: { pointerEvents: "none" },
                hover: { pointerEvents: "none" },
                pressed: { pointerEvents: "none" },
                }}/>
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, slug, markerOffset, horizontalOffset = 0}) => (
        <Marker key={name} coordinates={coordinates}>
            <Link href={`/pics?location=${encodeURIComponent(slug)}`}>
                <g
                    fill="#FF5533"
                    stroke="#FF5533"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                    style={{ pointerEvents: "auto", cursor: "pointer" }}
                >
                    
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    <circle cx="12" cy="10" r="3" fill="#FFFFFF"/>
                </g>
            
            <text
                textAnchor="middle"
                y={markerOffset}
                x={horizontalOffset}
                className={styles.markerLabel}
                style={{ fontFamily: "serif", fill: "#5D5A6D", pointerEvents: "auto", cursor: "pointer",}}
            >
                {name}
            </text>
            </Link>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
