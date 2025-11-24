import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Components = () => {
  return (
    <ArticleLayout
      title="Components"
      description="Explore the comprehensive collection of reusable components in the Cosmic design system."
    >
      <section className="space-y-6">
        {/* <p className="text-lg leading-relaxed">
          Cosmos provides a rich library of components designed to help you build consistent and
          accessible user interfaces. Each component is carefully crafted to work seamlessly
          together while maintaining flexibility for customization.
        </p> */}

        {/* <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Component Philosophy
        </h2>
        <p className="leading-relaxed">
          Our components follow key principles:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Accessibility first - WCAG 2.1 AA compliant</li>
          <li>Composable and flexible</li>
          <li>Consistent visual language</li>
          <li>Performance optimized</li>
          <li>Fully typed with TypeScript</li>
        </ul> */}


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
            Browse components by category in the navigation to find exactly what you need.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};


const componentCards = [
  {
    name: "Accordion",
    description: "Show and hide sections of related content."
  },
  {
    name: "Action Bar",
    description: "Display a bottom action bar with a set of actions."
  },
  {
    name: "Alert",
    description: "Communicate a state that affects a system or feature."
  },
  {
    name: "Aspect Ratio",
    description: "Maintain a consistent aspect ratio for media content."
  },
  {
    name: "Avatar",
    description: "Represent a user’s profile picture or initials."
  },
  {
    name: "Badge",
    description: "Highlight an item's status for quick recognition."
  },
  {
    name: "Bleed",
    description: "Allow content to break out of its container."
  },
  {
    name: "Blockquote",
    description: "Display quoted or referenced text content."
  },
  {
    name: "Button",
    description: "Trigger actions or submit forms."
  },
];

const Components_new = () => {
  return (
    <
    >

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {componentCards.map((component) => (
            <div
              key={component.name}
              className="rounded-lg border bg-card p-5 shadow-sm transition hover:shadow-md"
            >
              {/* Icon placeholder area, similar to the grey block in the screenshot */}
              <div className="mb-4 flex h-24 w-full items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
                {/* You can swap this with actual icons later */}
                {component.name}
              </div>

              <h4 className="text-base font-medium mb-1">{component.name}</h4>
              <p className="text-sm text-muted-foreground">
                {component.description}
              </p>
            </div>
          ))}
        </div>
    </>
  );
};


export default Components;
