import { ArticleLayout } from "@/components/ArticleLayout";
import purple from "@/assets/purple.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Colors = () => {
  return (
    <ArticleLayout
      title="Colors"
      description="The cosmic color system designed for accessibility, consistency, and flexibility."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Purple stands as a powerful symbol of futuristic thinking, innovation,
          and security—qualities that are deeply valued in the financial domain.
        </p>

        <img
          src="/assets/purple.jpg"
          className="border border-border rounded-lg"
          alt="purple"
        />

        <p>
          Its unique blend of blue and red hues creates a sense of both trust
          and creativity, positioning purple as the ideal color to represent
          forward-looking technology and transformative ideas. In design, purple
          bridges the gap between rational strategy and imaginative solutions,
          echoing the mindset needed for driving innovation while safeguarding
          financial integrity.
        </p>

        <p>
          By leveraging the symbolism of purple, the design system reinforces a
          commitment to progress, resilience, and cutting-edge excellence,
          resonating strongly in environments where security and visionary
          thinking are paramount.
        </p>

        {/* --- Start New Tabs Here --- */}
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Science behind colors</TabsTrigger>
            <TabsTrigger value="types">Themes</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
              Understanding Color
            </h2>
            <p className="text-foreground mt-4">
              Qapita Cosmic theme, uses color to communicate hierarchy, meaning,
              emotion, and brand identity across Cosmic experiences. This page
              defines how colors are structured, categorized, and used
              consistently in product, marketing, and supporting interfaces.
            </p>

            <p className="text-foreground mt-4">
              Color influences how users perceive and interact with Cosmic
              products. It:
            </p>

            <ul className="text-foreground list-disc list-inside pl-10 mt-5 mb-5">
              <li>Enhances usability and readability</li>
              <li>Helps users prioritize information</li>
              <li>Communicates feedback and system states</li>
              <li>Reinforces brand identity and memorability</li>
              <li>Supports accessibility and inclusive design.</li>
            </ul>

            <p className="text-foreground mt-2">
              Color should always be intentional, functional, and supportive—not
              decorative without purpose.
            </p>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
              Principles for Selecting Colors
            </h2>

            <p>Cosmic’s color system is built on the following principles:</p>

            <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-10">
              <img
                src="/assets/accessibility.png"
                className="w-32 rounded-lg"
              />

              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">
                  Accessibility first
                </h3>
                Colors must meet WCAG contrast requirements and be usable by
                people with visual or cognitive impairments.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-5">

              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">
                  Functional hierarchy
                </h3>
                Each color has a defined purpose so users can intuitively
                understand visual meaning.
              </p>
                            <img src="/assets/hierarchy.png" className="w-32 rounded-lg" />

            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-5">
              <img src="/assets/consistency.png" className="w-32 rounded-lg" />

              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">
                  Consistency across surfaces
                </h3>
                A color used for an action or status behaves the similarly everywhere.
              </p>
            </div>

            


              <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-10">
             

              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">
                  Emotional alignment
                </h3>
                Colors must meet WCAG contrast requirements and be usable by
                people with visual or cognitive impairments.
              </p>
                                          <img src="/assets/workflow.png" className="w-32 rounded-lg" />

            </div>


            <ol className="list-decimal list-inside ml-4 space-y-2 mt-10">
              <li>
                <strong>Accessibility first</strong>
                <br />
              </li>
              <li>
                <strong>Functional hierarchy</strong>
                <br />
                Each color has a defined purpose so users can intuitively
                understand visual meaning.
              </li>
              <li>
                <strong>Consistency across surfaces</strong>
                <br />A color used for an action or status behaves the same way
                everywhere.
              </li>
              <li>
                <strong>Emotional alignment</strong>
                <br />
                Colors should reflect Cosmic’s personality: security, future,
                and innovation.
              </li>
              <li>
                <strong>Scalable and systematic</strong>
                <br />
                Colors are token-based and expandable without breaking visual
                harmony.
              </li>
            </ol>
          </TabsContent>
          <TabsContent value="types">
            <p className="text-muted-foreground mt-4">
              Use color to communicate hierarchy, meaning, emotion, and brand
              identity across Cosmic experiences. This page defines how colors
              are structured, categorized, and used consistently in product,
              marketing, and supporting interfaces.
            </p>

            <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
              Cosmic Palette
            </h2>

            <p className="text-muted-foreground mt-4">
              Use color to communicate hierarchy, meaning, emotion, and brand
              identity across Cosmic experiences. This page defines how colors
              are structured, categorized, and used consistently in product,
              marketing, and supporting interfaces.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Surface Colors
                </h3>

                <h4 className="text-lg font-playfair font-semibold mb-4">
                  {" "}
                  Background color variants{" "}
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="h-20 bg-background border border-border rounded-lg"></div>
                    <p className="text-sm font-semibold">Background</p>
                    <p className="text-xs text-muted-foreground">Default</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-card border border-border rounded-lg"></div>
                    <p className="text-sm font-semibold">Brand</p>
                    <p className="text-xs text-muted-foreground">Brand</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-muted rounded-lg"></div>
                    <p className="text-sm font-semibold">Secondary</p>
                    <p className="text-xs text-muted-foreground">
                      Subtle backgrounds
                    </p>
                  </div>
                </div>

                <p className="mt-10">
                  By leveraging the symbolism of purple, the design system
                  reinforces a commitment to progress, resilience, and
                  cutting-edge excellence, resonating strongly in environments
                  where security and visionary thinking are paramount.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Brand Colors
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="h-20 bg-primary rounded-lg"></div>
                    <p className="text-sm font-semibold">Primary</p>
                    <p className="text-xs text-muted-foreground">
                      Primary actions
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-accent rounded-lg"></div>
                    <p className="text-sm font-semibold">Accent</p>
                    <p className="text-xs text-muted-foreground">
                      Highlights & links
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-20 bg-secondary rounded-lg"></div>
                    <p className="text-sm font-semibold">Secondary</p>
                    <p className="text-xs text-muted-foreground">
                      Secondary actions
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Feedback Colors
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <div className="h-20 bg-destructive rounded-lg"></div>
                    <p className="text-sm font-semibold">Destructive</p>
                    <p className="text-xs text-muted-foreground">
                      Errors & destructive actions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="usage">
            <p className="text-muted-foreground mt-4">
              Icons should be used purposefully to enhance comprehension,
              highlight actions, and improve navigation. Avoid decorative
              overuse that might clutter the interface.
            </p>
          </TabsContent>
          <TabsContent value="accessibility">
            <p className="text-muted-foreground mt-4">
              Ensure all icons provide adequate contrast and, when conveying
              meaning, include appropriate ARIA labels or alternative text for
              screen readers. Decorative icons should be hidden from
              accessibility trees.
            </p>

            <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
              Accessibility
            </h3>
            <p className="leading-relaxed">
              All color combinations in ink meet WCAG 2.1 AA standards for
              contrast. Text colors are automatically paired with appropriate
              background colors using our foreground tokens:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>background + foreground</li>
              <li>primary + primary-foreground</li>
              <li>accent + accent-foreground</li>
              <li>muted + muted-foreground</li>
            </ul>
          </TabsContent>
        </Tabs>
        {/* --- End New Tabs Here --- */}

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Customization
          </h4>
          <p className="text-muted-foreground">
            Learn how to customize the color system for your brand on the{" "}
            <a
              href="/design-guides/tokens"
              className="text-accent hover:underline"
            >
              Design Tokens
            </a>{" "}
            page.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default Colors;
