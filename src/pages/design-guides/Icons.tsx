import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { Heart, Home, Settings, User, Search } from "lucide-react";

const Icons = () => {
  return (
    <ArticleLayout
      title="Icons"
      description="Guidelines for using icons consistently across your applications."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Icons are a crucial part of visual communication. ink uses a carefully curated
          icon library that maintains consistency across all components.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Icon Library
        </h2>
        <p className="leading-relaxed">
          We use Lucide icons as our primary icon set, providing over 1,000 consistently
          designed icons that work perfectly with ink's design language.
        </p>

        <div className="flex gap-8 items-center my-8 p-6 border border-border rounded-lg">
          <Home className="w-8 h-8" />
          <User className="w-8 h-8" />
          <Settings className="w-8 h-8" />
          <Search className="w-8 h-8" />
          <Heart className="w-8 h-8" />
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Usage
        </h3>
        <CodeBlock
          code={`import { Home, User, Settings } from 'lucide-react';\n\nfunction Navigation() {\n  return (\n    <nav>\n      <Home className="w-5 h-5" />\n      <User className="w-5 h-5" />\n      <Settings className="w-5 h-5" />\n    </nav>\n  );\n}`}
        />

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Size Guidelines
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Small:</strong> 16px (w-4 h-4) - For inline text and compact UI</li>
          <li><strong>Medium:</strong> 20px (w-5 h-5) - Default size for most use cases</li>
          <li><strong>Large:</strong> 24px (w-6 h-6) - For prominent actions and headers</li>
          <li><strong>XLarge:</strong> 32px (w-8 h-8) - For feature highlights and empty states</li>
        </ul>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Color and Style
        </h3>
        <p className="leading-relaxed">
          Icons inherit the text color by default. Use utility classes or design tokens
          to apply specific colors:
        </p>
        <CodeBlock
          code={`<Home className="w-5 h-5 text-muted-foreground" />\n<Settings className="w-5 h-5 text-accent" />`}
        />

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Accessibility
          </h4>
          <p className="text-muted-foreground">
            When icons convey meaning, always include appropriate ARIA labels.
            Decorative icons should have aria-hidden="true".
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Icons;
