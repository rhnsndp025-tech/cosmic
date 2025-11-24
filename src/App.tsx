import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DocsSidebar } from "@/components/DocsSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Getting Started
import Components from "./pages/getting-started/Components";
import Contribute from "./pages/getting-started/Contribute";
import Support from "./pages/getting-started/Support";

// Tools
import Playroom from "./pages/tools/Playroom";
import FigmaLibrary from "./pages/tools/FigmaLibrary";
import FigmaCheatsheet from "./pages/tools/FigmaCheatsheet";
import Preview from "./pages/tools/Preview";

// Usage
import Deprecation from "./pages/usage/Deprecation";
import StartHere from "./pages/usage/StartHere";
import DeprecationList from "./pages/usage/DeprecationList";
import Codemods from "./pages/usage/Codemods";

// Design Guides
import Icons from "./pages/design-guides/Icons";
import Colors from "./pages/design-guides/Colors";
import Tokens from "./pages/design-guides/Tokens";
import Guides from "./pages/design-guides/Guides";
import I18n from "./pages/design-guides/I18n";
import Accessibility from "./pages/design-guides/Accessibility";
import Patterns from "./pages/design-guides/Patterns";
import UXWriting from "./pages/design-guides/UXWriting";

// Categories
import Accessory from "./pages/categories/Accessory";
import Form from "./pages/categories/Form";
import Formatter from "./pages/categories/Formatter";
import Hooks from "./pages/categories/Hooks";
import Illustration from "./pages/categories/Illustration";
import Layout from "./pages/categories/Layout";
import Navigation from "./pages/categories/Navigation";
import Spreadsheet from "./pages/categories/Spreadsheet";
import Table from "./pages/categories/Table";
import Typography from "./pages/categories/Typography";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <DocsSidebar />
            <div className="flex-1">
              <header className="h-16 border-b border-border flex items-center px-6 sticky top-0 bg-background z-10">
                <SidebarTrigger />
              </header>
              <main className="font-inter">
                <Routes>
                  <Route path="/" element={<Index />} />
                  
                  {/* Getting Started */}
                  <Route path="/getting-started/components" element={<Components />} />
                  <Route path="/getting-started/contribute" element={<Contribute />} />
                  <Route path="/getting-started/support" element={<Support />} />
                  
                  {/* Tools */}
                  <Route path="/tools/playroom" element={<Playroom />} />
                  <Route path="/tools/figma-library" element={<FigmaLibrary />} />
                  <Route path="/tools/figma-cheatsheet" element={<FigmaCheatsheet />} />
                  <Route path="/tools/preview" element={<Preview />} />
                  
                  {/* Usage */}
                  <Route path="/usage/deprecation" element={<Deprecation />} />
                  <Route path="/usage/start-here" element={<StartHere />} />
                  <Route path="/usage/deprecation-list" element={<DeprecationList />} />
                  <Route path="/usage/codemods" element={<Codemods />} />
                  
                  {/* Design Guides */}
                  <Route path="/design-guides/icons" element={<Icons />} />
                  <Route path="/design-guides/colors" element={<Colors />} />
                  <Route path="/design-guides/tokens" element={<Tokens />} />
                  <Route path="/design-guides/guides" element={<Guides />} />
                  <Route path="/design-guides/i18n" element={<I18n />} />
                  <Route path="/design-guides/accessibility" element={<Accessibility />} />
                  <Route path="/design-guides/patterns" element={<Patterns />} />
                  <Route path="/design-guides/ux-writing" element={<UXWriting />} />
                  
                  {/* Categories */}
                  <Route path="/categories/accessory" element={<Accessory />} />
                  <Route path="/categories/form" element={<Form />} />
                  <Route path="/categories/formatter" element={<Formatter />} />
                  <Route path="/categories/hooks" element={<Hooks />} />
                  <Route path="/categories/illustration" element={<Illustration />} />
                  <Route path="/categories/layout" element={<Layout />} />
                  <Route path="/categories/navigation" element={<Navigation />} />
                  <Route path="/categories/spreadsheet" element={<Spreadsheet />} />
                  <Route path="/categories/table" element={<Table />} />
                  <Route path="/categories/typography" element={<Typography />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
