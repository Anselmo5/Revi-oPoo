// Relenbrando (definindo classes)
// A declaração é bem parecida com constructor functins;
// As propriedades devem ficar num método especial chamado constructor

// class Tenis {
//     constructor(modelo,cor){
//         this.modelo = modelo;
//         this.cor = cor;
//     }
// }

// console.log(typeof Tenis);
// let allstar = new Tenis("All Star", "Branco");



// Herança
// Utilizando a palavra extends, uma classe herda as propriedades e métodos de outra;
 class Animal{
    constructor(nome){
        this.nome = nome;
    }
 }

 class Cachorro extends  Animal{
    latir(){
        console.log("Au au" );
    }
 }

 let bob = new Cachorro("Bob");
 bob.latir();

 console.log(bob.nome);