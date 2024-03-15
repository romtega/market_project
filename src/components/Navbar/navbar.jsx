import { useState } from "react";

import "./navbar.css";

function Navbar({ handleAddItems }) {
  const [navbarSearch, setNavbarSearch] = useState("");

  const handleInput = (e) => {
    setNavbarSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!navbarSearch) return;
    console.log(navbarSearch);
    handleAddItems(navbarSearch);
    setNavbarSearch("");
  };

  return (
    <nav className="navbar flex bg-primary">
      <ul
        className="navbar__categories flex text-white fs-200 fw-4 letter-spacing-3"
        role="list"
      >
        <li className="navbar__item">
          <div className="navbar__logo">
            <a href="#">Logo</a>
          </div>
        </li>
        <li className="navbar__item">
          <a href="">Mas Buscados</a>
        </li>
        <li className="navbar__item">
          <a href="">Categorias</a>
        </li>
        <li className="navbar__item">
          <a href="">Sobre nosotros</a>
        </li>
        <li className="navbar__item">
          <a href="">Contacto</a>
        </li>
      </ul>
      <ul className="navbar__user flex" role="list">
        <li className="navbar__search bg-white">
          <form className="navbar__form flex" onSubmit={handleSubmit}>
            <input
              className="navbar__input"
              type="text"
              placeholder="Buscar un producto"
              value={navbarSearch}
              onChange={handleInput}
            />
            <button type="submit" className="navbar__btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </li>
        <li className="navbar__icon bg-white">
          <i className="fa-regular fa-user d-block"></i>
        </li>
        <li className="navbar__icon bg-white">
          <i className="fa-regular fa-heart d-block"></i>
        </li>
        <li className="navbar__icon bg-white">
          <i className="fa-solid fa-cart-shopping d-block"></i>
        </li>
        <li className="navbar__total text-white uppercase">Total</li>
      </ul>
    </nav>
  );
}

export default Navbar;
