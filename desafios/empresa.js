// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa

const objeto = {
  nome: 'Maxwel',
  idade: 25,
  sexo: 'M',

  empresa: {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',

    endereco: {
      rua: 'Rua Guilherme Gembala',
      numero: 260
    }
  }
}

console.log(`${objeto.nome} tem ${objeto.idade} anos de idade e está fazendo um curso na empresa ${objeto.empresa.nome} que está localizada em ${objeto.empresa.endereco.rua}, ${objeto.empresa.endereco.numero}`)