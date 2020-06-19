// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array

const colaborador = {
  nome: 'Ohana Ravena',
  idade: 36,
  sexo: 'F',

  tecnologias: [{
    nome: 'C++',
    especialidade: 'Desktop'
  },
  {
    nome: 'JavaScript',
    especialidade: 'Mobile',
  },
  {
    nome: 'Python',
    especialidade: 'Data Science'
  }]
}

console.log(`Colaborador(a) ${colaborador.nome} tem ${colaborador.idade} anos e usa a tecnologia ${colaborador.tecnologias[1].nome} com especialidade em ${colaborador.tecnologias[1].especialidade}`)