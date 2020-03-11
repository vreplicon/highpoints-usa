import React, { Component } from 'react';
import {highpoints} from '../../data';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
  } from "react-simple-maps"
import {geoAlbersUsa} from "d3-geo";


class PointsMap extends Component {
    
    render() { 
        return (
           <div className="map-container">
              <ComposableMap
   projection={geoAlbersUsa}
   projectionConfig={{ scale: 1000 }}
   width={980}
   height={551}
   style={{
      width: "100%",
      height: "auto",
   }}
>
   ==== NEXT ELEMENT WILL BE IN HERE ====
</ ComposableMap>
           </div>
        )
    }
}
export default PointsMap