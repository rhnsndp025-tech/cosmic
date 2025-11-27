import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Home, Settings, User, Search } from "lucide-react";
import { IconGallery, IconCategory } from "@/components/IconGallery";


const customIconCategories: IconCategory[] = [
  {
    name: "Navigation",
    description: "Icons used for primary and secondary navigation within the application, guiding users through different sections and actions.",
    subcategories: [
      {
        name: "Primary Navigation",
            description: "Icons used for primary and secondary navigation within the application, guiding users through different sections and actions.",

        icons: [
          { name: "equity-awards", path: "/icons/navigation/primary/awards-2.svg", category: ["Navigation", "Primary Navigation"] },
          { name: "dashboard", path: "/icons/navigation/primary/dashboard.svg", category: ["Navigation", "Primary Navigation"] },
          { name: "ownership", path: "/icons/navigation/primary/ownership.svg", category: ["Navigation", "Primary Navigation"] },
          { name: "shareholders", path: "/icons/navigation/primary/shareholders.svg", category: ["Navigation", "Primary Navigation"] },
        ],
        subcategories: [],
      },
      {
        name: "Sub Navigation",
    description: "Icons used for primary and secondary navigation within the application, guiding users through different sections and actions.",

        icons: [
          { name: "chevron-left", path: "/icons/navigation/sub/chevron-left.svg", category: ["Navigation", "Sub Navigation"] },
          { name: "chevron-right", path: "/icons/navigation/sub/chevron-right.svg", category: ["Navigation", "Sub Navigation"] },
          { name: "chevron-down", path: "/icons/navigation/sub/chevron-down.svg", category: ["Navigation", "Sub Navigation"] },
          { name: "chevron-up", path: "/icons/navigation/sub/chevron-up.svg", category: ["Navigation", "Sub Navigation"] },
        ],
        subcategories: [],
      },
    ],
    icons: [],
  },
  {
    name: "Actions",
    description: "Icons used for primary and secondary navigation within the application, guiding users through different sections and actions.",

    icons: [
      { name: "edit", path: "/icons/actions/edit.svg", category: ["Actions"] },
      { name: "delete", path: "/icons/actions/delete.svg", category: ["Actions"] },
      { name: "save", path: "/icons/actions/save.svg", category: ["Actions"] },
      { name: "cancel", path: "/icons/actions/cancel.svg", category: ["Actions"] },
      { name: "add", path: "/icons/actions/add.svg", category: ["Actions"] },
    ],
    subcategories: [],
  },
  {
    name: "Interface",
    description: "Icons used for primary and secondary navigation within the application, guiding users through different sections and actions.",


    icons: [
      { name: "close", path: "/icons/interface/close.svg", category: ["Interface"] },
      { name: "menu", path: "/icons/interface/menu.svg", category: ["Interface"] },
      { name: "search", path: "/icons/interface/search.svg", category: ["Interface"] },
      { name: "settings", path: "/icons/interface/settings.svg", category: ["Interface"] },
      { name: "help", path: "/icons/interface/help.svg", category: ["Interface"] },
    ],
    subcategories: [],
  },
  {
    name: "Status",
        description: "Icons used for primary and secondary navigation within the application, guiding users through different sections and actions.",

    icons: [
      { name: "success", path: "/icons/status/success.svg", category: ["Status"] },
      { name: "error", path: "/icons/status/error.svg", category: ["Status"] },
      { name: "warning", path: "/icons/status/warning.svg", category: ["Status"] },
      { name: "info", path: "/icons/status/info.svg", category: ["Status"] },
    ],
    subcategories: [],
  },
];

const Icons = () => {
  const currentIcons = [
    { name: "Home", Icon: Home },
    { name: "User", Icon: User },
    { name: "Settings", Icon: Settings },
    { name: "Search", Icon: Search },
    { name: "Heart", Icon: Heart },
  ];

  const futureIcons = [
    {
      name: "Workflow",
      description: "Visual shorthand for complex journeys and automations.",
    },
    {
      name: "Insight",
      description: "Highlights data-heavy surfaces like dashboards.",
    },
    {
      name: "Orbit",
      description: "Represents integrations, partners, and ecosystems.",
    },
  ];

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


 {/* --- Start New Tabs Here --- */}
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="types">Types</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">

                <p className="text-lg leading-relaxed mt-10 mb-10">
          Icons are a crucial part of visual communication. ink uses a carefully curated
          icon library that maintains consistency across all components.
        </p>
            <p className="text-muted-foreground mt-4">

                                <IconGallery categories={customIconCategories} />
            </p>


          </TabsContent>
          <TabsContent value="types">
            <p className="text-muted-foreground mt-4">
              We primarily use Lucide icons for their extensive library and consistent design language. For specialized needs, we also maintain a custom SVG icon set.
            </p>
          </TabsContent>
          <TabsContent value="usage">
            <p className="text-muted-foreground mt-4">
              Icons should be used purposefully to enhance comprehension, highlight actions, and improve navigation. Avoid decorative overuse that might clutter the interface.
            </p>
          </TabsContent>
          <TabsContent value="accessibility">
            <p className="text-muted-foreground mt-4">
              Ensure all icons provide adequate contrast and, when conveying meaning, include appropriate ARIA labels or alternative text for screen readers. Decorative icons should be hidden from accessibility trees.
            </p>
          </TabsContent>
        </Tabs>
        {/* --- End New Tabs Here --- */}




        

      </section>
    </ArticleLayout>
  );
};

export default Icons;
