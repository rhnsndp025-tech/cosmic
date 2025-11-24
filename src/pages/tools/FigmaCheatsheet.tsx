import { ArticleLayout } from "@/components/ArticleLayout";

const FigmaCheatsheet = () => {
  return (
    <ArticleLayout
      title="Figma Cheatsheet"
      description="Quick reference guide for using ink components in Figma efficiently."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Master the ink Figma library with these essential tips, shortcuts, and best practices.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Component Usage
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-3">Inserting Components</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Press <kbd className="px-2 py-1 bg-code rounded">⌘ + /</kbd> to open quick search</li>
              <li>Type component name to find and insert</li>
              <li>Use the Assets panel for browsing all components</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-semibold mb-3">Modifying Variants</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Select component instance</li>
              <li>Use the properties panel on the right</li>
              <li>Toggle between variants using dropdowns</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-semibold mb-3">Detaching Components</h3>
            <p className="text-muted-foreground mb-2">
              Only detach when absolutely necessary. Detached components won't receive updates.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right-click component instance</li>
              <li>Select "Detach instance"</li>
              <li>Component becomes a group that can be edited freely</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Working with Styles
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-playfair font-semibold mb-1">Color Styles</h3>
            <p className="text-muted-foreground text-sm">
              Use ink color tokens instead of custom colors to maintain consistency
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-playfair font-semibold mb-1">Text Styles</h3>
            <p className="text-muted-foreground text-sm">
              Apply text styles for typography that matches the coded components
            </p>
          </div>
          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-lg font-playfair font-semibold mb-1">Effect Styles</h3>
            <p className="text-muted-foreground text-sm">
              Use predefined shadows and blurs for consistent elevation
            </p>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Need More Help?
          </h4>
          <p className="text-muted-foreground">
            Check out our video tutorials or join the Figma community channel for live support.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default FigmaCheatsheet;
