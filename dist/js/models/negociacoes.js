export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
/*
Negociacao[] === Array<Negociacao>
--
readonly Negociacao[] === ReadonlyArray<Negociacao>
*/ 
