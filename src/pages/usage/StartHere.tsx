import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const StartHere = () => {
  return (
    <ArticleLayout
      title="Start Here"
      description="Your first steps with the Cosmic design system."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          New to ink? This guide will walk you through everything you need to know to
          start building with our design system.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Quick Start
        </h2>
        <ol className="list-decimal list-inside space-y-4 ml-4">
          <li className="text-lg">
            <span className="font-semibold">Install the package</span>
            <CodeBlock code={`npm install @cosmic/design-system`} />
          </li>
          <li className="text-lg mt-6">
            <span className="font-semibold">Import the CSS</span>
            <CodeBlock code={`import '@ink/design-system/styles.css';`} />
          </li>
          <li className="text-lg mt-6">
            <span className="font-semibold">Start using components</span>
            <CodeBlock
              code={`import { Button } from '@ink/design-system';\n\nfunction App() {\n  return <Button>Get Started</Button>;\n}`}
            />
          </li>
        </ol>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Essential Reading
        </h2>
        <div className="grid gap-4">
          <a
            href="/getting-started/components"
            className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
          >
            <h3 className="text-xl font-playfair font-semibold mb-2">Components Overview</h3>
            <p className="text-muted-foreground">
              Learn about available components and how to use them
            </p>
          </a>
          <a
            href="/design-guides/tokens"
            className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
          >
            <h3 className="text-xl font-playfair font-semibold mb-2">Design Tokens</h3>
            <p className="text-muted-foreground">
              Understand the foundational design values that power ink
            </p>
          </a>
          <a
            href="/design-guides/accessibility"
            className="border border-border rounded-lg p-6 hover:border-accent transition-colors"
          >
            <h3 className="text-xl font-playfair font-semibold mb-2">Accessibility</h3>
            <p className="text-muted-foreground">
              Build inclusive experiences with our accessibility guidelines
            </p>
          </a>
        </div>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Need Help?
          </h4>
          <p className="text-muted-foreground">
            Join our community or check out the support page for assistance.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default StartHere;
