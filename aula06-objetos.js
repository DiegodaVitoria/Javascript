/*==========================================
#OBJETOS

// Criar um programa que caucula a média
// das notas entre os alunos e envia
// mensagem do calculo da media.
===========================================*/
const aluno1 = {
  nome: "Diego",
  nota: 9.8
}

const aluno2 = {
  nome: "Carlos",
  nota: 10
}


const aluno3 = {
  nome: "Reis",
  nota: 2
}

const media = (aluno1.nota + aluno2.nota +  aluno3.nota) / 3   //tirando a média

// se a media for maior que 5
if (media > 5) {
 // faz alguma coisa
 console.log(`A média foi de ${media}. Parabéns`)
}else{
 // faz outra coisa
 console.log(`Sua média foi de ${media}. Tentar no proximo modulo`)
}
console.log(media) // enviar mensagem

