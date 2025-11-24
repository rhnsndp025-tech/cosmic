import { ArticleLayout } from "@/components/ArticleLayout";

const FigmaLibrary = () => {
  return (
    <ArticleLayout
      title="Figma Library"
      description="Access design components and assets in Figma for seamless design-to-code workflows."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          The ink Figma library provides all design system components, styles, and assets
          in a format that's ready to use in your design files. Maintain perfect consistency
          between design and development.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          What's Included
        </h2>
        <div className="grid gap-4">
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-lg font-playfair font-semibold mb-2">Components</h3>
            <p className="text-muted-foreground">
              All ink components as Figma components with variants and properties
            </p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-lg font-playfair font-semibold mb-2">Styles</h3>
            <p className="text-muted-foreground">
              Color styles, text styles, and effect styles matching the code
            </p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-lg font-playfair font-semibold mb-2">Icons</h3>
            <p className="text-muted-foreground">
              Complete icon set organized by category
            </p>
          </div>
          <div className="border border-border rounded-lg p-5">
            <h3 className="text-lg font-playfair font-semibold mb-2">Templates</h3>
            <p className="text-muted-foreground">
              Common patterns and page layouts to jumpstart your designs
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Installation
        </h3>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Open Figma and go to the Assets panel</li>
          <li>Click on the team library icon</li>
          <li>Search for "Cosmic design system"</li>
          <li>Enable the library in your file</li>
        </ol>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Stay Updated
          </h4>
          <p className="text-muted-foreground">
            The Figma library is automatically synced with code updates. You'll receive
            notifications when new versions are available.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default FigmaLibrary;
