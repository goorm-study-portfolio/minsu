import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import ImgProfileFour from "@img/img-profile-four.png";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const FADE_DURATION = 300;
const DISPLAY_DURATION = 400;
const INTRO_TEXT = "가설 검증과 빠른 실행을 바탕으로\n사용자 가치를 최우선으로 생각합니다";

const Hero = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setFadeIn(true);
    timerRef.current = setTimeout(() => {
      setFadeIn(false); // fade out
      setTimeout(() => {
        setFadeIn(true); // 다음 이미지 fade in
        setShowIntro(true); // show intro text
      }, FADE_DURATION);
    }, FADE_DURATION + DISPLAY_DURATION);

    return () => clearTimeout(timerRef.current!);
  }, []);

  const contactInfo = {
    email: "alstnwkd990@naver.com",
    phone: "+82 10-6645-7026",
    location: "성남, 대한민국",
    social: {
      github: "https://github.com/Tnalxmsk",
      linkedin: "https://www.linkedin.com/in/민수-장-956912355/",
      instagram: "https://instagram.com/tnalxmsk",
    },
  };


  return (
    <HeroSection id="home">
      <Container>
        <ProfileImageWrapper>
          <FadeImg
            src={ImgProfileFour}
            style={{ zIndex: 2 }}
            fadeType={fadeIn ? "in" : "out"}
          />
        </ProfileImageWrapper>
        <IntroText visible={showIntro}>{INTRO_TEXT}</IntroText>
        <ContactInfo visible={showIntro}>
          <ContactLink href={`mailto:${contactInfo.email}`}>
            <Mail size={16} />
            {contactInfo.email}
          </ContactLink>

          <ContactLink href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}>
            <Phone size={16} />
            {contactInfo.phone}
          </ContactLink>

          <ContactItem>
            <MapPin size={16} />
            {contactInfo.location}
          </ContactItem>
        </ContactInfo>

        <SocialLinks visible={showIntro}>
          <SocialLink href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </SocialLink>

          <SocialLink
            href={contactInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </SocialLink>

          <SocialLink
            href={contactInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </SocialLink>
        </SocialLinks>
      </Container>

      <Gradient />
    </HeroSection>
  );
};

export default Hero;

const FadeImg = styled.img<{
  fadeType: "in" | "out";
  isFinal?: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  pointer-events: none;
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

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: var(--background-color);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 10;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  margin-bottom: 2rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${scaleIn} 0.8s ease-out forwards;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 20rem;
    height: 20rem;
  }
`;

const IntroText = styled.h1<{ visible: boolean }>`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-color);
  opacity: 0;
  white-space: pre-wrap;
  animation: ${slideUp} 0.8s ease-out forwards;
  animation-delay: 1s;
  animation-play-state: ${(props) => (props.visible ? "running" : "paused")};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, var(--background-color));
  z-index: 0;
`;

const ContactInfo = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${slideUp} 0.8s ease-out forwards;
  animation-delay: 1.6s;
  animation-play-state: ${(props) => (props.visible ? "running" : "paused")};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.875rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const SocialLinks = styled.div<{ visible: boolean }>`
  display: flex;
  gap: 1rem;
  opacity: 0;
  animation: ${slideUp} 0.8s ease-out forwards;
  animation-delay: 1.9s;
  animation-play-state: ${(props) => (props.visible ? "running" : "paused")};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--card-background);
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  }
`;
