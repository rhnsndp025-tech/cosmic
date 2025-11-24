import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Tokens = () => {
  return (
    <ArticleLayout
      title="Design Tokens"
      description="The foundational design values that power the Cosmic design system."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Design tokens are the atomic design decisions that define the visual language
          of ink. They ensure consistency across platforms and make theming effortless.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          What Are Design Tokens?
        </h2>
        <p className="leading-relaxed">
          Design tokens are named entities that store visual design attributes. They
          replace hard-coded values with reusable, semantic references that can be
          updated globally.
        </p>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Token Categories
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-6 py-2">
            <h4 className="font-playfair font-semibold mb-1">Color Tokens</h4>
            <p className="text-sm text-muted-foreground">
              Semantic color values like primary, accent, background, and foreground
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h4 className="font-playfair font-semibold mb-1">Typography Tokens</h4>
            <p className="text-sm text-muted-foreground">
              Font families, sizes, weights, and line heights
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h4 className="font-playfair font-semibold mb-1">Spacing Tokens</h4>
            <p className="text-sm text-muted-foreground">
              Consistent spacing scale for margins, padding, and gaps
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h4 className="font-playfair font-semibold mb-1">Border Tokens</h4>
            <p className="text-sm text-muted-foreground">
              Border widths, radius values, and styles
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Using Tokens in Code
        </h3>
        <p className="leading-relaxed mb-4">
          Access tokens through CSS variables or Tailwind utilities:
        </p>
        <CodeBlock
          code={`/* CSS Variables */\n.element {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n  border-radius: var(--radius);\n}\n\n/* Tailwind Classes */\n<div className="bg-background text-foreground rounded-lg">\n  Content\n</div>`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Customizing Tokens
        </h3>
        <p className="leading-relaxed mb-4">
          Override token values to match your brand:
        </p>
        <CodeBlock
          code={`:root {\n  --primary: 220 70% 50%;  /* Your brand color */\n  --radius: 0.75rem;       /* Adjust roundness */\n  --font-heading: 'Your Font', serif;\n}`}
        />

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Token Reference
          </h4>
          <p className="text-muted-foreground">
            View the complete token reference in our Figma library or by inspecting
            the CSS custom properties in your browser's dev tools.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Tokens;
