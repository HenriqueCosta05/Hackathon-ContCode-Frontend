import { CardComponent } from '@/components'
import { API_URL } from '@/constants';
import { useFetch } from '@/hooks';
import { Manutencao } from '@/types/manutencao';
import React from 'react'

export default function ListarCarros() {

    const manutencoes = useFetch<Manutencao>({ url: API_URL })
    return (
        <main className='flex justify-center items-center flex-wrap gap-4 w-full h-screen'>
            <CardComponent title="Fiat Palio" bullets={[{ text: "Ano: 2008" }, { text: "Placa: AAA-1234" }]} action={{ text: "Ver mais", href: "/" }} />
            <CardComponent title="Fiat Palio" bullets={[{ text: "Ano: 2008" }, { text: "Placa: AAA-1234" }]} action={{ text: "Ver mais", href: "/" }} />
            <CardComponent title="Fiat Palio" bullets={[{ text: "Ano: 2008" }, { text: "Placa: AAA-1234" }]} action={{ text: "Ver mais", href: "/" }} />
            <CardComponent title="Fiat Palio" bullets={[{ text: "Ano: 2008" }, { text: "Placa: AAA-1234" }]} action={{ text: "Ver mais", href: "/" }} />
            <CardComponent title="Fiat Palio" bullets={[{ text: "Ano: 2008" }, { text: "Placa: AAA-1234" }]} action={{ text: "Ver mais", href: "/" }} />
            <CardComponent title="Fiat Palio" bullets={[{ text: "Ano: 2008" }, { text: "Placa: AAA-1234" }]} action={{ text: "Ver mais", href: "/" }} />

        </main>
    )
}
