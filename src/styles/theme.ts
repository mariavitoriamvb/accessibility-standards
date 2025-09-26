export const theme = {
  colors: {
    // Greens
    green900: '#0F3D2E',
    green700: '#146551',
    green600: '#1B7F5F',
    green500: '#2AA176',
    green400: '#58B68B',
    green100: '#DFF3E9',
    // Creams / Neutrals
    cream50:  '#FFFDF8',
    cream100: '#FBF6EC',
    cream200: '#F3E9D9',
    cream300: '#E6D6BA',
    gray700:  '#2F3A3B',
    gray500:  '#5A6B6C',
    gray300:  '#9FB0B1',
    white:    '#FFFFFF',
    black:    '#000000',
    // Alerts
    red600:   '#CB3A3A',
    yellow600:'#B5821D',
    blue600:  '#1D66B5',
  },
  typography: {
    fontUI: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'",
    fontDisplay: "'Merriweather', Georgia, serif",
    baseSize: 16,
    scale: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      md: '1.125rem',  // 18px
      lg: '1.25rem',   // 20px
      xl: '1.5rem',    // 24px
      '2xl': '2rem',   // 32px
      '3xl': '2.5rem', // 40px
      '4xl': '3rem',   // 48px
    }
  },
  spacing: {
    '0': '0',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '8': '32px',
    '10': '40px',
    '12': '48px',
    '16': '64px',
    '20': '80px'
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    pill: '999px'
  },
  shadow: {
    sm: '0 1px 3px rgba(0,0,0,0.08)',
    md: '0 6px 20px rgba(16, 61, 46, 0.15)'
  }
} as const;

export type AppTheme = typeof theme;
