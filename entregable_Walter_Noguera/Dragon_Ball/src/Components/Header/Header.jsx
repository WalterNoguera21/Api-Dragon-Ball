import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://static.vecteezy.com/system/resources/previews/022/788/340/non_2x/son-goku-in-dragon-ball-free-vector.jpg" alt="Logo React And Morty" />
        <h1>Dragon Ball Z API</h1>
        <p>Characters</p>
        <NavBar/>
    </header>
  )
}

export default Header