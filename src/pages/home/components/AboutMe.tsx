import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { useInView } from "@home/feature/hooks/useInView.ts";
import { fetchAboutMe, useGetAboutMe } from "@home/hooks/useGetAboutMe.ts";
import { useQueryClient } from "@tanstack/react-query";

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // 근처 감지를 위한 InView
  const isNearView = useInView(sectionRef, {
    threshold: 0,
    root: null,
    rootMargin: '300px 0px 300px 0px', // 여유를 넉넉히
    once: true,
  });

  // 실제 에니메이션 트리거 InView
  const isInView = useInView(sectionRef, {
    threshold: 0.2,
    root: null,
    rootMargin: '0px 0px -20% 0px',
    once: true,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    if (isNearView) {
      queryClient.prefetchQuery({
        queryKey: ['aboutMe'],
        queryFn: fetchAboutMe,
      });
    }
  }, [isNearView, queryClient]);

  const { data: questions } = useGetAboutMe({
    enabled: isInView,
    staleTime: 1000 * 60 * 3,
    refetchOnWindowFocus: false,
  });

  return (
    <Section id={"about"} ref={sectionRef}>
      <Container>
        <SectionTitle inView={isInView}>About Me</SectionTitle>
        <CardGrid>
          {questions?.map((item, index) => (
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
