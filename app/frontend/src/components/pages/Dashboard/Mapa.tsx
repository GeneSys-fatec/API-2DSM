import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngTuple, LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../Dashboard/Mapa.scss';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    iconUrl: "/leaflet/marker-icon.png",
    shadowUrl: "/leaflet/marker-shadow.png",
});

const Mapa: React.FC = ({ }) => {
    const center: LatLngTuple = [-14.235, -51.9253]

    const brasilBounds: LatLngBoundsExpression = [
        [-34.0, -74.0],
        [5.5, -34.0]
    ];

    return (
        <div>
            <MapContainer className="map-container"
                center={center}
                zoom={4.6}
                maxZoom={5}
                minZoom={4.6}
                scrollWheelZoom={false}
                maxBounds={brasilBounds}
                maxBoundsViscosity={1.0}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        Mensagem pop-up!
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Mapa;


