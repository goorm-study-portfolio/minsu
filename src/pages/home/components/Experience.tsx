"use client";

import { useRef, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Calendar, MapPin, Award, Users, Trophy, ChevronDown, Building, Zap, Star } from "lucide-react";
import { useInView } from "@home/feature/hooks/useInView.ts";

const ShowMoreIcon = styled(ChevronDown)<{ isExpanded: boolean }>`
  transform: rotate(${(props) => (props.isExpanded ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
`;

type ExperienceType = "all" | "competition" | "club" | "contest" | "startup" | "Program"

interface Experience {
  id: number;
  type: Exclude<ExperienceType, "all">[]; // 배열로 수정
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  achievement: string;
  tags: string[];
}

const getIcon = (type: Exclude<ExperienceType, "all">) => {
  switch (type) {
    case "competition":
      return <Trophy size={16} />;
    case "club":
      return <Users size={16} />;
    case "contest":
      return <Star size={16} />;
    case "startup":
      return <Building size={16} />;
    case "Program":
      return <Zap size={16} />;
    default:
      return <Award size={16} />;
  }
};

const getTypeLabel = (type: ExperienceType) => {
  switch (type) {
    case "all":
      return "전체";
    case "competition":
      return "대회";
    case "club":
      return "동아리";
    case "contest":
      return "공모전";
    case "startup":
      return "창업";
    case "Program":
      return "프로그램";
    default:
      return "전체";
  }
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);
  const [activeFilter, setActiveFilter] = useState<ExperienceType>("all");
  const [isExpanded, setIsExpanded] = useState(false);

  const experiences: Experience[] = [
    {
      id: 1,
      type: ["club"],
      title: "UMC 3기 안드로이드 파트 활동",
      organization: "University MakeUs Challenge",
      period: "2022.09 - 2023.02",
      location: "대학교",
      description: "개발 동아리에서 정기적인 안드로이드 스터디와 프로젝트를 통해 첫 개발 경험을 쌓았습니다.",
      achievement: "안드로이드 MVVM 패턴 이해 및 적용",
      tags: ["Android", "첫 개발 동아리 활동", "Kotlin", "MVVM"],
    },
    {
      id: 2,
      type: ["club", "competition"],
      title: "UMC 3기 데모데이 대상 수상",
      organization: "University MakeUs Challenge",
      period: "2023.02",
      location: "공덕 프론트원",
      description: "청소년 스마트폰 습관 개선 앱 개발 프로젝트로 데모데이에서 대상을 수상했습니다.",
      achievement: "대상 수상 (1등)",
      tags: ["Android", "Kotlin", "대상", "MVVM", "UMC", "청소년 앱"],
    },
    {
      id: 3,
      type: ["club"],
      title: "가천대학교 GDSC 1기 Mobile 파트 활동",
      organization: "Google Developer Student Clubs",
      period: "2023.09 - 2024.07",
      location: "대학교",
      description: "GDSC에서 모바일 개발 스터디와 공유 세션을 진행하여 안드로이드 개발 능력을 향상시켰습니다.",
      achievement: "Android Jetpack Library 활용 능력 향상",
      tags: ["Android", "Kotlin", "GDSC", "Jetpack", "Hilt", "Flow"],
    },
    {
      id: 4,
      type: ["club"],
      title: "구름톤 유니브 2기 Android 파트 활동",
      organization: "Goormthon Univ",
      period: "2024.02 - 2024.08",
      location: "대학교",
      description: "구름톤 유니브에서 안드로이드 개발 스터디와 프로젝트를 통해 최신 기술을 학습하고 적용했습니다.",
      achievement: "안드로이드 최신 기술 스터디 및 프로젝트 진행",
      tags: ["Android", "Kotlin", "Hilt", "Flow", "Coroutines"],
    },
    {
      id: 5,
      type: ["competition"],
      title: "구름톤 유니브 2기 해커톤 벚꽃톤",
      organization: "Goormthon Univ",
      period: "2024.03.13 - 2024.03.24",
      location: "카카오 AI 캠퍼스",
      description: "벚꽃톤에서 짧은 기간에 걸쳐 안드로이드 앱 개발과 협업, 문제 해결 능력을 향상시켰습니다.",
      achievement: "첫 해커톤 경험",
      tags: ["구름톤 유니브", "벚꽃톤", "안드로이드", "해커톤"],
    },
    {
      id: 6,
      type: ["startup"],
      title: "가천대학교 창업대학 GCS 4기",
      organization: "가천대학교 스타트업칼리지",
      period: "2024.03 - 2024.08",
      location: "대학교",
      description: "아이디어 구체화 및 창업 모델 개발을 위한 교내 창업 교육 프로그램에 참여했습니다.",
      achievement: "구매 전환 4% 및 매출 발생",
      tags: ["창업", "스타트업", "사업 모델", "아이디어 구체화", "MVP 테스트", "마케팅"],
    },
    {
      id: 7,
      type: ["startup"],
      title: "가천대학교 창업대학 GCS 4기 학부제 과정",
      organization: "가천대학교 스타트업칼리지",
      period: "2024.08 - ing",
      location: "대학교",
      description: "가천대학교 창업대학 학부제 과정에 참여하여 창업 아이템 개발 및 솔루션 테스트를 진행하고 있습니다.",
      achievement: "MVP 테스트 참여 1100명 완료 60%, Zapier를 통한 자동화",
      tags: ["창업", "스타트업", "MVP", "아이디어 검증", "자동화", "Zapier"],
    },
    {
      id: 8,
      type: ["contest", "startup"],
      title: "교내 공모전 창업 이룸 프로젝트",
      organization: "가천대학교 아르테크네센터",
      period: "2024.08 - 2025.01",
      location: "대학교",
      description: "창업 아이디어 공모전에 참가하여 아이디어를 구체화하고 검증 및 MVP 개발을 진행했습니다.",
      achievement: "최우수상 수상",
      tags: ["교내 공모전", "창업 활동", "창업 공모전", "최우수상"],
    },
    {
      id: 9,
      type: ["contest", "startup"],
      title: "교내 공모전 꿈꾸는 기업메이커",
      organization: "가천대학교 아르테크네센터",
      period: "2024.09 - 2024.11",
      location: "대학교",
      description: "팀 별 기업, 회사 선정 후 경영 목표와 목표에 맞는 활동을 실행하는 교내 공모전에 참가했습니다.",
      achievement: "장려상 수상",
      tags: ["교내 공모전", "기업메이커", "장려상", "창업 활동"],
    },
    {
      id: 10,
      type: ["club"],
      title: "구름톤 유니브 3기 학교 대표",
      organization: "Goormthon Univ",
      period: "2024.08 - 2025.01",
      location: "대학교",
      description: "구름톤 유니브 3기에서 학교 대표로 활동하며, React 공식 문서 Deep Dive 스터디를 진행했습니다.",
      achievement: "대표 활동을 통한 리더십 및 커뮤니케이션 능력 향상",
      tags: ["구름톤 유니브", "학교 대표", "React", "소통"],
    },
    {
      id: 11,
      type: ["competition"],
      title: "구름톤 유니브 3기 해커톤 단풍톤",
      organization: "Goormthon Univ",
      period: "2024.11.17 - 2024.11.24",
      location: "카카오 AI 캠퍼스",
      description: "단풍톤에서 첫 리액트 해커톤 경험을 쌓으며, 팀원들과 협업하여 프로젝트를 완성하고 배포했습니다.",
      achievement: "React 해커톤 첫 경험 및 배포",
      tags: ["구름톤 유니브", "단풍톤", "React", "해커톤", "TypeScript"],
    },
    {
      id: 12,
      type: ["club"],
      title: "UMC 7기 Web 파트 활동",
      organization: "University MakeUs Challenge",
      period: "2024.09 - 2025.02",
      location: "대학교",
      description: "개발 동아리에서 정기적인 React 스터디와 스터디장을 맡아 팀원을 이끌었습니다.",
      achievement: "React 생태계 이해 및 라이브러리 활용 능력 향상",
      tags: ["React", "TypeScript", "UMC", "Web 개발", "스터디장"],
    },
    {
      id: 14,
      type: ["contest"],
      title: "제 7회 전국 청년 아이디어톤 대회",
      organization: "수원특례시X아주대학교",
      period: "2024.11.09 - 2025.11.10",
      location: "수원유스호스텔",
      description: "시민체감 수원형 도시안전 서비스 아이디어톤 대회에 참가하여 도시 안전 관련 아이디어를 제안했습니다.",
      achievement: "본선 진출 팀중 단독 1인팀, 장려상 수상",
      tags: ["아이디어톤", "도시안전", "1인팀", "장려상"],
    },
    {
      id: 15,
      type: ["Program", "startup"],
      title: "경기청년 갭이어 프로그램",
      organization: "경기도미래세대재단, 한국생산성본부",
      period: "2025.06 - ing",
      location: "경기도",
      description: "경기 청년 갭이어 프로그램에 참여하여 교육 이후 최종 발표를 기다리고 있습니다.",
      achievement: "최종 합격의 경우 1인당 500만원 지원, 총 2000만원 지원금 예정",
      tags: ["경기청년", "갭이어", "프로그램", "지원금", "창업"],
    },
    {
      id: 16,
      type: ["Program", "startup"],
      title: "하나 소셜벤처 유니버시티",
      organization: "하나금융그룹, 언더독스",
      period: "2025.07 - ing",
      location: "경기도",
      description:
        "하나금융그룹의 소셜벤처 유니버시티 프로그램에 참여하여 사회적 가치 창출을 위한 창업 교육을 받고 있습니다.",
      achievement: "교육 수료 50만원 지원 및 우수팀 선정 시 300만원 지원",
      tags: ["하나금융그룹", "소셜벤처", "창업 교육", "사회적 가치", "지원금"],
    },
  ];

  // 필터링 로직 수정
  const filteredExperiences = experiences.filter(
    (exp) => activeFilter === "all" || exp.type.includes(activeFilter as Exclude<ExperienceType, "all">),
  );

  const INITIAL_SHOW_COUNT = 8;
  const displayedExperiences = isExpanded ? filteredExperiences : filteredExperiences.slice(0, INITIAL_SHOW_COUNT);

  const filterTypes: ExperienceType[] = ["all", "competition", "club", "contest", "startup", "Program"];

  // 각 타입별 개수 계산 함수 수정
  const getTypeCount = (type: ExperienceType) => {
    if (type === "all") return experiences.length;
    return experiences.filter((exp) => exp.type.includes(type as Exclude<ExperienceType, "all">)).length;
  };

  return (
    <Section id="experience" ref={sectionRef}>
      <Container>
        <SectionTitle inView={isInView}>Experience</SectionTitle>

        <FilterContainer inView={isInView}>
          {filterTypes.map((type) => (
            <FilterButton
              key={type}
              active={activeFilter === type}
              onClick={() => {
                setActiveFilter(type);
                setIsExpanded(false);
              }}
            >
              {type !== "all" && getIcon(type as Exclude<ExperienceType, "all">)}
              {getTypeLabel(type)}
              <span>({getTypeCount(type)})</span>
            </FilterButton>
          ))}
        </FilterContainer>

        <ExperienceContainer>
          <ExperienceList maxHeight={1200} isExpanded={isExpanded}>
            {displayedExperiences.map((experience, index) => (
              <ExperienceCard key={experience.id} inView={isInView} delay={index}>
                <ExperienceHeader>
                  <IconContainer>
                    {experience.type.map((type, typeIndex) => (
                      <IconWrapper key={type} type={type} isPrimary={typeIndex === 0}>
                        {getIcon(type)}
                      </IconWrapper>
                    ))}
                  </IconContainer>
                  <ExperienceContent>
                    <ExperienceTitle>{experience.title}</ExperienceTitle>
                    <ExperienceOrganization>{experience.organization}</ExperienceOrganization>
                    <ExperienceDetails>
                      <DetailItem>
                        <Calendar size={12} />
                        {experience.period}
                      </DetailItem>
                      {experience.location && (
                        <DetailItem>
                          <MapPin size={12} />
                          {experience.location}
                        </DetailItem>
                      )}
                    </ExperienceDetails>
                  </ExperienceContent>
                </ExperienceHeader>

                <CategoryTags>
                  {experience.type.map((type) => (
                    <CategoryTag key={type} type={type}>
                      {getIcon(type)}
                      {getTypeLabel(type)}
                    </CategoryTag>
                  ))}
                </CategoryTags>

                <ExperienceDescription>{experience.description}</ExperienceDescription>

                <AchievementBadge>
                  <Award size={12} />
                  {experience.achievement}
                </AchievementBadge>

                <TagList>
                  {experience.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              </ExperienceCard>
            ))}
          </ExperienceList>

          {filteredExperiences.length > INITIAL_SHOW_COUNT && (
            <ShowMoreButton inView={isInView} onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "접기" : `${filteredExperiences.length - INITIAL_SHOW_COUNT}개 더 보기`}
              <ShowMoreIcon isExpanded={isExpanded} />
            </ShowMoreButton>
          )}
        </ExperienceContainer>
      </Container>
    </Section>
  );
}

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

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
  margin-bottom: 2rem;
  color: var(--text-color);
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: translateY(${(props) => (props.inView ? 0 : "20px")});
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const FilterContainer = styled.div<{ inView: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-bottom: 3rem;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 0.3s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};
`;

const FilterButton = styled.button<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid var(--border-color);
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : "var(--card-background)")};
  color: ${({ active }) => (active ? "white" : "var(--text-color)")};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ active, theme }) => (active ? theme.colors.primaryDark : "var(--hover-color)")};
  }
`;

