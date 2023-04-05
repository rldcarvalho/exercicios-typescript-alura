import { Modelo } from "../interfaces/modelo";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
    
    private negociacoes: Array<Negociacao> = []; //negociacoes: Negociacao[]

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    public lista(): ReadonlyArray<Negociacao>{ //readonly Negociacao[]
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }

}