import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [navbarSearch, setNavbarSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!navbarSearch) return;
    console.log("Funciona: ", navbarSearch);
    setNavbarSearch("");
  };

  const handleInput = (e) => {
    setNavbarSearch(e.target.value);
  };

  return (
    <nav className="navbar flex bg-primary">
      <ul className="navbar__categories flex text-white" role="list">
        <li className="navbar__item">
          <div className="navbar__logo">Logo</div>
        </li>
        <li className="navbar__item">Mas Buscados</li>
        <li className="navbar__item">Categorias</li>
        <li className="navbar__item">Sobre nosotros</li>
        <li className="navbar__item">Contacto</li>
      </ul>
      <ul className="navbar__user flex" role="list">
        <li className="navbar__search bg-white">
          <form className="navbar__form" onSubmit={handleSubmit}>
            <input
              className="navbar__input"
              type="text"
              placeholder="Busca un producto"
              value={navbarSearch}
              onChange={handleInput}
            />
            <button type="submit" className="navbar__btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </li>
        <li className="navbar__icon bg-accent">
          <i className="fa-regular fa-user fa-lg"></i>
        </li>
        <li className="navbar__icon bg-accent">
          <i className="fa-regular fa-heart fa-lg"></i>
        </li>
        <li className="navbar__icon bg-accent">
          <i className="fa-solid fa-cart-shopping fa-lg"></i>
        </li>
        <li className="navbar__item">Total</li>
      </ul>
    </nav>
  );
}

export default Navbar;
