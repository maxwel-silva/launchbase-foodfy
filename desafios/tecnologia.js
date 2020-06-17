// Crie um programa que armazena um array de funcionários (objetos), cada funcionário tem um nome e suas habilidades em tecnologia

const funcionarios = [
  {
    nome: 'Carlos',
    habilidades: [
      'HTML',
      'CSS',
      'JavaScript'
    ]
  },

  {
    nome: 'Maxwel',
    habilidades: [
      'Java',
      'C++'
    ]
  },

  {
    nome: 'Marcos',
    habilidades: [
      'Node.js',
      'React Native',
      'React'
    ]
  }
]

function listarFuncionarios() {
  for (let funcionario of funcionarios) {
    console.log(`Nome: ${funcionario.nome}\nHabilidades: ${funcionario.habilidades.join(', ')}\n`)
  }
}

function verificarHabilidade(listar) {
  for (let habilidade of listar.habilidades) {
    if (habilidade == 'CSS') return true
  }
  return false
}

// Percorra o array de funcionários e, para cada um, verifique se o mesmo tem habilidade com CSS utilizando a função construída acima

for (let i = 0; i < funcionarios.length; i++) {
  const tecnologia = verificarHabilidade(funcionarios[i])

  if (tecnologia) {
    console.log(`\nFuncionário(a) ${funcionarios[i].nome}\nHabilidade: ${funcionarios[i].habilidades[1]}`)
  }
}