import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { CTF } from "@/components/ctf";
import { Contact } from "@/components/contact";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Certifications />
      <About />
      <Skills />
      <CTF />
      <Contact />
      <Footer />
    </main>
  );
}
