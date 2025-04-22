import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngTuple, LatLngBoundsExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Mapa.scss';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    iconUrl: "/leaflet/marker-icon.png",
    shadowUrl: "/leaflet/marker-shadow.png",
});

const Mapa: React.FC = ({ }) => {
    const center: LatLngTuple = [-14.235, -51.9253]
    const estadosDoBrasil: { estado: string; center: LatLngTuple }[] = [
        { estado: 'Acre', center: [-9.0238, -70.8120] },
        { estado: 'Alagoas', center: [-9.5713, -36.7820] },
        { estado: 'Amapá', center: [1.4132, -51.7793] },
        { estado: 'Amazonas', center: [-3.4168, -65.8561] },
        { estado: 'Bahia', center: [-12.5797, -41.7007] },
        { estado: 'Ceará', center: [-5.4984, -39.3206] },
        { estado: 'Distrito Federal', center: [-15.7998, -47.8645] },
        { estado: 'Espírito Santo', center: [-19.1834, -40.3089] },
        { estado: 'Goiás', center: [-15.8270, -49.8362] },
        { estado: 'Maranhão', center: [-5.4200, -45.0000] },
        { estado: 'Mato Grosso', center: [-12.6819, -56.9211] },
        { estado: 'Mato Grosso do Sul', center: [-20.7722, -54.7852] },
        { estado: 'Minas Gerais', center: [-18.5122, -44.5550] },
        { estado: 'Pará', center: [-3.4168, -52.0684] },
        { estado: 'Paraíba', center: [-7.2399, -36.7819] },
        { estado: 'Paraná', center: [-24.4842, -51.8620] },
        { estado: 'Pernambuco', center: [-8.8137, -36.9541] },
        { estado: 'Piauí', center: [-7.7183, -42.7289] },
        { estado: 'Rio de Janeiro', center: [-22.9111, -43.2094] },
        { estado: 'Rio Grande do Norte', center: [-5.7945, -36.9541] },
        { estado: 'Rio Grande do Sul', center: [-30.0346, -51.2177] },
        { estado: 'Rondônia', center: [-10.9430, -62.0751] },
        { estado: 'Roraima', center: [2.7376, -62.0751] },
        { estado: 'Santa Catarina', center: [-27.2423, -50.2189] },
        { estado: 'São Paulo', center: [-23.5505, -46.6333] },
        { estado: 'Sergipe', center: [-10.5741, -37.3857] },
        { estado: 'Tocantins', center: [-10.1753, -48.2982] },
    ];

    const brasilBounds: LatLngBoundsExpression = [
        [-34.0, -74.0],
        [5.5, -34.0]
    ];

    return (
        <div>
            <MapContainer className="map-container"
                center={center}
                zoom={4.6}
                maxZoom={4.6}
                minZoom={4.6}
                scrollWheelZoom={true}
                maxBounds={brasilBounds}
                maxBoundsViscosity={1.0}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {estadosDoBrasil.map(({ estado, center }, index) => (
                    <Marker key={index} position={center as [number, number]}>
                        <Popup>
                            Mensagem pop-up!
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
}

export default Mapa;