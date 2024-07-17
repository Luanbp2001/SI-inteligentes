import React from 'react'
import './Toogle.css'
export default function Toogle({isOpen,setOpenNav}) {

        if(isOpen){
            return (
                <>
                <div className="menu_mobile" onClick={setOpenNav}>
                <ul>
                    <li><a href="">Topicos</a></li>
                    <li><a href="#referencias">Referencias</a></li>
                    <li><a href="#perguntas">Perguntas</a></li>
                </ul>
                </div>
                </>
            )
        }
        return null
}
