import React from "react";
import GoogleMapReact from "google-map-react";
import Image from "next/image";

const AnyReactComponent = () => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/512px-Map_marker.svg.png"
    width={12}
    height={12}
    alt="Markers"
  />
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
    extends: true,
  };

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCFxLxHovmdaNac-fLDg0guhBdSO4o8cIg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
}
