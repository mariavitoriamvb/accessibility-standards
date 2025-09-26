import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
    --font-scale: 1;
    --nav-h: 56px;

    /* Tokens padrão (verde + creme) */
    --bg: ${({theme}) => theme.colors.cream50};
    --surface: ${({theme}) => theme.colors.white};
    --surface-alt: ${({theme}) => theme.colors.cream100};
    --border: ${({theme}) => theme.colors.cream200};
    --text: ${({theme}) => theme.colors.gray700};
    --text-muted: ${({theme}) => theme.colors.gray500};
    --primary: ${({theme}) => theme.colors.green600};
    --primary-strong: ${({theme}) => theme.colors.green700};
    --accent: ${({theme}) => theme.colors.green900};
    --focus: ${({theme}) => theme.colors.green500};
    --error: ${({theme}) => theme.colors.red600};
    --info: ${({theme}) => theme.colors.blue600};
  }

  html { font-size: calc(16px * var(--font-scale)); }
  * { box-sizing: border-box; }
  html:focus-within { scroll-behavior: smooth; }
  html, body, #root { height: 100%; }

  body {
    margin: 0;
    font-family: ${({theme}) => theme.typography.fontUI};
    line-height: 1.6;
    color: var(--text);
    background: var(--bg);
  }

  h1, h2, h3, h4, h5, h6 { color: var(--accent); }

  a { color: var(--accent); }
  a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
    outline: 3px solid var(--focus);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Alto contraste */
  html[data-contrast="on"] {
    --bg: #ffffff;
    --surface: #ffffff;
    --surface-alt: #ffffff;
    --border: #000000;
    --text: #000000;
    --text-muted: #111111;
    --primary: #000000;
    --primary-strong: #000000;
    --accent: #000000;
    --focus: #000000;
    --info: #01337D;
  }

  /* Reduz movimento */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`