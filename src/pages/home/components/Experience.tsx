import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Calendar, MapPin, Award, Users, Trophy, ChevronDown, Building, Zap, Star } from "lucide-react";
import { useInView } from "@home/feature/hooks/useInView.ts";
import { type ExperienceType } from "@shared/types";
import { useQueryClient } from "@tanstack/react-query";
import { fetchExperience, useGetExperience } from "@home/feature/hooks/useGetExperience.ts";

const ShowMoreIcon = styled(ChevronDown)<{ $isExpanded: boolean }>`
  transform: rotate(${(props) => (props.$isExpanded ? "180deg" : "0deg")});
  transition: transform 0.3s ease;
`;

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
  const [activeFilter, setActiveFilter] = useState<ExperienceType>("all");
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const isNearView = useInView(sectionRef, {
    threshold: 0,
    root: null,
    rootMargin: '300px 0px 300px 0px',
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
        queryKey: ['experiences'],
        queryFn: () => fetchExperience(),
        staleTime: 1000 * 60 * 3,
      });
    }
  }, [isNearView, queryClient]);

  const { data: experiences } = useGetExperience({
    enabled: isInView,
    staleTime: 1000 * 60 * 3,
  });


  // 필터링 로직 수정
  const filteredExperiences = experiences ? experiences.filter(
    (exp) => activeFilter === "all" || exp.type.includes(activeFilter as Exclude<ExperienceType, "all">),
  ) : [];

  const INITIAL_SHOW_COUNT = 8;
  const displayedExperiences = isExpanded ? filteredExperiences : filteredExperiences.slice(0, INITIAL_SHOW_COUNT);

  const filterTypes: ExperienceType[] = ["all", "competition", "club", "contest", "startup", "Program"];

  // 각 타입별 개수 계산 함수 수정
  const getTypeCount = (type: ExperienceType) => {
    if (!experiences) return 0;
    if (type === "all") return experiences?.length;
    return experiences?.filter((exp) => exp.type.includes(type as Exclude<ExperienceType, "all">)).length;
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
              <ShowMoreIcon $isExpanded={isExpanded} />
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
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
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
