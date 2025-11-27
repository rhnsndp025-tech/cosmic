import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Home, Settings, User, Search } from "lucide-react";
import { IconGallery, IconCategory } from "@/components/IconGallery";


const customIconCategories: IconCategory[] = [
  {
    name: "Navigation",
    subcategories: [
      {
        name: "Primary Navigation",
        icons: [
          { name: "equity-awards", path: "/icons/navigation/primary/awards-2.svg", category: ["Navigation", "Primary Navigation"] },
          { name: "dashboard", path: "/icons/navigation/primary/dashboard.svg", category: ["Navigation", "Primary Navigation"] },
          { name: "ownership", path: "/icons/navigation/primary/ownership.svg", category: ["Navigation", "Primary Navigation"] },
          { name: "shareholders", path: "/icons/navigation/primary/shareholders.svg", category: ["Navigation", "Primary Navigation"] },
        ],
        subcategories: [],
      },
      {
        name: "Sub Navigation",
        icons: [
          { name: "chevron-left", path: "/icons/navigation/sub/chevron-left.svg", category: ["Navigation", "Sub Navigation"] },
          { name: "chevron-right", path: "/icons/navigation/sub/chevron-right.svg", category: ["Navigation", "Sub Navigation"] },
          { name: "chevron-down", path: "/icons/navigation/sub/chevron-down.svg", category: ["Navigation", "Sub Navigation"] },
          { name: "chevron-up", path: "/icons/navigation/sub/chevron-up.svg", category: ["Navigation", "Sub Navigation"] },
        ],
        subcategories: [],
      },
    ],
    icons: [],
  },
  {
    name: "Actions",
    icons: [
      { name: "edit", path: "/icons/actions/edit.svg", category: ["Actions"] },
      { name: "delete", path: "/icons/actions/delete.svg", category: ["Actions"] },
      { name: "save", path: "/icons/actions/save.svg", category: ["Actions"] },
      { name: "cancel", path: "/icons/actions/cancel.svg", category: ["Actions"] },
      { name: "add", path: "/icons/actions/add.svg", category: ["Actions"] },
    ],
    subcategories: [],
  },
  {
    name: "Interface",
    icons: [
      { name: "close", path: "/icons/interface/close.svg", category: ["Interface"] },
      { name: "menu", path: "/icons/interface/menu.svg", category: ["Interface"] },
      { name: "search", path: "/icons/interface/search.svg", category: ["Interface"] },
      { name: "settings", path: "/icons/interface/settings.svg", category: ["Interface"] },
      { name: "help", path: "/icons/interface/help.svg", category: ["Interface"] },
    ],
    subcategories: [],
  },
  {
    name: "Status",
    icons: [
      { name: "success", path: "/icons/status/success.svg", category: ["Status"] },
      { name: "error", path: "/icons/status/error.svg", category: ["Status"] },
      { name: "warning", path: "/icons/status/warning.svg", category: ["Status"] },
      { name: "info", path: "/icons/status/info.svg", category: ["Status"] },
    ],
    subcategories: [],
  },
];

