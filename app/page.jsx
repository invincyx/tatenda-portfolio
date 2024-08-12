import Intrro from "@/components/Intrro";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="">

        <NavBar />
        <Intrro />
        <About />
        <Services />
        <Portfolio />
        <Contact />


    </main>
  );
}
