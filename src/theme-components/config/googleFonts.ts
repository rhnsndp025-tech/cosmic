/**
 * Google Fonts Configuration
 * 
 * Curated list of popular Google Fonts for theme customization
 */

export interface GoogleFont {
  name: string;
  family: string;
  category: 'sans-serif' | 'serif' | 'display' | 'monospace';
}

export const googleFonts: GoogleFont[] = [
  { name: 'Inter', family: 'Inter, sans-serif', category: 'sans-serif' },
  { name: 'Poppins', family: 'Poppins, sans-serif', category: 'sans-serif' },
  { name: 'Nunito', family: 'Nunito, sans-serif', category: 'sans-serif' },
  { name: 'Roboto', family: 'Roboto, sans-serif', category: 'sans-serif' },
  { name: 'Open Sans', family: '"Open Sans", sans-serif', category: 'sans-serif' },
  { name: 'Lato', family: 'Lato, sans-serif', category: 'sans-serif' },
  { name: 'Montserrat', family: 'Montserrat, sans-serif', category: 'sans-serif' },
  { name: 'Source Sans 3', family: '"Source Sans 3", sans-serif', category: 'sans-serif' },
  { name: 'Playfair Display', family: '"Playfair Display", serif', category: 'serif' },
  { name: 'Merriweather', family: 'Merriweather, serif', category: 'serif' },
  { name: 'Space Grotesk', family: '"Space Grotesk", sans-serif', category: 'display' },
  { name: 'Fira Code', family: '"Fira Code", monospace', category: 'monospace' },
];

/**
 * Dynamically load a Google Font
 */
export const loadGoogleFont = (fontName: string): void => {
  const existingLink = document.querySelector(`link[data-font="${fontName}"]`);
  if (existingLink) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@400;500;600;700&display=swap`;
  link.setAttribute('data-font', fontName);
  document.head.appendChild(link);
};

/**
 * Get font family string by font name
 */
export const getFontFamily = (fontName: string): string => {
  const font = googleFonts.find(f => f.name === fontName);
  return font ? font.family : 'Inter, system-ui, -apple-system, sans-serif';
};
