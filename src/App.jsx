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
          <div className="brand">React Bits</div>
          <div className="links">
            <a href="#">Home</a>
            <a href="#">Docs</a>
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
