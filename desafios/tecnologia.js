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

function verificarHabilidade(funcionarios) {
  if (funcionarios.habilidades.includes('CSS')) {
    return true;
  }
  return false;
}

// Percorra o array de funcionários e verifique se o mesmo tem habilidade com CSS utilizando a função construída

for (let i = 0; i < funcionarios.length; i++) {
  const tecnologia = verificarHabilidade(funcionarios[i])

  if (tecnologia) {
    console.log(`\nFuncionário(a) ${funcionarios[i].nome}\nHabilidade: ${funcionarios[i].habilidades[1]}`)
  }
}