import { ArticleLayout } from "@/components/ArticleLayout";

const UXWriting = () => {
  return (
    <ArticleLayout
      title="UX Writing"
      description="Guidelines for writing clear, helpful, and consistent interface copy."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Great UX writing helps users understand your interface and complete their tasks
          confidently. Follow these guidelines to create clear, consistent copy.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Voice and Tone
        </h2>
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Clear and Concise</h3>
            <p className="text-muted-foreground mb-3">
              Use simple language. Every word should serve a purpose.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-destructive/10 p-4 rounded">
                <p className="text-sm font-semibold mb-1">❌ Don't</p>
                <p className="text-sm">"Please proceed to click on the button below to continue"</p>
              </div>
              <div className="bg-accent/10 p-4 rounded">
                <p className="text-sm font-semibold mb-1">✅ Do</p>
                <p className="text-sm">"Click Continue"</p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Action-Oriented</h3>
            <p className="text-muted-foreground mb-3">
              Use verbs that describe the action being taken.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-destructive/10 p-4 rounded">
                <p className="text-sm font-semibold mb-1">❌ Don't</p>
                <p className="text-sm">"OK" / "Yes, I'm sure"</p>
              </div>
              <div className="bg-accent/10 p-4 rounded">
                <p className="text-sm font-semibold mb-1">✅ Do</p>
                <p className="text-sm">"Save changes" / "Delete account"</p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Helpful and Supportive</h3>
            <p className="text-muted-foreground mb-3">
              Guide users, especially during errors or empty states.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-destructive/10 p-4 rounded">
                <p className="text-sm font-semibold mb-1">❌ Don't</p>
                <p className="text-sm">"Error: Invalid input"</p>
              </div>
              <div className="bg-accent/10 p-4 rounded">
                <p className="text-sm font-semibold mb-1">✅ Do</p>
                <p className="text-sm">"Email should include an @ symbol"</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Component-Specific Guidelines
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-playfair font-semibold mb-1">Buttons</h3>
            <p className="text-sm text-muted-foreground">
              Start with a verb: "Save", "Delete", "Continue", "Learn more"
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-playfair font-semibold mb-1">Error Messages</h3>
            <p className="text-sm text-muted-foreground">
              Explain what went wrong and how to fix it
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-playfair font-semibold mb-1">Placeholders</h3>
            <p className="text-sm text-muted-foreground">
              Show examples of expected input: "name@example.com"
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-playfair font-semibold mb-1">Empty States</h3>
            <p className="text-sm text-muted-foreground">
              Tell users why it's empty and what they can do next
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-playfair font-semibold mb-1">Success Messages</h3>
            <p className="text-sm text-muted-foreground">
              Confirm the action was completed: "Changes saved"
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Capitalization
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Sentence case</strong> for most UI text and descriptions</li>
          <li><strong>Title Case</strong> for headings and navigation items</li>
          <li><strong>ALL CAPS</strong> sparingly, only for emphasis or labels</li>
        </ul>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Consistency Matters
          </h4>
          <p className="text-muted-foreground">
            Maintain consistent terminology throughout your application. If you call
            something a "workspace" in one place, don't call it a "project" elsewhere.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default UXWriting;