const ExperienceContainer = styled.div`
  position: relative;
`;

const ExperienceList = styled.div<{ maxHeight: number; isExpanded: boolean }>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  max-height: ${(props) => (props.isExpanded ? "none" : `${props.maxHeight}px`)};
  overflow: hidden;
  transition: max-height 0.5s ease;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

const ExperienceCard = styled.div<{ inView: boolean; delay: number }>`
  background-color: var(--card-background);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  opacity: 0;

  animation: ${slideInLeft} 0.4s ease-out forwards;
  animation-delay: ${(props) => props.delay * 0.1}s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-shrink: 0;
`;

const IconWrapper = styled.div<{ type: string; isPrimary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.isPrimary ? "2.5rem" : "1.75rem")};
  height: ${(props) => (props.isPrimary ? "2.5rem" : "1.75rem")};
  border-radius: 50%;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "competition":
        return `${theme.colors.primary}20`;
      case "club":
        return "#10b98120";
      case "contest":
        return "#f59e0b20";
      case "startup":
        return "#8b5cf620";
      case "Program":
        return "#06b6d420";
      default:
        return `${theme.colors.primary}20`;
    }
  }};
  color: ${({ type, theme }) => {
    switch (type) {
      case "competition":
        return theme.colors.primary;
      case "club":
        return "#10b981";
      case "contest":
        return "#f59e0b";
      case "startup":
        return "#8b5cf6";
      case "Program":
        return "#06b6d4";
      default:
        return theme.colors.primary;
    }
  }};
  opacity: ${(props) => (props.isPrimary ? 1 : 0.7)};
  flex-shrink: 0;
