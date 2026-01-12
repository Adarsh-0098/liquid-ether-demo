import LiquidEther from "./LiquidEther";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      {/* Background */}
      <div className="bg">
        <LiquidEther
          mouseForce={37}
          cursorSize={160}
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          autoDemo={true}
          resolution={0.6}
        />
        <div className="vignette" />
        <div className="grain" />
      </div>

      {/* Foreground UI */}
      <div className="content">
        <div className="navbar">
          <div className="navbar-brand">LiquidEther</div>
          
          <div className="navbar-tabs">
            <a href="#" className="tab">Home</a>
            <a href="#" className="tab">Features</a>
            <a href="#" className="tab">Docs</a>
            <a href="#" className="tab">Gallery</a>
            <a href="#" className="tab">Contact</a>
          </div>

          <div className="navbar-right">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <button className="navbar-btn">Sign In</button>
          </div>
        </div>

        <div className="hero">
          <div className="badge">✨ New Background</div>

          <h1>The web, made fluid at your fingertips.</h1>

          <div className="buttons">
            <button className="btn primary">Get Started</button>
            <button className="btn ghost">Learn More</button>
          </div>
        </div>

        <div className="footer">
          <span>Demo Content</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider" />
          </label>
        </div>
      </div>
    </div>
  );
}
