/*1 - Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade 
calcule e imprima sua media e sua classificacao conforme a tabela abaixo:

media = (nota 1 + nota 2 + nota 3) / 3
classificacao: 
- media menor que 5, reprovado;
- media entre 5 e 7, recuperacao;
- media mairo que sete, aprovado;*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log("Reprovado");
}else if(media >= 5 && media <=7){
    console.log("Recuperação");
}else if(media > 7){
    console.log("Aprovado")
};