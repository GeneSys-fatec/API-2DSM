import React, { useEffect, useState } from "react";
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

interface MapaProps {
  idEmpresa: number;
}

interface EstadoRaw {
  idempresapatrocinio: number;
  estado: string;            // sigla ex: "SP", "RJ", "MG"
  quantidadeUsuarios: number;
  quantidadeLojas: number;
}

interface EstadoInfo {
  idEmpresa: number;
  estado: string;
  quantidadeUsuarios: number;
  quantidadeLojas: number;
}

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

const siglaParaNomeCompleto: { [sigla: string]: string } = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

const Mapa: React.FC<MapaProps> = ({ idEmpresa }) => {
  const [dadosEstados, setDadosEstados] = useState<EstadoInfo[]>([]);

<<<<<<< Updated upstream
    return (
        <>
            <div className='mapa-legenda'>
                <img src="https://img.icons8.com/?size=100&id=111425&format=png&color=143357" />
                <h1>Distribuição Geográfica</h1>
            </div>
            <MapContainer className="map-container"
                center={center}
                zoom={4.6}
                maxZoom={4.6}
                minZoom={4.6}
                scrollWheelZoom={true}
                maxBounds={brasilBounds}
                maxBoundsViscosity={1.0}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {estadosDoBrasil.map(({ estado, center }, index) => {
                    const info = dadosEstados.find(d => d.estado === estado);
                    return (
                        <Marker key={index} position={center}>
                            <Popup>
                                <strong>{estado}</strong><br />
                                Usuários Impactados: {info?.quantidadeUsuarios ?? 0}<br />
                                Lojas Criadas: {info?.quantidadeLojas ?? 0}
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </>
    );
=======
  const center: LatLngTuple = [-14.235, -51.9253];
  const brasilBounds: LatLngBoundsExpression = [
    [-34.0, -74.0],
    [  5.5, -34.0]
  ];

  useEffect(() => {
    fetch("http://localhost:3005/localizacao-estado")
      .then(res => res.json())
      .then((raw: EstadoRaw[]) => {
        const transformed: EstadoInfo[] = raw.map(item => ({
          idEmpresa: item.idempresapatrocinio,
          estado: item.estado,
          quantidadeUsuarios: item.quantidadeUsuarios,
          quantidadeLojas: item.quantidadeLojas
        }));
        setDadosEstados(transformed);
      })
      .catch(err => console.error("Erro ao buscar quantidades:", err));
  }, []);

  return (
    <>
      <div className='mapa-legenda'>
        <img
          src="https://img.icons8.com/?size=100&id=111425&format=png&color=143357"
          alt="ícone"
        />
        <h1>Distribuição Geográfica</h1>
      </div>

      <MapContainer
        className="map-container"
        center={center}
        zoom={4.6}
        maxZoom={4.6}
        minZoom={4.6}
        scrollWheelZoom
        maxBounds={brasilBounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {estadosDoBrasil.map(({ estado, center }, idx) => {
          const empresas = dadosEstados.filter(d =>
            d.idEmpresa === idEmpresa &&
            siglaParaNomeCompleto[d.estado] === estado
          );

          return (
            <Marker key={idx} position={center}>
              <Popup>
                <strong>{estado}</strong><br />
                {empresas.length > 0 ? (
                  empresas.map((e, i) => (
                    <div key={i} style={{ marginTop: i > 0 ? 6 : 0 }}>
                      <hr style={{ margin: '4px 0' }} />
                      <strong>Empresa {e.idEmpresa}</strong><br />
                      Usuários: {e.quantidadeUsuarios}<br />
                      Lojas: {e.quantidadeLojas}
                    </div>
                  ))
                ) : (
                  <div>
                    Usuários: 0<br />
                    Lojas: 0
                  </div>
                )}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
>>>>>>> Stashed changes
};

export default Mapa;
