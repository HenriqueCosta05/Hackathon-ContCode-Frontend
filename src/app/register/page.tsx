"use client"

import { useState } from "react";
import InputField from "@/components/form/input-field"
import Button from "@/components/form/button";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Cadastre-se</h1>
      <p className="pt-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
        impedit atque suscipit sequi sed nemo eaque esse.
      </p>

      <form className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-16 w-5/12 rounded-md my-4">
        <InputField
          type="text"
          label="Nome:"
          placeholder="Digite o seu nome completo..."
          className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
          required={true}
          value={formData.name}
          onChange={handleInputChange}
          name="name"
        />

        <InputField
          type="email"
          label="Endereço de e-mail:"
          placeholder="Digite o seu e-mail..."
          className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full"
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
            text="Cadastrar"
            href="/"
            className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s]"
          />
          <Button
            text="Voltar ao início"
            href="/"
            className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s]"
          />
        </div>
      </form>
    </main>
  );
};

export default Register;
