'use client'

import Link from "next/link";

export default function ManutencaoForm() {


    return (
        <main className="flex flex-col w-full min-h-screen justify-center my-8 items-center">
            <h1 className="text-4xl font-bold">Registrar manutenção</h1>
            <p className="pt-2 text-center">
                Preencha o formulário para associar uma nova manutenção ao seu carro.
            </p>

            <form className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-16 w-5/12 rounded-md my-4">
                <label className="space-x-3 block">
                    Carro associado:
                </label>
                <select name="listar_carros" id="listar_carros" className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full">
                    <option>Serão listados apenas os carros associados ao usuário...</option>
                </select>
                <label className="space-x-3 block">
                    Serviço:
                </label>
                <textarea className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full" placeholder="Descreva, em detalhes, o serviço realizado no carro..."></textarea>

                <div className="space-y-4 flex w-full flex-wrap">
                    <Link href="/" className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s] p-3 rounded-md w-full text-center">Registrar manutenção</Link>

                    <Link href="/" className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s] p-3 rounded-md w-full text-center">
                        Voltar
                    </Link>
                </div>
            </form>
        </main>
    );
}
