// Relenbrando (definindo classes)
// A declaração é bem parecida com constructor functins;
// As propriedades devem ficar num método especial chamado constructor

class Tenis {
    constructor(modelo,cor){
        this.modelo = modelo;
        this.cor = cor;
    }
}

console.log(typeof Tenis);
let allstar = new Tenis("All Star", "Branco");


