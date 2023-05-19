import React from "react";
import { IRestaurant } from "../InterfaceEnumsMeta/InterFace";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Loading } from "../Loading";

export default function SimpleMap({
  restaurant,
}: {
  restaurant?: IRestaurant;
}) {
  // const { coordinates }: any = restaurant?.address.location;
  // const defaultProps = {
  //   center: {
  //     lat: coordinates[0] ? coordinates[0] : 47.917229655098424,
  //     lng: coordinates[1] ? coordinates[1] : 106.9163248383444,
  //   },
  //   zoom: 11,
  //   extends: true,
  // };
  // // console.log(restaurant);

  // return (
  //   <div style={{ height: "60vh", width: "100%" }}>
  //     <GoogleMapReact
  //       bootstrapURLKeys={{ key: process.env.MAP ? process.env.MAP : "" }}
  //       defaultCenter={defaultProps.center}
  //       defaultZoom={defaultProps.zoom}>
  //       <Marker coordinates={coordinates} restaurant={restaurant} />
  //     </GoogleMapReact>
  //   </div>
  // );
  const mapStyle = {
    borderRadius: "20px",
    height: "100%",
    width: "100%",
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCFxLxHovmdaNac-fLDg0guhBdSO4o8cIg" as string,
  });

  const clickHandle = () => {};

  if (!isLoaded) return <Loading />;
  return (
    <div className="w-[100%] h-[100%]">
      <GoogleMap
        zoom={13}
        center={{
          lat: 47.91491313549779,
          lng: 106.90851741242646,
        }}
        mapContainerClassName="map-container"
        mapContainerStyle={mapStyle}>
        <div>
          <MarkerF
            position={{
              lat: restaurant?.address.location.coordinates[0]
                ? restaurant?.address.location.coordinates[0]
                : 47.91491313549779,
              lng: restaurant?.address.location.coordinates[1]
                ? restaurant?.address.location.coordinates[1]
                : 106.90851741242646,
            }}
            onClick={() => clickHandle()}
          />
          <div></div>
        </div>
      </GoogleMap>
    </div>
  );
}
