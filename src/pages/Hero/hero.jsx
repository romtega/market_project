import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__img">
          <img src="#" alt="" />
        </div>
        <div className="hero__cta">
          <div className="hero__cta--title">Titulo</div>
          <div className="hero__cta--description">Lorem ipsum dolor</div>
          <div className="hero__cta--btn">
            <button>Bienvenido</button>
          </div>
        </div>
        <div className="hero__img">
          <img src="#" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
