"use client"

import { useState } from "react";
import InputField from "@/components/form/input-field"
import Button from "@/components/form/button";
import { toast, ToastContainer } from "react-toastify";
import { API_URL } from "@/constants";
import { useFetch } from "@/hooks";

interface FormData {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const { create, loading, error } = useFetch<FormData>({
    url: `${API_URL}/login`,
  });

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await create(formData);
      toast.success("Usuário autenticado com sucesso!");
      setFormData({ email: "", password: "" });
    } catch (error) {
      toast.error("Credenciais inválidas!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Entrar</h1>
      <p className="pt-2 text-center">
        Insira suas credenciais e faça o login para prosseguir.
      </p>

      <form className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-4 w-10/12 rounded-md my-4 lg:w-6/12">

        <InputField
          type="email"
          label="Endereço de e-mail:"
          placeholder="Digite o seu e-mail..."
          className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
          required={true}
          value={formData.email}
          onChange={handleInputChange}
          name="email"
        />

        <InputField
          type="password"
          label="Senha:"
          placeholder="Digite sua senha..."
          className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
          required={true}
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />

        <div className="space-y-4 flex w-full flex-wrap">
          <Button
            text="Entrar"
            onClick={handleRegister}
            className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s]"
          />
          <Button
            text="Voltar ao início"
            href="/"
            className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s]"
          />
        </div>
      </form>
      <ToastContainer/>
    </main>
  );
};

export default Register;