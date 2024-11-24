import { CardComponent } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold pb-3">ManuCar</h1>
      <p className="pt-2 text-left mx-auto md:w-10/12">
        ManuCar é uma plataforma inovadora que:
        <br />
        <br />

        1. Conecta o dono do carro ao seu histórico de consertos ao logo de sua vida útil.
        <br />
        2. Oferece uma experiência de conserto seguro, transparente e eficiente.
        <br />
        3. Auxilia o usuário a entender melhor o problema a ser resolvido no seu automóvel, conseguindo assim, preços e consertos transparentes.
        <br />
        4. Auxilia o usuário a ter uma visibilidade das manutenções que o seu veículo precisa, ajudando-o a se programar para futuros gastos.
      </p>

      <div className="flex space-x-5 pt-10">
        <Link href="/usuarios/cadastrar-carro" className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s] py-6 px-6 rounded-md w-full text-center">
          Cadastrar Veículo
        </Link>

        <Link href="/usuarios/registrar-manutencao" className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s] py-3 px-6 rounded-md w-full text-center">
          Registrar Manutenção
        </Link>
      </div>
      <div className="flex space-x-5 pt-10">
        <Link href="/usuarios/listar-carros" className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s] py-3 px-8 m-auto rounded-md w-full text-center">
          Carros
        </Link>
        
        <Link href="/usuarios/consultar-manutencoes" className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s] py-3 px-8 rounded-md w-full text-center">
          Manutenções
        </Link>

      </div>
    </main>
  );
}
