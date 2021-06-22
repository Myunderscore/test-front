import "./App.css";
import LogoJoovence from "./assets/joovence-logo.png";

function App() {
  return (
    <div>
      <header className="header">
        <img src={LogoJoovence} className="logo" alt="logo" />
        <h1>Bookings</h1>
      </header>
    </div>
  );
}

export default App;
