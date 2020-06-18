// Crie um programa para calcular a aposentadoria de uma pessoa

const pessoa = [
  {
    nome: 'Maxwel Silva',
    idade: 63,
    sexo: 'M',
    contribuicao: 35
  },

  {
    nome: 'Silvana Pereira',
    idade: 48,
    sexo: 'F',
    contribuicao: 23
  }
]

function calcularContribuicao(receber) {
  return calculo = receber.idade + receber.contribuicao
}

const aposentadoria = calcularContribuicao(pessoa[1])

function mensagemAposentadoria(nome, idade, sexo, contribuicao, calculo) {

  const aposentadoriaHomem = (sexo == 'M' && contribuicao >= 35 && calculo >= 95)
  const aposentadoriaMulher = (sexo == 'F' && contribuicao >= 30 && calculo >= 85)

  if (aposentadoriaHomem || aposentadoriaMulher) {
    console.log(`\n Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nMensagem: Você pode se aposentar!`)
    
  } else {
    console.log(`\nNome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nMensagem: Você não pode se aposentar!`)
  }
}

mensagemAposentadoria(pessoa[1].nome, pessoa[1].idade, pessoa[1].sexo)


