'use client'

import Link from "next/link";

export default function CarForm() {


    return (
        <main className="flex flex-col w-full min-h-screen justify-center my-8 items-center">
            <h1 className="text-4xl font-bold">Cadastrar carro</h1>
            <p className="pt-2 text-center">
                Preencha o formulário para cadastro do seu carro, identificando-o pela placa. Caso já haja cadastro associado à placa, redirecionaremos ao seu histórico correspondente.
            </p>

            <form className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-16 w-5/12 rounded-md my-4">
                <label className="space-x-3 block">
                    Modelo:
                </label>
                <input
                    type="text"
                    placeholder="Digite o modelo do carro..."
                    required
                    className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                />

                <label className="space-x-3 block">
                    Ano:
                </label>
                <input
                    type="text"
                    placeholder="Digite ano do carro..."
                    required
                    className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                />

                <label className="space-x-3 block">
                    Marca:
                </label>
                <input
                    type="text"
                    placeholder="Digite a marca do carro..."
                    required
                    className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                />

                <label className="space-x-3 block">
                    Placa:
                </label>
                <input
                    type="text"
                    placeholder="Digite a placa do carro..."
                    pattern="^[A-Za-z]{3}-[0-9]{4}$|^[A-Za-z]{3}[0-9][A-Za-z0-9][0-9]{2}$"
                    required
                    className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                />

                <div className="space-y-4 flex w-full flex-wrap">
                    <Link href="/" className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s] p-3 rounded-md w-full text-center">Salvar carro</Link>

                    <Link href="/" className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s] p-3 rounded-md w-full text-center">
                        Voltar
                    </Link>
                </div>
            </form>
        </main>
    );
}
