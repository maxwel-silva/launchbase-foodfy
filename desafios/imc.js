const pessoas = [
  {
    nome: 'Carlos',
    peso: 40,
    altura: 1.88
  },

  {
    nome: 'Vanessa',
    peso: 122,
    altura: 1.62
  },
]

function calcularPeso(pessoa) {
  return (pessoa.peso / (pessoa.altura * pessoa.altura))
 
}

const mediaIMC0 = calcularPeso(pessoas[0])
const mediaIMC1 = calcularPeso(pessoas[1])

function enviarMensagem(pessoa, imc) {

  if (imc >= 30) {
    console.log(`Nome: ${pessoa} \nIMC: ${imc} \nMensagem: Você está acima do peso`)
    
  } else {
    console.log(`Nome: ${pessoa} \nIMC: ${imc} \nMensagem: Você não está acima do peso\n`)
  }
}

enviarMensagem(pessoas[0].nome, mediaIMC0.toFixed(4))
enviarMensagem(pessoas[1].nome, mediaIMC1.toFixed(4))
