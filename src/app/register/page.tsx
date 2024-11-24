"use client";

import { useState } from "react";
import InputField from "@/components/form/input-field";
import Button from "@/components/form/button";
import { toast, ToastContainer } from "react-toastify";
import { useFetch } from "@/hooks";
import { API_URL } from "@/constants";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const { create, loading, error } = useFetch<FormData>({
    url: `${API_URL}/user`,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await create(formData);
      toast.success("Usuário cadastrado com sucesso!");
      setFormData({ name: "", email: "", password: "" });
    } catch (error) {
      toast.error("Erro ao cadastrar usuário! Tente novamente com outro e-mail.");
    }
  };

  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Cadastre-se</h1>
      <p className="pt-2 text-center">
        Cadastre-se em nossa plataforma para ter acesso a todos os recursos e funcionalidades.
      </p>

      <form
        onSubmit={handleRegister}
        className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-4 w-10/12 rounded-md my-4 lg:w-6/12"
      >
        <InputField
          type="text"
          label="Nome:"
          placeholder="Digite o seu nome completo..."
          className="bg-transparent rounded-md placeholder-black py-3 px-3 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
          required={true}
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />

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
          label="Digite uma senha:"
          placeholder="Digite sua senha..."
          className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
          required={true}
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />

        <div className="space-y-4 flex w-full flex-wrap">
          <Button
            type="submit"
            onClick={handleRegister}
            text={loading ? "Cadastrando..." : "Cadastrar"}
            className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s]"
            disabled={loading}
          />
          <Button
            text="Voltar ao início"
            href="/"
            className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s]"
          />
        </div>
      </form>
      <ToastContainer />
    </main>
  );
};

export default Register;
