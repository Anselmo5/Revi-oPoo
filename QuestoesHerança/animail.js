class Animal {
    constructor(nome,idade,cor){
        this.nome = nome,
        this.idade = idade
        this.cor = cor
    }

     Correr(){
        console.log('Corre bil'); // simplemente imprime
     }

     CorrerXkm(km){
        console.log('Correr Bil' +km+ 'km/h');  // chama e imprime o valor     }
     }
     DistanciaMax(){
        return '100km'  //sempre ira retornar o valor
     }
}  // instancia (padrão)