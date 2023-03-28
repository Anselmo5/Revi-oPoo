// prototype

// function pai( nome,idade,aniversario){
//     this.nome = nome,
//     this.idade = idade,
//     this.aniversario = aniversario
// }

// const pai1 = new pai("Sergio",35,"5 de março")


// pai.prototype.filho = function(){
//     return `Olá, meu nome é  ${this.nome = String('Anselmo')} e tenho ${this.idade = Number(17)} anos, e faço aniversario em ${this.aniversario = String(' 24 de fevereiro')}`;

// }
// console.log(pai1.filho());
// esse seria o metodo que usariamos na herança de Prototype

// Classe

// class pai{
//     constructor(nome,idade,aniversario){
//         this.nome = nome
//         this.idade = idade
//         this.aniversario = aniversario
//     }

    
// }
// essa seria o metodo de herança que usariamos com a  herança em class

// entre as duas possue uma difente que podemos ver vizivelmente que a sua escalabridade, na herança em classes so podemos fazer a herança de um unico objeto, enquanto no prototype podemos criar varios objto com o mesma herança
// exmp:

function pai( nome,idade,aniversario){
    this.nome = nome,
    this.idade = idade,
    this.aniversario = aniversario
}

const pai1 = new pai("Sergio",35,"3 de março")


pai.prototype.filhomaisnovo = function(){
    return `Olá, meu nome é  ${this.nome = String('Anselmo')} e tenho ${this.idade = Number(17)} anos, e faço aniversario em ${this.aniversario = String(' 24 de fevereiro')}`;

}

pai.prototype.filhadomeio = function(){
    return `Olá, meu nome é  ${this.nome = String('Debora')} e tenho ${this.idade = Number(25)} anos, e faço aniversario em ${this.aniversario = String(' 15 de setembro')}`;

}


pai.prototype.filhomaisvelho = function(){
    return `Olá, meu nome é  ${this.nome = String('Mauricio')} e tenho ${this.idade = Number(30)} anos, e faço aniversario em ${this.aniversario = String(' 5 março')}`;

}

console.log(pai1.filhomaisnovo());
console.log(pai1.filhadomeio());
console.log(pai1.filhomaisvelho());




