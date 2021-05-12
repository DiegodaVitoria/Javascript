/*==========================================
#OBJETOS

// Criar um programa que caucula a média
// das turmas de alunos e envia
// mensagem do calculo da media.
===========================================*/
const alunosDaTurmaA = [
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

const alunosDaTurmaB = [
  {
    nome: "Tiago",
    nota: 3
  },
  {
    nome: "Bruno",
    nota: 9
  },
  {
    nome: "Lucia",
    nota: 0
  },
]

function calculaMedia(alunos){
  return (alunos[0].nota + alunos[1].nota +  alunos[2].nota) / 3   //tirando a média
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


function enviaMengasem(media, turma){
  // se a media for maior que 5
  if (media > 5) {
   // faz alguma coisa
   console.log(`A média da ${turma} foi de ${media}. Parabéns`)
  }else{
   // faz outra coisa
   console.log(`A média da ${turma} foi de ${media}. Tentar no proximo modulo`)
  }

}

enviaMengasem(media1, 'turmaA')
enviaMengasem(media2, 'turmaB')



