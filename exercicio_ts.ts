class Multiplicacao {
    investimento: number;
    juros: number;
    total: number;

    constructor(investimento: number, juros: number) {
        this.investimento = investimento;
        this.juros = juros;
        this.total = 0;
    }


    protected calcularInvestimento(): number {
        return this.investimento * (this.juros / 100);
    }

    public getTotal(): number {
        this.total = this.investimento + this.calcularInvestimento();
        return this.total;
    }
    
}
class saudacao{
    private diz: string;
    private nome: string;
    private Saudando: string = '';

    constructor( diz: string = "ola", nome: string = "Bruno"){
        this.diz=diz;
        this.nome=nome;
        this.Saudando=this.Saudando;
    }
    protected concatSaudacao(): string{
        this.Saudando = this.diz + " " +this.nome;
        return this.Saudando;
    }

public getSaudando():string{
    return this.concatSaudacao();
}
}
const Asaudacao = new saudacao()
console.log(Asaudacao.getSaudando());
const minhaMultiplicacao = new Multiplicacao(215, 2.5);
console.log(`Investimento total com juros: ${minhaMultiplicacao.getTotal()}`);
