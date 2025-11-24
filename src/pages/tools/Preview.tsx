import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Preview = () => {
  return (
    <ArticleLayout
      title="Preview"
      description="Preview and test components across different states and viewports."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          The Preview tool helps you visualize components in different states, themes, and
          viewport sizes before implementation. Perfect for quality assurance and design reviews.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Features
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Multi-viewport preview (mobile, tablet, desktop)</li>
          <li>Theme switching (light/dark mode)</li>
          <li>Component state visualization</li>
          <li>Accessibility checker integration</li>
          <li>Screenshot and sharing capabilities</li>
        </ul>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Running Preview
        </h3>
        <p className="leading-relaxed mb-4">
          Start the preview server:
        </p>
        <CodeBlock
          code={`npm run preview\n# Preview opens at http://localhost:3000/preview`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Keyboard Shortcuts
        </h3>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <kbd className="px-3 py-1.5 bg-code rounded font-mono text-sm">T</kbd>
            <span>Toggle theme</span>
          </div>
          <div className="flex items-center gap-4">
            <kbd className="px-3 py-1.5 bg-code rounded font-mono text-sm">1-3</kbd>
            <span>Switch viewport size</span>
          </div>
          <div className="flex items-center gap-4">
            <kbd className="px-3 py-1.5 bg-code rounded font-mono text-sm">A</kbd>
            <span>Toggle accessibility overlay</span>
          </div>
          <div className="flex items-center gap-4">
            <kbd className="px-3 py-1.5 bg-code rounded font-mono text-sm">S</kbd>
            <span>Take screenshot</span>
          </div>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Preview;
