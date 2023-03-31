//Aula 05 - Objetos

//CRIAR OBJETOS
let pessoa = {          //quando temos que separar uma propriedade da outra, usamos a ( , )
    nome: 'Fernanda',   //primeiro a propriedade((chave)), depois o valor dessa mesma
    idade: 40,
    peso: 90,
    altura: 1.69,
    doador: false,
}

let produtos = {
    prdt: ['Memória RAM', 'SSD 240GB', 'SSD 500GB', 'Pasta Térmica - Silver'],
    descricao: ['Explore a capacidade máxima do seu PC', 'Dê mais espaço para seu PC', 'Dê MUITO + espaço para seu PC' , 'Mantenha o seu processador na temperatura'], //é um VETOR/ARRAY de descricao
    preco: []      //é um VETOR/ARRAY de preco
}

const carros = {
    marca: ['Ford','Fiat', 'Volkswagen'],
    modelo: ['Ka', 'Uno', 'Fox'],
    ano: [2012, 1998, 2014]
}

//COMO ACESSAR UMA PROPRIEDADE USANDO ( . )
pessoa.nome
carros.modelo
produtos.descricao

document.write(pessoa.nome)

//COMO ACESSAR UMA PROPRIEDADE USANDO ( [''] ) 
pessoa['nome']
carros['modelo']
produtos['descricao']

//OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura) //colocar no ( ) quando queremos que o comando RODE PRIMEIRO

// .toFixed(X) >> limita o número de casas decimais
document.write("<br> MEU IMC " + imc.toFixed(2)) 

//ALTERAR ou ATUALIZAR VALORES das propriedades
pessoa.nome = "Fernanda Amorim" //mas não posso usar isso várias vezes, se não, a próxima que eu colocar sobrescreve a primeira
//ENTÃO... Devo utilizar o SPREED OPERATOR (clona, copia oq estiver dentro do objeto) e adiciono o meu outro valor
produtos.descricao = [...produtos.descricao, 'Nova inserção >> Clonei o valor inserido antes, copiei e inseri esse novo aqui!']
