import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Layout = () => {
  return (
    <ArticleLayout
      title="Layout Components"
      description="Structural components for organizing content and creating consistent page layouts."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Layout components provide the foundation for your application's structure,
          helping you create responsive, well-organized interfaces.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Core Layout Components
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Container</h3>
            <p className="text-muted-foreground mb-4">
              Center and constrain content width.
            </p>
            <CodeBlock
              code={`import { Container } from '@ink/design-system';\n\n<Container maxWidth="lg">\n  {/* Your content */}\n</Container>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Stack</h3>
            <p className="text-muted-foreground mb-4">
              Arrange items vertically or horizontally with consistent spacing.
            </p>
            <CodeBlock
              code={`import { Stack } from '@ink/design-system';\n\n<Stack direction="vertical" spacing="md">\n  <Card>Item 1</Card>\n  <Card>Item 2</Card>\n  <Card>Item 3</Card>\n</Stack>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Grid</h3>
            <p className="text-muted-foreground mb-4">
              Create responsive grid layouts.
            </p>
            <CodeBlock
              code={`import { Grid } from '@ink/design-system';\n\n<Grid cols={{ sm: 1, md: 2, lg: 3 }} gap="md">\n  <Card>Column 1</Card>\n  <Card>Column 2</Card>\n  <Card>Column 3</Card>\n</Grid>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Sidebar</h3>
            <p className="text-muted-foreground mb-4">
              Create layouts with collapsible sidebars.
            </p>
            <CodeBlock
              code={`import { Sidebar, SidebarProvider } from '@ink/design-system';\n\n<SidebarProvider>\n  <div className="flex">\n    <Sidebar>\n      {/* Sidebar content */}\n    </Sidebar>\n    <main>\n      {/* Main content */}\n    </main>\n  </div>\n</SidebarProvider>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Section</h3>
            <p className="text-muted-foreground mb-4">
              Define distinct content sections with consistent padding.
            </p>
            <CodeBlock
              code={`import { Section } from '@ink/design-system';\n\n<Section size="lg" variant="default">\n  {/* Section content */}\n</Section>`}
            />
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Responsive Design
        </h3>
        <p className="leading-relaxed">
          Layout components are mobile-first and fully responsive. Use responsive props
          to adjust layouts at different breakpoints:
        </p>
        <CodeBlock
          code={`<Grid \n  cols={{ base: 1, sm: 2, md: 3, lg: 4 }}\n  gap={{ base: 'sm', md: 'md', lg: 'lg' }}\n>\n  {/* Items */}\n</Grid>`}
        />

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Layout Best Practices
          </h4>
          <p className="text-muted-foreground">
            Start with a simple layout and add complexity as needed. Consistent spacing
            and alignment create professional, polished interfaces.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Layout;
