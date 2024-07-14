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
                    <li className="list"><a href="#">Tópicos</a></li>
                    <li className="list"><a href="#">Referências</a></li>
                    <li className="list"><a href="#">Perguntas</a></li>
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