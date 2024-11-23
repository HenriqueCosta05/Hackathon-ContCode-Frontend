import Link from "next/link";

export default function Register() {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Cadastre-se</h1>
      <p className="pt-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
        impedit atque suscipit sequi sed nemo eaque esse.
      </p>

      <form className="flex flex-col space-y-5 pt-5 items-center">
        <label className="space-x-3">
          <span>Nome:</span>
          <input
            type="email"
            placeholder="Digite o seu nome"
            required
            className="py-1 px-3 bg-transparent rounded-md placeholder-black w-64 inputform"
          />
        </label>

        <label className="space-x-3">
          <span>Email:</span>
          <input
            type="email"
            placeholder="Digite o seu Email"
            required
            className="py-1 px-3 bg-transparent rounded-md placeholder-black w-64 inputform"
          />
        </label>

        <label className="space-x-3">
          <span>Senha:</span>
          <input
            type="email"
            placeholder="Digite a sua senha"
            required
            className="py-1 px-3 bg-transparent rounded-md placeholder-black w-64 inputform"
          />
        </label>

        <button className="cadastrar p-3 w-36 rounded-md">Cadastrar</button>
        <Link href="/">
          <button className="login p-3 w-36 rounded-md ">Voltar</button>
        </Link>
      </form>
    </main>
  );
}
