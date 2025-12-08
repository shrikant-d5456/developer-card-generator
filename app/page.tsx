import type { Metadata } from "next";
import HeroSection from "./components/shared/HeroSection";
import Footer from "./components/shared/Footer";
import TipsFAQAndMore from "./components/shared/TipsFAQAndMore";
import Home from "./home/Home";


export default function Page() {
  return (
    <main className=" w-full bg-black ">
      <header className="w-full">
        <HeroSection />
      </header>
      <section className=" w-full py-20"    >
        <Home />
      </section>
      <TipsFAQAndMore />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
