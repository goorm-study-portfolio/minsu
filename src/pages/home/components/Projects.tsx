import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRef, useState } from "react";
import { useInView } from "../feature/hooks/useInView";
import { ExternalLink, Github, X } from "lucide-react";
import ImgMody from "@img//img-mody.png";
import ImgBuddy from "@img/img-buddy.png";
import ImgCohaus from "@img/img-cohaus.png";
import ImgPureum from "@img/img-pureum.png";
import ImgYourMode from "@img/img-yourmode.png";
import ImgStock from "@img/img-stock.png";
import ImgYourModeWeb from "@img/img-yourmode-web.png";
import ImgPortfolio from "@img/img-portfolio.png";

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

const projects: Project[] = [
  {
    id: 1,
    title: "Mody - 내 손 안에 패션 메이트",
    description: "AI 기반 패션 추천 서비스",
    thumbnail: ImgMody,
    technologies: ["React", "TypeScript", "Zustand", "ReactNative", "Styled-Components", "TanstackQuery", "WebView", "React-Hook-Form", "Zod", "Vercel"],
    summary: "OpenAI API룰 활용한 패션 추천 서비스로, 개인 맞춤형 스타일링을 제공합니다.\n사용자의 체형 타입을 3가지로 분류한 후 체형 타입과 선호 스타일 기반으로 맞춤 스타일링을 제공합니다.\n이 과정에서 gpt-4o 모델을 사용해 텍스트를 생성하고\n크롤링 서버를 통해 이미지를 수집한 후 사용자에게 제공합니다.\n커뮤니티는 사용자의 입장을 고려하여, 나와 같은 체형 타입을 가진 사람들의 게시글을\n우선적으로 보여지도록 기획하였습니다.\n데모데이에서 약 100명의 유저 테스트를 진행하였고, 해당 서비스에 대해 만족스럽다는 평가를 받았습니다.",
    features: ["AI 기반 맞춤형 스타일링 추천", "WebView 활용한 모바일 App", "체형 타입 기반 커뮤니티", "커뮤니티, 스타일링 컨텐츠 무한 스크롤"],
    contribution: "아이디어 기획 100%, 프롬프트 설계\n프론트엔드 개발 참여 - 메인 Home 화면 및 스타일링 추천 기능\n프로젝트 FSD 아키텍처 설계 및 프로젝트 세팅, 공통 컴포넌트 추출",
    githubLink: "https://github.com/TeamMody/mody-front",
    demoLink: "https://front.kkoalla.app/",
    lessons: "해결하고 싶은 문제 설정과 사용자 중심의 서비스를 기획하고 개발하는 것의 중요성을 배웠습니다.\n실제 서비스 배포 후 사용자 테스트를 통해 체형 타입 진단과 이미지를 함께 제공하는 스타일링 추천이 만족스럽다는 평가를 가장 많이 받았습니다. 또한, 한 마케팅 회사 대표분께서 체형 타입 기반 커뮤니티 기능으로 나와 같은 체형 타입을 가진 사람들과 소통할 수 있다는 점을 좋게 평가해주셨습니다.\n\n이번 프로젝트를 통해 팀 협업을 위한 아키텍처 및 공통 컴포넌트, 컨벤션 설계와 실제 유저 테스트 및 피드백을 통해 개선해 나가는 과정을 경험할 수 있었습니다.",
  },
  {
    id: 2,
    title: "Buddy - 나만의 든든한 자립 친구",
    description: "자립청년 성장 지원 플랫폼",
    thumbnail: ImgBuddy,
    technologies: ["React", "TypeScript", "Zustand", "Styled-Components", "TanstackQuery", "React-Hook-Form", "Vercel"],
    summary: "자립 준비 청년을 위한 성장 지원 서비스로 아동권리보장원에서 제공하는 영역별 자립 지원 프로그램을 미션 형태로 제공합니다. 미션을 수행한 후 기록을 완료하면 사용자에게 해당 미션에 대한 피드백을 제공합니다.\n이 과정에서 사용자는 자신의 성장 과정을 기록하고, 피드백을 통해 자신의 성장 방향을 설정할 수 있습니다.\n또한 자립 준비 청년의 가장 큰 문제인 정서적 고립 문제를 해결하기 위해 챗봇 기능을 제공합니다.\n4가지 성격 타입 중 하나를 선택하면 해당 성격 타입에 맞는 챗봇과 대화할 수 있습니다.\n한 영역의 미션을 모두 완료할 경우 레벨이 상승하며 다음 영역 미션을 수행할 수 있고, 챗봇 캐릭터가 성장하게 됩니다. 이를 통해 자신의 성장 과정을 시각적으로 확인할 수 있습니다.",
    features: ["자립 영역별 미션 제공", "사용자 맞춤형 챗봇", "자립 준비 청년 지원제도 제공", "미션 수행 기록 및 피드백"],
    contribution: "아이디어 기획 20% 참여 - 영역별 미션 기능 기획\n프론트엔드 개발 50% 참여 - 미션, 지원제도, 챗봇 UI 개발 및 기능 구현",
    githubLink: "https://github.com",
    lessons: "React와 TypeScript를 활용한 첫 프론트엔드 팀 프로젝트로, Zustand를 사용하며 Context, Redux 보다 쉽고 간편한 상태 관리 코드를 작성할 수 있었습니다.\n또한 TanstackQuery를 사용해 API 요청과 캐싱을 효율적으로 사용하는 방법을 익힐 수 있었습니다.\n마지막으로 React-Hook-Form을 사용하여 반복적이고 긴 코드를 효율적이고 간결하게 작성할 수 있었습니다.\n결론적으로 세 라이브러리를 통해 프론트엔드 개발 생산성을 높일 수 있었습니다.",
  },
  {
    id: 3,
    title: "YourMode",
    description: "체형 진단 및 개인 맞춤 패션 컨턴츠 서비스",
    thumbnail: ImgYourModeWeb,
    technologies: ["Next.js", "TypeScript", "Zustand", "Emotion", "TanstackQuery", "React-Hook-Form", "Vercel", "OpenAI Assistant", "Pyton", "FastAPI"],
    summary: "체형 진단 및 개인 맞춤 패션 컨텐츠를 제공하는 서비스로, 사용자의 체형을 3가지 타입으로 분류하고, 해당 타입에 맞는 패션 컨텐츠를 제공합니다.\n이 과정에서 사용자는 자신의 체형에 맞는 패션 아이템과 스타일링 팁을 얻을 수 있습니다.\n또한, 사용자 맞춤형 패션 제품 추천 및 판매 기능을 통해 사용자가 직접 구매할 수 있는 경로를 제공합니다.",
    features: ["체형 진단 및 타입 분류", "개인 맞춤 패션 컨텐츠 제공", "패션 제품 추천 및 판매"],
    contribution: "아이디어 기획 및 검증, 프론트엔드 개발 참여 - 메인 Home 화면 및 스타일링 추천 기능\n프로젝트 FSD 아키텍처 설계 및 프로젝트 세팅, 공통 컴포넌트 추출\nOpenAI Assistant를 활용한 체형 진단 및 패션 컨텐츠 생성\nAWS Lambda를 활용한 FastAPI 서버 배포",
    githubLink: "https://github.com/Your-Mode/your-mode-web",
    demoLink: "https://yourmode.vercel.app/",
    lessons: "Next.js를 활용한 SSR(서버 사이드 렌더링)과 SSG(정적 사이트 생성)의 장점을 이해하고, 사용자 맞춤형 컨텐츠 제공을 위한 데이터 처리 및 상태 관리 방법을 익혔습니다.\n또한, Zustand를 사용하여 전역 상태 관리를 효율적으로 구현하는 방법을 배웠습니다.\n이 프로젝트를 통해 사용자 경험을 고려한 UI/UX 설계의 중요성을 다시 한번 느낄 수 있었습니다.",
  },
  {
    id: 4,
    title: "Stock Simulator",
    description: "주린이를 위한 주식 시뮬레이션",
    thumbnail: ImgStock,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React-Hook-Form", "TanstackQuery", "Recharts", "Vercel"],
    summary: "주식 초보를 위한 주식 시뮬레이션 서비스입니다.\n슬라이딩 윈도우를 통해 SMA(단순 이동 평균)와 크로스 신호를 계산하고, 이를 기반으로 주식 차트를 제공합니다.\n또한, 캔들 차트와 V자 패턴을 분석하고 Greedy 알고리즘을 통해 최대 수익 기회를 제공합니다.\n이 과정에서 사용자는 주식 차트를 통해 매매 신호와 현재 추세를 파악할 수 있습니다.\n용어 가이드를 제공하여 주식 초보자도 쉽게 이해할 수 있도록 하였습니다.",
    features: ["종목별 과거 주식 차트 - 거래량, SMA, 크로스 신호, 캔들 ", "차트 분석 요약 - 최대 수익 기회, 매매 신호, 현재 추세, 과매수/과매도 시점 등", "용어 가이드", "시뮬레이션 결과 - 최대 수익률, 크로스 신호, V자 패턴 발견"],
    contribution: "종목별 차트, 캔들 UI 구현 및 차트 분석 요약 기능 개발\n슬라이딩 윈도우를 통한 SMA, 크로스 신호 계산\nKMP 패턴 매칭 알고리즘을 통한 V자 패턴 분석 기능\nGreedy 알고리즘을 통한 최대 수익률 계산",
    githubLink: "https://github.com/Tnalxmsk/stock-simulator",
    demoLink: "https://stock-simulator-two.vercel.app/",
    lessons: "대용량 데이터 처리와 렌더링 최적화 기법을 습득했습니다.",
  },
  {
    id: 5,
    title: "Cohaus",
    description: "취약계층 주거 지원 플랫폼",
    thumbnail: ImgCohaus,
    technologies: ["Android", "Kotlin", "Hilt", "Google Maps API", "Place API", "Retrofit", "Coroutine", "Flow", "DataStore", "DataBinding"],
    summary: "2024 구글 솔루션 챌린지에서 진행한 팀 프로젝트로, 취약계층의 노후 주택 보수를 위해 \n개발한 안드로이드 네이티브 앱입니다.\n카메라 촬영 사진 혹은 갤러리의 사진을 AI 모델에게 전달하여 위험 등급을 진단합니다. 이후 수리 요청 게시글을 작성하면, 지도에 등록된 데이터를 바탕으로 봉사자를 연결합니다. 이 과정에서 Google Maps API와 Place API를 활용하였습니다.\n봉사가 완료되면 주변의 폐기물 처리장 정보를 제공하여 사용자가 폐기물을 처리할 수 있도록 돕와줍니다. 이밖에도 주 타겟층인 취약계층의 연령대가 높은 점을 고려하여 큰 UI와 글씨 크기, 사용 가이드 등 사용자 편의성을 고려한 UI/UX를 설계하였습니다.",
    features: ["카메라 및 갤러리 사진 데이터 핸들링", "현재 위치 및 지도, 위치 기반 마커 기능", "Place API를 활용한 장소 검색", "AI 모델을 통한 위험 등급 진단", "봉사자 연결 및 폐기물 처리 정보 제공", "Landscape 대응"],
    contribution: "프론트엔드 개발 80%, 데이터 시각화 구현 100%",
    githubLink: "https://github.com/Cohaus",
    lessons: "안드로이드 공식 문서를 바탕으로 클린 아키텍처와 MVVM 패턴을 적용하여 개발하였습니다.\n이 과정에서 안드로이드 앱 개발의 구조화와 유지보수성을 높이는 방법을 배웠습니다.\n또한, Hilt를 사용하여 의존성 주입을 구현하고, Retrofit과 Coroutine, Flow를 활용하여 비동기 API 통신을 효율적으로 처리하는 방법을 익혔습니다.\n최대한 공식문서에서 권장하는 개발 가이드라인을 준수하기 위해 노력하였고, 그 결과물 중 AAC와 DataStore 등이 있으며, Flow를 학습한 후 DataStore 적용하고 기존 LiveData를 제거하며 DataSource, Repository, ViewModel, View Class 등을 점진적으로 개선시켜 나가는 과정은 기존 코드를 리팩토링하는 소중한 경험이 되었습니다.",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "나만의 포트폴리오",
    thumbnail: ImgPortfolio,
    technologies: ["React", "Emotion CSS", "TypeScript", "Nest.js", "PostgreSQL", "Vercel", "AWS"],
    summary: "나만의 개인 포트폴리오 제작을 위한 개인 프로젝트입니다.",
    features: ["AWS 배포", "포트폴리오 프로젝트 추가, 삭제, 수정 기능", "미디어 쿼리를 통한 반응형 UI", "Light/Dark 모드 적용"],
    contribution: "프론트엔드 개발 100%, 백엔드 설계 및 API 개발 예정, AWS 배포 예정",
    githubLink: "https://github.com/goorm-study-portfolio/minsu",
    demoLink: "https://tnalxmsk.vercel.app/",
    lessons: "개인 프로젝트를 통해 프론트엔드 개발에 대한 이해도를 높이고, React와 Emotion CSS를 활용한 스타일링 기법을 익혔습니다.\n또한, TypeScript를 사용하여 코드의 안정성과 가독성을 향상시켰습니다.\n백엔드 개발과 데이터베이스 설계는 아직 진행 중이지만, Nest.js와 PostgreSQL을 활용할 예정입니다.\n이 프로젝트를 통해 개인 포트폴리오의 중요성과 자신만의 브랜드를 구축하는 방법을 배웠습니다.",
  },
  {
    id: 7,
    title: "푸름",
    description: "스마트폰 사용 습관 개선 서비스",
    thumbnail: ImgPureum,
    technologies: ["Android", "Kotlin", "Hilt", "Retrofit", "Coroutine", "LiveData", "DataBinding"],
    summary: "여러 사회 문제 중 하나인 청소년 스마트폰 사용 문제를 개선하기 위한\n안드로이드 네이티브 앱 개발 팀 프로젝트입니다.\n하루 세 단어를 랜덤으로 제공하여 문장을 작성할 수 있는 한 문장 챌린지 기능과 사용자의 스마트폰 사용 시간 데이터를 가져와 스마트폰 사용 시간이 적은 순으로 랭킹 순위를 제공합니다. 또한 대결 기능을 통해 친구와 문장 작성 대결을 진행할 수 있습니다.",
    features: ["소셜 로그인", "", "반응형 UI 구현"],
    contribution: "프론트엔드 개발 100%, UI/UX 디자인 참여",
    githubLink: "https://github.com",
    lessons: "대학교 진학 후 1학년 처음으로 진행한 안드로이드 프로젝트입니다. 이 프로젝트를 통해 협업과 소통 방식의 중요성 그리고 개발 용어 및 기술에 대해 다양하게 배울 수 있었습니다. 특히, 안드로이드 개발에 필요한 필수적인 기술 스택 DataBinding, Hilt, Coroutine, ViewModel 등을 알 수 있었고, 공식 문서의 중요성을 느낄 수 있었습니다.",
  },
  {
    id: 8,
    title: "YourMode - 당신만의 스타일링 멘토",
    description: "창업대학 창업 활동",
    thumbnail: ImgYourMode,
    technologies: ["Zapier", "OpenAI API", "Smore", "Google Analytics", "Meta Ads"],
    summary: "교내 창업대학 과정에서 진행한 창업 활동으로 AI 기반 체형 및 골격 진단 정보 제공과 패션 스타일 가이드를 제공하는 서비스를 기획했습니다. GPT 활용과 메타 광고 집행을 통해 약 30시간동안 5600의 노출 수, 방문 횟수 352, 서비스 이용 수 14회를 기록하였고, CTR 6.23%, 구매 전환률 4%, 약 4만원 정도의 매출을 달성했습니다.\n\n현재 새로운 팀 빌딩과 아이디어 수정 과정을 통해 개인 맞춤 패션 컨텐츠를 제공하고, 패션 상품을 연결하기 위한 서비스를 개발 중입니다.\n 이 과정에서 MVP 테스트를 실행하여 Zapier를 활용해 설문 플랫폼인 Smore와 openAI API, Notion을 연동해 자동으로 사용자 데이터를 수집하고 분석하는 자동화 시스템을 구축했습니다. 해당 테스트에서 약 850명의 사람들이 테스트 참여해주었고 68.68의 완료율을 기록했습니다. 또한 약 200명 정도의 사용자분들이 연락처를 남겨주어 스타일링 컨텐츠를 제공했습니다. 테스트 완료자 수 대비 공유 버튼 클릭 수를 계산하여 10%가 넘는 사용자분들이 테스트를 공유해주셨습니다.\n\n마지막으로 현재 경기도 갭이어 프로그램에 참여하여 인당 500마원 총 2000만원의 지원금을 통해 서비스 개발과 마케팅, 운영, 상품 판매를 진행할 계획입니다.",
    features: ["골격 진단 및 체형 타입", "맞춤형 개인 패션 컨텐츠", "사용자 맞춤형 패션 제품 추천 및 판매"],
    contribution: "아이디어 기획 및 검증, 메타 광고 집행, Smore 활용한 MVP 테스트 진행\n사용자 맞춤형 패션 컨텐츠 제공 및 Zapier를 활용한 자동화 시스템 구축",
    githubLink: "https://github.com",
    demoLink: "https://smore.im/quiz/r5L8Ficmn6",
    lessons: "비동기 프로그래밍과 상태 관리의 중요성을 배웠습니다.",
  },
];

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
                  src={project.thumbnail}
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
                    src={selectedProject.thumbnail}
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
  white-space: pre-wrap;
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
