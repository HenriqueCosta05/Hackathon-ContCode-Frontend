'use client'

import { CardComponent } from '@/components';
import { API_URL } from '@/constants';
import { useFetch } from '@/hooks';
import { Manutencao } from '@/types/manutencao';
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function ConsultarManutencoes() {
    const { data: manutencoes } = useFetch<Manutencao[]>({ url: `${API_URL}/maintenance` });
    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {
        if (!manutencoes && !hasFetched) {
            toast.error("Ainda não há manutenções registradas! Crie uma agora.");
            setHasFetched(true);
        }
    }, [manutencoes, hasFetched]);

    const manutencoesMock = [
        {
            date: "01/10/2024",
            service: "Troca de óleo",
            kilometer: 25400,
            carro_associado: { plate: "ABC-1234" }
        },
        {
            date: "15/02/2023",
            service: "Alinhamento e balanceamento",
            kilometer: 26000,
            carro_associado: { plate: "XYZ-5678" }
        },
        {
            date: "20/03/2024",
            service: "Troca de pastilhas de freio",
            kilometer: 26500,
            carro_associado: { plate: "MNO-8765" }
        },
        {
            date: "04/10/2024",
            service: "Substituição da correia dentada",
            kilometer: 27000,
            carro_associado: { plate: "PQR-1357" }
        },
        {
            date: "05/05/2025",
            service: "Troca de filtro de ar",
            kilometer: 27500,
            carro_associado: { plate: "STU-2468" }
        },
        {
            date: "15/06/2023",
            service: "Troca de pneus",
            kilometer: 28000,
            carro_associado: { plate: "VWX-3690" }
        },
        {
            date: "22/07/2024",
            service: "Revisão completa",
            kilometer: 28500,
            carro_associado: { plate: "YZA-4820" }
        },
        {
            date: "30/08/2024",
            service: "Troca de óleo e filtros",
            kilometer: 29000,
            carro_associado: { plate: "BCD-9012" }
        }
    ];


    return (
        <main className='flex justify-center items-center flex-wrap gap-4 w-full h-screen'>
            {manutencoesMock?.map((manutencao) => {
                return (
                    <div>
                        <CardComponent
                            title={manutencao.date || ''}
                            tag={manutencao.carro_associado?.plate || ''}
                            date={new Date()}
                            action={{ text: "Ver mais", href: "/" }}
                            description={`Serviço: ${manutencao.service}`}
                            bullets={[{ key: "Quilometragem", value: manutencao.kilometer?.toString() + " km" || '' }, { key: "Carro", value: manutencao.carro_associado?.plate || '' }]}
                        />
                    </div>
                );
            })}
            {!manutencoes && (
                <div>
                    <ToastContainer />
                </div>

            )}
        </main>
    );
}