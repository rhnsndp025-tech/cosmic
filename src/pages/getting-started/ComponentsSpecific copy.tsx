import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Add these imports
import { Separator } from "@/components/ui/separator"; // Add this import
import Index from "./importComponents";


const ComponentSpecific = () => {
  return (
    <ArticleLayout
      title="Components"
      description="Explore the comprehensive collection of reusable components in the Cosmic design system."
    >
<Index />
      
   <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Using Components
        </h3>
        <p className="leading-relaxed mb-4">
          Import components directly from the design system package:
        </p>
      
      <section className="space-y-2">
        <Components_new />
        
        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Using Components
        </h3>
        <p className="leading-relaxed mb-4">
          Import components directly from the design system package:
        </p>
        <CodeBlock
          code={`import { Button, Input, Card, Badge } from '@ink/design-system';\n\nfunction MyComponent() {\n  return (\n    <Card>\n      <Input placeholder="Enter text" />\n      <Badge variant="success">Active</Badge>\n      <Button>Submit</Button>\n    </Card>\n  );\n}`}
        />

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Explore Categories
          </h4>
          <p className="text-muted-foreground">
            Browse components by category using the tabs above to find exactly what you need.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

const componentCategories = {
  basics: [
    { name: "Accordion", description: "Show and hide sections of related content." },
    { name: "Action Bar", description: "Display a bottom action bar with a set of actions." },
    { name: "Alert", description: "Communicate a state that affects a system or feature." },
    { name: "Aspect Ratio", description: "Maintain a consistent aspect ratio for media content." },
    { name: "Avatar", description: "Represent a user's profile picture or initials." },
    { name: "Badge", description: "Highlight an item's status for quick recognition." },
    { name: "Bleed", description: "Allow content to break out of its container." },
    { name: "Blockquote", description: "Display quoted or referenced text content." },
    { name: "Button", description: "Trigger actions or submit forms." },
    { name: "Typography", description: "Consistent text hierarchy and styles." },
    { name: "Input", description: "Form input fields for user data." },
    { name: "Checkbox", description: "Toggleable selection controls." },
    { name: "Radio Button", description: "Single selection from multiple options." },
    { name: "Toggle", description: "On/off switches for settings." },
    { name: "Slider", description: "Drag to select a value from a range." }
  ],
  navigation: [
    { name: "Navigation", description: "App and page navigation menus." },
    { name: "Tabs", description: "Tabbed interface for related content." },
    { name: "Pagination", description: "Navigate through multiple pages of data." },
    { name: "Drawer", description: "Slide-out panel for navigation or actions." }
  ],
  data: [
    { name: "Card", description: "Container for related content and actions." },
    { name: "Data Table", description: "Display tabular data with sorting/filtering." },
    { name: "Tag", description: "Categorize and label content." },
    { name: "Collapsible", description: "Expandable/collapsible content sections." }
  ],
  feedback: [
    { name: "Alert Dialog", description: "Modal for critical confirmations." },
    { name: "Banner", description: "Page-level notifications and messages." },
    { name: "Progress", description: "Visualize task completion status." }
  ]
};

const Components_new = () => {
  return (
    <div className="py-8 px-1">
      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        {Object.entries(componentCategories).map(([category, components]) => (
          <TabsContent key={category} value={category} className="space-y-8 mt-6">
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {components.map((component) => (
                <div
                  key={component.name}
                  className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 flex h-24 w-full items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
                    {component.name}
                  </div>
                  <h4 className="text-base font-medium mb-1">{component.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ComponentSpecific;
