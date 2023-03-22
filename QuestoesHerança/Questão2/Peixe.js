class peixe extends Animal{
    constructor(nome,cor,ambiente,comprimento,velocidade,patas,caracteristicas){
        super(nome,cor,ambiente,comprimento,velocidade,patas,)
    }

    Dados(obj){
        console.log('Nome' + this.nome +'\nAmbiente' + this.ambiente
        + '\nCaracteristica')+this.cararacteristica;
    }

}