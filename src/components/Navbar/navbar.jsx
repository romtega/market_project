import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo</div>
      <ul className="navbar__categories">
        <li className="navbar__item">Mas Buscados</li>
        <li className="navbar__item">Categorias</li>
        <li className="navbar__item">Sobre nosotros</li>
        <li className="navbar__item">Contacto</li>
      </ul>
      <ul className="main-navbar__user">
        <li className="navbar__search">
          <input type="text" placeholder="Busca un producto" />
        </li>
        <li className="navbar__login">Icono de usuario</li>
        <li className="navbar__fav">Icono de corazon</li>
        <li className="navbar__cart">Icono de carrito</li>
        <li className="navbar__total">Total</li>
      </ul>
    </nav>
  );
}

export default Navbar;
