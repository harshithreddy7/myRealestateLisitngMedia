import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/pages/home";
//import Features from "./components/pages/features";
import About from "./components/pages/about";
import Client from "./components/pages/clients";
import Service from "./components/pages/service";
import Contact from "./components/pages/contact";
//import Demo from "./components/pages/demo";
import Packages from "./components/pages/packages";

import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />    
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
