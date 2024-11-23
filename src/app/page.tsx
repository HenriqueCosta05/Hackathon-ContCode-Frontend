export default function Page() {
  return (
    <main className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">ManuCar</h1>
      <p className="pt-2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ab
        impedit atque suscipit sequi sed nemo eaque esse.
      </p>

      <div className="flex space-x-5 pt-10">
        <button className="p-3 w-36 rounded-md cadastrar">Cadastrar</button>

        <button className="p-3 w-36 rounded-md login bg-transparent">
          Entrar
        </button>
      </div>
    </main>
  );
}
