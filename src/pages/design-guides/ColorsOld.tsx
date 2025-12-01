import { ArticleLayout } from "@/components/ArticleLayout";
import purple from "@/assets/purple.jpg";
const Colors = () => {
  return (
    <ArticleLayout
      title="Colors"
      description="The cosmic color system designed for accessibility, consistency, and flexibility."
    >
      <section className="space-y-6">
        <p className="text-lg leading-relaxed">
          Purple stands as a powerful symbol of futuristic thinking, innovation, and security—qualities that are deeply valued in the financial domain. 
        
        </p>

        <img src ="/assets/purple.jpg" className="border border-border rounded-lg" alt = "purple" />


        <p>
        Its unique blend of blue and red hues creates a sense of both trust and creativity, positioning purple as the ideal color to represent forward-looking technology and transformative ideas. In design, purple bridges the gap between rational strategy and imaginative solutions, echoing the mindset needed for driving innovation while safeguarding financial integrity. 

        </p>


        <p>
        By leveraging the symbolism of purple, the design system reinforces a commitment to progress, resilience, and cutting-edge excellence, resonating strongly in environments where security and visionary thinking are paramount.
       
        </p>

      

        <h2 className="text-3xl font-playfair font-semibold mt-12 mb-6">
          Color Palette
        </h2>
        



        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Surface Colors</h3>

            <h4 className="text-lg font-playfair font-semibold mb-4"> Background color variants </h4>

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
                <p className="text-xs text-muted-foreground">Subtle backgrounds</p>
              </div>
             
            </div>
           

            <p className="mt-10">
        By leveraging the symbolism of purple, the design system reinforces a commitment to progress, resilience, and cutting-edge excellence, resonating strongly in environments where security and visionary thinking are paramount.
       
        </p>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-primary rounded-lg"></div>
                <p className="text-sm font-semibold">Primary</p>
                <p className="text-xs text-muted-foreground">Primary actions</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-accent rounded-lg"></div>
                <p className="text-sm font-semibold">Accent</p>
                <p className="text-xs text-muted-foreground">Highlights & links</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 bg-secondary rounded-lg"></div>
                <p className="text-sm font-semibold">Secondary</p>
                <p className="text-xs text-muted-foreground">Secondary actions</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Feedback Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div className="space-y-2">
                <div className="h-20 bg-destructive rounded-lg"></div>
                <p className="text-sm font-semibold">Destructive</p>
                <p className="text-xs text-muted-foreground">Errors & destructive actions</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-playfair font-semibold mt-10 mb-4">
          Accessibility
        </h3>
        <p className="leading-relaxed">
          All color combinations in ink meet WCAG 2.1 AA standards for contrast. Text
          colors are automatically paired with appropriate background colors using our
          foreground tokens:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
          <li>background + foreground</li>
          <li>primary + primary-foreground</li>
          <li>accent + accent-foreground</li>
          <li>muted + muted-foreground</li>
        </ul>

        <div className="bg-accent/10 border border-accent/20 p-6 rounded-lg mt-10">
          <h4 className="text-lg font-playfair font-semibold mb-2">
            Customization
          </h4>
          <p className="text-muted-foreground">
            Learn how to customize the color system for your brand on the{" "}
            <a href="/design-guides/tokens" className="text-accent hover:underline">
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
