import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Contribute = () => {
  return (
    <ArticleLayout
      title="How to Contribute to ink"
      description="Join our community and help make ink better for everyone."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          We welcome contributions from designers, developers, and anyone passionate about
          creating better design systems. Here's how you can get involved.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Ways to Contribute
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Code Contributions</h3>
            <p className="text-muted-foreground">
              Submit bug fixes, new features, or improvements to existing components.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Design Contributions</h3>
            <p className="text-muted-foreground">
              Help improve component designs, create new patterns, or enhance accessibility.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Documentation</h3>
            <p className="text-muted-foreground">
              Write guides, improve examples, or help translate documentation.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Getting Started
        </h2>
        <p className="leading-relaxed mb-4">
          Fork the repository and set up your development environment:
        </p>
        <CodeBlock
          code={`git clone https://github.com/yourorg/ink.git\ncd ink\nnpm install\nnpm run dev`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Contribution Guidelines
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Follow the existing code style and conventions</li>
          <li>Write clear, descriptive commit messages</li>
          <li>Include tests for new features</li>
          <li>Update documentation as needed</li>
          <li>Ensure all tests pass before submitting</li>
        </ul>
      </section>
    </ArticleLayout>
  );
};

export default Contribute;
