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

    return (
        <main className='flex justify-center items-center flex-wrap gap-4 w-full h-screen'>
            {manutencoes?.map((manutencao: Partial<Manutencao>) => {
                return (
                    <div>
                        <CardComponent
                            title={manutencao.date || ''}
                            tag={manutencao.carro_associado?.plate || ''}
                            date={new Date()}
                            action={{ text: "Ver mais", href: "/" }}
                            description={manutencao.service}
                            bullets={[{ key: "Quilometragem", value: manutencao.kilometer?.toString() || '' }]}
                        />
                    </div>
                );
            })}
            {!manutencoes && (
                <div><p>Ainda não há manutenções registradas...</p>
                    <ToastContainer />
                </div>

            )}
        </main>
    );
}