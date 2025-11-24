import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Form = () => {
  return (
    <ArticleLayout
      title="Form Components"
      description="Build accessible, user-friendly forms with ink form components."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Form components provide the building blocks for collecting user input with
          proper validation, error handling, and accessibility features.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Core Form Components
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Input</h3>
            <p className="text-muted-foreground mb-4">
              Text input field with support for various types.
            </p>
            <CodeBlock
              code={`import { Input, Label } from '@ink/design-system';\n\n<div>\n  <Label htmlFor="email">Email</Label>\n  <Input \n    id="email" \n    type="email" \n    placeholder="you@example.com"\n  />\n</div>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Checkbox</h3>
            <p className="text-muted-foreground mb-4">
              Select one or multiple options.
            </p>
            <CodeBlock
              code={`import { Checkbox, Label } from '@ink/design-system';\n\n<div className="flex items-center space-x-2">\n  <Checkbox id="terms" />\n  <Label htmlFor="terms">Accept terms</Label>\n</div>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Select</h3>
            <p className="text-muted-foreground mb-4">
              Choose from a list of options.
            </p>
            <CodeBlock
              code={`import { Select } from '@ink/design-system';\n\n<Select>\n  <SelectTrigger>\n    <SelectValue placeholder="Choose option" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="1">Option 1</SelectItem>\n    <SelectItem value="2">Option 2</SelectItem>\n  </SelectContent>\n</Select>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Textarea</h3>
            <p className="text-muted-foreground mb-4">
              Multi-line text input for longer content.
            </p>
            <CodeBlock
              code={`import { Textarea, Label } from '@ink/design-system';\n\n<div>\n  <Label htmlFor="message">Message</Label>\n  <Textarea \n    id="message" \n    placeholder="Your message..."\n    rows={4}\n  />\n</div>`}
            />
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Best Practices
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Always pair inputs with labels for accessibility</li>
          <li>Provide helpful error messages that explain how to fix issues</li>
          <li>Use appropriate input types (email, tel, url, etc.)</li>
          <li>Show required fields clearly</li>
          <li>Validate inline when possible for immediate feedback</li>
        </ul>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Form Validation
          </h4>
          <p className="text-muted-foreground">
            See the{" "}
            <a href="/design-guides/patterns" className="text-accent hover:underline">
              Component Patterns
            </a>{" "}
            guide for complete form validation examples using react-hook-form.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Form;
