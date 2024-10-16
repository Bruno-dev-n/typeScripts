// Boolean
let estaChovendo: boolean = false;
estaChovendo = true;

// Number -- Não tem diferença entre inteiro e fracionado;
let idade: number = 27;
let altura: number = 1.75;

// String
const nacionalidade: string = 'Brasileira';

// Arrays -- Não podemos ter um array com vários tipos;
const colegas: string[] = ['Lucas', 'Fernanda', 'Pedro'];
const tecnologias: Array<string> = ['HTML', 'CSS', 'JS'];
const notas: ReadonlyArray<number> = [7, 9, 5, 8]; // Não permite Push!;

//// Tupla -- Permite tipos diversos dentro do Array;
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Matheus', true, 22];

//// Union Type -- Une dois tipos;
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos';

//// Any -- Aceita qualquer tipo de dados (usar com cautela);
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'String';