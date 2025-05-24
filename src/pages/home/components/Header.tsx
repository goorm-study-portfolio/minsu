import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@shared/components/ThemProvider.tsx";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);

      const sections = ["home", "about", "skills", "archiving", "projects"];
      const scrollPosition = window.scrollY + 200; // 헤더 높이 + 여유분

      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // 섹션의 중간 지점을 기준으로 활성 섹션 결정
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            currentSection = section;
          }
        }
      }

      // 페이지 하단에 도달했을 때 마지막 섹션을 활성화
      if (window.innerHeight + scrollPosition >= document.documentElement.scrollHeight - 100) {
        currentSection = "projects";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "archiving", label: "Archiving" },
    { id: "projects", label: "Projects" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <HeaderContainer visible={visible}>
      <HeaderContent>
        <Logo onClick={() => scrollToSection("home")}>Portfolio</Logo>

        <Nav>
          {navItems.map((item) => (
            <NavButton key={item.id} onClick={() => scrollToSection(item.id)} active={activeSection === item.id}>
              {item.label}
            </NavButton>
          ))}
        </Nav>

        {mounted && (
          <ThemeButton onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </ThemeButton>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const HeaderContainer = styled.header<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: var(--background-color-translucent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  transform: translateY(${(props) => (props.visible ? "0" : "-100%")});
  transition: transform 0.3s ease;
  animation: ${slideDown} 0.5s ease-out forwards;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  color: var(--text-color);
`;

const Nav = styled.nav`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const NavButton = styled.button<{ active: boolean }>`
  font-size: 0.875rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  color: ${({ theme, active }) => (active ? theme.colors.primary : "var(--text-muted)")};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThemeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-color);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--hover-color);
  }
`;
