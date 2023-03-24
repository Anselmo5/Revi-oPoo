class Pessoa2 extends Pessoa {
    constructor(nome,idade,falar,empresa,entrevistado,empregar){
    super(nome,idade,falar)
    this.empresa = empresa
    this.entrevistado = entrevistado
    this.empregado = false
    this,empregar = empregar
    
    }

    Falar(){
        console.log('Ola '+this.entrevistado.nome,' Me chamo Anselmo e estou aqui para conduzi sua entrevista ');
    }

    VerificarStatus(){
        if (this.empregado=== true) {
            return 'Aprovado'
          } else {
           return 'Dessemprecado'
          }
    }

    Empresa(){
        console.log(this.entrevistado.nome,'Você Foi emprecado');
        this.empregado = true
    }

}