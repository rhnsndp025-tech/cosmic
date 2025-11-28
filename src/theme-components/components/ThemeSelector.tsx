/**
 * Theme Selector Component
 * 
 * Allows users to switch between predefined themes.
 * Displays in the top navigation bar.
 * 
 * @example
 * ```tsx
 * <ThemeSelector />
 * ```
 */

import { useTheme } from '@/theme-components/contexts/ThemeContext';
import { getAvailableThemes } from '@/theme-components/config/themes';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/theme-components/components/ui/select';
import { Palette } from 'lucide-react';

export const ThemeSelector = () => {
  const { theme, setTheme, isCustomTheme } = useTheme();
  const availableThemes = getAvailableThemes();

  return (
    <div className="flex items-center gap-2">
      <Palette className="h-4 w-4 text-muted-foreground" />
      <Select value={isCustomTheme ? 'custom' : theme.id} onValueChange={setTheme}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          {isCustomTheme && (
            <SelectItem value="custom">Custom Theme</SelectItem>
          )}
          {availableThemes.map((t) => (
            <SelectItem key={t.id} value={t.id}>
              {t.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
