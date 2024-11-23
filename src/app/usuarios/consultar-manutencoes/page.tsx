'use client'

import { CardComponent } from '@/components';
import { API_URL } from '@/constants';
import { useFetch } from '@/hooks';
import { Manutencao } from '@/types/manutencao';
import React from 'react';

export default function ConsultarManutencoes() {
    const { data: manutencoes } = useFetch<Manutencao[]>({ url: `${API_URL}/manutencao` });


    return (
        <main className='flex justify-center items-center flex-wrap gap-4 w-full h-screen'>
            {manutencoes?.map((manutencao: Partial<Manutencao>) => {
                return (
                    <CardComponent
                        key={manutencao.id}
                        title={manutencao.date}
                        description={manutencao.descricao}
                    />
                );
            })}
        </main>
    );
}