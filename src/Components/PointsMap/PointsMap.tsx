// import React, { Component } from 'react';
// import {highpoints} from '../../data';
// import {
//     ComposableMap,
//     ZoomableGroup,
//     Geographies,
//     Geography,
//     Marker,
//   } from "react-simple-maps";

// import {geoAlbersUsa} from "d3-geo";

// class PointsMap extends Component {
    
//     render() { 
//         return (
//            <div className="map-container">
//               <ComposableMap
//    projection={geoAlbersUsa}
//    projectionConfig={{ scale: 1000 }}
//    width={980}
//    height={551}
//    style={{
//       width: "100%",
//       height: "auto",
//    }}
// >
// <Geographies  geography='/src/gadm36_USA.json'>
//   {(geographies, projection) =>
//     geographies.map((geography, i) =>
//      <Geography
//        key={i}
//        geography={geography}
//        projection={projection}
//        style={{
//          default: {
//             fill: "#ECEFF1",
//             stroke: "#607D8B",
//             strokeWidth: 0.75,
//             outline: "none",
//          },
//          hover: {
//             fill: "#CFD8DC",
//             stroke: "#607D8B",
//             strokeWidth: 1,
//             outline: "none",
//          },
//          pressed: {
//             fill: "#FF5722",
//             stroke: "#607D8B",
//             strokeWidth: 1,
//             outline: "none",
//          }
//       }}
//     />
//        )
//   }
// </ Geographies>
// </ ComposableMap>
//            </div>
//         )
//     }
// }
// export default PointsMap

// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker
// } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const markers = [
//   {
//     markerOffset: -15,
//     name: "Buenos Aires",
//     coordinates: [-58.3816, -34.6037]
//   },
//   { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
//   { markerOffset: 25, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
//   { markerOffset: 25, name: "Santiago", coordinates: [-70.6693, -33.4489] },
//   { markerOffset: 25, name: "Bogota", coordinates: [-74.0721, 4.711] },
//   { markerOffset: 25, name: "Quito", coordinates: [-78.4678, -0.1807] },
//   { markerOffset: -15, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
//   { markerOffset: -15, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
//   { markerOffset: 25, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
//   { markerOffset: 25, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
//   { markerOffset: -15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
//   { markerOffset: -15, name: "Lima", coordinates: [-77.0428, -12.0464] }
// ];

// const PointsMap = () => {
//   return (
//     <ComposableMap
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         rotate: [58.0, 20.0],
//         scale: 400
//       }}
//     >
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies
//             .filter(d => d.properties.REGION_UN === "Americas")
//             .map(geo => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 fill="#EAEAEC"
//                 stroke="#D6D6DA"
//               />
//             ))
//         }
//       </Geographies>
//       {markers.map(({ name, coordinates, markerOffset }) => (
//         <Marker key={name} coordinates={coordinates}>
//           <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
//           <text
//             textAnchor="middle"
//             y={markerOffset}
//             style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
//           >
//             {name}
//           </text>
//         </Marker>
//       ))}
//     </ComposableMap>
//   );
// };

// export default PointsMap;
import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

// import allStates from "./data/allstates.json";

// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const PointsMap = () => (
  <div>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
    </ComposableMap>
  </div>
);


export default PointsMap;
