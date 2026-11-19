import { profile } from "../data";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-top reveal">
        <span className="status">
          <span className="pulse-dot" /> Open to data analytics roles
        </span>
        <span className="hero-loc">{profile.location}, Australia</span>
      </div>

      <h1 className="hero-title reveal">
        Turning raw data into <em>clear</em> answers.
      </h1>

      <div className="hero-bottom">
        <p className="hero-lead reveal">
          I'm {profile.firstName}, an IT student at Charles Darwin University working
          with Python, SQL and machine learning to build predictive models and
          make sense of messy datasets.
        </p>
        <div className="hero-actions reveal">
          <a href="#projects" className="btn btn-dark">
            Explore projects <span aria-hidden="true">↓</span>
          </a>
          <a href={profile.github} className="btn btn-ghost" target="_blank" rel="noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <span key={k}>
              Python ✦ SQL ✦ Pandas ✦ NumPy ✦ scikit-learn ✦ Matplotlib ✦ Seaborn ✦
              Streamlit ✦ Jupyter ✦ React ✦ Excel ✦&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
