// 1. a) e b)
let idade = Number(prompt("Quantos anos você tem?"))

// 1. c)
idade >= 18?
console.log("Você pode dirigir"):
console.log("Você não pode dirigir");

// 2.
let turno = prompt("Em que turno do dia você estuda? Digite M para matutino, V para vespertino e N para noturno.").toUpperCase();

if(turno === "M"){
    console.log("Bom Dia!");
}else if(turno === "V"){
    console.log("Boa Tarde!");
}else if(turno === "N"){
    console.log("Boa Noite!");
}else{
    console.log("Houve um erro de digitação.");
}

// 3.
switch(turno){
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Boa Tarde!");
        break;
    case "N":
        console.log("Boa Noite!");
        break;
    default:
        console.log("Houve um erro de digitação.");
        break;
}

// 4.
let genero = prompt("A que gênero de filme você assistirá?").toLowerCase()
let precoIngresso = prompt("Quanto o ingresso custa?")
if(genero == "fantasia" && precoIngresso < 15){
    console.log("Bom filme!");
}else{
    console.log("Escolha outro filme :(");
}

// Desafio 1.
if(genero == "fantasia" && precoIngresso < 15){
    let lanchinho = prompt("Que lanchinho você vai comprar?").toLowerCase();
    console.log("Bom filme! Aproveite o seu", lanchinho);
}else{
    console.log("Escolha outro filme :(");
}

// Desafio 2.
let nome = prompt("Qual o seu nome completo?")
let tipo = prompt("Qual o tipo de jogo?\nIN -> internacional\nDO -> doméstico").toUpperCase()
let etapa = prompt("Qual a etapa do jogo?\nSF -> semifinal\nDT -> decisão do terceiro lugar\nFI -> final").toUpperCase()
let categoria = Number(prompt("Qual a categoria: 1, 2, 3 ou 4?"))
let quantidadeDeIngressos = Number(prompt("Quantos ingressos?"))

let linhaEtapa;
let etapaPorExtenso;
switch(etapa){
    case "SF":
        linhaEtapa = 0;
        etapaPorExtenso = "Semifinais"
        break;
    case "DT":
        linhaEtapa = 1;
        etapaPorExtenso = "Decisão do 3º lugar"
        break;
    case "FI":
        linhaEtapa = 2;
        etapaPorExtenso = "Final"
        break;
    default:
        console.log("Erro de digitação");
        break;
}
let divisor = 1;
tipo == "IN" ? divisor = 4.1 : "";

let tabelaPrecos = new Array(3);
tabelaPrecos[0] = [1320, 880, 550, 220];
tabelaPrecos[1] = [660, 440, 330, 170];
tabelaPrecos[2] = [1980, 1320, 880, 330];

let tipoPorExtenso
switch(tipo){
    case "DO":
        tipoPorExtenso = "Doméstico";
        break;
    case "IN":
        tipoPorExtenso = "Internacional"
        break;
    default:
        console.log("Erro de digitação"); 
        break;   
}

switch(etapa){
    case "SF":
        etapaPorExtenso = "Semifinais"
        break;
    case "DT":
        etapaPorExtenso = "Decisão do 3º lugar"
        break;
    case "FI":
        etapaPorExtenso = "Final"
        break;
    default:
    console.log("Erro de digitação");
    break;
}

let valorFinalDoIngresso = tabelaPrecos[linhaEtapa][categoria - 1] / divisor
let moeda
if (tipo == "IN") {
    moeda = "U"
}else{
    moeda = "R"
}
tipo == "IN" ? moeda = "U" : moeda = "R";
console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo do jogo: ${tipoPorExtenso}
Etapa do jogo: ${etapaPorExtenso}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidadeDeIngressos} ingressos
---Valores---
Valor do ingresso: ${moeda}$ ${valorFinalDoIngresso}
Valor total: ${valorFinalDoIngresso * quantidadeDeIngressos}`);