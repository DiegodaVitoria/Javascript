/*==========================================
#   Fazendo cálculos com JavaScript

===========================================*/



// Criar um programa que caucula a média
// das notas entre os alunos e envia
// mensagem do calculo da media.



const aluno1 = 'Diego';
const notaAluno01 = 9.8;

const aluno2 = 'Carlos';
const notaAluno02 = 10;

const aluno3 = 'Reis';
const notaAluno03 = 2;

const media = (notaAluno01 + notaAluno02 +  notaAluno03) / 3   //tirando a média

// se a media for maior que 5
if (media > 5) {
 // faz alguma coisa
 console.log(`A média foi de ${media}. Parabéns`)
}else{
 // faz outra coisa
 console.log(`Sua média foi de ${media}. Tentar no proximo modulo`)
}
console.log(media) // enviar mensagem

