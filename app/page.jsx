import Intrro from "@/components/Intrro";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="">

        <NavBar />
        <Intrro />
        <About />
        <Services />
        <Portfolio />


    </main>
  );
}
