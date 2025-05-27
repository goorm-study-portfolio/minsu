import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import ImgProfileTwo from "@img/img-profile-two.png";
import ImgProfileThree from "@img/img-profile-three.png";
import ImgProfileFour from "@img/img-profile-four.png";

const FADE_DURATION = 300;
const DISPLAY_DURATION = 400;

const Hero = () => {
  const profileImages = [ImgProfileTwo, ImgProfileThree, ImgProfileFour];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [showIntro, setShowIntro] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setFadeIn(true);
    if (currentIndex === profileImages.length - 1) {
      timerRef.current = setTimeout(() => setShowIntro(true), 500);
      return;
    }

    timerRef.current = setTimeout(() => {
      setFadeIn(false); // fade out
      setTimeout(() => {
        setPrevIndex(currentIndex);
        setCurrentIndex((idx) => idx + 1);
        setFadeIn(true); // 다음 이미지 fade in
      }, FADE_DURATION);
    }, FADE_DURATION + DISPLAY_DURATION);

    return () => clearTimeout(timerRef.current!);
  }, [currentIndex, profileImages.length]);


  return (
    <HeroSection id="home">
      <Container>
        <ProfileImageWrapper>
          {/* 이전 이미지 (fade out, 겹침) */}
          {prevIndex !== null && prevIndex !== currentIndex && (
            <FadeImg
              src={profileImages[prevIndex]}
              style={{ zIndex: 1 }}
              fadeType="out"
            />
          )}
          {/* 현재 이미지 */}
          <FadeImg
            src={profileImages[currentIndex]}
            style={{ zIndex: 2 }}
            fadeType={fadeIn ? "in" : "out"}
            isFinal={currentIndex === profileImages.length - 1}
          />
        </ProfileImageWrapper>
        <IntroText visible={showIntro}>안녕하세요. 열정적인 개발자입니다.</IntroText>
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
  transition: opacity ${FADE_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ fadeType, isFinal }) =>
    isFinal
      ? 1
      : fadeType === "in"
        ? 1
        : 0};
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
  /*border-radius: 50%;*/
  overflow: hidden;
    /*border: 4px solid ${({ theme }) => theme.colors.primary};*/
  /*box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);*/
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
