/**
 * Theme Composer Component
 * 
 * Dialog-based theme editor that allows users to customize design tokens
 * in real-time. Changes can be previewed and applied.
 * 
 * Features:
 * - Edit colors, typography, spacing, and border radius
 * - Live preview of changes
 * - Reset to current theme
 * 
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 * <ThemeComposer open={open} onOpenChange={setOpen} />
 * ```
 */

import { useState, useEffect } from 'react';
import { useTheme } from '@/theme-components/contexts/ThemeContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@//theme-components/components/ui/button';
import { Input } from '@/theme-components/components/ui/input';
import { Label } from '@/theme-components/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/theme-components/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Theme, DesignTokens } from '@/theme-components/config/themes';
import { googleFonts, loadGoogleFont, getFontFamily } from '@/theme-components/config/googleFonts';
import { Paintbrush } from 'lucide-react';

interface ThemeComposerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ThemeComposer: React.FC<ThemeComposerProps> = ({
  open,
  onOpenChange,
}) => {
  const { theme, applyTheme } = useTheme();
  const [editedTokens, setEditedTokens] = useState<DesignTokens>(theme.tokens);
  const [selectedFont, setSelectedFont] = useState<string>('Inter');

  // Load the selected font when it changes
  useEffect(() => {
    loadGoogleFont(selectedFont);
  }, [selectedFont]);

  const handleColorChange = (key: keyof DesignTokens['colors'], value: string) => {
    setEditedTokens((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [key]: value,
      },
    }));
  };

  const handleSpacingChange = (key: keyof DesignTokens['spacing'], value: string) => {
    setEditedTokens((prev) => ({
      ...prev,
      spacing: {
        ...prev.spacing,
        [key]: value,
      },
    }));
  };

  const handleBorderRadiusChange = (
    key: keyof DesignTokens['borderRadius'],
    value: string
  ) => {
    setEditedTokens((prev) => ({
      ...prev,
      borderRadius: {
        ...prev.borderRadius,
        [key]: value,
      },
    }));
  };

  const handleFontChange = (fontName: string) => {
    setSelectedFont(fontName);
    const fontFamily = getFontFamily(fontName);
    setEditedTokens((prev) => ({
      ...prev,
      typography: {
        ...prev.typography,
        fontFamily: {
          ...prev.typography.fontFamily,
          sans: fontFamily,
        },
      },
    }));
  };

  const handleApply = () => {
    const customTheme: Theme = {
      id: 'custom',
      name: 'Custom Theme',
      tokens: editedTokens,
    };
    applyTheme(customTheme);
    onOpenChange(false);
  };

  const handleReset = () => {
    setEditedTokens(theme.tokens);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Paintbrush className="h-5 w-5" />
            Theme Composer
          </DialogTitle>
          <DialogDescription>
            Customize design tokens to create your perfect theme. Changes preview in
            real-time.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="borders">Borders</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(editedTokens.colors).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={key} className="text-sm capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Label>
                  <Input
                    id={key}
                    value={value}
                    onChange={(e) =>
                      handleColorChange(
                        key as keyof DesignTokens['colors'],
                        e.target.value
                      )
                    }
                    placeholder="HSL format: 222.2 47.4% 11.2%"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="font-sans">Font Family (Sans)</Label>
                <Select value={selectedFont} onValueChange={handleFontChange}>
                  <SelectTrigger id="font-sans">
                    <SelectValue placeholder="Select a font" />
                  </SelectTrigger>
                  <SelectContent>
                    {googleFonts.map((font) => (
                      <SelectItem 
                        key={font.name} 
                        value={font.name}
                        style={{ fontFamily: font.family }}
                      >
                        {font.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Preview: <span style={{ fontFamily: editedTokens.typography.fontFamily.sans }}>
                    The quick brown fox jumps over the lazy dog
                  </span>
                </p>
              </div>
              <div className="space-y-2">
                <Label>Font Sizes</Label>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(editedTokens.typography.fontSize).map(
                    ([key, value]) => (
                      <div key={key} className="space-y-2">
                        <Label className="text-xs">{key}</Label>
                        <Input
                          value={value}
                          onChange={(e) =>
                            setEditedTokens((prev) => ({
                              ...prev,
                              typography: {
                                ...prev.typography,
                                fontSize: {
                                  ...prev.typography.fontSize,
                                  [key]: e.target.value,
                                },
                              },
                            }))
                          }
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-4 mt-4">
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(editedTokens.spacing).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={`spacing-${key}`} className="text-sm">
                    {key}
                  </Label>
                  <Input
                    id={`spacing-${key}`}
                    value={value}
                    onChange={(e) =>
                      handleSpacingChange(
                        key as keyof DesignTokens['spacing'],
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="borders" className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(editedTokens.borderRadius).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <Label htmlFor={`border-${key}`} className="text-sm">
                    {key}
                  </Label>
                  <Input
                    id={`border-${key}`}
                    value={value}
                    onChange={(e) =>
                      handleBorderRadiusChange(
                        key as keyof DesignTokens['borderRadius'],
                        e.target.value
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex justify-between sm:justify-between">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleApply}>Apply Theme</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
