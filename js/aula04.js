//Aula 04 - Arrays, Vetores e Matrizes

let produtos = ['Queijo', 'Tapioca', 'Trigo']
var codigos = Array('5','10', '20', '30') //arrays normalmente são utilizadas p/ armazenar dados do MESMO tipo, mas pode ser outro tb
let meses = ['Jan', 'Fev', 'Mar']

//CRIANDO ARRAY e colocando valores nas posições específicas
var arrayPosicoes = Array(10)
arrayPosicoes[10] = "OLÁ"
arrayPosicoes[5] = "TURU BOM"
arrayPosicoes[2] = "TRUTA"
arrayPosicoes[11] = "VOCE PODE ADD UMA POSIÇÃO, JS É FLEXÍVEL"

//ALTERANDO UM
meses[0] = 'PRIMEIRO'

//ADICIONAR no final > push = empurre
produtos.push('Toddy', 'Nescau')
codigos.push(40, 50, 60, 70, 80, 90, 100)
meses.push('Mai', 'Abr', 'Jun', 'Jul', '04')

//REMOVER no final > pop = estourar
produtos.pop()
produtos.pop() //se usado 2 vezes, remove os 2 últimos valores
codigos.pop()
meses.pop()

//ADICIONAR no inicio > unshift
produtos.unshift('Arroz', 'Feijão', 'Canjica')

//REMOVER no inicio > shift
//produtos.shift()

//REMOVER valores de uma POSIÇÃO ESPECÍFICA > splice = emendar
codigos.splice(1, 3) //a partir do índice 1, quero remover 2 NÚMEROS 

//COPIAR array > slice = fatiar porção
let meses1 = meses.slice() //copia todo o array MESES p/ MESES1

//COPIAR valor específico da array > (0 ((posição inicial)), 3 ((quantos copiar)))
let meses2 = meses.slice(0,3)

//VER TAMANHO DO ARRAY > length = comprimento
codigos.length
meses.length
meses2.length

//spreed operator (...)
let produtosSpreedOperator = [...produtos, 'Ovo', 'Pera']