class Pessoa{
    constructor(nome,idade,falar,Responder){
        this.nome = nome
        this.idade = idade
        this.falar = falar
        // this.Responder = Responder
    }

    Responder(empresa){
        console.log('Olá '+empresa.nome,' Sou Muito Grado Pela Oportunidade Que vocês me deram'
        );
    }
}