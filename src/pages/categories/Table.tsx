import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Table = () => {
  return (
    <ArticleLayout
      title="Table Components"
      description="Display and manage structured data with powerful table components."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Table components provide flexible, accessible ways to display and interact
          with tabular data, from simple lists to complex data grids.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Basic Table
        </h2>
        <CodeBlock
          code={`import { Table } from '@ink/design-system';\n\n<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Name</TableHead>\n      <TableHead>Email</TableHead>\n      <TableHead>Status</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>John Doe</TableCell>\n      <TableCell>john@example.com</TableCell>\n      <TableCell>Active</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Advanced Features
        </h3>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h4 className="text-lg font-playfair font-semibold mb-3">Sorting</h4>
            <p className="text-muted-foreground mb-4">
              Click column headers to sort data.
            </p>
            <CodeBlock
              code={`<TableHead sortable onSort={(direction) => handleSort('name', direction)}>\n  Name\n</TableHead>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h4 className="text-lg font-playfair font-semibold mb-3">Selection</h4>
            <p className="text-muted-foreground mb-4">
              Select single or multiple rows with checkboxes.
            </p>
            <CodeBlock
              code={`<TableRow selectable selected={selected.includes(row.id)}>\n  <TableCell>\n    <Checkbox checked={selected.includes(row.id)} />\n  </TableCell>\n  {/* Other cells */}\n</TableRow>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h4 className="text-lg font-playfair font-semibold mb-3">Pagination</h4>
            <p className="text-muted-foreground mb-4">
              Handle large datasets with built-in pagination.
            </p>
            <CodeBlock
              code={`<Table\n  data={data}\n  pagination={{\n    pageSize: 10,\n    currentPage: 1,\n    total: 100\n  }}\n  onPageChange={(page) => setPage(page)}\n/>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h4 className="text-lg font-playfair font-semibold mb-3">Filtering</h4>
            <p className="text-muted-foreground mb-4">
              Add column filters for data exploration.
            </p>
            <CodeBlock
              code={`<TableHead filterable>\n  Status\n  <TableFilter\n    options={['Active', 'Inactive', 'Pending']}\n    onFilter={(value) => handleFilter('status', value)}\n  />\n</TableHead>`}
            />
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Accessibility
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Use proper table semantics (thead, tbody, th, td)</li>
          <li>Provide column headers with scope attributes</li>
          <li>Ensure keyboard navigation works correctly</li>
          <li>Add aria-labels for sortable columns</li>
          <li>Use aria-selected for selected rows</li>
        </ul>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Performance Tips
          </h4>
          <p className="text-muted-foreground">
            For tables with hundreds of rows, use virtualization or pagination.
            Avoid complex computations in render functions—memoize expensive operations.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Table;
