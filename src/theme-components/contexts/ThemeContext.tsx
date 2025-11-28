/**
 * Theme Context
 * 
 * Provides theme management across the application.
 * Supports URL-based theme selection and dynamic theme switching.
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, getTheme, defaultTheme } from '@/theme-components/config/themes';

interface ThemeContextType {
  theme: Theme;
  setTheme: (themeId: string) => void;
  applyTheme: (theme: Theme) => void;
  isCustomTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isCustomTheme, setIsCustomTheme] = useState(false);

  // Apply theme tokens to CSS variables
  const applyThemeTokens = (themeToApply: Theme) => {
    const root = document.documentElement;
    const { tokens } = themeToApply;

    // Apply colors
    Object.entries(tokens.colors).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value);
    });

    // Apply typography
    root.style.setProperty('--font-family-sans', tokens.typography.fontFamily.sans);
    root.style.setProperty('--font-family-mono', tokens.typography.fontFamily.mono);

    // Apply spacing
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // Apply border radius
    Object.entries(tokens.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });
  };

  // Get theme from URL parameter
  const getThemeFromUrl = (): string | null => {
    const params = new URLSearchParams(window.location.search);
    return params.get('theme');
  };

  // Set theme and update URL
  const setTheme = (themeId: string) => {
    const newTheme = getTheme(themeId);
    setThemeState(newTheme);
    applyThemeTokens(newTheme);
    setIsCustomTheme(false);

    // Update URL
    const url = new URL(window.location.href);
    url.searchParams.set('theme', themeId);
    window.history.replaceState({}, '', url.toString());
  };

  // Apply custom theme (from composer)
  const applyTheme = (customTheme: Theme) => {
    setThemeState(customTheme);
    applyThemeTokens(customTheme);
    setIsCustomTheme(true);
  };

  // Initialize theme from URL on mount
  useEffect(() => {
    const urlTheme = getThemeFromUrl();
    if (urlTheme) {
      const initialTheme = getTheme(urlTheme);
      setThemeState(initialTheme);
      applyThemeTokens(initialTheme);
    } else {
      applyThemeTokens(defaultTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, applyTheme, isCustomTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
