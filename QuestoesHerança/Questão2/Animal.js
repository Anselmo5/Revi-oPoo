class Animal {
    #nome // priventi
    constructor(nome,cor,ambiente,comprimento,velocidade,patas){
    this.#nome =nome,
    this.cor =cor,
    this.ambiente =ambiente,
    this.comprimento=comprimento,
    this.velocidade=velocidade,
    this.patas=patas
    }

    alternome(nome){
        this.nome = nome
    }
    
    alterCor(cor){
        this.cor = cor
    }
    
    alterambiente(ambiente){
        this.ambiente =ambiente
    }

    
    altercomprimento(comprimento){
        this.comprimento =comprimento
    }
    
    altervelocidade(velocidade){
        this.velocidade = velocidade
    }

    alterpatas(patas){
        this.patas = patas
    }
    
    Dados(obj){
        console.table(bj);
    }
}