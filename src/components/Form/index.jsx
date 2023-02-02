import { useState } from "react"
import { Input } from "../Input"

export function Form({ listTransactions, setListTransactions }) {
  const [value, setValue] = useState("")
  const [description, setDescription] = useState("")
  const [entry, setEntry] = useState("")

  function handleForm(event) {
    event.preventDefault()

    console.log(value)
    if (value === "" || value === 0) {
      alert("Insira um valor válido")
    } else if (description === "") {
      alert("Insira uma descrição")
    } else if (entry === "") {
      alert("Selecione o tipo do valor")
    } else {
      setListTransactions([
        ...listTransactions,
        { value, description, type: entry },
      ])
    }
  }

  return (
    <form onSubmit={handleForm}>
      <Input
        setValue={setValue}
        setDescription={setDescription}
        setEntry={setEntry}
      />
      <button className="value_button" type="submit">
        Inserir valor
      </button>
    </form>
  )
}
