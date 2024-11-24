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

    useEffect(() => {
        if (!carros && !hasFetched) {
            toast.error("Ainda não há carros registrados! Cadastre um agora.");
            setHasFetched(true);
        }
    }, [carros, hasFetched]);

    return (
        <main className='flex justify-center items-center flex-wrap gap-4 w-full h-screen'>
            {carros?.map((carro: Partial<Carro>) => (
                <CardComponent
                    title={carro.model || ''}
                    tag={carro.plate || ''}
                    date={new Date()}
                    action={{ text: "Ver mais", href: "/" }}
                    bullets={[{ key: "Ano", value: carro.year?.toString() || '' }, { key: "Marca", value: carro.brand || '' }]}
                />
            ))}
            {!carros && (
                <div>
                    <p>Ainda não há carros registrados...</p>
                </div>
            )}
            <ToastContainer />
        </main>
    );
}