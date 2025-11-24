import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";

const Hooks = () => {
  return (
    <ArticleLayout
      title="Hooks"
      description="React hooks for common functionality and state management."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          ink provides a collection of React hooks that encapsulate common patterns
          and behaviors, making it easier to build interactive applications.
        </p>

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Available Hooks
        </h2>
        <div className="grid gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">useMediaQuery</h3>
            <p className="text-muted-foreground mb-4">
              Respond to media query changes.
            </p>
            <CodeBlock
              code={`import { useMediaQuery } from '@ink/design-system';\n\nfunction ResponsiveComponent() {\n  const isMobile = useMediaQuery('(max-width: 768px)');\n  \n  return (\n    <div>\n      {isMobile ? <MobileView /> : <DesktopView />}\n    </div>\n  );\n}`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">useLocalStorage</h3>
            <p className="text-muted-foreground mb-4">
              Persist state in browser local storage.
            </p>
            <CodeBlock
              code={`import { useLocalStorage } from '@ink/design-system';\n\nfunction Settings() {\n  const [theme, setTheme] = useLocalStorage('theme', 'light');\n  \n  return (\n    <button onClick={() => setTheme('dark')}>\n      Switch to dark mode\n    </button>\n  );\n}`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">useDebounce</h3>
            <p className="text-muted-foreground mb-4">
              Delay execution until user stops typing.
            </p>
            <CodeBlock
              code={`import { useDebounce } from '@ink/design-system';\n\nfunction SearchInput() {\n  const [value, setValue] = useState('');\n  const debouncedValue = useDebounce(value, 500);\n  \n  useEffect(() => {\n    // Perform search with debouncedValue\n    search(debouncedValue);\n  }, [debouncedValue]);\n  \n  return <input onChange={(e) => setValue(e.target.value)} />;\n}`}
            />
          </div>

          <div className="border border-border rounded-lg p-6">
            <h3 className="text-xl font-playfair font-semibold mb-3">useClickOutside</h3>
            <p className="text-muted-foreground mb-4">
              Detect clicks outside an element.
            </p>
            <CodeBlock
              code={`import { useClickOutside } from '@ink/design-system';\n\nfunction Dropdown() {\n  const [isOpen, setIsOpen] = useState(false);\n  const ref = useRef(null);\n  \n  useClickOutside(ref, () => setIsOpen(false));\n  \n  return (\n    <div ref={ref}>\n      {/* Dropdown content */}\n    </div>\n  );\n}`}
            />
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Best Practices
        </h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Follow the Rules of Hooks (only call at top level)</li>
          <li>Provide appropriate dependencies to useEffect</li>
          <li>Clean up side effects to prevent memory leaks</li>
          <li>Use custom hooks to extract reusable logic</li>
        </ul>

        <div className="bg-muted p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            TypeScript Support
          </h4>
          <p className="text-muted-foreground">
            All hooks are fully typed with TypeScript for excellent IDE autocomplete
            and type safety.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Hooks;
