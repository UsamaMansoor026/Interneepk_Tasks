import "./App.css";
import { logos } from "./assets/assets";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
