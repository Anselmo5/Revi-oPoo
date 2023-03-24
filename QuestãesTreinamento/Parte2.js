class Pessoa2 extends Pessoa {
    constructor(nome,idade,falar,empresa,entrevistado){
    super(nome,idade,falar)
    this.empresa = empresa
    this.entrevistado = entrevistado
    this.empregado = false
    
    }

    Falar(){
        console.log('Ola '+this.entrevistado.nome,' Me chamo Anselmo e estou aqui para conduzi sua entrevista ');
    }

    Empresa(){
        console.log(this.entrevistado.nome,'Você Foi emprecado');
        this.empregado = true
        return this.empregado
    }

}