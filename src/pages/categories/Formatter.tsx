import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Formatter = () => {
  return (
    <ArticleLayout
      title="Formatter Components"
      description="Components for displaying formatted data like dates, numbers, and currencies."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Formatter components ensure consistent presentation of data throughout your
          application, with built-in support for localization and various formats.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Available Formatters
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">DateFormatter</h3>
            <p className="text-muted-foreground mb-4">
              Display dates in consistent, localized formats.
            </p>
            <CodeBlock
              code={`import { DateFormatter } from '@ink/design-system';\n\n<DateFormatter \n  date={new Date()} \n  format="long" \n  locale="en-US"\n/>\n// Output: "November 23, 2025"`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">NumberFormatter</h3>
            <p className="text-muted-foreground mb-4">
              Format numbers with proper separators and decimals.
            </p>
            <CodeBlock
              code={`import { NumberFormatter } from '@ink/design-system';\n\n<NumberFormatter \n  value={1234567.89} \n  decimals={2}\n  locale="en-US"\n/>\n// Output: "1,234,567.89"`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">CurrencyFormatter</h3>
            <p className="text-muted-foreground mb-4">
              Display monetary values with correct currency symbols.
            </p>
            <CodeBlock
              code={`import { CurrencyFormatter } from '@ink/design-system';\n\n<CurrencyFormatter \n  value={1299.99} \n  currency="USD"\n  locale="en-US"\n/>\n// Output: "$1,299.99"`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">RelativeTime</h3>
            <p className="text-muted-foreground mb-4">
              Show relative time (e.g., "2 hours ago").
            </p>
            <CodeBlock
              code={`import { RelativeTime } from '@ink/design-system';\n\n<RelativeTime \n  date={new Date(Date.now() - 3600000)}\n/>\n// Output: "1 hour ago"`}
            />
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Localization Support
        </h3>
        <p className="leading-relaxed">
          All formatters support localization through the locale prop. They use the
          browser's Intl API to ensure accurate formatting for different regions.
        </p>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Performance Tip
          </h4>
          <p className="text-muted-foreground">
            Formatter components are optimized to cache formatting operations. For
            large lists, consider memoizing the formatted values.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Formatter;
