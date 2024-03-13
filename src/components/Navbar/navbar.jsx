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
      <ul
        className="navbar__categories flex text-white fs-200 fw-4 letter-spacing-3"
        role="list"
      >
        <li className="navbar__item">
          <div className="navbar__logo">Logo</div>
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
              className="navbar__input letter-spacing-3"
              type="text"
              placeholder="Busca un producto"
              value={navbarSearch}
              onChange={handleInput}
            />
            <button type="submit" className="navbar__btn bg-secondary">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </li>
        <li className="navbar__icon bg-accent">
          <i className="fa-regular fa-user d-block"></i>
        </li>
        <li className="navbar__icon bg-accent">
          <i className="fa-regular fa-heart d-block"></i>
        </li>
        <li className="navbar__icon bg-accent">
          <i className="fa-solid fa-cart-shopping d-block"></i>
        </li>
        <li className="navbar__total text-white uppercase">Total</li>
      </ul>
    </nav>
  );
}

export default Navbar;
