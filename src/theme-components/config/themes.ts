/**
 * Design Tokens & Theme Configuration
 * 
 * This file defines all design tokens that control the visual appearance
 * of the application including colors, typography, spacing, and more.
 */

export interface DesignTokens {
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    border: string;
    card: string;
    cardForeground: string;
  };
  typography: {
    fontFamily: {
      sans: string;
      mono: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    fontWeight: {
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
    };
    lineHeight: {
      tight: string;
      normal: string;
      relaxed: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
}

export interface Theme {
  id: string;
  name: string;
  tokens: DesignTokens;
}

/**
 * Default Theme - Clean and minimal design
 */
export const defaultTheme: Theme = {
  id: 'default',
  name: 'Default',
  tokens: {
    colors: {
      primary: '222.2 47.4% 11.2%',
      primaryForeground: '210 40% 98%',
      secondary: '210 40% 96.1%',
      secondaryForeground: '222.2 47.4% 11.2%',
      accent: '210 40% 96.1%',
      accentForeground: '222.2 47.4% 11.2%',
      background: '0 0% 100%',
      foreground: '222.2 84% 4.9%',
      muted: '210 40% 96.1%',
      mutedForeground: '215.4 16.3% 46.9%',
      border: '214.3 31.8% 91.4%',
      card: '0 0% 100%',
      cardForeground: '222.2 84% 4.9%',
    },
    typography: {
      fontFamily: {
        sans: 'Inter, system-ui, -apple-system, sans-serif',
        mono: 'monospace',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      full: '9999px',
    },
  },
};

/**
 * Amethyst Theme - Purple-based elegant design
 */
export const amethystTheme: Theme = {
  id: 'amethyst',
  name: 'Amethyst',
  tokens: {
    colors: {
      primary: '271 81% 56%',
      primaryForeground: '0 0% 100%',
      secondary: '270 60% 96%',
      secondaryForeground: '271 81% 56%',
      accent: '270 60% 90%',
      accentForeground: '271 81% 56%',
      background: '0 0% 100%',
      foreground: '271 20% 10%',
      muted: '270 40% 96%',
      mutedForeground: '271 20% 50%',
      border: '270 30% 90%',
      card: '0 0% 100%',
      cardForeground: '271 20% 10%',
    },
    typography: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
        mono: 'monospace',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.875rem',
      full: '9999px',
    },
  },
};

/**
 * Ocean Theme - Blue and teal inspired design
 */
export const oceanTheme: Theme = {
  id: 'ocean',
  name: 'Ocean',
  tokens: {
    colors: {
      primary: '199 89% 48%',
      primaryForeground: '0 0% 100%',
      secondary: '197 71% 96%',
      secondaryForeground: '199 89% 48%',
      accent: '197 71% 90%',
      accentForeground: '199 89% 48%',
      background: '0 0% 100%',
      foreground: '200 20% 10%',
      muted: '197 50% 96%',
      mutedForeground: '200 20% 50%',
      border: '197 40% 88%',
      card: '0 0% 100%',
      cardForeground: '200 20% 10%',
    },
    typography: {
      fontFamily: {
        sans: 'Nunito, sans-serif',
        mono: 'monospace',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '0.75rem',
      full: '9999px',
    },
  },
};

/**
 * Available themes registry
 */
export const themes: Record<string, Theme> = {
  default: defaultTheme,
  amethyst: amethystTheme,
  ocean: oceanTheme,
};

/**
 * Get theme by ID, fallback to default
 */
export const getTheme = (themeId: string): Theme => {
  return themes[themeId] || defaultTheme;
};

/**
 * Get all available theme IDs
 */
export const getAvailableThemes = (): Theme[] => {
  return Object.values(themes);
};
