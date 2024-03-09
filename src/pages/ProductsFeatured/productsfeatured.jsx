import "./productsfeatured.css";

function ProductsFeatured() {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured__title">Lo mas buscados...</div>
        <div className="featured__list">
          <div className="featured__item">item 1</div>
          <div className="featured__item">item 2</div>
          <div className="featured__item">item 3</div>
          <div className="featured__item">item 4</div>
        </div>
      </div>
    </section>
  );
}

export default ProductsFeatured;
