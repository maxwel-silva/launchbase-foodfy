// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo

const clientes = [{
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
}
]

for (let i = 0; i < clientes.length; i++) {
  const receitas = clientes[i].receitas.reduce((A, B) => {
    return A + B
  })

  const despesas = clientes[i].despesas.reduce((A, B) => {
    return A + B
  })

  const saldo = receitas - despesas

  if (saldo > 0) {
    console.log(`Cliente: ${clientes[i].nome}\nSaldo: ${saldo.toFixed(2)}\n`)

  } else {
    console.log(`Cliente: ${clientes[i].nome}\nSaldo: ${saldo.toFixed(2)}\n`)
  }
}