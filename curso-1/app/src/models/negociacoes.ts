import { imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes extends imprimivel {
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
}