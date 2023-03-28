function test() {return true};

console.log(test.prototype);

//Uma das características mais poderosas do JavaScript é a sua capacidade de trabalhar com objetos, que são instâncias de classes ou protótipos. O sistema de protótipos do JavaScript permite que os desenvolvedores criem objetos de forma flexível e eficiente.
// O prototype é um mecanismo interno do JavaScript que permite aos objetos herdar propriedades e métodos de outros objetos. Essa herança é diferente da herança de classe tradicional encontrada onde a herança ocorre atraves da chamada herança prototipica e é basead em objeto, em vez de classes]

// funções construtoras e o prototype
function Pessoa( nome,idade){
    this.nome = nome
    this.idade = idade
}

const pessoa1 = new Pessoa("João",30)

//Neste exemplo, a função Pessoa é uma função construtora e cria objetos com as propriedades nome e idade. Quando criamos um objeto pessoa1 usando a palavra-chave “new”, o protótipo do objeto pessoa1 é configurado para ser o objeto Pessoa.prototype.

//Adicionando propriedades e Métodos ao prototype
//O prototype é um objeto comum e, como tal, você pode adicionar propriedades e métodos a ele. Isso é útil quando você deseja que todos os objetos criados por uma função construtora compartilhem propriedades e métodos sem precisar redefini-los em cada instância.


Pessoa.prototype.apresentar = function(){
    return `Olá, meu nome é  ${this.nome} e tenho ${this.idade} anos.`;

};

console.log(pessoa1.apresentar());