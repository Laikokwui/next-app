import { ToggleButton } from "./ThemeToggle.style";
import { useState ,useEffect } from "react";
import styled from "@emotion/styled";

const ToggleThumb = styled.span`
    position: absolute;
    top: var(--toggle-padding);
    left: var(--toggle-padding);
    width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
    height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
    border-radius: 50%;
    background: white;
    transition: transform 0.25s ease-in-out;
    transform: ${(p: { activeTheme: string; }) =>
      p.activeTheme === "dark"
          ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
          : "none"};
`;

export default function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useState("light");
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return <ToggleButton 
  aria-label={`Change to ${inactiveTheme} mode`}
  title={`Change to ${inactiveTheme} mode`}
  type="button"
  onClick={() => setActiveTheme(inactiveTheme)}>
    <ToggleThumb activeTheme={activeTheme} />
    <span aria-hidden={true}>🌙</span>
    <span aria-hidden={true}>☀️</span>
  </ToggleButton>;
}