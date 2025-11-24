import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Accessibility = () => {
  return (
    <ArticleLayout
      title="Accessibility"
      description="Building inclusive experiences that work for everyone."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Accessibility is not optional—it's fundamental to ink's design philosophy.
          Every component is built to WCAG 2.1 AA standards, ensuring your applications
          are usable by everyone.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Core Principles
        </h2>
        <div className="grid gap-4">
          <div className="border-l-4 border-accent pl-6 py-3">
            <h3 className="font-playfair font-semibold mb-2">Perceivable</h3>
            <p className="text-sm text-muted-foreground">
              Information must be presentable in ways users can perceive
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-3">
            <h3 className="font-playfair font-semibold mb-2">Operable</h3>
            <p className="text-sm text-muted-foreground">
              Interface components must be operable by all users
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-3">
            <h3 className="font-playfair font-semibold mb-2">Understandable</h3>
            <p className="text-sm text-muted-foreground">
              Information and operation must be understandable
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-3">
            <h3 className="font-playfair font-semibold mb-2">Robust</h3>
            <p className="text-sm text-muted-foreground">
              Content must work with current and future technologies
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Keyboard Navigation
        </h3>
        <p className="leading-relaxed">
          All interactive elements must be keyboard accessible:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>Tab to navigate between focusable elements</li>
          <li>Enter/Space to activate buttons and links</li>
          <li>Arrow keys for menus and lists</li>
          <li>Escape to close modals and dropdowns</li>
        </ul>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          ARIA Labels
        </h3>
        <p className="leading-relaxed mb-4">
          Provide context for screen readers:
        </p>
        <CodeBlock
          code={`// Icon-only button\n<Button aria-label="Close dialog">\n  <X className="h-4 w-4" />\n</Button>\n\n// Decorative icon\n<Search className="h-4 w-4" aria-hidden="true" />\n<span>Search</span>`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Color Contrast
        </h3>
        <p className="leading-relaxed">
          All ink color combinations meet WCAG AA standards (4.5:1 for normal text,
          3:1 for large text). Use the foreground tokens to ensure proper contrast:
        </p>
        <CodeBlock
          code={`// ✅ Good - uses foreground token\n<div className="bg-primary text-primary-foreground">\n  High contrast text\n</div>\n\n// ❌ Bad - manual color may have poor contrast\n<div className="bg-primary text-gray-300">\n  Potentially low contrast\n</div>`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Focus Indicators
        </h3>
        <p className="leading-relaxed">
          ink components include visible focus indicators by default. Never remove them
          with outline: none unless providing an alternative indicator.
        </p>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Testing Tools
          </h4>
          <p className="text-muted-foreground mb-2">
            Use these tools to validate accessibility:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
            <li>axe DevTools browser extension</li>
            <li>Lighthouse in Chrome DevTools</li>
            <li>NVDA or JAWS screen readers</li>
            <li>Keyboard-only navigation testing</li>
          </ul>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Accessibility;
