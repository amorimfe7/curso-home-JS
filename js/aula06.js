//Aula 06 - Revisões e Desafios

//Criar variáveis use o LET ou var
let produto = 'Memória RAM'
let quant = 2
let precoUnitario = 80
let precoTotal = quant * precoUnitario

document.write(`Preço Total R$ ${precoTotal} <br>`)

/*PARA FORMATA VALORES - toLocaleString ('qual é a localidade?'), {style: 'qual estilo?, estilo: 'qual é o símbolo monetário?'})} <hr>)

currency = monetário, percentual e monetário
<hr> pula linha horizontal
*/
document.write(`Preço Total ${precoTotal.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} <hr>`)

//Criar constante
//Constantes são espaços na memória onde você cria um identificador(constante) e atribui um valor, e esse valor na tese não vai ser mutável. Mas podemos mudar utilizando o recursos de ARRAY

const nome = 'Fernanda'
const peso = '85.3'
const altura = 1.69
const imc = peso / (altura * altura)

document.write(`IMC: ${imc} <br>`)
document.write(`IMC: ${imc.toFixed((2))} <br>`)

let n1 = 7.5
let n2 = 5.8
let n3 = 8.0
let notaFinal = n1+n2+n3
document.write("Nota Final " + notaFinal + '<hr>')

//========================DESAFIOS=========================

//Variáveis
let lutador = 'David Boxing'
let nacionalidade = 'Brasileiro'
let idade = 20
let pesoLutador = 80
let alturaLutador = 1.72



const dia = 31
const mes = 03
const ano = 2023
let frase = 'Seja curioso. Leia tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade. <br> Aaron Swartz'


