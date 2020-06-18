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

function enviarMensagem(turma, media) {
  if (media > 6) {
    console.log(`\n Turma: ${turma}\n Média: ${media}\n Mensagem: Aprovados\n`)

  } else {
    console.log(`\n Turma: ${turma}\n Média: ${media}\n Mensagem: Reprovados\n`)
  }
}

enviarMensagem('B', mediaB.toFixed(3))

// Marcar cada aluno como aprovado ou reprovado se a nota for muito baixa

function marcarReprovados(aluno) {
  aluno.reprovado = false

  if (aluno.nota < 5) {
    aluno.reprovado = true
  }
}

function enviarMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`Nome: ${aluno.nome}\nMensagem: Reprovado\n`)

  } else {
    console.log(`Nome: ${aluno.nome}\nMensagem: Aprovado(a)\n`)
  }
}

function alunoReprovado(alunos) {
  for (const aluno of alunos) {
    marcarReprovados(aluno)
    enviarMensagemReprovado(aluno)
  }
}

alunoReprovado(turmaB)