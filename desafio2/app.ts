// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum Trabalho {
    Atriz,
    Pedreiro
}
type pessoa = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: pessoa = {
nome: "maria",
idade: 29,
profissao: Trabalho.Atriz
}

let pessoa2 = {
nome: "roberto",
idade: 19,
profissao: Trabalho.Pedreiro
}

let pessoa3: pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Trabalho.Atriz
}

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Pedreiro
}