'use client';

import { useLocationStore } from '@/stores/useLocationStore';
import L, { LatLng } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export function FlyToLocation({ lat, lon }: { lat: number; lon: number }) {
  const map = useMap();

  useEffect(() => {
    const position = new LatLng(lat, lon);
    map.flyTo(position, map.getZoom());
  }, [lat, lon, map]);

  return null;
}

export default function MapSection() {
  const { lat, lon } = useLocationStore();
  const position: LatLng = new LatLng(lat, lon);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-[40%] rounded-lg overflow-hidden"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{`Lat: ${lat}, Lon: ${lon}`}</Popup>
      </Marker>
      <FlyToLocation lat={lat} lon={lon} />
    </MapContainer>
  );
}
