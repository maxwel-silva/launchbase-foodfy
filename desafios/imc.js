// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa

const pessoas = [
  {
    nome: 'Carlos',
    peso: 40,
    altura: 1.88
  }
]

function calcularPeso(pessoa) {
  return (pessoa.peso / (pessoa.altura * pessoa.altura))
}

const mediaIMC = calcularPeso(pessoas[0])

function enviarMensagem(pessoa, imc) {

  if (imc >= 30) {
    console.log(`Nome: ${pessoa} \nIMC: ${imc} \nMensagem: Você está acima do peso`)
    
  } else {
    console.log(`\nNome: ${pessoa} \nIMC: ${imc} \nMensagem: Você não está acima do peso\n`)
  }
}

enviarMensagem(pessoas[0].nome, mediaIMC.toFixed(4))

