import { CardComponent } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">ManuCar</h1>
      <p className="pt-2 text-center md:w-10/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
        impedit atque suscipit sequi sed nemo eaque esse.
      </p>

      <div className="flex space-x-5 pt-10">
        <Link href="/register" className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s] py-3 px-6 rounded-md w-full text-center">
          Cadastrar
        </Link>

        <Link href="/login" className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s] py-3 px-6 rounded-md w-full text-center">
          Entrar
        </Link>
      </div>

      <CardComponent title="Gol" tag="FOU-1927" date={new Date()} action={{ text: "Ver mais", href: "/" }} bullets={[{ key: "Ano", value: "2009" }, { key: "Marca", value: "Fiat" } ]} />
    </main>
  );
}
