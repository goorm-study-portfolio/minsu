import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useInView } from "@home/feature/hooks/useInView.ts";

const skillCategories = [
  {
    title: "Language",
    skills: ["TypeScript", "JavaScript", "Kotlin"],
  },
  {
    title: "Front",
    skills: [
      "React",
      "styled-components",
      "Zustand",
      "TanstackQuery",
      "Redux-toolkit",
      "React-Hook-Form",
      "Zod",
      "WebView",
    ],
  },
  {
    title: "Android",
    skills: ["DataBinding", "Flow", "Hilt", "Retrofit", "Coroutine", "DataStore", "ViewModel"],
  },
  {
    title: "DevOps",
    skills: ["AWS", "Vercel"],
  },
]

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <Section id="skills" ref={sectionRef}>
      <Container>
        <SectionTitle inView={isInView}>Skills</SectionTitle>
        <SkillGrid>
          {skillCategories.map((skillCategory, index) => (
            <SkillCard key={index} inView={isInView} delay={index * 150}>
              <SkillCardTitle>{skillCategory.title}</SkillCardTitle>
              <SkillList>
                {skillCategory.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillGrid>
      </Container>
    </Section>
  )
}

export default Skills;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Section = styled.section`
  padding: 5rem 0 8rem;
  background-color: var(--background-color);
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const SectionTitle = styled.h2<{ inView: boolean }>`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-color);
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: translateY(${(props) => (props.inView ? 0 : "20px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`

const SkillGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const SkillCard = styled.div<{ inView: boolean; delay: number }>`
  background-color: var(--card-background);
  border-radius: 0.5rem;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  opacity: 0;
  
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.delay}ms;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};
`

const SkillCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
`

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--text-color);
  
  &:before {
    content: "";
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: 0.5rem;
  }
`
