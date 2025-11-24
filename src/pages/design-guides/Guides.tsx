import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Guides = () => {
  return (
    <ArticleLayout
      title="Guides"
      description="Comprehensive guides for working with the Cosmic design system."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          These guides provide in-depth knowledge on specific topics to help you make
          the most of the Cosmic design system in your projects.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Getting the Most from ink
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Theming Guide</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to create custom themes that reflect your brand while maintaining
              ink's design principles and accessibility standards.
            </p>
            <CodeBlock
              code={`:root {\n  --primary: 220 70% 50%;\n  --accent: 160 80% 45%;\n  /* Override other tokens */\n}`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Component Composition</h3>
            <p className="text-muted-foreground">
              Combine ink components to create complex, reusable patterns. Learn best
              practices for composition, prop passing, and state management.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Performance Optimization</h3>
            <p className="text-muted-foreground">
              Tips for maximizing performance when using ink components, including
              lazy loading, tree shaking, and efficient re-renders.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Testing Strategies</h3>
            <p className="text-muted-foreground">
              Best practices for testing applications built with ink, including unit
              tests, integration tests, and accessibility testing.
            </p>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            More Resources
          </h4>
          <p className="text-muted-foreground">
            Check out our video tutorials and interactive examples in Playroom for
            hands-on learning experiences.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Guides;
