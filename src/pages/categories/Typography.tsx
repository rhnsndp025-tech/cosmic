import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Typography = () => {
  return (
    <ArticleLayout
      title="Typography Components"
      description="Create beautiful, accessible text hierarchies with ink typography."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Typography components provide semantic text elements with consistent styling,
          ensuring readability and visual hierarchy across your application.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Type Scale
        </h2>
        <div className="space-y-4 border border-border rounded-lg p-6">
          <div>
            <h1 className="text-5xl font-playfair font-bold">Heading 1</h1>
            <code className="text-sm text-muted-foreground">text-5xl font-playfair font-bold</code>
          </div>
          <div>
            <h2 className="text-4xl font-playfair font-bold">Heading 2</h2>
            <code className="text-sm text-muted-foreground">text-4xl font-playfair font-bold</code>
          </div>
          <div>
            <h3 className="text-3xl font-playfair font-semibold">Heading 3</h3>
            <code className="text-sm text-muted-foreground">text-3xl font-playfair font-semibold</code>
          </div>
          <div>
            <h4 className="text-2xl font-playfair font-semibold">Heading 4</h4>
            <code className="text-sm text-muted-foreground">text-2xl font-playfair font-semibold</code>
          </div>
          <div>
            <p className="text-lg font-inter">Body Large</p>
            <code className="text-sm text-muted-foreground">text-lg font-inter</code>
          </div>
          <div>
            <p className="text-base font-inter">Body Regular</p>
            <code className="text-sm text-muted-foreground">text-base font-inter</code>
          </div>
          <div>
            <p className="text-sm font-inter">Body Small</p>
            <code className="text-sm text-muted-foreground">text-sm font-inter</code>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Usage
        </h3>
        <CodeBlock
          code={`import { Heading, Text, Caption } from '@ink/design-system';\n\n<Heading level={1}>Page Title</Heading>\n<Heading level={2}>Section Title</Heading>\n<Text size="lg">Large body text</Text>\n<Text>Regular body text</Text>\n<Caption>Small supplementary text</Caption>`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Font Families
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-6 py-2">
            <h4 className="font-playfair font-semibold text-lg mb-1">Playfair Display</h4>
            <p className="text-sm text-muted-foreground">
              Elegant serif font for headings and display text
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h4 className="font-inter font-semibold mb-1">Inter</h4>
            <p className="text-sm text-muted-foreground">
              Clean, legible sans-serif for body text and UI
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Best Practices
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Use one H1 per page for proper document structure</li>
          <li>Don't skip heading levels (H1 → H3)</li>
          <li>Limit line length to 60-80 characters for readability</li>
          <li>Maintain sufficient line height (1.5-1.6 for body text)</li>
          <li>Use sufficient contrast between text and background</li>
        </ul>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Text Utilities
        </h3>
        <CodeBlock
          code={`// Truncate long text\n<Text truncate>This is a very long text that will be truncated...</Text>\n\n// Limit lines with ellipsis\n<Text lineClamp={3}>Multi-line text that will show ellipsis after 3 lines...</Text>\n\n// Text alignment\n<Text align="center">Centered text</Text>`}
        />

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Responsive Typography
          </h4>
          <p className="text-muted-foreground">
            Font sizes automatically scale on smaller screens. You can also use
            responsive size props for fine-grained control.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Typography;
