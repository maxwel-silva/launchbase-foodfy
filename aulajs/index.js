// Criar um programa que calcule a média das turmas de alunos e envia a mensagem da média

const alunosManha = [
  { nome: 'Guilhereme', sobrenome: 'Pereira', nota: 6.6 },
  { nome: 'Marcelo', sobrenome: 'Silva', nota: 2.8 },
  { nome: 'Mauricio', sobrenome: 'Santos', nota: 3.3 }
]

const alunosNoite = [
  { nome: 'Anderson', sobrenome: 'Pereira', nota: 1.6 },
  { nome: 'Thiago', sobrenome: 'Silva', nota: 9.8 },
  { nome: 'Amanda', sobrenome: 'Ramos', nota: 9.3 }
]

function calcularMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const mediaManha = calcularMedia(alunosManha)
const mediaNoite = calcularMedia(alunosNoite)

function enviarMensagem(media, turma) {

  if (media >= 5) {
    console.log(`A média da ${turma} foi ${media}. Parabéns a todos`)

  } else {
    console.log(`A média da ${turma} foi ${media}. Vocês precisam estudar mais`)
  }
}

enviarMensagem(mediaManha, 'turma da manhã')
enviarMensagem(mediaNoite, 'turma da noite')
