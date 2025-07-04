import Header from "@home/components/Header.tsx";
import Hero from "@home/components/Hero.tsx";
import AboutMe from "@home/components/AboutMe.tsx";
import Skills from "@home/components/Skills.tsx";
import Archiving from "@home/components/Archiving.tsx";
import Projects from "@home/components/Projects.tsx";
import FloatingButton from "@home/components/FloatingButton.tsx";
import Experience from "@home/components/Experience.tsx";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Archiving />
      <Projects />
      <FloatingButton />
    </>
  );
};

export default HomePage;