`;

const ExperienceContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ExperienceTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--text-color);
  line-height: 1.3;
`;

const ExperienceOrganization = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ExperienceDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  color: var(--text-muted);
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ExperienceDescription = styled.p`
  color: var(--text-muted);
  line-height: 1.5;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CategoryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 0.75rem;
`;

const CategoryTag = styled.span<{ type: string }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case "competition":
        return `${theme.colors.primary}15`;
      case "club":
        return "#10b98115";
      case "contest":
        return "#f59e0b15";
      case "startup":
        return "#8b5cf615";
      case "Program":
        return "#06b6d415";
      default:
        return `${theme.colors.primary}15`;
    }
  }};
  color: ${({ type, theme }) => {
    switch (type) {
      case "competition":
        return theme.colors.primary;
      case "club":
        return "#10b981";
      case "contest":
        return "#f59e0b";
      case "startup":
        return "#8b5cf6";
      case "Program":
        return "#06b6d4";
      default:
        return theme.colors.primary;
    }
  }};
  font-weight: 500;
`;

const AchievementBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const Tag = styled.span`
  font-size: 0.625rem;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  background-color: var(--background-alt);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
`;

const ShowMoreButton = styled.button<{ inView: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  margin-top: 2rem;
  border: 2px dashed var(--border-color);
  border-radius: 0.75rem;
  background: none;
  color: var(--text-muted);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 0.8s;
  animation-play-state: ${(props) => (props.inView ? "running" : "paused")};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary}05;
  }
`;
