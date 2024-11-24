import { Carro } from '@/types/carro';
import Link from 'next/link';
import React from 'react';


export default function Card({ model, year, brand, plate, date, user }: Carro) {
    return (
        <>
            <div className="w-96 border-2 rounded text-l m-8 border-primary">
                <div className="bg-primary px-3 py-3 font-sans font-semibold text-white text-center">{model}</div>
                <div className="flex justify-between pt-4">
                    <div className="bg-secondary text-white px-2 py-1 rounded-full text-xs uppercase font-semibold ml-4">
                        {plate}
                    </div>
                    <div className="text-xs font-semibold block pl-32">
                        {date?.toLocaleDateString()}
                    </div>
                    <hr />
                </div>
                <div className="border-b-2 border-primary m-2"></div>
                <div className="container mx-auto">
                    <div className="flex justify-around">
                        <div className="text-xs font-semibold pl-4">Marca:</div>
                        <div className="text-xs font-semibold pr-4">{brand}</div>
                    </div>
                    <div className="flex justify-around">
                        <div className="text-xs font-semibold pl-4">Ano:</div>
                        <div className="text-xs font-semibold pr-4">{year}</div>
                    </div>
                </div>

                <div className="bg-primary text-white w-full h-24 mt-6">
                    <div className="text-xs uppercase font-bold">
                        <p className="p-3">Usuário Associado</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="bg-secondary px-3 py-2 rounded-full font-bold ml-2 text-sm">HC</div>
                        <div>
                            <h6 className="font-bold text-md pl-4">{user}</h6>
                        </div>
                    <Link href="/" className='bg-secondary rounded-md m-auto py-2 px-4'>
                        Ver manutenções
                    </Link>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
