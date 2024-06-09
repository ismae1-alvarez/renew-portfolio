import { useState } from "react"

export const NavBar = () => {
    const [menu, setMenu] = useState<boolean>(false)
    console.log(menu)
  return (
    <nav className="flex items-center justify-between">
        <h2 className="z-10">Ismael</h2>

        <div className="flex items-center gap-5">   
        <p  onClick={()=> setMenu(!menu)} className="z-10 md:hidden flex" >menu</p>

        <div className={`md:flex flex-nowrap md:relative absolute w-full md:w-auto transition-transform md:gap-5  left-0 md:pt-0 pt-14 duration-300 ease-linear  md:translate-y-0 md:bg-transparent  ${
        menu 
            ? "translate-y-0  h-full w-full top-0 bg-white" 
            : "-translate-y-full"
        }`}>
            <ul className="md:flex grid items-center gap-10">
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <button className="bg-dark-first-color rounded-xl px-5 py-2 text-white font-bold w-full md:w-fit md:mt-0 mt-5">Dark mode</button>
            <button className="bg-dark-first-color rounded-xl px-5 py-2 text-white font-bold w-full md:w-fit md:mt-0 mt-5">
                Download CV
            </button>
        </div>
        </div>
    </nav>
  )
}