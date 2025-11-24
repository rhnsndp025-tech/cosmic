import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Navigation = () => {
  return (
    <ArticleLayout
      title="Navigation Components"
      description="Components for helping users move through your application."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Navigation components provide clear wayfinding and help users understand where
          they are and where they can go within your application.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Navigation Components
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Navbar</h3>
            <p className="text-muted-foreground mb-4">
              Primary navigation bar for your application.
            </p>
            <CodeBlock
              code={`import { Navbar, NavLink } from '@ink/design-system';\n\n<Navbar>\n  <NavLink href="/">Home</NavLink>\n  <NavLink href="/about">About</NavLink>\n  <NavLink href="/contact">Contact</NavLink>\n</Navbar>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Breadcrumbs</h3>
            <p className="text-muted-foreground mb-4">
              Show the user's location in the site hierarchy.
            </p>
            <CodeBlock
              code={`import { Breadcrumbs } from '@ink/design-system';\n\n<Breadcrumbs>\n  <BreadcrumbItem href="/">Home</BreadcrumbItem>\n  <BreadcrumbItem href="/products">Products</BreadcrumbItem>\n  <BreadcrumbItem current>Widget</BreadcrumbItem>\n</Breadcrumbs>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Tabs</h3>
            <p className="text-muted-foreground mb-4">
              Organize content into switchable panels.
            </p>
            <CodeBlock
              code={`import { Tabs } from '@ink/design-system';\n\n<Tabs defaultValue="profile">\n  <TabsList>\n    <TabsTrigger value="profile">Profile</TabsTrigger>\n    <TabsTrigger value="settings">Settings</TabsTrigger>\n  </TabsList>\n  <TabsContent value="profile">\n    Profile content\n  </TabsContent>\n  <TabsContent value="settings">\n    Settings content\n  </TabsContent>\n</Tabs>`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">Pagination</h3>
            <p className="text-muted-foreground mb-4">
              Navigate through multi-page content.
            </p>
            <CodeBlock
              code={`import { Pagination } from '@ink/design-system';\n\n<Pagination\n  currentPage={1}\n  totalPages={10}\n  onPageChange={(page) => setPage(page)}\n/>`}
            />
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Accessibility
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Use semantic HTML elements (nav, breadcrumb)</li>
          <li>Indicate the current page or section</li>
          <li>Ensure all navigation is keyboard accessible</li>
          <li>Provide aria-labels for screen readers</li>
          <li>Maintain consistent navigation across pages</li>
        </ul>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Mobile Navigation
          </h4>
          <p className="text-muted-foreground">
            On mobile, consider using a hamburger menu or bottom navigation bar.
            Test navigation patterns on actual devices to ensure usability.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Navigation;
