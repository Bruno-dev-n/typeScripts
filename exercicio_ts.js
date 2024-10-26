"use strict";
class Multiplicacao {
    constructor(investimento, juros) {
        this.investimento = investimento;
        this.juros = juros;
        this.total = 0;
    }
    calcularInvestimento() {
        return this.investimento * (this.juros / 100);
    }
    getTotal() {
        this.total = this.investimento + this.calcularInvestimento();
        return this.total;
    }
}
class saudacao {
    constructor(diz = "ola", nome = "Bruno") {
        this.Saudando = '';
        this.diz = diz;
        this.nome = nome;
        this.Saudando = this.Saudando;
    }
    concatSaudacao() {
        this.Saudando = this.diz + " " + this.nome;
        return this.Saudando;
    }
    getSaudando() {
        return this.concatSaudacao();
    }
}
const Asaudacao = new saudacao();
console.log(Asaudacao.getSaudando());
const minhaMultiplicacao = new Multiplicacao(215, 2.5);
console.log(`Investimento total com juros: ${minhaMultiplicacao.getTotal()}`);
