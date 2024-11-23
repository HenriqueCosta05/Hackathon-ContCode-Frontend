'use client'

import { CardComponent } from '@/components';
import { API_URL } from '@/constants';
import { useFetch } from '@/hooks';
import { Carro } from '@/types/carro';
import React from 'react';

export default function ListarCarros() {
    const { data: carros } = useFetch<Carro[]>({ url: API_URL });

    return (
        <main className='flex justify-center items-center flex-wrap gap-4 w-full h-screen'>
            {carros?.map((carro: Partial<Carro>) => (
                <CardComponent
                    key={carro.placa}  
                    title={carro.placa}
                    bullets={[
                        { text: carro.modelo },
                        { text: carro.marca },
                        { text: carro.ano?.toString() },
                    ]}
                />
            ))}
        </main>
    );
}
