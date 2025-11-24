import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Illustration = () => {
  return (
    <ArticleLayout
      title="Illustration Components"
      description="Visual components for empty states, errors, and feature highlights."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Illustration components add visual interest and clarity to your interface,
          making it easier for users to understand states and navigate your application.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Component Types
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">EmptyState</h3>
            <p className="text-muted-foreground mb-4">
              Communicate when there's no content to display.
            </p>
            <CodeBlock
              code={`import { EmptyState } from '@ink/design-system';\n\n<EmptyState\n  icon={<Inbox className="h-16 w-16" />}\n  title="No messages"\n  description="Your inbox is empty"\n  action={\n    <Button>Compose Message</Button>\n  }\n/>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">ErrorState</h3>
            <p className="text-muted-foreground mb-4">
              Display friendly error messages with recovery options.
            </p>
            <CodeBlock
              code={`import { ErrorState } from '@ink/design-system';\n\n<ErrorState\n  title="Something went wrong"\n  description="We couldn't load your data"\n  action={\n    <Button onClick={retry}>Try Again</Button>\n  }\n/>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">FeatureHighlight</h3>
            <p className="text-muted-foreground mb-4">
              Showcase features with accompanying illustrations.
            </p>
            <CodeBlock
              code={`import { FeatureHighlight } from '@ink/design-system';\n\n<FeatureHighlight\n  illustration={<SecurityIcon />}\n  title="Bank-level security"\n  description="Your data is encrypted end-to-end"\n/>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">LoadingState</h3>
            <p className="text-muted-foreground mb-4">
              Show progress with branded loading animations.
            </p>
            <CodeBlock
              code={`import { LoadingState } from '@ink/design-system';\n\n<LoadingState\n  message="Loading your dashboard..."\n  size="large"\n/>`}
            />
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Design Guidelines
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Use illustrations to add personality and reduce friction</li>
          <li>Keep illustrations simple and on-brand</li>
          <li>Always provide text alongside illustrations for accessibility</li>
          <li>Offer actionable next steps when appropriate</li>
        </ul>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Custom Illustrations
          </h4>
          <p className="text-muted-foreground">
            You can replace default illustrations with your own brand assets while
            maintaining the component structure and accessibility features.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Illustration;
