import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Cards from "../../components/Cards";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cards />
      <Testimonials />
      <Footer />
    </>
  );
}
