import React from 'react';
import "./EmpresaCard.scss";
import { useEffect, useState } from 'react';

interface Empresa {
    id: number;
    sponsorLogo: string;
    nameSponsor: string;
}

const ListaEmpresasDisponiveis: React.FC = () => {
    const userId = localStorage.getItem("userId");
    const [empresas, setEmpresas] = useState<Empresa[]>([]);

    useEffect(() => {
        if (!userId) {
        console.error("Usuário não logado.");
        return;
        }
        fetch(`http://localhost:3005/empresas-aprovadas/${userId}`)
            .then(res => res.json())
            .then(data => setEmpresas(data))
            .catch((err) => console.error("Erro ao buscar empresas aprovadas:", err));
    }, [userId]);

    const alertaSolicitarPatrocinio = (nameSponsor: string) => {
    alert(`Patrocínio solicitado para a empresa ${nameSponsor}!`);
    };

    if (!userId) {
    return <p>Você precisa estar logado para ver as empresas aprovadas.</p>;
    }
    if (!empresas) return <p>Carregando empresa...</p>;

    return (
        <div className='container'>
            {empresas.map((empresa) => (
                <div className='card-empresas' key={empresa.id}>
                    <img className='logo-empresa' src={empresa.sponsorLogo} alt={empresa.nameSponsor} />
                    <p className='nome-empresa'>{empresa.nameSponsor}</p>
                    <button className='botao-dashboard' onClick={() => alertaSolicitarPatrocinio(empresa.nameSponsor)}>Solicitar Patrocínio</button>
                </div>
            ))}
        </div>
    );
}

export default ListaEmpresasDisponiveis;
