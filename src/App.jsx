import "./styles.css";
import CountDown from "./components/countDown/CountDown";
import ParticleRing from "./components/ParticleRing";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <CountDown startFrom={3} />
      <ParticleRing />
    </div>
  );
}
