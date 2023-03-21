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


// criando props e metodos metodos em objs existentes
// O objeto não e imutavel ele pode ganhar propriedades e metodos ao longo do código


// let pessoa ={
//     nome:'Matheus',
// }

// pessoa.idade = 29;

// pessoa.falar = function(){
//     console.log('Olá');
// }

// console.log(pessoa);



// deletando propriedades e métodos
// Como é possivel adicionar, também podemos deletar propriedades dos objetos


// let pessoa ={
//     nome:'Matheus',
// }

// pessoa.idade = 29;

// pessoa.falar = function(){
//     console.log('Olá');
// }


// delete pessoa.idade;
// delete pessoa.falar;

// console.log(pessoa);



//Utilizando o this no objeto
// A palavra reservada this dentro de um objeto, vai se reverir a própria instância(valor)
// Podemos utilizar o this para resgatar as prooriedades(caracteristicas) em metodo(função(ação))

// let pessoa ={
//     nome: 'Matheus',
// }

// pessoa.idade = 29;

// pessoa.falar = function(){
//     console.log('Olá mechamo '+ this.nome,'eu tenho '+ this.idade,'Anos');
// }

// pessoa.falar()
// console.log(pessoa);



// Constructor functions(ações)
// Uma outra forma de criar objeto é pela construtor function, alem de o constructor aceita os parâmetros para objetos

// function pessoa(nome) {
//     this.nome = nome;
// }

// let pessoa1 = new pessoa('Matheus')
// let pessoa2 = new pessoa('João')

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);


// Funções que retornam objetos
// Parecido com a constructor functions, porem não precisamos usar o new
// Porque o Objeto é cirado com o retorno da função


// function criarpessoa(nome){
//     return{
//         nome:nome
//     };
// }

// let pessoa1 = criarpessoa('Matheus');
// let pessoa2 = criarpessoa('João')

// console.log(pessoa1.nome);
// console.log(pessoa2.nome);


//O objeto global
// quando usamos o var tornamos nosso objeto global, onde ele pode ser chamado por qualque operador pelo fato de ser global

// var pessoa = 'teste'
// console.log(pessoa);
// console.log(window.pessoa); //elemento dom(document) gerado na janela
// console.log(this.pessoa);

// A propriedade constructor
// Quando um objeto é criado, sempre uma propriedade constructor é adicionada a ele, com a referência de como o objeto foi criado


// function newObj(x){
//     return{
//         x:x
//     };
// }

// let y = newObj(1);

// function NewObjTwo(x){
//     this.x = x
// }

// let z = new NewObjTwo(2);

// console.log(y.constructor);
// console.log(z.constructor);

//