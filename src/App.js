import { useState } from "react"
import { Form } from "./components/Form"
import { List } from "./components/List"
import { Total } from "./components/Total"
import { Header } from "./components/Header"
import { HomePage } from "./components/HomePage"
import mainPicture from "./assets/landing_page_main_picture.svg"
import logoNuKenzie from "./assets/Nu Kenzie.svg"
import logoNuKenzieHeader from "./assets/Nu Kenzie_header.svg"
import emptyList from "./assets/empty_list.svg"
import trashButton from "./assets/trash.svg"
import "./styles/globalStyles.css"
import "./components/HomePage/style.css"
import "./components/Button/style.css"
import "./components/Header/style.css"
import "./components/Form/style.css"
import "./components/Input/style.css"
import "./components/Select/style.css"
import "./components/Total/style.css"
import "./components/List/style.css"
import "./components/Card/style.css"

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saída", value: -150 },
  ])

  const [page, setPage] = useState(true)

  function handleCard(removedCard) {
    setListTransactions(
      listTransactions.filter((transaction) => transaction !== removedCard)
    )
  }

  return (
    <div className="App">
      {page ? (
        <HomePage
          logoNuKenzie={logoNuKenzie}
          setPage={setPage}
          page={page}
          mainPicture={mainPicture}
        />
      ) : (
        <div>
          <Header
            logoNuKenzie={logoNuKenzieHeader}
            setPage={setPage}
            page={page}
          />
          <div className="page_container">
            <div className="form_total_container">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <Total listTransactions={listTransactions} />
            </div>
            <List
              listTransactions={listTransactions}
              emptyList={emptyList}
              handleCard={handleCard}
              trashButton={trashButton}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
