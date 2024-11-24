'use client'

import { CardComponent } from '@/components';
import { API_URL } from '@/constants';
import { useFetch } from '@/hooks';
import { Carro } from '@/types/carro';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export default function ListarCarros() {

    const { data: carros } = useFetch<Carro[]>({ url: `${API_URL}/car` });
    const [hasFetched, setHasFetched] = useState(false);
    const [visibleCards, setVisibleCards] = useState(6);

    useEffect(() => {
        if (!carros && !hasFetched) {
            toast.error("Ainda não há carros registrados! Cadastre um agora.");
            setHasFetched(true);
        }
    }, [carros, hasFetched]);

    const handleShowMore = () => {
        setVisibleCards((prev) => prev + 6); 
    };

    const carrosMock = [
        {
            model: "Fusca",
            plate: "ABC-1234",
            year: 1978,
            brand: "Volkswagen"
        },
        {
            model: "Civic",
            plate: "XYZ-5678",
            year: 2021,
            brand: "Honda"
        },
        {
            model: "Corolla",
            plate: "MNO-8765",
            year: 2020,
            brand: "Toyota"
        },
        {
            model: "Fiesta",
            plate: "PQR-1357",
            year: 2018,
            brand: "Ford"
        },
        {
            model: "Gol",
            plate: "STU-2468",
            year: 2015,
            brand: "Volkswagen"
        },
        {
            model: "Hilux",
            plate: "VWX-3690",
            year: 2022,
            brand: "Toyota"
        },
        {
            model: "Onix",
            plate: "YZA-4820",
            year: 2019,
            brand: "Chevrolet"
        },
        {
            model: "Maverick",
            plate: "BCD-9012",
            year: 2023,
            brand: "Ford"
        }
    ];

    return (
        <main className='flex justify-center items-center flex-wrap gap-4 w-full h-screen'>
            {carrosMock?.slice(0, visibleCards).map((carro: Partial<Carro>) => (
                <CardComponent
                    key={carro.plate} 
                    title={carro.model || ''}
                    tag={carro.plate || ''}
                    date={new Date()}
                    action={{ text: "Ver mais", href: "/usuarios/consultar-manutencoes" }}
                    bullets={[{ key: "Ano", value: carro.year?.toString() || '' }, { key: "Marca", value: carro.brand || '' }]}
                />
            ))}

            
            {carros && carros.length > visibleCards && (
                <button
                    onClick={handleShowMore}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                >
                    Ver mais
                </button>
            )}

            {!carros && (
                <div>
                    <p>Ainda não há carros registrados...</p>
                </div>
            )}

            <ToastContainer />
        </main>
    );
}
