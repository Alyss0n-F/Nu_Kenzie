export function Total({ listTransactions }) {
  const totalValue = listTransactions.reduce((valorAnterior, valorAtual) => {
    return valorAtual.value + valorAnterior
  }, 0)

  return (
    <div className="total_container">
      <div className="total_title_container">
        <h1 className="total_title">Valor total:</h1>
        <h2>$ {totalValue}</h2>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  )
}
