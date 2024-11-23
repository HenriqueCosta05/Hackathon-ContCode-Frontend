'use client'

import InputField from "@/components/form/input-field";
import Button from "@/components/form/button";

export default function ManutencaoForm() {
    return (
        <main className="flex flex-col w-full min-h-screen justify-center my-0 items-center">
            <h1 className="text-4xl font-bold text-center">Registrar manutenção</h1>
            <p className="pt-2 text-center">
                Preencha o formulário para associar uma nova manutenção ao seu carro.
            </p>

            <form className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-3 w-10/12 rounded-md my-4 lg:w-6/12">

                <InputField
                    type="select"
                    label="Carro associado:"
                    required={true}
                    name="listar_carros"
                    className="bg-transparent rounded-md placeholder-black py-3 px-1 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                >
                    <option value="">Serão listados apenas os carros associados ao usuário...</option>

                </InputField>


                <InputField
                    type="textarea"
                    label="Serviço:"
                    placeholder="Descreva, em detalhes, o serviço realizado no carro..."
                    required={true}
                    name="servico"
                    className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                />

                <InputField
                    type="text"
                    label="Quilometragem:"
                    placeholder="Digite a quilometragem aproximada do carro..."
                    required={true}
                    name="quilometragem"
                    className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                />

                <div className="space-y-4 flex w-full flex-wrap">
                    <Button
                        text="Registrar manutenção"
                        href="#"
                        className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s] p-3 rounded-md w-full text-center"
                    />

                    <Button
                        text="Voltar"
                        href="/"
                        className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s] p-3 rounded-md w-full text-center"
                    />
                </div>
            </form>
        </main>
    );
}