import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import LocationMarker from "./LocationMarker";
import Infobox from "./Infobox";

function Map({ data }) {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: -20.2284,
    longitude: -20.9098,
    zoom: 2,
  });

  /* window.onresize = () =>
    setViewport((prev) => {
      return {
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight - 50,
      };
    });
*/
  const [locationInfo, setlocationInfo] = useState(null);

  const markers = data.map((ev) => {
    var lat = ev.geometries[ev.geometries.length - 1].coordinates[1];
    var lng = ev.geometries[ev.geometries.length - 1].coordinates[0];
    if (
      (ev.categories[0].id === 8 ||
        ev.categories[0].id === 10 ||
        ev.categories[0].id === 15 ||
        ev.categories[0].id === 12 ||
        ev.categories[0].id === 6 ||
        ev.categories[0].id === 16 ||
        ev.categories[0].id === 17 ||
        ev.categories[0].id === 9) &&
      lat >= -90 &&
      lat <= 90 &&
      lng >= -180 &&
      lng <= 180
    ) {
      return (
        <>
          <Marker
            latitude={ev.geometries[ev.geometries.length - 1].coordinates[1]}
            longitude={ev.geometries[ev.geometries.length - 1].coordinates[0]}
          >
            <div>
              <LocationMarker
                id={ev.categories[0].id}
                onClick={() => {
                  setlocationInfo({
                    title: ev.title,
                    source: ev.sources[0].url,
                    lat: ev.geometries[ev.geometries.length - 1].coordinates[1],
                    lng: ev.geometries[ev.geometries.length - 1].coordinates[0],
                  });
                }}
              />
            </div>
          </Marker>
        </>
      );
    }
    return null;
  });

  return (
    <>
      {locationInfo && <Infobox info={locationInfo} />}
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/yashsingh5445/ckjfrzzpiabcx19p1elldpb5p"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {markers}
      </ReactMapGL>
    </>
  );
}

export default Map;
