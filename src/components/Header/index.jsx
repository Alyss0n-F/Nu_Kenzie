import { Button } from "../Button"

export function Header({ logoNuKenzie, setPage, page }) {
  return (
    <nav>
      <img src={logoNuKenzie} alt="" />
      <Button setPage={setPage} page={page} />
    </nav>
  )
}
