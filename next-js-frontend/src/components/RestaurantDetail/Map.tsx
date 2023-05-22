import React from "react";
import { IRestaurant } from "../InterfaceEnumsMeta/InterFace";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Loading } from "../Loading";

export default function SimpleMap({
  restaurant,
}: {
  restaurant?: IRestaurant;
}): JSX.Element {
  const mapStyle = {
    borderRadius: "20px",
    height: "100%",
    width: "100%",
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCFxLxHovmdaNac-fLDg0guhBdSO4o8cIg" as string,
  });

  if (!isLoaded) return <Loading />;
  return (
    <div className="w-[100%] h-[100%]">
      {restaurant && (
        <GoogleMap
          zoom={13}
          center={{
            lat: 47.91491313549779,
            lng: 106.90851741242646,
          }}
          mapContainerClassName="map-container"
          mapContainerStyle={mapStyle}
        >
          <div>
            <MarkerF
              position={{
                lat: restaurant.address.location.coordinates[0]
                  ? restaurant.address.location.coordinates[0]
                  : 47.91491313549779,
                lng: restaurant.address.location.coordinates[1]
                  ? restaurant.address.location.coordinates[1]
                  : 106.90851741242646,
              }}
            />
          </div>
        </GoogleMap>
      )}
    </div>
  );
}
