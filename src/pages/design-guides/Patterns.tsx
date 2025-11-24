import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Patterns = () => {
  return (
    <ArticleLayout
      title="Component Patterns"
      description="Common UI patterns and how to implement them with ink components."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Learn proven patterns for combining ink components to solve common UI challenges
          effectively and accessibly.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Common Patterns
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">Form Validation</h3>
            <p className="leading-relaxed mb-4">
              Provide immediate feedback with error states:
            </p>
            <CodeBlock
              code={`import { Input, Label, Button } from '@ink/design-system';\nimport { useState } from 'react';\n\nfunction EmailForm() {\n  const [email, setEmail] = useState('');\n  const [error, setError] = useState('');\n\n  const validate = () => {\n    if (!email.includes('@')) {\n      setError('Please enter a valid email');\n      return false;\n    }\n    return true;\n  };\n\n  return (\n    <div>\n      <Label htmlFor="email">Email</Label>\n      <Input\n        id="email"\n        type="email"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        aria-invalid={!!error}\n        aria-describedby={error ? 'email-error' : undefined}\n      />\n      {error && (\n        <p id="email-error" className="text-destructive text-sm">\n          {error}\n        </p>\n      )}\n      <Button onClick={validate}>Submit</Button>\n    </div>\n  );\n}`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">Loading States</h3>
            <p className="leading-relaxed mb-4">
              Show progress during asynchronous operations:
            </p>
            <CodeBlock
              code={`function DataList() {\n  const [loading, setLoading] = useState(true);\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    fetchData().then(result => {\n      setData(result);\n      setLoading(false);\n    });\n  }, []);\n\n  if (loading) {\n    return <Skeleton className="h-48 w-full" />;\n  }\n\n  return <div>{/* Render data */}</div>;\n}`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">Empty States</h3>
            <p className="leading-relaxed mb-4">
              Guide users when there's no content to display:
            </p>
            <CodeBlock
              code={`function EmptyInbox() {\n  return (\n    <div className="text-center py-12">\n      <Mail className="h-12 w-12 mx-auto text-muted-foreground" />\n      <h3 className="mt-4 text-lg font-semibold">No messages</h3>\n      <p className="text-muted-foreground mt-2">\n        Your inbox is empty. New messages will appear here.\n      </p>\n      <Button className="mt-6">Compose Message</Button>\n    </div>\n  );\n}`}
            />
          </div>

          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">Confirmation Dialogs</h3>
            <p className="leading-relaxed mb-4">
              Always confirm destructive actions:
            </p>
            <CodeBlock
              code={`function DeleteConfirmation({ onConfirm, onCancel }) {\n  return (\n    <AlertDialog>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <AlertDialogTitle>Are you sure?</AlertDialogTitle>\n          <AlertDialogDescription>\n            This action cannot be undone.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogCancel onClick={onCancel}>\n            Cancel\n          </AlertDialogCancel>\n          <AlertDialogAction onClick={onConfirm}>\n            Delete\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}`}
            />
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            More Patterns
          </h4>
          <p className="text-muted-foreground">
            Explore additional patterns in Playroom with interactive examples you can
            modify and test in real-time.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Patterns;
