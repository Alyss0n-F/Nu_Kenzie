export function Select({ setEntry }) {
  return (
    <>
      <select onChange={(event) => setEntry(event.target.value)} id="entry">
        <option value="">Selecione o tipo</option>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
    </>
  )
}
