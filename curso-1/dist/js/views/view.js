export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error('A classe filha deve sobrescrever o método template da classe mãe');
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
