import { Container } from "@/components/Container";
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      {/* ── Banner ── swap src="/your-banner.jpg" to use your own image */}
      <Banner src ="/banner.jpg"/>
      <Container>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </Container>
    </main>
  );
}
