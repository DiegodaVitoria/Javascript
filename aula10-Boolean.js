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

//inicio estrutura de repetição EX:  
function calculaMedia(alunos){
 let soma = 0

 for (let i = 0; i < alunos.length; i++) { // for (let i= 0; i< alunos.length; i++)  {}
   soma = soma + alunos[i].nota
 }
 const media = soma / alunos.length
 return media
};

//Final estrutura de repetição

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
 if (media > 5) {
  console.log(`A média da ${turma} foi de ${media}. Parabéns`)
 }else{
  console.log(`A média da ${turma} foi de ${media}. Tentar no proximo modulo`)
 }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')


/* =explicando a estrutura=

variavel ->  alunosDaTurma
função ->  calculaMedia
variavel -> media1 -> calculaMedia -> alunosDaTurma
função -> enviaMensagem -> media


*/
function marcarComoReprovador(aluno){
  aluno.reprovado = false;
  if(aluno.nota < 5) {
   aluno.reprovado = true
  }
 }


function enviarMensagemReprovado(aluno) {
 if(aluno.reprovado){
  console.log(`o Aluno ${aluno.nome} está reprovado`)
 }
}

function alunoReprovado(alunos){
 for(let aluno of alunos) {
  marcarComoReprovador(aluno);
  enviarMensagemReprovado(aluno)
 }
}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)