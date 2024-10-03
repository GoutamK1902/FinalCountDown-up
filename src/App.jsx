import "./styles.css";
import CountDown from "./components/countDown/CountDown";
import ParticleRing from "./components/ParticleRing";

export default function App() {
  return (
    <div className="App">
      <CountDown startFrom={3} />
      <ParticleRing />
    </div>
  );
}
