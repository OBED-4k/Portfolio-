import Hero from "../sections/Hero";
import NavBar from "../components/layout/NavBar";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/uiComponents/ScrollTop";

export default function HomePage() {
  return (
    <div className="bg-linear-to-r from-[#071748] via-[#0A0A0F] to-[#301020] min-h-screen text-white">
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
