import { Button } from "../Button"

export function HomePage({ logoNuKenzie, setPage, page, mainPicture }) {
  return (
    <main>
      <div className="homepage_info_container">
        <img src={logoNuKenzie} alt="" className="homepage_logo" />
        <p className="homepage_title">
          Centralize o controle das suas finanças
        </p>
        <p className="homepage_headline">de forma rápida e segura</p>
        <Button setPage={setPage} page={page} />
      </div>
      <img className="homepage_mainPicture" src={mainPicture} alt="" />
    </main>
  )
}
