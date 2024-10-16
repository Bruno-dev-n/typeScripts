// Tipagem Implícita -- Typescript sabe qual o tipo da variável mesmo que não explicitada
let number = 5;

// Tipagem Explícita -- Tipo da variável explicitada
let number2: number = 5;

// Podemos explicitar o tipo do recebimento da função para evitar o "any";
function calculaArea(base:number, altura:number) {
    return base * altura;
}
//// Função acima no modo Arrow Function;
const calculaArea2 = (base:number, altura:number): number => base * altura

// Void -- Indica que o retorno da função é vazio;
//// Rest -- Podemos utilizar o Rest no TS e explicitar seu tipo para evitar "any";
function somar(...numeros: number[]): void {
    console.log(numeros)
}

// Union Type -- Desta forma a função pode retornar uma "String" ou um Número;
function teste(): string | number {
    if (10 > 5) {
        return 'Dez maior que cinco'
    } else {
        return 5
    }
}
const resultadoDeTeste = teste()