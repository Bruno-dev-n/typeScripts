"use strict";
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); // Converte 'idade' para 'number' e chama o método 'toFixed'
    idade.length; // Converte 'idade' para 'string' e acessa a propriedade 'length'
    /*
    (idade as string[]).forEach(x => {
        console.log(x);  // Comentado porque 'idade' não é um array de strings
    })
    */
    let nome = 35;
    nome; // Essa linha está incompleta e não faz nada explicitamente
})(casting || (casting = {}));
/* Explicação dos Conceitos
Type Casting: Em TypeScript, você pode converter (ou cast) uma variável de um tipo para outro usando duas sintaxes: as ou a sintaxe <type>. No código, o operador as é usado.

idade como any: O tipo any é uma maneira de desativar a verificação de tipo em uma variável. Aqui, idade começa com o valor 25 do tipo number.

Convertendo idade:

(idade as number).toFixed(); converte idade para number e chama o método toFixed, que formata o número usando uma notação de ponto fixo.

(idade as string).length; converte idade para string e acessa a propriedade length da string.

Comentário: O trecho comentado tenta converter idade para um array de strings (string[]), mas não faz sentido porque idade é um número, não um array. Portanto, isso está comentado para evitar erros.

Casting Duplo:

let nome: string = 35 as unknown as string;

Primeiro, 35 é convertido para unknown (tipo desconhecido), e depois para string. Isso é uma maneira de forçar a coerção de tipo de um valor que não tem a conversão direta permitida.

Essa parte final parece estar incompleta (nome;), pois não há operação realizada após a declaração. */
