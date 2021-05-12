/*==========================================
#Vetores

// Criar um programa que caucula a média
// das notas entre os alunos e envia
// mensagem do calculo da media.
===========================================*/
const alunos = [
  {
    nome: "Diego",
    nota: 9.8
  },
  {
    nome: "Carlos",
    nota: 10
  },
  {
    nome: "Reis",
    nota: 2
  },
]

const media = (alunos[0].nota + alunos[1].nota +  alunos[2].nota) / 3   //tirando a média

// se a media for maior que 5
if (media > 5) {
 // faz alguma coisa
 console.log(`A média foi de ${media}. Parabéns`)
}else{
 // faz outra coisa
 console.log(`Sua média foi de ${media}. Tentar no proximo modulo`)
}
console.log(media) // enviar mensagem

