/*==========================================
# Estrutura de repetição


===========================================*/
const alunosDaTurmaA = [
 {
  nome: "Diego",
  nota: 9.8,
 },
 {
  nome: "Carlos",
  nota: 10,
 },
 {
  nome: "Reis",
  nota: 2,
 },
]

const alunosDaTurmaB = [
 {
  nome: "Tiago",
  nota: 3,
 },
 {
  nome: "Bruno",
  nota: 9,
 },
 {
  nome: "Lucia",
  nota: 10,
 },
 {
  nome: "Novo Aluno",
  nota: 7,
 },
]

function calculaMedia(alunos) {
 let soma = 0
 
 for (let i = 0; i < alunos.length; i++) { // for (let i= 0; i< alunos.length; i++)  {}
  soma = soma + alunos[i].nota
 }
 const media = soma / alunos.length
 return media
}

function enviaMensagem(media, turma) {
 if (media > 5) {
  console.log(`A média da ${turma} foi de ${media}. Parabéns`)
 } else {
  console.log(`A média da ${turma} foi de ${media}. Tentar no proximo modulo`)
 }
}

function marcarComoReprovado(aluno) {
 aluno.reprovado = false
 
 if (aluno.nota < 5) {
  aluno.reprovado = true
 }
}

function enviarMensagemReprovado(aluno) {
 if (aluno.reprovado) {
  console.log(`o Aluno ${aluno.nome} está reprovado`)
 }
}

function alunosReprovados(alunos) {
 for (let aluno of alunos) {
  marcarComoReprovado(aluno)
  enviarMensagemReprovado(aluno)
 }
}


const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

alunosReprovados(alunosDaTurmaA)
alunosReprovados(alunosDaTurmaB)