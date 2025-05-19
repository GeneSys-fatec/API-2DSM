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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) {
            console.error("Usuário não logado.");
            setLoading(false);
            return;
        }
        fetch(`http://localhost:3005/empresas-aprovadas/${userId}`)
            .then(res => res.json())
            .then(data => {
                setEmpresas(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error("Erro ao buscar empresas aprovadas:", err);
                setLoading(false)
            });
    }, [userId]);

    const alertaSolicitarPatrocinio = (nameSponsor: string) => {
        alert(`Patrocínio solicitado para a empresa ${nameSponsor}!`);
    };

    if (loading) {
        return (
            <div className='msg-centralizada'>
                <p>Carregando empresa...</p>
            </div>
        )
    } 

    if (empresas.length === 0) {
        return (
            <div className='msg-centralizada'>
                <p>Nenhuma empresa disponível para patrocínio.</p>
            </div>
        )
    }

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
