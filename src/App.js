import Header from "./components/Header";
import Acca from "./components/Acca";
import ChooseUs from "./components/ChooseUs";
import Eligibility from "./components/Eligibility";
import Placement from "./components/Placement";
import Journey from "./components/Journey";
import Learn from './components/Learn';
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Acca />
      <ChooseUs />
      <Eligibility />
      <Learn />
      <Placement />
      <Journey />
    </div>
  );
}

export default App;
