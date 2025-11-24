import { ArticleLayout } from "@/components/ArticleLayout";

const Deprecation = () => {
  return (
    <ArticleLayout
      title="Deprecation"
      description="Understanding our deprecation policy and how to handle deprecated features."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          As ink evolves, some features may be deprecated in favor of better alternatives.
          We follow a structured deprecation process to ensure smooth transitions.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Deprecation Policy
        </h2>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Announcement</h3>
            <p className="text-muted-foreground">
              Deprecations are announced at least 6 months before removal. We publish
              detailed migration guides and provide tooling support where possible.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Warnings</h3>
            <p className="text-muted-foreground">
              Console warnings appear when using deprecated features. These include
              the deprecation date and links to migration documentation.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Removal</h3>
            <p className="text-muted-foreground">
              Deprecated features are removed in major version releases following
              the announced timeline. Breaking changes are clearly documented.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Staying Informed
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Subscribe to release notes and changelog updates</li>
          <li>Check the deprecation list regularly</li>
          <li>Use automated codemods when available</li>
          <li>Join our Discord for early announcements</li>
        </ul>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Current Deprecations
          </h4>
          <p className="text-muted-foreground">
            View the complete list of deprecated features and their replacement
            recommendations on our{" "}
            <a href="/usage/deprecation-list" className="text-accent hover:underline">
              Deprecation List
            </a>{" "}
            page.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Deprecation;
