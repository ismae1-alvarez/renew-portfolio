import { Fragment, useEffect, useState } from "react"
import { About, Contact, Header, Projects, Services } from "./components"

function App() {
  const [theme, setTheme] = useState<string>(()=> {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
      return "dark"
    }
    return "light"
  })

  useEffect(()=>{
    if(theme === "dark"){
      document.querySelector('html')?.classList.add("dark");
    }else{
      document.querySelector('html')?.classList.remove("dark");
    }
  },[theme])


  return (
    <Fragment>
      <Header setTheme={setTheme}/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
    </Fragment>
  )
}
export default App
