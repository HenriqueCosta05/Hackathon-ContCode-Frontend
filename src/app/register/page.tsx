import Link from "next/link";

export default function Register() {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Cadastre-se</h1>
      <p className="pt-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
        impedit atque suscipit sequi sed nemo eaque esse.
      </p>

      <form className="flex flex-col space-y-5 pt-5 items-center border-2 border-primary p-16 w-5/12 rounded-md my-4">
        <label className="space-x-3 block">
          Nome:
        </label>
        <input
            type="text"
            placeholder="Digite o seu nome completo..."
            required
            className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full" 
          />

        <label className="space-x-3 block">
          Endereço de e-mail:
        </label>
        <input
            type="email"
            placeholder="Digite o seu e-mail..."
            required
            className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full" 
          />
      <label className="space-x-3 block">
          Digite uma senha:
        </label>
        <input
            type="password"
            placeholder="Digite sua senha..."
            required
            className="bg-transparent rounded-md placeholder-black py-3 px-6 border focus:border-2 border-primary focus:border-primary active:border-primary outline-none w-full" 
              />
              
              <div className="space-y-4 flex w-full flex-wrap">
               <Link href="/" className="bg-primary text-white hover:scale-[1.05] hover:transition-[.3s] p-3 rounded-md w-full text-center">Cadastrar</Link>
              
              <Link href="/" className="border border-primary text-primary hover:scale-[1.05] hover:transition-[.3s] p-3 rounded-md w-full text-center">
                  Voltar
            </Link>   
              </div>
              
      </form>
    </main>
  );
}
