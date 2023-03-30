 //Aula 03 - Operadores e Operações

 let n1 = 10
 let n2 = 5
 let n3 = "5"
 
 document.write(`N1 ${n1} <br>`)
 document.write(`N2 ${n2} <br>`)
 document.write(`N3 ${n3} <br>`)
 
 console.log(n1 + n2) // add
 console.log(n1 - n2) // sub
 console.log(n1 * n2) // multi
 console.log(n1 / n2) // divisão
 console.log(n1 % n2) // resto
 
 console.log(n2 == n3) // igual a, compara apenas se o CONTEÚDO da variável é igual e não o TIPO
 console.log(n2 === n3) // identico a, compara se o CONTEÚDO e o TIPO da variável são iguais ((identidade))
 console.log(n2 != n3) // diferente, ((não é igual)), compara conteúdo
 console.log(n2 !== n3) // NÃO é identico, o CONTEÚDO e TIPO do dados
 
 let a = true
 let b = false
 console.log(a && b) //E AND, o conteúdo de A e do B são verdadeiros? ambos tem que ser verdadeiro p/ true
 console.log(a || b) // OU OR, A ou B são verdadeiros? Um deles pelo menos é? se sim retorne TRUE
 console.log(!a) //NEGAÇÃO, NOT, NÃO, se A é true, eu nego e return é FALSE
 console.log(!b) //NEGAÇÃO, NOT, NÃO, se B é false, eu nego e return é TRUE
 
 