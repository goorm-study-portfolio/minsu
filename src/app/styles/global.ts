import { css } from "@emotion/react"
import { colors } from "@app/styles/colors.ts";

export const globalStyles = css`
  :root {
    --background-color: #ffffff;
    --background-color-translucent: rgba(255, 255, 255, 0.8);
    --background-alt: #f9fafb;
    --text-color: #111827;
    --text-muted: #6b7280;
    --border-color: #e5e7eb;
    --card-background: #ffffff;
    --hover-color: rgba(0, 0, 0, 0.05);
  }

  .dark {
    --background-color: #111827;
    --background-color-translucent: rgba(17, 24, 39, 0.8);
    --background-alt: #1f2937;
    --text-color: #f9fafb;
    --text-muted: #9ca3af;
    --border-color: #374151;
    --card-background: #1f2937;
    --hover-color: rgba(255, 255, 255, 0.05);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${colors.primary};
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-alt);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--text-muted);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primary};
  }
`
