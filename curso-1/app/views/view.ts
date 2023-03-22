export class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    template(model: T): string {
        throw Error('A classe filha deve sobrescrever o método template da classe mãe')
    }

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}