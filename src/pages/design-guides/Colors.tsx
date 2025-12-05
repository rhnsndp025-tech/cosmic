import { ArticleLayout } from "@/components/ArticleLayout";
import { useState } from "react";
import purple from "@/assets/purple.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ThemeRenderer({ theme }) {
  return (
    <div className="space-y-12 mt-10">
      {theme.sections.map((section, index) => {
        switch (section.type) {
          case "palette":
            return (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                {section.description && (
                  <p className="text-muted-foreground mb-4">
                    {section.description}
                  </p>
                )}

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {section.colors.map((color, i) => (
                    <div key={i} className="space-y-2">
                      <div
                        className="h-20 rounded-lg"
                        style={{ backgroundColor: color.hex, border: "1px #999 solid" }}
                      ></div>
                      <p className="text-sm font-medium">{color.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {color.hex}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "paragraph":
            return (
              <p key={index} className="text-muted-foreground">
                {section.content}
              </p>
            );

          case "image":
            return (
              <div key={index} className="space-y-2">
                <img src={section.src} className="rounded-lg shadow-sm" />
                {section.caption && (
                  <p className="text-xs text-muted-foreground">
                    {section.caption}
                  </p>
                )}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

const themes = {
  themes: [
    {
      id: "light",
      name: "Cosmic",
      previewBg: "#ffffff",
      previewBorder: "#e5e7eb",
      sections: [
        {
          type: "palette",
          title: "Primary Palette",
          description:
            "The Brand Palette represents Qapita's core identity. It is used for primary interactions and for drawing the highest level of attention.",
          colors: [
            { label: "Brand-100", hex: "#633EA5" },
            { label: "Brand-200", hex: "#8A5BDC" },
            { label: "Brand-300", hex: "#AE9BCF" },
            { label: "Brand-400", hex: "#F2EDFB" },
          ],
        },
        {
          type: "paragraph",
          content:
            "This includes primary buttons, key actions, and their states (hover, pressed, disabled). The brand palette ensures a strong, recognizable presence in the UI and anchors the experience with Qapita’s signature visual expression. ",
        },
        {
          type: "palette",
          title: "Yellow Palette (Secondary / Accent)",
          description:
            "The Yellow Palette functions as the secondary accent within Cosmic. It is used when an element needs emphasis without conflicting with the primary brand color.",
          colors: [
            { label: "Secondary-100", hex: "#FFB100" },
            { label: "Secondary-200", hex: "#FFCE5E" },
            { label: "Secondary-300", hex: "#FDF7E9" },
            { label: "Secondary-400", hex: "#FDF8EE" },
          ],
        },
        {
          type: "paragraph",
          content:
            "Common use cases include: Highlighting important data points. Indicating selected states in navigation. Drawing subtle attention without overpowering the primary palette. This palette brings warmth, clarity, and contrast to the interface. ",
        },
        {
          type: "palette",
          title: "Neutral Palette",
          description:
            "The Neutral Palette forms the structural backbone of the entire UI. It is primarily used for text, excluding hyperlinks which belong to the brand palette.",
          colors: [
            { label: "Gray-100", hex: "#333333" },
            { label: "Gray-200", hex: "#666666" },
            { label: "Gray-300", hex: "#6E6E6E" },
            { label: "Gray-400", hex: "#828282" },
            { label: "Gray-500", hex: "#D7D7D7" },
            { label: "Gray-600", hex: "#E2E2E2" },
            { label: "Gray-700", hex: "#F2F2F2" }
          ],
        },
        {
          type: "paragraph",
          content:
            " Neutrals define the information hierarchy through varying levels of contrast and also support components such as: Background surfaces. Cards. Borders. Dividers. Disabled states. A well-structured neutral palette ensures readability and balance across the system.",
        },
        {
          type: "palette",
          title: "Orange Palette (Tertiary - Pending)",
          description:
            "The Orange Palette is part of the tertiary system and is used to represent pending state across the interface.",
          colors: [
            { label: "Orange-100", hex: "#FF863A" },
            { label: "Orange-200", hex: "#FDF0E7" }
          ],
        },
        {
          type: "paragraph",
          content:
            "It can also support: Status badges. Workflow indications. Non-destructive warnings. It conveys a sense of movement and awaiting action. ",
        },
        {
          type: "palette",
          title: "Green Palette (Tertiary - Success)",
          description:
            "The Green Palette represents completion, success, or any positively resolved state within Cosmic.",
          colors: 
          [
            { label: "Green-100", hex: "#0F8F10" },
            { label: "Green-200", hex: "#1AB84F" },
            { label: "Green-300", hex: "#E7F4E7" }
          ],
        },
        {
          type: "paragraph",
          content:
            "Use cases include: Success messages. Approved states. Completed user actions. Affirmative confirmations across the product. It provides immediate positive recognition and closure. ",
        },
        {
          type: "palette",
          title: "Red Palette (Tertiary - Error / Destructive)",
          description:
            "The Red Palette signifies error, critical alerts, or destructive actions. It is used consistently to maintain clear communication of high-risk interactions.",
          colors: 
          [
            { label: "Red-100", hex: "#D41F00" },
            { label: "Red-200", hex: "#F28F8F" },
            { label: "Red-300", hex: "#FAE9E6" }
          ],
        },
        {
          type: "paragraph",
          content:
            "Common examples include: Error messages. Failed states. Destructive actions like delete or revoke. Critical warnings or alerts. The palette ensures that these states stand out and are easily understood. ",
        },
        {
          type: "palette",
          title: "Blue Palette (Tertiary - Information)",
          description:
            "The Blue Palette is part of the tertiary system and is used to represent information, neutral messages, or supporting statuses.",
          colors: 
          [
            { label: "Blue-100", hex: "#384757" },
            { label: "Blue-200", hex: "#FBFBFF" }
          ],
        },
        {
          type: "paragraph",
          content:
            "You might use this palette for: Info banners. Non-critical notifications. Neutral status indicators. Secondary emphasis in contextual UI. It provides clarity and calmness where neutral communication is needed.",
        },
      ],
    },
 
    {
      id: "charles_schwab",
      name: "Charles Schwab",
      previewBg: "#ffffff",
      previewBorder: "#009DDB",
      sections: [
        {
          type: "paragraph",
          content:
            "Description to be added ",
        },
        {
            type: "palette",
            title: "Primary Palette",
            description:
                "The Primary Palette contains the core blue tones used across key brand interactions and high-visibility elements.",
            colors: 
            [
                { label: "Brand-Blue-100", hex: "#4DA8E8" },       
                { label: "Brand-Acc-Blue-100", hex: "#2B7FB8" },   
                { label: "Brand-Blue-200", hex: "#E6F7FF" },       
                { label: "Brand-Blue-300", hex: "#F8FCFF" }        
            ],
        },
        {
            type: "palette",
            title: "Secondary Palette",
            description:
                "The Secondary Palette supports the brand with additional tones used for surfaces, data visualization, and contextual elements.",
            colors: 
            [
                { label: "Metal-100", hex: "#44515B" },      
                { label: "Sapphire-100", hex: "#5A79C4" },   
                { label: "Coastal-100", hex: "#78AFC1" },    
                { label: "Metal-200", hex: "#34424D" },      
                { label: "Metal-300", hex: "#E4EBF0" }       
            ],
        },
        {
            type: "palette",
            title: "Tertiary Palette",
            description:
                "The Tertiary Palette extends the system with supporting colors used for states, highlights, and additional contextual meaning.",
            colors: 
            [
                { label: "Teal-100", hex: "#1D8690" },        
                { label: "Turquoise-100", hex: "#7CE4E2" },   
                { label: "Tangerine-100", hex: "#F2AA1C" }    
            ],
        }, 
        {
          type: "palette",
          title: "Neutral Palette",
          description:
            "The Neutral Palette forms the structural backbone of the entire UI. It is primarily used for text, excluding hyperlinks which belong to the brand palette.",
          colors: [
            { label: "Gray-100", hex: "#333333" },
            { label: "Gray-200", hex: "#666666" },
            { label: "Gray-300", hex: "#6E6E6E" },
            { label: "Gray-400", hex: "#828282" },
            { label: "Gray-500", hex: "#D7D7D7" },
            { label: "Gray-600", hex: "#E2E2E2" },
            { label: "Gray-700", hex: "#F2F2F2" }
          ],
        },
        {
          type: "paragraph",
          content:
            " Neutrals define the information hierarchy through varying levels of contrast and also support components such as: Background surfaces. Cards. Borders. Dividers. Disabled states. A well-structured neutral palette ensures readability and balance across the system.",
        },
        {
          type: "palette",
          title: "Orange Palette (Tertiary - Pending)",
          description:
            "The Orange Palette is part of the tertiary system and is used to represent pending state across the interface.",
          colors: [
            { label: "Orange-100", hex: "#FF863A" },
            { label: "Orange-200", hex: "#FDF0E7" }
          ],
        },
        {
          type: "paragraph",
          content:
            "It can also support: Status badges. Workflow indications. Non-destructive warnings. It conveys a sense of movement and awaiting action. ",
        },
        {
          type: "palette",
          title: "Green Palette (Tertiary - Success)",
          description:
            "The Green Palette represents completion, success, or any positively resolved state within Cosmic.",
          colors: 
          [
            { label: "Green-100", hex: "#0F8F10" },
            { label: "Green-200", hex: "#1AB84F" },
            { label: "Green-300", hex: "#E7F4E7" }
          ],
        },
        {
          type: "paragraph",
          content:
            "Use cases include: Success messages. Approved states. Completed user actions. Affirmative confirmations across the product. It provides immediate positive recognition and closure. ",
        },
        {
          type: "palette",
          title: "Red Palette (Tertiary - Error / Destructive)",
          description:
            "The Red Palette signifies error, critical alerts, or destructive actions. It is used consistently to maintain clear communication of high-risk interactions.",
          colors: 
          [
            { label: "Red-100", hex: "#D41F00" },
            { label: "Red-200", hex: "#F28F8F" },
            { label: "Red-300", hex: "#FAE9E6" }
          ],
        },
        {
          type: "paragraph",
          content:
            "Common examples include: Error messages. Failed states. Destructive actions like delete or revoke. Critical warnings or alerts. The palette ensures that these states stand out and are easily understood. ",
        },
        {
          type: "palette",
          title: "Blue Palette (Tertiary - Information)",
          description:
            "The Blue Palette is part of the tertiary system and is used to represent information, neutral messages, or supporting statuses.",
          colors: 
          [
            { label: "Blue-100", hex: "#384757" },
            { label: "Blue-200", hex: "#FBFBFF" }
          ],
        },
        {
          type: "paragraph",
          content:
            "You might use this palette for: Info banners. Non-critical notifications. Neutral status indicators. Secondary emphasis in contextual UI. It provides clarity and calmness where neutral communication is needed.",
        },

      ],
    },
  ],
};

const Colors = () => {
  const [active, setActive] = useState("light");
  const activeTheme = themes.themes.find((t) => t.id === active);

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
            <TabsTrigger value="overview">Color theory </TabsTrigger>
            <TabsTrigger value="types">Themes</TabsTrigger>
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

            <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-10  bg-[#FDF8F5]">
              <img
                src="/assets/accessibility.png"
                className="w-[32%]  rounded-lg"
              />

              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">
                  Accessibility first
                </h3>
                Colors must meet WCAG contrast requirements and be usable by
                people with visual or cognitive impairments.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-5 bg-[#FDF8F5]">
              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">
                  Functional hierarchy
                </h3>
                Each color has a defined purpose so users can intuitively
                understand visual meaning.
              </p>
              <img src="/assets/hierarchy.png" className="w-[32%] rounded-lg" />
            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-5  bg-[#FDF8F5]">
              <img
                src="/assets/consistency.png"
                className="w-[32%]  rounded-lg"
              />

              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">
                  Consistency across surfaces
                </h3>
                A color used for an action or status behaves the similarly
                everywhere.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-5  bg-[#FDF8F5]">
              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">
                  Consistency across surfaces
                </h3>
                A color used for an action or status behaves the similarly
                everywhere.
              </p>
              <img src="/assets/workflow.png" className="w-[32%]  rounded-lg" />
            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl shadow-sm bg-white  border-radius-12 border-1 mt-10  bg-[#FDF8F5]">
              <img src="/assets/scalable.png" className="w-[32%] rounded-lg" />

              <p className="text-base font-medium text-gray-800 leading-snug">
                <h3 className="text-xl font-semibold mb-2">Scalable</h3>
                Colors must meet WCAG contrast requirements and be usable by
                people with visual or cognitive impairments.
              </p>
            </div>
          </TabsContent>
          {/* <TabsContent value="types">
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
                <h3 className="text-2xl font-playfair font-semibold mb-4 mt-10">
                  Primary Colors  
                </h3>

           
        

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                    <div className="space-y-2">
                      <div className="h-20 bg-primary rounded-lg bg-[#633EA5]"></div>
                      <p className="text-sm font-semibold">Brand-100</p>
                      <p className="text-xs text-muted-foreground">
                        633EA5
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-accent rounded-lg bg-[#8A5BDC]"></div>
                      <p className="text-sm font-semibold">Brand-200</p>
                      <p className="text-xs text-muted-foreground">
                        8A5BDC
                      </p>
                    </div>

                      <div className="space-y-2">
                      <div className="h-20 bg-accent rounded-lg bg-[#AE9BCF]"></div>
                      <p className="text-sm font-semibold">Brand-300</p>
                      <p className="text-xs text-muted-foreground">
                        AE9BCF
                      </p>
                    </div>

                     <div className="space-y-2">
                      <div className="h-20 bg-accent rounded-lg bg-[#F2EDFB]"></div>
                      <p className="text-sm font-semibold">Brand-400</p>
                      <p className="text-xs text-muted-foreground">
                        F2EDFB
                      </p>
                    </div>

                   
               
                  </div>

                <p className="mt-10">
                 <i> In Cosmic, the primary color is intentionally reserved to
                  drive clarity, hierarchy, and instant recognition of Qapita.</i>
                </p>


                        <div className="mt-10">
                  <h3 className="text-2xl font-playfair font-semibold mb-4">
                    Primary color usage across mediums
                  </h3>
                  <hr />


                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                    <div className="space-y-2">
                      <div className="h-20 bg-primary rounded-lg bg-[#633EA5]"></div>
                      <p className="text-sm font-semibold">Logo & Brand Mark</p>
                      <p className="text-xs text-muted-foreground">
                        Primary actions
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-accent rounded-lg bg-[#140035]"></div>
                      <p className="text-sm font-semibold">Marketing Website</p>
                      <p className="text-xs text-muted-foreground">
                        Highlights & links
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-secondary rounded-lg bg-[#140035]"></div>
                      <p className="text-sm font-semibold">Product Portal</p>
                      <p className="text-xs text-muted-foreground">
                        Secondary actions
                      </p>
                    </div>
                  </div>
                </div>

   <p className="text-muted-foreground mt-4">
              Written about Tertiary Colors, Icons should be used purposefully to enhance comprehension,
              highlight actions, and improve navigation. Avoid decorative
              overuse that might clutter the interface.
            </p>

                <div className="mt-10">
                  <h3 className="text-2xl font-playfair font-semibold mb-4">
                    Seconday (Accent) Usage
                  </h3>
                  <hr />


   <p className="text-muted-foreground mt-4">
              Written about Tertiary Colors, Icons should be used purposefully to enhance comprehension,
              highlight actions, and improve navigation. Avoid decorative
              overuse that might clutter the interface.
            </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                    <div className="space-y-2">
                      <div className="h-20 bg-primary rounded-lg bg-[#FFB100]"></div>
                      <p className="text-sm font-semibold">Logo & Brand Mark</p>
                      <p className="text-xs text-muted-foreground">
                        Primary actions
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-accent rounded-lg bg-[#FFCE5E]"></div>
                      <p className="text-sm font-semibold">Marketing Website</p>
                      <p className="text-xs text-muted-foreground">
                        Highlights & links
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-secondary rounded-lg bg-[#FD7E9]"></div>
                      <p className="text-sm font-semibold">Product Portal</p>
                      <p className="text-xs text-muted-foreground">
                        Secondary actions
                      </p>
                    </div>
                     <div className="space-y-2">
                      <div className="h-20 bg-secondary rounded-lg bg-[#FDF8EE]"></div>
                      <p className="text-sm font-semibold">Product Portal</p>
                      <p className="text-xs text-muted-foreground">
                        Secondary actions
                      </p>
                    </div>
                  </div>
                </div>






        <div className="mt-10">
                  <h3 className="text-2xl font-playfair font-semibold mb-4">
                    Tertiary Colors
                  </h3>
                  <hr />


   <p className="text-muted-foreground mt-4">
              Written about Tertiary Colors, Icons should be used purposefully to enhance comprehension,
              highlight actions, and improve navigation. Avoid decorative
              overuse that might clutter the interface.
            </p>



                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                    <div className="space-y-2">
                      <div className="h-20 bg-primary rounded-lg bg-[#633EA5]"></div>
                      <p className="text-sm font-semibold">Logo & Brand Mark</p>
                      <p className="text-xs text-muted-foreground">
                        Primary actions
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-accent rounded-lg bg-[#140035]"></div>
                      <p className="text-sm font-semibold">Marketing Website</p>
                      <p className="text-xs text-muted-foreground">
                        Highlights & links
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-20 bg-secondary rounded-lg bg-[#140035]"></div>
                      <p className="text-sm font-semibold">Product Portal</p>
                      <p className="text-xs text-muted-foreground">
                        Secondary actions
                      </p>
                    </div>
                  </div>
                </div>

                </div>

   
            </div>
          </TabsContent> */}
          <TabsContent value="types">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-8">
              {themes.themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActive(theme.id)}
                  className={`p-4 rounded-2xl border transition-all text-center ${
                    active === theme.id
                      ? "border-4 border-primary shadow-md"
                      : "border border-gray-300 hover:border-gray-400"
                  }`}
                  style={{ backgroundColor: theme.previewBg }}
                >
                  <div
                    className="h-24 rounded-xl mb-3 w-full"
                    style={{ border: `2px solid ${theme.previewBorder}` }}
                  ></div>
                  <p className="font-medium">{theme.name}</p>
                </button>
              ))}



            </div>


              {activeTheme && (
  <div className="mt-12">
    <ThemeRenderer theme={activeTheme} />
  </div>
)}

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
