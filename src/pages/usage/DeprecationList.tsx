import { ArticleLayout } from "@/components/ArticleLayout";

const DeprecationList = () => {
  return (
    <ArticleLayout
      title="Deprecation List and Dates"
      description="Complete list of deprecated features with timelines and migration paths."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          This page tracks all deprecated features, their removal dates, and recommended
          alternatives. Check back regularly to stay up to date.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Active Deprecations
        </h2>
        <div className="space-y-4">
          <div className="border border-destructive/50 bg-destructive/5 rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-playfair font-semibold">Legacy Button Component</h3>
              <span className="text-sm bg-destructive text-destructive-foreground px-3 py-1 rounded">
                Removal: v3.0.0
              </span>
            </div>
            <p className="text-muted-foreground mb-3">
              The old Button component is being replaced with an updated version that
              includes better accessibility and variant support.
            </p>
            <p className="text-sm">
              <span className="font-semibold">Migration:</span> Replace <code className="bg-code px-2 py-0.5 rounded">LegacyButton</code> with <code className="bg-code px-2 py-0.5 rounded">Button</code>
            </p>
          </div>

          <div className="border border-destructive/50 bg-destructive/5 rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-playfair font-semibold">Old Color Tokens</h3>
              <span className="text-sm bg-destructive text-destructive-foreground px-3 py-1 rounded">
                Removal: v3.5.0
              </span>
            </div>
            <p className="text-muted-foreground mb-3">
              Color token naming has been updated to better reflect semantic meaning
              and support new theming capabilities.
            </p>
            <p className="text-sm">
              <span className="font-semibold">Migration:</span> Run codemod <code className="bg-code px-2 py-0.5 rounded">npx @cosmic/codemods color-tokens</code>
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Recently Removed
        </h2>
        <div className="space-y-3">
          <div className="border border-border rounded-lg p-5 opacity-60">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-playfair font-semibold">Grid System v1</h3>
              <span className="text-sm text-muted-foreground">Removed: v2.0.0</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Replaced with CSS Grid-based layout components
            </p>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Automated Migrations
          </h4>
          <p className="text-muted-foreground">
            Most deprecations include automated codemods. Learn more about using codemods
            on our <a href="/usage/codemods" className="text-accent hover:underline">Codemods 101</a> page.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default DeprecationList;
