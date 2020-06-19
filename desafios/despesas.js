// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo

const usuarios = [{
  nome: 'Maxwel Silva',
  receitas: [100, 20, 80],
  despesas: [50, 15]
},
{
  nome: 'Paulo Oliveira',
  receitas: [200, 100, 300],
  despesas: [50, 300]
},
{
  nome: 'Guilherme Andrade',
  receitas: [300, 200, 200],
  despesas: [40, 160]
},
{
  nome: 'Vanessa Lima',
  receitas: [800, 300, 560],
  despesas: [1000, 2300]
}]

function calculaSaldo(receitas, despesas) {
  const somaReceitas = somaNumeros(receitas)
  const somaDespesas = somaNumeros(despesas)

  return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
  let soma = 0

  for (let numero of numeros) {
    soma = soma + numero
  }
  return soma
}

for (let usuario of usuarios) {
  const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

  if (saldo > 0) {
    console.log(`Cliente: ${usuario.nome}\nSaldo: ${saldo.toFixed(2)}\n`)

  } else {
    console.log(`Cliente: ${usuario.nome}\nSaldo: ${saldo.toFixed(2)}\n`)
  }
}