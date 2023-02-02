import { Select } from "../Select"

export function Input({ setValue, setDescription, setEntry }) {
  return (
    <>
      <label htmlFor="description">Descrição</label>
      <input
        className="input_description"
        type="text"
        placeholder="Digite aqui sua descrição"
        id="description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <small>Ex: Compra de roupas</small>
      <div className="label_container">
        <label htmlFor="value">Valor</label>
        <label htmlFor="entry">Tipo de valor</label>
      </div>
      <div className="value_container">
        <div className="input_and_currency_container">
          <input
            className="input_value"
            type="number"
            placeholder="1"
            id="value"
            onChange={(event) => setValue(Number(event.target.value))}
          />

          <p className="currency_display">R$</p>
        </div>
        <Select setEntry={setEntry} />
      </div>
    </>
  )
}
