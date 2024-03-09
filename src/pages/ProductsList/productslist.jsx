import "./productslist.css";

function ProductsList() {
  return (
    <section className="products">
      <div className="container">
        <div className="products__sort">Filtrar por...</div>
      </div>
      <div className="products__grid">
        <div className="products__item">1</div>
        <div className="products__item">2</div>
        <div className="products__item">3</div>
        <div className="products__item">4</div>
        <div className="products__item">5</div>
        <div className="products__item">6</div>
      </div>
    </section>
  );
}

export default ProductsList;
