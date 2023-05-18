import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";
import "./Maps.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
// import useGeoLocation from "./geoLocation";

delete L.Icon.Default.prototype._getIconUrl;

function Maps() {
  // const location = useGeoLocation();
  const center_position = [33.66492, -7.817975];
  // const position = [location.coordinates.lat, location.coordinates.lng];
  const [markerPosition, setMarkerPosition] = useState({
    lat: 33.66492,
    lng: -7.817975,
  });

  const handleMapClick = (e) => setMarkerPosition(e.latlng);

  const handleClick = () => {
    if (markerPosition) {
      alert(markerPosition.lat, markerPosition.lng);
    } else {
      alert("No marker selected.");
    }
  };

  const MapClickEvents = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  };

  return (
    <>
      <div className=" flex">
        <MapContainer center={center_position} zoom={7} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[markerPosition.lat, markerPosition.lng]}
            draggable={true}
            eventHandlers={{
              move: (e) => {
                console.log(e.target.getLatLng());
                setMarkerPosition(e.target.getLatLng());
              },
            }}
            // eventHandlers={{
            //   dragend: (e) => {
            //     setMarkerPosition(e.target.getLatLng());
            //   },
            // }}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable. Marker Position:
            </Popup>
          </Marker>
        </MapContainer>
        {/* <button
        onClick={() => {
          alert([markerPosition.lat, markerPosition.lng]);
        }}
      >
        Submit
      </button> */}
        <div className=" flex flex-col">
          <div className=" w-full  mx-4 ">
            <div className="font-bold h-6  text-gray-600  text-xs leading-9 uppercase">
              region
            </div>
            <select
              id="option1"
              name="option1"
              class="w-full p-2 border border-gray-300 rounded"
            >
              <option value="option1-1">Option 1-1</option>
              <option value="option1-2">Option 1-2</option>
              <option value="option1-3">Option 1-3</option>
            </select>
            {/* <div className=" rounded p-1 flex border  border-gray-200">
                  <input
                    placeholder="username"
                    className=" p-1 px-2 appearance-none outline-none w-full text-gray-800"
                  />
                </div> */}
          </div>
          <div className=" w-full  mx-4 flex-1">
            <div className="font-bold h-6 text-gray-600  text-xs leading-9 uppercase">
              ville
            </div>
            <select
              id="option1"
              name="option1"
              class="w-full p-2 border border-gray-300 rounded"
            >
              <option value="option1-1">Option 1-1</option>
              <option value="option1-2">Option 1-2</option>
              <option value="option1-3">Option 1-3</option>
            </select>
          </div>
          <div className=" w-full mb-8 mx-4 flex-1">
            <div className="font-bold h-6 text-gray-600  text-xs leading-9 uppercase">
              adresses
            </div>
            <div className=" rounded p-1 flex border  border-gray-200">
              <input
                placeholder="adresses"
                className=" p-1 px-2 appearance-none outline-none w-full text-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default Maps;
