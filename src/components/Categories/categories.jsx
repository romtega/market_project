import "./categories.css";

function Categories() {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories__list">
          <div className="categories__item">1</div>
          <div className="categories__item">2</div>
          <div className="categories__item">3</div>
          <div className="categories__item">4</div>
        </div>
        <div className="categories__text">
          <div className="categories__title">Un producto</div>
          <div className="categories__img">Una imagen de referencia</div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