const Icons = () => {
  const currentIcons = [
    { name: "Home", Icon: Home },
    { name: "User", Icon: User },
    { name: "Settings", Icon: Settings },
    { name: "Search", Icon: Search },
    { name: "Heart", Icon: Heart },
  ];

  const futureIcons = [
    {
      name: "Workflow",
      description: "Visual shorthand for complex journeys and automations.",
    },
    {
      name: "Insight",
      description: "Highlights data-heavy surfaces like dashboards.",
    },
    {
      name: "Orbit",
      description: "Represents integrations, partners, and ecosystems.",
    },
  ];

  return (
    <ArticleLayout
      title="Icons"
      description="Guidelines for using icons consistently across your applications."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Icons are a crucial part of visual communication. ink uses a carefully curated
          icon library that maintains consistency across all components.
        </p>

                    <IconGallery categories={customIconCategories} />


        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Icon Library
        </h2>
        <p className="leading-relaxed">
          We use Lucide icons as our primary icon set, providing over 1,000 consistently
          designed icons that work perfectly with ink's design language.
        </p>

        <Tabs defaultValue="current" className="mt-8">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="current" className="flex-1 sm:flex-none">
              Current Icons
            </TabsTrigger>
            <TabsTrigger value="future" className="flex-1 sm:flex-none">
              Proposed Icons
            </TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <div className="flex flex-wrap gap-6 items-center my-6 p-6 border border-border rounded-lg">
             {currentIcons.map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <Icon className="w-8 h-8" />
                  Hello world i am here 
                  <span className="text-sm text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>


          </TabsContent>
          <TabsContent value="future">
            <div className="flex flex-wrap gap-10 items-center my-6 p-6 border border-border rounded-lg">
          {currentIcons.map(({ Icon, name }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <Icon className="w-8 h-8" />
                  Hello world i am here 
                  <span className="text-sm text-muted-foreground">{name}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        
          <Tabs defaultValue="lucide" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
          <TabsTrigger value="lucide">Lucide Icons</TabsTrigger>
          <TabsTrigger value="custom">Custom Icons</TabsTrigger>
        </TabsList>

        <TabsContent value="lucide" className="space-y-6">
          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              Icons are a crucial part of visual communication. ink uses a carefully curated
              icon library that maintains consistency across all components.
            </p>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
              Icon Library
            </h2>
            <p className="leading-relaxed">
              We use Lucide icons as our primary icon set, providing over 1,000 consistently
              designed icons that work perfectly with ink's design language.
            </p>

            <div className="flex gap-8 items-center my-8 p-6 border border-border rounded-lg">
              <Home className="w-8 h-8" />
              <User className="w-8 h-8" />
              <Settings className="w-8 h-8" />
              <Search className="w-8 h-8" />
              <Heart className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
              Usage
            </h3>
            <CodeBlock
              code={`import { Home, User, Settings } from 'lucide-react';\n\nfunction Navigation() {\n  return (\n    <nav>\n      <Home className="w-5 h-5" />\n      <User className="w-5 h-5" />\n      <Settings className="w-5 h-5" />\n    </nav>\n  );\n}`}
            />

            <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
              Size Guidelines
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Small:</strong> 16px (w-4 h-4) - For inline text and compact UI</li>
              <li><strong>Medium:</strong> 20px (w-5 h-5) - Default size for most use cases</li>
              <li><strong>Large:</strong> 24px (w-6 h-6) - For prominent actions and headers</li>
              <li><strong>XLarge:</strong> 32px (w-8 h-8) - For feature highlights and empty states</li>
            </ul>

            <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
              Color and Style
            </h3>
            <p className="leading-relaxed">
              Icons inherit the text color by default. Use utility classes or design tokens
              to apply specific colors:
            </p>
            <CodeBlock
              code={`<Home className="w-5 h-5 text-muted-foreground" />\n<Settings className="w-5 h-5 text-accent" />`}
            />

            <div className="bg-muted p-6 rounded-lg mt-10">
              <h4 className="text-lg font-playfair font-semibold mb-2">
                Accessibility
              </h4>
              <p className="text-muted-foreground">
                When icons convey meaning, always include appropriate ARIA labels.
                Decorative icons should have aria-hidden="true".
              </p>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <section className="space-y-6">
            <p className="text-lg leading-relaxed">
              In addition to Lucide icons, ink includes a collection of custom SVG icons
              tailored for specific use cases. Browse and manage all custom icons below.
            </p>

            <div className="bg-muted p-6 rounded-lg">
              <h4 className="text-lg font-playfair font-semibold mb-2">
                Icon Management
              </h4>
              <p className="text-muted-foreground mb-2">
                Each icon can have an updated version. Place updated SVG files in the corresponding
                <code className="mx-1 px-2 py-1 bg-code text-code-foreground rounded text-sm">public/icons/[category]/</code>
                directory to see them side-by-side with the original.
              </p>
              <p className="text-muted-foreground text-sm">
                Click the copy button on any icon card to copy its path for use in your components.
              </p>
            </div>

          </section>
        </TabsContent>
      </Tabs>

      </section>
    </ArticleLayout>
  );
};

export default Icons;
