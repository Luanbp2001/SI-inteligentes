import { useState } from 'react'
import Toogle from './Toogle'
import './NavBar.css'
function NavBar (){

    const [navOpen, setNavOpen] = useState (false)

    return (
        <>

        <header className="header">
            <div className="logo">
                <h1>
                    SI-inteligentes
                </h1>
            </div>
            <nav className="nav">
                <ul className="nav_list">
                    <li className="list"><a href="#topicos">Tópicos</a></li>
                    <li className="list"><a href="#referencias">Referências</a></li>
                    <li className="list"><a href="#perguntas">Perguntas</a></li>
                </ul>
                <div className="menu" onClick={()=>{
                    setNavOpen(old => !old)
                }}>
                <i class="bi bi-list"></i>
                </div>
            </nav>
        </header>
        <Toogle isOpen ={navOpen} setOpenNav={(old)=>{
            setNavOpen(!old)
        }}/>
        </>
    )
}
export default NavBar