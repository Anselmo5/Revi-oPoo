// estrutura de um objeto

//const robo ={ // modo de criação
    // brancos: 4
//}


// Propriedades

//let carro ={   // as propriedades são caracteristicas que os objetos possuem
//     portas: 4,
//     cor:'verde'
// }

// console.log(carro.portas);
// console.log(carro.cor);


// tipos de propriedades

// let carro={  // no objeto podemos colocar qualquer tipo de dado(array,boolean,strings) que o objeto ira aceitar.
//     portas: 4,
//     cor:'azul',
//     opicionais:[
//         "teto-solar", "blindagem", "ar-condicionado"
//     ],
//     revisado: true

// }

// console.log(carro.opicionais);
// console.log(carro.cor);
// console.log(carro.portas);
// console.log(carro.revisado);

//propriedades com mais de uma palavra

// let carro ={  
//     portas:4,
//     cor:"azul",
//     "tem blindagem":true
// }

// console.log( carro.portas);    // e uma das formas que podemos usar para expecificar  o que queremos pecar no console, mas não e muito utilizada
// console.log(carro["cor"]);
// console.log(carro["tem blindagem"]);

//Acessando a propriedade por variável, e importante que a variavel  contenha o texto da variavel

// const robo ={
//     bracos:4,
//     pernas:2,
//     arma: 'metralhadora',
//     armaEspecial: 'foguete'
// }

// let a = 'arma';

// console.log(robo[a]);


// como criar metodos(funções(ações)) na programação orientada a objetos

// const robo ={
//     bracos:4,
//         pernas:2,
//         arma: 'metralhadora',
//        armaEspecial: 'foguete',
//     atirar: function(){
//         console.log('pew pew pew');
//     }
// }

// robo.atirar()   // forma que ativamos a função(ação)


// criando mais metodos(funções(ações))

// let pessoa ={
//     nome:'Mateus',
//     getnome: function(){
//         console.log("O meu nome é "+ this.nome);
//     },
//     setnome: function(novoNome){
//         this.nome =novoNome;
//     }
// }

// this e uma forma que temos para fala sobre a mesma variavel sem ter que repitila
// pessoa.getnome()
// pessoa.setnome('augusto') // aqui estamos gerando outro nome, um novoNome
// pessoa.getnome() // atraves desse comando repetido podemos gerar o novoNome


// Objetos dentro de objetos
// Como o objeto é também um tipo de dado podemos ter um objeto com objetos dentro, funcionado meio que e uma forma associativo(finculado,unido) 


// let pessoa ={
//     nome: 'Matheus',
//     caracteristicas:{
//         olhos: 'verdes',
//         cabelo:'castnho',
//         brincos: false,
//         oculos: false
//     }
// }


// console.log(pessoa.caracteristicas.cabelo);  // uma forma que podemos usar para poder expicificar ainda mais o codigo
