import { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  //   GeoJSON,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import MarkerIcon from '../assets/marker-icon.png';
import { Icon } from 'leaflet';

// const markers = [
//   {
//     title: 'Norvic International Hospital',
//     geocode: [27.693389774624727, 85.3192859953649],
//   },
//   {
//     title: 'Bir Hospital',
//     geocode: [27.70843644937177, 85.31327784703296],
//   },
//   {
//     title: 'Grande City Hospital',
//     geocode: [27.71449438770001, 85.31519002291297],
//   },
//   {
//     title: 'Patan Hospital',
//     geocode: [27.670797958400264, 85.31917259191577],
//   },
//   {
//     title: 'Bhaktapur Hospital',
//     geocode: [27.676193844851138, 85.42195225581736],
//   },
// ];

const customIcon = new Icon({
  iconUrl: MarkerIcon,
  iconSize: [38, 38],
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    mouseover() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Map = ({ geoJSONData }) => {
  return (
    <MapContainer
      center={[27.7172, 85.324]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {geoJSONData.features.map(({ properties, geometry }, index) => {
          return (
            <Marker
              key={index}
              position={[geometry.coordinates[1], geometry.coordinates[0]]}
            >
              <Popup>
                {properties.DIST_NAME && <span>{properties.DIST_NAME}</span>}
                {properties.VDC_NAME1 && <span>,{properties.VDC_NAME1}</span>}
                {properties.HF_TYPE && <h2>{properties.HF_TYPE}</h2>}
              </Popup>
            </Marker>
          );
        })}
        <LocationMarker />
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
