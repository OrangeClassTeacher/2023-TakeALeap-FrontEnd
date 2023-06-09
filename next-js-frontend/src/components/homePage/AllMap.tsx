import React from "react";
import { IRestaurant } from "../InterfaceEnumsMeta/InterFace";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Loading } from "../Loading";

export default function AllMap({
  restaurants,
}: {
  restaurants: IRestaurant[];
}): JSX.Element {
  const mapStyle = {
    borderRadius: "20px",
    height: "100%",
    width: "100%",
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAhjl1X_pQkIAeTUWlWv4cKKUDqgyxDCQE" as string,
  });

  if (!isLoaded) return <Loading />;
  return (
    <div className="w-[100%] h-[100%]">
      <div className="text-center uppercase text-3xl p-10">
        Restaurant in Map
      </div>
      <div className="w-[100%] h-[80%]">
        <GoogleMap
          zoom={13}
          center={{
            lat: 47.91491313549779,
            lng: 106.90851741242646,
          }}
          options={{ scrollwheel: false }}
          mapContainerClassName="map-container"
          mapContainerStyle={mapStyle}>
          {restaurants.map((items, index) => {
            const { coordinates } = items.address.location;

            return (
              <div key={index}>
                <MarkerF
                  position={{
                    lat: Number(coordinates[0]),
                    lng: Number(coordinates[1]),
                  }}
                />
              </div>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  );
}
