import React from "react";
import GoogleMapReact from "google-map-react";
import { IRestaurant } from "../InterfaceEnumsMeta/InterFace";
import { MdLocationPin } from "react-icons/md";

export default function SimpleMap({
  restaurant,
}: {
  restaurant?: IRestaurant;
}) {
  const defaultProps = {
    center: {
      lat: restaurant?.address?.location?.coordinates[0]
        ? restaurant?.address?.location?.coordinates[0]
        : 47.917229655098424,
      lng: restaurant?.address?.location?.coordinates[1]
        ? restaurant?.address?.location?.coordinates[1]
        : 106.9163248383444,
    },
    zoom: 11,
    extends: true,
  };
  // console.log(restaurant);

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCFxLxHovmdaNac-fLDg0guhBdSO4o8cIg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}>
        <div
          className="circle"
          lat={restaurant?.address.location?.coordinates[0]}
          lng={restaurant?.address.location?.coordinates[1]}>
          <span
            className="circleText text-red-500 text-3xl"
            title={restaurant?.restaurantName}>
            <MdLocationPin />
          </span>
        </div>
      </GoogleMapReact>
    </div>
  );
}
