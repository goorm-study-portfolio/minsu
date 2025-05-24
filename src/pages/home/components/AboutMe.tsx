import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { useInView } from "@home/feature/hooks/useInView.ts";

const questions = [
  {
    question: "왜 개발을 시작하셨나요?",
    answer:
      "기술을 통해 실생활의 문제를 해결하는 과정에 매력을 느껴 개발을 시작했습니다. 아이디어를 현실로 구현하는 과정이 항상 저에게 큰 성취감을 줍니다.",
  },
  {
    question: "어떤 것을 잘하시나요?",
    answer:
      "사용자 경험을 최우선으로 생각하는 UI/UX 개발과 복잡한 문제를 단순화하여 효율적인 해결책을 찾는 것에 강점이 있습니다.",
  },
  {
    question: "개발자로서의 가치관은 무엇인가요?",
    answer:
      "지속적인 학습과 성장을 통해 더 나은 코드를 작성하고, 협업을 통해 함께 발전하는 것을 중요하게 생각합니다. 사용자에게 실질적인 가치를 제공하는 서비스를 만드는 것이 목표입니다.",
  },
];

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef)

  return (
    <Section id={"about"} ref={sectionRef}>
      <Container>
        <SectionTitle inView={isInView}>About Me</SectionTitle>
        <CardGrid>
          {questions.map((item, index) => (
            <Card key={index} inView={isInView} delay={index * 200}>
              <CardTitle>{item.question}</CardTitle>
              <CardContent>{item.answer}</CardContent>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </Section>
  );
};

export default AboutMe;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 5rem 0 8rem;
  background-color: var(--background-alt);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

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
`;

const CardGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div<{ inView: boolean; delay: number }>`
  background-color: var(--card-background);
  border-radius: 0.5rem;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;

  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.delay}ms;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CardContent = styled.p`
  color: var(--text-muted);
  line-height: 1.6;
`;
