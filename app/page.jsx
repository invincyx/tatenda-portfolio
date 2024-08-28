import Intrro from "@/components/Intrro";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import PortfolioV2 from "@/components/PortfolioV2";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
        <NavBar />
        <section id="intrro"><Intrro /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        {/* <section id="port"><PortfolioV2 /></section> */}
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><Contact /></section>
        <section id="footer"><Footer /> </section>
    </main>
  );
}