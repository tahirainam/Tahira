
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/index.css';
import './css/App.css';
import "./css/style.css";
import "./css/responsive.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
