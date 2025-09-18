
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "@fontsource/space-grotesk";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/jetbrains-mono";

import gsapAnimation from "./hooks/gsapAnimation";

import "@fortawesome/fontawesome-free/css/all.min.css";
//import './css/index.css';
import './css/App.css';
//import "./css/style.css";
//import "./css/responsive.css";

function App() {
  gsapAnimation();
  return (
    <div className="text-black min-h-screen w-full">
      <Navbar />
      <main className="max-w-5xl mx-auto px-3">
        <Home />
        <About />
        <Projects />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
