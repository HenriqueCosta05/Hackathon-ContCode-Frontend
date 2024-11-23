"use client"

import InputField from "@/components/form/input-field";
import Button from "@/components/form/button";
import { useState } from "react";


interface FormData {
    placa: string;
    marca: string;
    modelo: string;
    ano: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        placa: "",
        marca: "",
        modelo: "",
        ano: "",
    });

    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNextStep = () => {
        if (currentStep < 2) setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    return (
        <main className="flex flex-col w-full h-screen justify-center items-center">
            <h1 className="text-4xl font-bold">Cadastrar veículo</h1>
            <p className="pt-2 text-center">
                Preencha o formulário para cadastro do seu veículo, identificando-o pela placa. Caso já haja cadastro associado à placa, redirecionaremos ao seu histórico correspondente.
            </p>
            <form className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-16 w-5/12 rounded-md my-4">
                {/* Etapa 1: Verificação de placa */}
                {currentStep === 1 && (
                    <InputField
                        type="text"
                        label="Placa:"
                        placeholder="Digite a placa do seu veículo..."
                        required={true}
                        value={formData.placa}
                        onChange={handleInputChange}
                        name="placa"
                    />
                )}

                {/* Etapa 2: Cadastro ou edição dos dados do carro */}
                {currentStep === 2 && (
                    <>
                        <InputField
                            type="text"
                            label="Marca:"
                            placeholder="Digite a marca de seu veículo..."
                            required={true}
                            value={formData.marca}
                            onChange={handleInputChange}
                            name="email"
                        />
                        <InputField
                            type="text"
                            label="Modelo:"
                            placeholder="Digite o modelo de seu veículo..."
                            required={true}
                            value={formData.modelo}
                            onChange={handleInputChange}
                            name="email"
                        />
                        <InputField
                            type="string"
                            label="Ano:"
                            placeholder="Digite o ano de seu veículo..."
                            required={true}
                            value={formData.ano}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </>
                )}

                <div className="space-y-4 flex w-full flex-wrap">
                    {/* Botões de navegação */}
                    <div className="flex justify-between w-full gap-4">
                        {currentStep > 1 && (
                            <Button
                                text="Voltar"
                                href="#"
                                className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s]"
                                onClick={handlePrevStep}
                            />
                        )}

                        {currentStep < 3 ? (
                            <Button
                                text="Próximo"
                                href="#"
                                className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s]"
                                onClick={handleNextStep}
                            />
                        ) : (
                            <Button
                                text="Cadastrar"
                                href="#"
                                className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s]"
                            />
                        )}
                    </div>
                </div>
            </form>
        </main>
    );
};

export default Register;
