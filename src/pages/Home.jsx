import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Capabilities from "../components/Capabilities";
import SelectedWork from "../components/SelectedWork";
import Industries from "../components/Industries";
import WhyUs from "../components/WhyUs";

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080808] text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Capabilities/>
        <Industries/>
        <Experience />
        <SelectedWork/>
        <WhyUs/>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default Home;