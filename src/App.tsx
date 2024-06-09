import { Fragment } from "react"
import { About, Contact, Header, Projects, Services } from "./components"

function App() {
  return (
    <Fragment>
      <Header/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
    </Fragment>
  )
}
export default App
