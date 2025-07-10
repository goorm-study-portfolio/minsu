import { keyframes } from "@emotion/react";
import { useRef } from "react";
import { useInView } from "@home/feature/hooks/useInView.ts";
import { Github, Star } from "lucide-react";
import styled from "@emotion/styled";

/*const blogPosts = [
  {
    title: "React 성능 최적화 방법",
    description: "React 애플리케이션의 성능을 향상시키는 다양한 방법에 대해 알아봅니다.",
    link: "#",
  },
  {
    title: "React의 Batch 업데이트",
    description: "React에서의 배치 작업에 대해 설명합니다.",
    link: "https://velog.io/@tnalxmsk/React%EC%9D%98-Batch-2",
  },
  {
    title: "Hilt를 활용한 의존성 주입",
    description: "Hilt를 사용하여 Android 애플리케이션에서 의존성 주입을 구현하는 방법.",
    link: "https://velog.io/@tnalxmsk/Hilt",
  },
]*/

const Archiving = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef)

  return (
    <Section id="archiving" ref={sectionRef}>
      <Container>
        <SectionTitle inView={isInView}>Archiving</SectionTitle>

        <ArchiveGrid>
          <GithubCard inView={isInView}>
            <GithubCardLink href="https://github.com/Tnalxmsk" target="_blank" rel="noopener noreferrer">
              <GithubCardHeader>
                <Github size={32} />
                <div>
                  <GithubCardTitle>GitHub</GithubCardTitle>
                  <GithubCardDescription>github.com/Tnalxmsk</GithubCardDescription>
                </div>
              </GithubCardHeader>
              <GithubCardContent>
                <p>소스 코드 저장소입니다. 개인 프로젝트와 기여한 오픈소스 프로젝트를 확인할 수 있습니다.</p>
              </GithubCardContent>
            </GithubCardLink>
          </GithubCard>
          <GithubCard inView={isInView}>
            <GithubCardLink href="https://velog.io/@tnalxmsk/posts" target="_blank" rel="noopener noreferrer">
              <GithubCardHeader>
                <Star size={32} />
                <div>
                  <GithubCardTitle>Velog</GithubCardTitle>
                  <GithubCardDescription>velog.io/@tnalxmsk/posts</GithubCardDescription>
                </div>
              </GithubCardHeader>
              <GithubCardContent>
                <p>개발 관련 내용을 정리한 블로그입니다. Android, JavaScript, React 와 관련한 글을 작성하였습니다.</p>
              </GithubCardContent>
            </GithubCardLink>
          </GithubCard>

          {/*<BlogSection inView={isInView}>
            <BlogTitle>블로그 포스트</BlogTitle>
            <BlogList>
              {blogPosts.map((post, index) => (
                <BlogCard key={index} inView={isInView} delay={index}>
                  <BlogCardLink href={post.link} target="_blank" rel="noopener noreferrer">
                    <BlogCardTitle>{post.title}</BlogCardTitle>
                    <BlogCardDescription>{post.description}</BlogCardDescription>
                  </BlogCardLink>
                </BlogCard>
              ))}
            </BlogList>
          </BlogSection>*/}
        </ArchiveGrid>
      </Container>
    </Section>
  )
}

export default Archiving;

/*const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`*/

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const Section = styled.section`
  padding: 5rem 0 8rem;
  background-color: var(--background-alt);
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

const ArchiveGrid = styled.div`
  display: grid;
  gap: 3rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const GithubCard = styled.div<{ inView: boolean }>`
  background-color: var(--card-background);
  border-radius: 0.5rem;
  border: 2px solid transparent;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  
  animation: ${slideInLeft} 0.6s ease-out forwards;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`

const GithubCardLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`

const GithubCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.5rem 0.5rem;
`

const GithubCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-color);
`

const GithubCardDescription = styled.p`
  color: var(--text-muted);
  font-size: 0.875rem;
  margin: 0;
`

const GithubCardContent = styled.div`
  padding: 0.5rem 1.5rem 1.5rem;
  
  p {
    color: var(--text-color);
    margin: 0;
  }
`

/*const BlogSection = styled.div<{ inView: boolean }>`
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 0.3s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};
`

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-color);
`

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`*/

/*const BlogCard = styled.div<{ inView: boolean; delay: number }>`
  background-color: var(--card-background);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${(props) => 0.5 + props.delay * 0.2}s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`*/
/*
const BlogCardLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`

const BlogCardTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`

const BlogCardDescription = styled.p`
  color: var(--text-muted);
  font-size: 0.875rem;
  margin: 0;
`*/
