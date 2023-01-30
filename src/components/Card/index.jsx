export function Card({ transaction, handleCard, trashButton }) {
  return (
    <div className="li_container">
      <div
        className={
          transaction.type === "Entrada" ? "type_box_green" : "type_box_grey"
        }
      ></div>
      <li>
        <h3>{transaction.description}</h3>
        <p className="type_paragraph">{transaction.type}</p>
        <div className="value_and_button_container">
          <p className="transaction_value">R$ {transaction.value},00</p>
          <img
            className="trash_button"
            src={trashButton}
            alt=""
            onClick={() => handleCard(transaction)}
          />
        </div>
      </li>
    </div>
  )
}
