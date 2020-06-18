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
    nota: 10
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
    nome: 'Novo Aluno(a)',
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

function enviarMensagemNotaTurmas(turma, media) {
  if (media > 6) {
    console.log(`\nTurma: ${turma}\nMédia: ${media}\nMensagem: Aprovados\n`)

  } else {
    console.log(`\nTurma: ${turma}\nMédia: ${media}\nMensagem: Reprovados\n`)
  }
}

function marcarReprovados(aluno) {
  aluno.reprovado = false

  if (aluno.nota < 5) {
    aluno.reprovado = true
  }
}

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`Nome: ${aluno.nome}\nMensagem: Reprovado(a)\n`)

  } else {
    console.log(`Nome: ${aluno.nome}\nMensagem: Aprovado(a)\n`)
  }
}

function alunosReprovados(alunos) {
  for (const aluno of alunos) {
    marcarReprovados(aluno)
    enviarMensagemReprovado(aluno)
  }
}

enviarMensagemNotaTurmas('B', mediaB.toFixed(3))
alunosReprovados(turmaB)