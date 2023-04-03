import { NegociacaoController } from "./controllers/negociacao-controllers.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.')
}

const botaoImporta = document.querySelector('#botaoImporta');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    })
} else {
    throw Error('Botão Importa não foi encontrado')
}

