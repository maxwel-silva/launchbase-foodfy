// Crie um programa que armazena um array de colaboradores (objetos), cada colaborador tem um nome e suas habilidades em tecnologia

const colaboradores = [
  { nome: 'Carlos', habilidades: ['HTML', 'CSS', 'JavaScript'] },
  { nome: 'Maxwel', habilidades: ['Java', 'C++'] },
  { nome: 'Marcos', habilidades: ['Node.js', 'React Native', 'React'] }
]

function listarColaboradores() {
  for (let colaborador of colaboradores) {
    console.log(`Nome: ${colaborador.nome}\nHabilidades: ${colaborador.habilidades.join(', ')}\n`)
  }
}

function verificarHabilidades(colaboradores) {
  if (colaboradores.habilidades.includes('CSS')) {
    return true;
  }
  return false;
}

for (let i = 0; i < colaboradores.length; i++) {
  const tecnologia = verificarHabilidades(colaboradores[i])

  if (tecnologia) {
    console.log(`\nFuncionário(a) ${colaboradores[i].nome}\nHabilidade: CSS`)
  }
}

