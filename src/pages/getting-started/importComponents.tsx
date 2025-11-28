import { useState } from 'react';
// import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeProvider } from '@/theme-components/contexts/ThemeContext';
import { ThemeSelector } from '@/theme-components/components/ThemeSelector';
// import { ThemeSelector } from '@/components/ThemeSelector';
import { ThemeComposer } from '@/theme-components/components/ThemeComposer';
// import { ThemeComposer } from '@/components/ThemeComposer';
import { ComponentShowcase } from '@/theme-components/components/ComponentShowcase';

// import { ComponentShowcase } from '@/components/ComponentShowcase';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const IndexContent = () => {
  const [composerOpen, setComposerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-foreground">Theme System</h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSelector />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setComposerOpen(true)}
                title="Open Theme Composer"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto">
        <ComponentShowcase />
      </main>

      {/* Theme Composer Dialog */}
      <ThemeComposer open={composerOpen} onOpenChange={setComposerOpen} />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <IndexContent />
    </ThemeProvider>
  );
};

export default Index;
