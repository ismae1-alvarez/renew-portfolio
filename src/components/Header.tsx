import { Fragment } from "react/jsx-runtime"
import { NavBar } from "./shared/NavBar"


interface Props {
  setTheme : React.Dispatch<React.SetStateAction<string>>
}
export const Header = ({setTheme}:Props) => {
  return (
    <Fragment>
        <header className="dark:text-white">
            <NavBar setTheme={setTheme}/>
        </header>
    </Fragment>
  )
}