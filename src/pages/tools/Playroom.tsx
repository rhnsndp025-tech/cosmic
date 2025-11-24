import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Playroom = () => {
  return (
    <ArticleLayout
      title="Playroom"
      description="Interactive design system playground for rapid prototyping and experimentation."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Playroom is an interactive development environment for rapidly prototyping with ink
          components. Experiment with different combinations, test responsive layouts, and
          generate production-ready code.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Real-time component preview</li>
          <li>Multiple viewport sizes</li>
          <li>Share prototypes with your team</li>
          <li>Export code snippets</li>
          <li>Theme switching</li>
        </ul>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Getting Started
        </h3>
        <p className="leading-relaxed mb-4">
          Launch Playroom in your local environment:
        </p>
        <CodeBlock
          code={`npm run playroom:start\n# Playroom will open at http://localhost:9000`}
        />

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Pro Tip
          </h4>
          <p className="text-muted-foreground">
            Use Playroom to quickly test component combinations before implementing them
            in your application. Share the URL with designers for quick feedback cycles.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Playroom;
