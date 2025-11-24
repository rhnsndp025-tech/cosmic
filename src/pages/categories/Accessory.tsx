import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Accessory = () => {
  return (
    <ArticleLayout
      title="Accessory Components"
      description="Small, focused components that enhance the user experience."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Accessory components are lightweight elements that add polish and functionality
          to your interface without dominating the layout.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Components in this Category
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Badge</h3>
            <p className="text-muted-foreground mb-4">
              Display status, labels, or counts in a compact format.
            </p>
            <CodeBlock
              code={`import { Badge } from '@ink/design-system';\n\n<Badge variant="default">New</Badge>\n<Badge variant="success">Active</Badge>\n<Badge variant="warning">Pending</Badge>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Tooltip</h3>
            <p className="text-muted-foreground mb-4">
              Provide additional context on hover.
            </p>
            <CodeBlock
              code={`import { Tooltip } from '@ink/design-system';\n\n<Tooltip content="Click to edit">\n  <Button>Edit</Button>\n</Tooltip>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Avatar</h3>
            <p className="text-muted-foreground mb-4">
              Display user profile images with fallback support.
            </p>
            <CodeBlock
              code={`import { Avatar } from '@ink/design-system';\n\n<Avatar src="/user.jpg" alt="User name" fallback="UN" />`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Separator</h3>
            <p className="text-muted-foreground mb-4">
              Visually divide content sections.
            </p>
            <CodeBlock
              code={`import { Separator } from '@ink/design-system';\n\n<Separator orientation="horizontal" />\n<Separator orientation="vertical" />`}
            />
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Usage Tips
          </h4>
          <p className="text-muted-foreground">
            Accessory components work best when used sparingly. Too many badges or
            tooltips can clutter the interface and reduce their effectiveness.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Accessory;
