import React, { useState } from "react";
import { IRestaurant } from "../InterfaceEnumsMeta/InterFace";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
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
  const [selected, setSelected] = useState<any>({});
  const onSelect = (item: any): void => {
    setSelected(item);
  };

  console.log(selected);

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
          mapContainerClassName="map-container"
          mapContainerStyle={mapStyle}
        >
          {restaurants.map((items, index) => {
            const { coordinates } = items.address.location;

            return (
              <div key={index}>
                <MarkerF
                  position={{
                    lat: coordinates[0],
                    lng: coordinates[1],
                  }}
                  onClick={(): void => onSelect(items)}
                />
                {selected?.address && (
                  <InfoWindowF
                    position={{
                      lat: selected?.address?.location?.coordinates[0],
                      lng: selected?.address?.location?.coordinates[1],
                    }}
                    // clickable={true}
                    onCloseClick={(): void => setSelected({})}
                  >
                    <div className="w=[300px] text-black">Hello motherf</div>
                  </InfoWindowF>
                )}
              </div>
            );
          })}
        </GoogleMap>
      </div>
    </div>
  );
}
