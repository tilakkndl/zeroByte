import { useState } from 'react';

import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

const markers = [
  {
    title: 'Norvic International Hospital',
    geocode: [27.693389774624727, 85.3192859953649],
  },
  {
    title: 'Bir Hospital',
    geocode: [27.70843644937177, 85.31327784703296],
  },
  {
    title: 'Grande City Hospital',
    geocode: [27.71449438770001, 85.31519002291297],
  },
  {
    title: 'Patan Hospital',
    geocode: [27.670797958400264, 85.31917259191577],
  },
  {
    title: 'Bhaktapur Hospital',
    geocode: [27.676193844851138, 85.42195225581736],
  },
];

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
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.geocode} title={marker.title}>
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}
        <LocationMarker />
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
