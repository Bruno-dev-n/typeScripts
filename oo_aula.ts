class pessoa {
    nome: string;
    renda:number;

    constructor(nome: string,renda: number){
        this.nome = nome;
        this.renda = renda;
    }
    dizola(): string{
        return`${this.nome} disse oi`;
    }
}
class contaBancaria{
    private saldo: number = 890;
    numeroConta: number = 1299716;

    constructor(numeroDaconta: number){
        this.numeroConta = numeroDaconta;
    }
    getSaldo(){
        return this.saldo;
    }
    setSaldo(valor:number){
        this.saldo += valor;
    }
}