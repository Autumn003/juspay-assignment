import {
  ComposableMap,
  createCoordinates,
  Geographies,
  Geography,
  Marker,
} from "@vnedyalk0v/react19-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

// export default function WorldMap() {
//   return (
//     <ComposableMap
//       projection="geoMercator"
//       projectionConfig={{
//         scale: 120,
//         center: createCoordinates(20, 20),
//       }}
//     >
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies
//             .filter((geo) => geo.properties.name !== "Antarctica")
//             .map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 fill="var(--color-secondary-cyan)"
//                 stroke="var(--color-background)"
//                 fillOpacity={0.5}
//               />
//             ))
//         }
//       </Geographies>

//       <Marker coordinates={createCoordinates(-74, 40)}>
//         <circle
//           r={12}
//           fill="var(--color-primary-brand)"
//           stroke="#ffffff"
//           strokeWidth={6}
//         />
//       </Marker>
//     </ComposableMap>
//   );
// }

interface MarkerData {
  longitude: number;
  latitude: number;
}

interface WorldMapProps {
  markers?: MarkerData[];
}

export default function WorldMap({ markers = [] }: WorldMapProps) {
  return (
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
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
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
          />
        </Marker>
      ))}
    </ComposableMap>
  );
}
