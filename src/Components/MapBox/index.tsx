import React, { useState } from "react";

import Map, { Marker } from "react-map-gl";
import "./mapbox.scss";
import { DATA } from "../../Utils/MAPData";
import "mapbox-gl/dist/mapbox-gl.css";

interface ViewportInterface {
  longitude: number;
  latitude: number;
  zoom: number;
  width: number;
  height: number;
  container: string;
}

interface LocationInterface {
  longitude: number;
  latitude: number;
}

const mapboxAPI = process.env.mapbox;

function MapBox() {
  const [
    geoLocation,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setGeoLocation,
  ] = useState<LocationInterface>({
    longitude: 6.922989056700832,
    latitude: 79.85548993910324,
  });

  const [pin, setPin] = useState<LocationInterface>({
    longitude: DATA[0].Longitude,
    latitude: DATA[0].Latitude,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [viewport, setViewport] = useState<ViewportInterface>({
    longitude: geoLocation.latitude,
    latitude: geoLocation.longitude,
    zoom: 14,
    width: window.innerWidth,
    height: window.innerHeight,
    container: "mapbox-gl-custom",
  });

  const addMarker = (event: any) => {
    const coordinates = event.lngLat;
    setPin({
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    });
  };

  return (
    <Map
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewport}
      mapStyle="mapbox://styles/sithumdev07/cl1np10b8000314qhz0wtpf9c"
      mapboxAccessToken={mapboxAPI}
      // onMove={(nextViewport) => setViewport(nextViewport.viewState)}
      onClick={(event) => {
        addMarker(event);
      }}
    >
      <Marker latitude={pin.latitude} longitude={pin.longitude} draggable />
    </Map>
  );
}

export default MapBox;
