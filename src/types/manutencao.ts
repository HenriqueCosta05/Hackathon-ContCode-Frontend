import { Carro } from "./carro";

export interface Manutencao {
    id?: string;
    carro_associado: Carro;
    kilometer: number;
    date: string;
    service: string;
}