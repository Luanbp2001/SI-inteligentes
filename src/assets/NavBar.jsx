import './NavBar.css'
function NavBar (){
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
                <div className="menu">
                <i class="bi bi-list"></i>
                </div>
            </nav>
        </header>
        </>
    )
}
export default NavBar