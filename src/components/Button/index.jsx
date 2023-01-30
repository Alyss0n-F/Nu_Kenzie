export function Button({ setPage, page }) {
  return (
    <button
      className={page ? "initial_button" : "header_button"}
      onClick={() => setPage(!page)}
    >
      Inicio
    </button>
  )
}
