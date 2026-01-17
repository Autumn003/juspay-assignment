import {
  ComposableMap,
  createCoordinates,
  Geographies,
  Geography,
  Marker,
} from "@vnedyalk0v/react19-simple-maps";
import { useState } from "react";

const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

interface MarkerData {
  longitude: number;
  latitude: number;
  city: string;
  revenue: number;
}

interface WorldMapProps {
  markers?: MarkerData[];
}

export default function WorldMap({ markers = [] }: WorldMapProps) {
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    content: string;
  } | null>(null);

  return (
    <>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: createCoordinates(20, 20),
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.properties.name !== "Antarctica")
              .map((geo, index) => (
                <Geography
                  key={index}
                  geography={geo}
                  fill="var(--color-secondary-cyan)"
                  stroke="var(--color-background)"
                  fillOpacity={0.5}
                />
              ))
          }
        </Geographies>

        {markers.map((marker, index) => (
          <Marker
            key={`marker-${index}`}
            coordinates={createCoordinates(marker.longitude, marker.latitude)}
          >
            <circle
              r={12}
              fill="var(--color-primary-brand)"
              stroke="#ffffff"
              strokeWidth={6}
              onMouseEnter={(e) => {
                setTooltip({
                  x: e.clientX,
                  y: e.clientY,
                  content: `${marker.city}: ${marker.revenue}K`,
                });
              }}
              onMouseMove={(e) => {
                setTooltip((prev) =>
                  prev ? { ...prev, x: e.clientX, y: e.clientY } : prev,
                );
              }}
              onMouseLeave={() => setTooltip(null)}
              style={{ cursor: "pointer" }}
            />
          </Marker>
        ))}
      </ComposableMap>

      {tooltip && (
        <div
          className="fixed bg-[#1c1c1ccc] text-white px-2 py-1 rounded-lg backdrop-blur-2xl text-xs pointer-events-none z-10 whitespace-nowrap"
          style={{
            top: tooltip.y + 12,
            left: tooltip.x + 12,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </>
  );
}
