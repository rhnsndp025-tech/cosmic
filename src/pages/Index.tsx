import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Index = () => {
  return (
    <ArticleLayout
      title="Welcome to Cosmic"
      description="A modern design system for building beautiful, accessible, and consistent user interfaces."
    >
      <section className="space-y-6">
        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Getting Started
        </h2>
        <p className="text-lg leading-relaxed">
          Cosmic is a comprehensive design system that helps teams build
          consistent and accessible user interfaces. Whether you're a designer
          or developer, Cosmos provides the tools and guidelines you need to
          create exceptional digital experiences—grounded in a celestial,
          expansive design philosophy.
        </p>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Installation
        </h3>
        <p className="leading-relaxed mb-4">
          Get started by installing the Cosmic design system in your project:
        </p>
        <CodeBlock
          code={`npm install @cosmic/design-system\n# or\nyarn add @cosmic/design-system`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Basic Usage
        </h3>
        <p className="leading-relaxed mb-4">
          Import components and start building:
        </p>
        <CodeBlock
          code={`import { Button, Card } from '@ink/design-system';\n\nfunction App() {\n  return (\n    <Card>\n      <Button variant="primary">Click me</Button>\n    </Card>\n  );\n}`}
        />

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Need Help?
          </h4>
          <p className="text-muted-foreground">
            Visit our{" "}
            <a
              href="/getting-started/support"
              className="text-accent hover:underline"
            >
              Support & Feedback
            </a>{" "}
            page to get assistance or share your thoughts.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Index;
