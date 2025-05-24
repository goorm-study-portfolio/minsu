import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRef, useState } from "react";
import { useInView } from "../feature/hooks/useInView";
import { ExternalLink, Github, X } from "lucide-react";
import IcPlaceHolder from "@icon/ic-placeholder.svg";

const projects: Project[] = [
  {
    id: 1,
    title: "프로젝트 1",
    description: "반응형 웹 애플리케이션",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "TypeScript", "Emotion"],
    summary: "사용자 경험을 개선하기 위한 반응형 웹 애플리케이션 개발 프로젝트입니다.",
    features: ["사용자 인증 및 권한 관리", "실시간 데이터 업데이트", "반응형 UI 구현"],
    contribution: "프론트엔드 개발 100%, UI/UX 디자인 참여",
    githubLink: "https://github.com",
    demoLink: "https://example.com",
    lessons: "컴포넌트 재사용성과 성능 최적화의 중요성을 배웠습니다.",
  },
  {
    id: 2,
    title: "프로젝트 2",
    description: "모바일 앱 개발",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["Kotlin", "Android", "Retrofit"],
    summary:
      "안드로이드 네이티브 앱 개발 프로젝트로, 사용자 친화적인 인터페이스와 효율적인 데이터 처리에 중점을 두었습니다.",
    features: ["오프라인 모드 지원", "푸시 알림 기능", "데이터 동기화"],
    contribution: "안드로이드 개발 100%, API 연동 및 데이터 처리",
    githubLink: "https://github.com",
    lessons: "비동기 프로그래밍과 상태 관리의 중요성을 배웠습니다.",
  },
  {
    id: 3,
    title: "프로젝트 3",
    description: "데이터 시각화 대시보드",
    thumbnail: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "D3.js", "Redux"],
    summary: "복잡한 데이터를 직관적으로 시각화하는 대시보드 개발 프로젝트입니다.",
    features: ["실시간 데이터 시각화", "사용자 정의 필터링", "데이터 내보내기 기능"],
    contribution: "프론트엔드 개발 80%, 데이터 시각화 구현 100%",
    githubLink: "https://github.com",
    demoLink: "https://example.com",
    lessons: "대용량 데이터 처리와 렌더링 최적화 기법을 습득했습니다.",
  },
];

type Project = {
  id: number
  title: string
  description: string
  thumbnail: string
  technologies: string[]
  summary: string
  features: string[]
  contribution: string
  githubLink: string
  demoLink?: string
  lessons: string
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  return (
    <Section id="projects" ref={sectionRef}>
      <Container>
        <SectionTitle inView={isInView}>Projects</SectionTitle>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} onClick={() => openModal(project)} inView={isInView} delay={index}>
              <ProjectImageWrapper>
                <img
                  src={IcPlaceHolder}
                  alt={project.title}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </ProjectImageWrapper>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechList>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechList>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>

        <ModalOverlay isOpen={!!selectedProject} onClick={closeModal}>
          {selectedProject && (
            <ModalContent isOpen={!!selectedProject} onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>
                <X size={20} />
              </CloseButton>

              <ModalHeader>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalSubtitle>{selectedProject.description}</ModalSubtitle>
              </ModalHeader>

              <ModalBody>
                <ModalImageWrapper>
                  <img
                    src={IcPlaceHolder}
                    alt={selectedProject.title}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </ModalImageWrapper>

                <ModalSection>
                  <ModalSectionTitle>프로젝트 요약</ModalSectionTitle>
                  <ModalText>{selectedProject.summary}</ModalText>
                </ModalSection>

                <ModalSection>
                  <ModalSectionTitle>주요 기능</ModalSectionTitle>
                  <ModalList>
                    {selectedProject.features.map((feature, index) => (
                      <ModalListItem key={index}>{feature}</ModalListItem>
                    ))}
                  </ModalList>
                </ModalSection>

                <ModalSection>
                  <ModalSectionTitle>기여도 및 역할</ModalSectionTitle>
                  <ModalText>{selectedProject.contribution}</ModalText>
                </ModalSection>

                <ModalSection>
                  <ModalSectionTitle>배운 점</ModalSectionTitle>
                  <ModalText>{selectedProject.lessons}</ModalText>
                </ModalSection>

                <ButtonGroup>
                  <PrimaryButton href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    GitHub
                  </PrimaryButton>

                  {selectedProject.demoLink && (
                    <SecondaryButton href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </SecondaryButton>
                  )}
                </ButtonGroup>
              </ModalBody>
            </ModalContent>
          )}
        </ModalOverlay>
      </Container>
    </Section>
  );
};

export default Projects;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Section = styled.section`
  padding: 5rem 0 8rem;
  background-color: var(--background-color);
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

const ProjectGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div<{ inView: boolean; delay: number }>`
  background-color: var(--card-background);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${(props) => props.delay * 0.2}s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImageWrapper = styled.div`
  position: relative;
  height: 12rem;
  width: 100%;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const ProjectDescription = styled.p`
  color: var(--text-muted);
  margin-bottom: 1rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
`;

// Modal styles
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 1rem;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  background-color: var(--card-background);
  border-radius: 0.5rem;
  width: 100%;
  max-width: 48rem;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  animation: ${scaleIn} 0.3s ease-out forwards;
  animation-play-state: ${(props) => (props.isOpen ? "running" : "paused")};
`;

const ModalHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-color);
`;

const ModalSubtitle = styled.p`
  color: var(--text-muted);
  font-size: 1rem;
`;

const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ModalImageWrapper = styled.div`
  position: relative;
  height: 16rem;
  width: 100%;
  border-radius: 0.375rem;
  overflow: hidden;
`;

const ModalSection = styled.div`

`;

const ModalSectionTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const ModalText = styled.p`
  color: var(--text-muted);
  line-height: 1.6;
`;

const ModalList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: var(--text-muted);
  line-height: 1.6;
`;

const ModalListItem = styled.li`
  margin-bottom: 0.25rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-color);

  &:hover {
    background-color: var(--hover-color);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 9999px;

  &:hover {
    background-color: var(--hover-color);
    color: var(--text-color);
  }
`;
