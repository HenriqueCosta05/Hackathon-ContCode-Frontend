import { Carro } from "./carro";

export interface Manutencao {
    id?: string;
    carro_associado: Carro;
    descricao: string;
}