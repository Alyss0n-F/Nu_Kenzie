import { Card } from "../Card"

export function List({ listTransactions, emptyList, handleCard, trashButton }) {
  return (
    <ul>
      {listTransactions.length <= 0 ? (
        <img src={emptyList} alt="" />
      ) : (
        listTransactions.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            handleCard={handleCard}
            trashButton={trashButton}
          />
        ))
      )}
    </ul>
  )
}
