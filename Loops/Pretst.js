let dados = new Array();
let media = 0, mediaFeral=0;

// cria o nosso array de dados de alunos

dados[0] = ["Aluno 1", 7,8,9,5]
dados[1] = ["Aluno 2", 5,8,9,2]
dados[2] = ["Aluno 3", 2,4,7,5]
dados[3] = ["Aluno 4", 6,3,2,5]

for(var i = 0; i <dados.length; i++){
    // calculara a mdeia do aluno
    var mediaAluno = (dados[i][1]+dados[i][2]+dados[i][3]) / (dados[i].length -1);
    // armazena a média do aluno para o futuro calculo da media geral
    media += mediaAluno;
    // escreve a média do aluno

    document.write(dados[i][0]+" / Média: "+ mediaAluno.toFixed(2));
}