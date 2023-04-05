import { imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements imprimivel {

  constructor(
    private _data: Date, 
    private _quantidade: number, 
    private _valor: number
  ) {}

  // pode setar os atributos como public readonly, sem underscore, e eliminar a necessidade de setters. ex: public readonly data: Date

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(date, quantidade, valor);
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `;
  }
}
