import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import VehiclesVente from "@/components/VehiclesVente";
import VehiclesLocation from "@/components/VehiclesLocation";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <VehiclesVente />
      <VehiclesLocation />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
