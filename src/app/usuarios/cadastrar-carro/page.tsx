"use client"

import InputField from "@/components/form/input-field";
import Button from "@/components/form/button";
import { useState } from "react";
import { useFetch } from "@/hooks";
import { API_URL } from "@/constants";
import { toast, ToastContainer } from "react-toastify";


interface FormData {
    plate: string;
    brand: string;
    model: string;
    year: string;
}

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        plate: "",
        brand: "",
        model: "",
        year: "",
    });

    const { create, loading, error } = useFetch<FormData>({
        url: `${API_URL}/car`,
    });

    const handleCarRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await create(formData);
            toast.success("Veículo cadastrado com sucesso!");
        } catch (error) {
            toast.error("Erro ao cadastrar veículo!");
        }
    }

    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            <h1 className="text-4xl font-bold text-center">Cadastrar veículo</h1>
            <p className="pt-2 text-center lg:w-10/12">
                Preencha o formulário para cadastro do seu veículo, identificando-o pela placa. Caso já haja cadastro associado à placa, redirecionaremos ao seu histórico correspondente.
            </p>
            <form className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-3 w-10/12 rounded-md my-4 lg:w-6/12">
                {/* Etapa 1: Verificação de placa */}
                {currentStep === 1 && (
                    <InputField
                        type="text"
                        label="Placa:"
                        placeholder="Digite a placa do seu veículo..."
                        required={true}
                        value={formData.plate}
                        onChange={handleInputChange}
                        name="plate"
                        className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                    />
                )}

                {/* Etapa 2: Cadastro dos dados do carro */}
                {currentStep === 2 && (
                    <>
                        <InputField
                            type="text"
                            label="Marca:"
                            placeholder="Digite a marca de seu veículo..."
                            required={true}
                            value={formData.brand}
                            onChange={handleInputChange}
                            name="brand"
                            className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                        />
                        <InputField
                            type="text"
                            label="Modelo:"
                            placeholder="Digite o modelo de seu veículo..."
                            required={true}
                            value={formData.model}
                            onChange={handleInputChange}
                            name="model"
                            className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
                        />
                        <InputField
                            type="text"
                            label="Ano:"
                            placeholder="Digite o ano de seu veículo..."
                            required={true}
                            value={formData.year}
                            onChange={handleInputChange}
                            name="year"
                            className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
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

                        {currentStep < 2 ? (
                            <Button
                                text="Próximo"
                                href="#"
                                className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s]"
                                onClick={handleNextStep}
                            />
                        ) : (
                            <Button
                                text="Cadastrar"
                                onClick={handleCarRegister}
                                className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s]"
                            />
                        )}
                    </div>
                </div>
            </form>
            <ToastContainer />
        </main>
    );
};

export default Register;