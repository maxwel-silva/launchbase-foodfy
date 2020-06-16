// Criar um programa que calcule a média das notas entre alunos e envia a mensagem da média

const aluno1 = 'Maxwel'
const notaAluno1 = 9.0

const aluno2 = 'Raimundo'
const notaAluno2 = 1.2

const aluno3 = 'Rafael'
const notaAluno3 = 3.1

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3

if (media >= 5) {
  console.log(`Sua nota foi ${media}. Parabéns`)

} else {
  console.log(`Sua nota foi ${media}. Estude mais`)
}