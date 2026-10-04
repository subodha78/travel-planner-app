
import './index.css'

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Travel<span>Go.</span></h2>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#explore">Explore</a>
          <a href="#budget">Budget Planner</a>
          <a href="#hotels">Hotels</a>
        </div>
        <button className="login-btn">Login</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tagline">DISCOVER SRI LANKA</p>
          <h1>Explore The World,<br />
            One Trip At A Time.
          </h1>
          <p>
            Plan your journey, manage your budget
            and discover amazing places.
          </p>
          <a href="#explore" className="explore-btn">
            Explore Destinations
          </a>
        </div>
      </section>

      <section className="destinations" id="explore">
        <h2>Popular Destinations</h2>
        <p>Discover beautiful places in Sri Lanka</p>

        <div className="destination-list">
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600" alt="Ella mountains" />
            <h3>Ella</h3>
            <p>Badulla, Sri Lanka</p>
          </div>

          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600" alt="Beach" />
            <h3>Mirissa</h3>
            <p>Matara, Sri Lanka</p>
          </div>

          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600" alt="Mountain" />
            <h3>Haputale</h3>
            <p>Badulla, Sri Lanka</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App