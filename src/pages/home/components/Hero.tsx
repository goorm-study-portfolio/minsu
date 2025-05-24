import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import IcPlaceHolder from "@icon/ic-placeholder.svg"

const Hero = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroSection id="home">
      <Container>
        <ProfileImageWrapper >
          <img src={IcPlaceHolder} alt="profile" style={{ objectFit: "cover" }} />
        </ProfileImageWrapper>
        <IntroText visible={showIntro}>안녕하세요. 열정적인 개발자입니다.</IntroText>
      </Container>

      <Gradient />
    </HeroSection>
  );
};

export default Hero;

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
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-color);
  opacity: 0;
  animation: ${slideUp} 0.8s ease-out forwards;
  animation-delay: 1s;
  animation-play-state: ${(props) => (props.visible ? "running" : "paused")};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
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
