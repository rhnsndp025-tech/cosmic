import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Spreadsheet = () => {
  return (
    <ArticleLayout
      title="Spreadsheet Components"
      description="Components for building spreadsheet-like interfaces with editing capabilities."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Spreadsheet components enable users to view and edit data in a familiar
          grid format, perfect for data entry and analysis tasks.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Features
        </h2>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-lg font-playfair font-semibold mb-2">Inline Editing</h3>
            <p className="text-sm text-muted-foreground">
              Click any cell to edit its contents directly
            </p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-lg font-playfair font-semibold mb-2">Cell Types</h3>
            <p className="text-sm text-muted-foreground">
              Support for text, numbers, dates, dropdowns, and custom renderers
            </p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-lg font-playfair font-semibold mb-2">Validation</h3>
            <p className="text-sm text-muted-foreground">
              Built-in validation with custom error messages
            </p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-lg font-playfair font-semibold mb-2">Keyboard Navigation</h3>
            <p className="text-sm text-muted-foreground">
              Navigate with arrow keys, Tab, Enter for efficient data entry
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Basic Usage
        </h3>
        <CodeBlock
          code={`import { Spreadsheet } from '@ink/design-system';\n\nconst columns = [\n  { key: 'name', label: 'Name', type: 'text' },\n  { key: 'age', label: 'Age', type: 'number' },\n  { key: 'email', label: 'Email', type: 'text' },\n];\n\nconst data = [\n  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },\n  { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },\n];\n\n<Spreadsheet\n  columns={columns}\n  data={data}\n  onCellChange={(rowId, columnKey, value) => {\n    // Handle cell updates\n  }}\n/>`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Advanced Features
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Row and column freezing for large datasets</li>
          <li>Custom cell renderers and editors</li>
          <li>Copy/paste support</li>
          <li>Undo/redo functionality</li>
          <li>Export to CSV or Excel</li>
          <li>Formula support (coming soon)</li>
        </ul>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Performance
          </h4>
          <p className="text-muted-foreground">
            Spreadsheet components use virtualization to handle thousands of rows
            efficiently. For very large datasets, consider server-side pagination.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Spreadsheet;
