
class Cavalo extends Animal {
    constructor(nome,idade,cor,raça){
        super(nome,idade,cor) 
        // Quem crior o constructor que crie
        this.raça = raça // esse parametor so existe no cavalo então não precisar passar no super porque raça não pertence a animal

    }

    Correr(nome){
        console.log('Corre bil'+nome);
    }

}  // instancia (padrão)


class ponei extends Cavalo{
    constructor(nome,idade,cor,raça){
        super(nome,idade,cor,raça) 
    }
       
}

