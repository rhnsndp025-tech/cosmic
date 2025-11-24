import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Codemods = () => {
  return (
    <ArticleLayout
      title="Codemods 101"
      description="Automated code transformations to help migrate between ink versions."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Codemods are automated scripts that transform your codebase to adapt to new
          versions of ink. They save time and reduce errors when migrating.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          What Are Codemods?
        </h2>
        <p className="leading-relaxed">
          Codemods are transformation scripts that parse your code, identify patterns,
          and automatically update them to match new APIs or conventions. They're
          particularly useful when dealing with breaking changes across large codebases.
        </p>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Running a Codemod
        </h3>
        <p className="leading-relaxed mb-4">
          Execute a codemod on your project:
        </p>
        <CodeBlock
          code={`npx @cosmic/codemods <transform-name> <path>\n\n# Example:\nnpx @cosmic/codemods button-variant src/`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Available Codemods
        </h3>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-5">
            <h4 className="font-playfair font-semibold mb-2">button-variant</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Migrates Button component variants to new naming convention
            </p>
            <code className="text-sm bg-code px-2 py-1 rounded">
              npx @cosmic/codemods button-variant src/
            </code>
          </div>
          <div className="border border-border rounded-lg p-5">
            <h4 className="font-playfair font-semibold mb-2">color-tokens</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Updates color token references to new semantic naming
            </p>
            <code className="text-sm bg-code px-2 py-1 rounded">
              npx @cosmic/codemods color-tokens src/
            </code>
          </div>
          <div className="border border-border rounded-lg p-5">
            <h4 className="font-playfair font-semibold mb-2">import-paths</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Restructures import paths to match new package structure
            </p>
            <code className="text-sm bg-code px-2 py-1 rounded">
              npx @cosmic/codemods import-paths src/
            </code>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Best Practices
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Always commit your changes before running a codemod</li>
          <li>Review the diff after running to ensure correctness</li>
          <li>Run codemods one at a time for easier troubleshooting</li>
          <li>Test thoroughly after applying transformations</li>
        </ul>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Custom Codemods
          </h4>
          <p className="text-muted-foreground">
            Need a custom transformation? Check our contribution guide to learn how
            to create and share your own codemods with the community.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Codemods;
