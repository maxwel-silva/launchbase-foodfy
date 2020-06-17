const turmaA = [
  {
    nome: 'Marcelo',
    nota: 10
  },
  {
    nome: 'Vanessa',
    nota: 10
  },
  {
    nome: 'Gustavo',
    nota: 5.5
  },
  {
    nome: 'Arlindo',
    nota: 2
  }
]

const turmaB = [
  {
    nome: 'Thiago',
    nota: 1
  },
  {
    nome: 'Juliana',
    nota: 1.2
  },
  {
    nome: 'Maria',
    nota: 2
  },
  {
    nome: 'Paulo',
    nota: 2
  },
  {
    nome: 'Novo Aluno',
    nota: 10
  }
]

function calcularNotas(alunos) {

  let soma = 0

  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }

  const media = soma / alunos.length
  return media
}

const mediaA = calcularNotas(turmaA)
const mediaB = calcularNotas(turmaB)

function enviarMensagem(turma, media) {
  if (media > 5) {
    console.log(`\n Turma: ${turma}\n Média: ${media}\n Mensagem: Aprovados`)

  } else {
    console.log(`\n Turma: ${turma}\n Média: ${media}\n Mensagem: Reprovados`)
  }
}

enviarMensagem('A', mediaA.toFixed(3))
enviarMensagem('B', mediaB.toFixed(3))


