import "./App.css";
import Advertisiment from "./components/Advertisiment";
import Cards from "./components/Cards";
import NavbarComponent from "./components/navbar";

function App() {
  return (
    <div className="App">
      <header className="nav">
        <NavbarComponent />
      </header>
      <section id="about">
        <Advertisiment />
      </section>
      <section id="projects">
        <Cards />
      </section>
      <section id="blog">BLOG</section>
      <section id="contact">CONTACT ME</section>
    </div>
  );
}

export default App;
