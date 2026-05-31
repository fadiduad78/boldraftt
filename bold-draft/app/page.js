import Background from "@/components/Background";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <SmoothScroll />
      <Cursor />
      <Loader />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
