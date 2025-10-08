import Header from "@home/components/Header.tsx";
import Hero from "@home/components/Hero.tsx";
import { lazy, Suspense } from "react";
import FloatingButton from '@home/components/FloatingButton.tsx';
import { LoaderCircle } from "lucide-react";

const AboutMe = lazy(() => import('@home/components/AboutMe.tsx'));
const Skills = lazy(() => import('@home/components/Skills.tsx'));
const Experience = lazy(() => import('@home/components/Experience.tsx'));
const Archiving = lazy(() => import('@home/components/Archiving.tsx'));
const Projects = lazy(() => import('@home/components/Projects.tsx'));


const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<LoaderCircle color="#10b981" />}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<LoaderCircle color="#10b981" />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoaderCircle color="#10b981" />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoaderCircle color="#10b981" />}>
        <Archiving />
      </Suspense>
      <Suspense fallback={<LoaderCircle color="#10b981" />}>
        <Projects />
      </Suspense>
      <FloatingButton />
    </>
  );
};

export default HomePage;
