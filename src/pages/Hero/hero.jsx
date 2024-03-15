import "./hero.css";

function Hero() {
  return (
    <section className="hero grid bg-accent">
      <div className="hero__img">
        <img src="./src/assets/react.svg" alt="" />
      </div>
      <div className="hero__cta grid">
        <h1 className="hero__title uppercase fs-900">un titulo central</h1>
        <p className="hero__description fs-300"></p>

        <button className="hero__btn flex bg-primary text-white letter-spacing-2 fw-2">
          Bienvenido
          <i className="fa-solid fa-circle-chevron-right"></i>
        </button>
      </div>
      <div className="hero__img">
        <img src="./src/assets/react.svg" alt="" />
      </div>
    </section>
  );
}

export default Hero;
