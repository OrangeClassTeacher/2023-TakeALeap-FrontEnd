import React from "react";
import GoogleMapReact from "google-map-react";
import { IRestaurant } from "../InterfaceEnumsMeta/InterFace";

import Marker from "./Marker";

export default function SimpleMap({
  restaurant,
}: {
  restaurant?: IRestaurant;
}) {
  const { coordinates }: any = restaurant?.address.location;
  const defaultProps = {
    center: {
      lat: coordinates[0] ? coordinates[0] : 47.917229655098424,
      lng: coordinates[1] ? coordinates[1] : 106.9163248383444,
    },
    zoom: 11,
    extends: true,
  };
  // console.log(restaurant);

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP ? process.env.MAP : "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <Marker coordinates={coordinates} restaurant={restaurant} />
      </GoogleMapReact>
    </div>
  );
}
