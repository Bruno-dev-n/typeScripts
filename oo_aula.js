"use strict";
class pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizola() {
        return `${this.nome} disse oi`;
    }
}
class contaBancaria {
    constructor(numeroDaconta) {
        this.saldo = 890;
        this.numeroConta = 1299716;
        this.numeroConta = numeroDaconta;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(valor) {
        this.saldo += valor;
    }
}
