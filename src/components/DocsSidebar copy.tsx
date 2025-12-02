import { NavLink } from "@/components/NavLink";
import { ChevronRight, FileText, Palette, Code2, Wrench, BookOpen, Layers } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const sections = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      { title: "Colors", url: "/design-guides/colors" },
      { title: "Components", url: "/getting-started/components" },
      { title: "Icons", url: "/design-guides/icons" },
   
      // { title: "How to Contribute", url: "/getting-started/contribute" },
      // { title: "Support & Feedback", url: "/getting-started/support" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { title: "Playroom", url: "/tools/playroom" },
      { title: "Figma Library", url: "/tools/figma-library" },
      { title: "Figma Cheatsheet", url: "/tools/figma-cheatsheet" },
      { title: "Preview", url: "/tools/preview" },
    ],
  },
  {
    title: "Usage",
    icon: Code2,
    items: [
      { title: "Deprecation", url: "/usage/deprecation" },
      { title: "Start Here", url: "/usage/start-here" },
      { title: "Deprecation List", url: "/usage/deprecation-list" },
      { title: "Codemods 101", url: "/usage/codemods" },
    ],
  },
  {
    title: "Design Guides",
    icon: Palette,
    items: [
      { title: "Icons", url: "/design-guides/icons" },
      { title: "Colors", url: "/design-guides/colors" },
      { title: "Design Tokens", url: "/design-guides/tokens" },
      { title: "Guides", url: "/design-guides/guides" },
      { title: "Internationalization", url: "/design-guides/i18n" },
      { title: "Accessibility", url: "/design-guides/accessibility" },
      { title: "Component Patterns", url: "/design-guides/patterns" },
      { title: "UX Writing", url: "/design-guides/ux-writing" },
    ],
  },
  {
    title: "Component Categories",
    icon: Layers,
    items: [
      { title: "Accessory", url: "/categories/accessory" },
      { title: "Form", url: "/categories/form" },
      { title: "Formatter", url: "/categories/formatter" },
      { title: "Hooks", url: "/categories/hooks" },
      { title: "Illustration", url: "/categories/illustration" },
      { title: "Layout", url: "/categories/layout" },
      { title: "Navigation", url: "/categories/navigation" },
      { title: "Spreadsheet", url: "/categories/spreadsheet" },
      { title: "Table", url: "/categories/table" },
      { title: "Typography", url: "/categories/typography" },
    ],
  },
];

export function DocsSidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "Getting Started": true,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Sidebar className="border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-playfair font-bold">Cosmic</h1>
        <p className="text-sm text-muted-foreground mt-1 font-inter">Design System</p>
      </div>

      <SidebarContent>
        {sections.map((section) => (
          <Collapsible
            key={section.title}
            open={openSections[section.title]}
            onOpenChange={() => toggleSection(section.title)}
          >
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex items-center justify-between cursor-pointer hover:text-foreground transition-colors">
                  <div className="flex items-center gap-2">
                    <section.icon className="h-4 w-4" />
                    <span className="font-inter font-medium">{section.title}</span>
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      openSections[section.title] ? "rotate-90" : ""
                    }`}
                  />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <NavLink
                            to={item.url}
                            className="font-inter text-sm hover:bg-sidebar-accent transition-colors"
                            activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          >
                            <span>{item.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
