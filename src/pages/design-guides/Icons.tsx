import { ArticleLayout } from "@/components/ArticleLayout";
import { CodeBlock } from "@/components/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Home, Settings, User, Search } from "lucide-react";
import { IconGallery, IconCategory } from "@/components/IconGallery";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


// const nav = {
//   "Left Navigation": [
//     {
//       "name": "Home",
//       "old": "/icons-sriman/left-nav/home-old.svg",
//       "new": "/icons-sriman/left-nav/home-new.svg"
//     },
//     {
//       "name": "Settings",
//       "old": "/icons-sriman/left-nav/settings-old.svg",
//       "new": "/icons-sriman/left-nav/settings-new.svg"
//     }
//   ],
//   "Global Navigation": [
//     {
//       "name": "Search",
//       "old": "/icons/global-nav/search-old.svg",
//       "new": "/icons/global-nav/search-new.svg"
//     }
//   ],
//   "Action Icons": [
//     {
//       "name": "Add",
//       "old": "/icons/actions/add-old.svg",
//       "new": "/icons/actions/add-new.svg"
//     }
//   ],
//   "System Icons": [
//     {
//       "name": "Alert",
//       "old": "/icons/system/alert-old.svg",
//       "new": "/icons/system/alert-new.svg"
//     }
//   ],
//   "Badges Icons": [
//     {
//       "name": "Verified",
//       "old": "/icons/badges/verified-old.svg",
//       "new": "/icons/badges/verified-new.svg"
//     }
//   ],
//   "Confirmation indicator Icons": [
//     {
//       "name": "Success",
//       "old": "/icons/confirm/success-old.svg",
//       "new": "/icons/confirm/success-new.svg"
//     }
//   ]
// }


const nav = {
  "Left Navigation-Primary Level": [
    {
      "name": "Quick Actions",
      "old": "/icons-sriman/left-nav/quick actions-old.svg",
      "new": "/icons-sriman/left-nav/quick actions-new.svg"
    },
    {
      "name": "Dashboard",
      "old": "/icons-sriman/left-nav/dashboard-old.svg",
      "new": "/icons-sriman/left-nav/dashboard-new.svg"
    },
    {
      "name": "Ownership",
      "old": "/icons-sriman/left-nav/ownership-old.svg",
      "new": "/icons-sriman/left-nav/ownership-new.svg"
    },
    {
      "name": "Equity Awards",
      "old": "/icons-sriman/left-nav/equity-awards-old.svg",
      "new": "/icons-sriman/left-nav/equity-awards-new.svg"
    },
    {
      "name": "Stakeholders",
      "old": "/icons-sriman/left-nav/stakeholders-old.svg",
      "new": "/icons-sriman/left-nav/stakeholders-new.svg"
    },
    {
      "name": "Reports",
      "old": "/icons-sriman/left-nav/reports-old.svg",
      "new": "/icons-sriman/left-nav/reports-new.svg"
    },
    {
      "name": "Documents",
      "old": "/icons-sriman/left-nav/documents-old.svg",
      "new": "/icons-sriman/left-nav/documents-new.svg"
    },
    {
      "name": "Board Consents",
      "old": "/icons-sriman/left-nav/board-consents-old.svg",
      "new": "/icons-sriman/left-nav/board-consents-new.svg"
    },
    {
      "name": "Employee Engagement",
      "old": "/icons-sriman/left-nav/employee engagement-old.svg",
      "new": "/icons-sriman/left-nav/employee engagement-new.svg"
    },
    {
      "name": "Settings",
      "old": "/icons-sriman/left-nav/settings-old.svg",
      "new": "/icons-sriman/left-nav/settings-new.svg"
    }
  ],
  "Left Navigation-Sub Level": [
    {
      "name": "Captable",
      "old": "/icons-sriman/left-nav/captable-old.svg",
      "new": "/icons-sriman/left-nav/captable-new.svg"
    },
    {
      "name": "Scenarios",
      "old": "/icons-sriman/left-nav/scenarios-old.svg",
      "new": "/icons-sriman/left-nav/scenarios-new.svg"
    },
    {
      "name": "Transactions",
      "old": "/icons-sriman/left-nav/transactions-old.svg",
      "new": "/icons-sriman/left-nav/transactions-new.svg"
    },
    {
      "name": "Security Classes",
      "old": "/icons-sriman/left-nav/security-classes-old.svg",
      "new": "/icons-sriman/left-nav/security-classes-new.svg"
    },
    {
      "name": "Pools",
      "old": "/icons-sriman/left-nav/pools-old.svg",
      "new": "/icons-sriman/left-nav/pools-new.svg"
    },
    {
      "name": "Plans",
      "old": "/icons-sriman/left-nav/plans-old.svg",
      "new": "/icons-sriman/left-nav/plans-new.svg"
    },
    {
      "name": "Grants",
      "old": "/icons-sriman/left-nav/grants-old.svg",
      "new": "/icons-sriman/left-nav/grants-new.svg"
    },
    {
      "name": "Exercises",
      "old": "/icons-sriman/left-nav/exercises-old.svg",
      "new": "/icons-sriman/left-nav/exercises-new.svg"
    },
    {
      "name": "Surrenders",
      "old": "/icons-sriman/left-nav/surrenders-old.svg",
      "new": "/icons-sriman/left-nav/surrenders-new.svg"
    },
    {
      "name": "Financial Reports",
      "old": "/icons-sriman/left-nav/financial-reports-old.svg",
      "new": "/icons-sriman/left-nav/financial-reports-new.svg"
    },
    {
      "name": "Stakeholder Details",
      "old": "/icons-sriman/left-nav/stakeholder-old.svg",
      "new": "/icons-sriman/left-nav/stakeholder-new.svg"
    },
    {
      "name": "Verification",
      "old": "/icons-sriman/left-nav/verification-old.svg",
      "new": "/icons-sriman/left-nav/verification-new.svg"
    },
    {
      "name": "Town Hall",
      "old": "/icons-sriman/left-nav/town-hall-old.svg",
      "new": "/icons-sriman/left-nav/town-hall-new.svg"
    },
    {
      "name": "Equity Slips",
      "old": "/icons-sriman/left-nav/equity-slips-old.svg",
      "new": "/icons-sriman/left-nav/equity-slips-new.svg"
    },
    {
      "name": "Manage Users",
      "old": "/icons-sriman/left-nav/manage-users-old.svg",
      "new": "/icons-sriman/left-nav/manage-users-new.svg"
    },
    {
      "name": "Manage Roles",
      "old": "/icons-sriman/left-nav/manage-roles-old.svg",
      "new": "/icons-sriman/left-nav/manage-roles-new.svg"
    },
    {
      "name": "Configurations",
      "old": "/icons-sriman/left-nav/configurations-old.svg",
      "new": "/icons-sriman/left-nav/configurations-new.svg"
    },
    {
      "name": "Templates",
      "old": "/icons-sriman/left-nav/templates-old.svg",
      "new": "/icons-sriman/left-nav/templates-new.svg"
    },
    {
      "name": "Bulk Upload",
      "old": "/icons-sriman/left-nav/bulk-upload-old.svg",
      "new": "/icons-sriman/left-nav/bulk-upload-new.svg"
    },
    {
      "name": "Valuations",
      "old": "/icons-sriman/left-nav/valuations-old.svg",
      "new": "/icons-sriman/left-nav/valuations-new.svg"
    },
  ],
  "Global Navigation-Top Bar": [
    {
      "name": "Qapita Marketplace",
      "old": "/icons-sriman/left-nav/qapita-marketplace-old.svg",
      "new": "/icons-sriman/left-nav/qapita-marketplace-new.svg"
    },
    {
      "name": "Other Offerings",
      "old": "/icons-sriman/left-nav/other-offerings-old.svg",
      "new": "/icons-sriman/left-nav/other-offerings-new.svg"
    },
    {
      "name": "Startup Deals",
      "old": "/icons-sriman/left-nav/startup-deals-old.svg",
      "new": "/icons-sriman/left-nav/startup-deals-new.svg"
    },
    {
      "name": "Notification",
      "old": "/icons-sriman/left-nav/notification-old.svg",
      "new": "/icons-sriman/left-nav/notification-new.svg"
    },
    {
      "name": "My Tasks",
      "old": "/icons-sriman/left-nav/my-tasks-old.svg",
      "new": "/icons-sriman/left-nav/my-tasks-new.svg"
    },
    {
      "name": "User",
      "old": "/icons-sriman/left-nav/user-old.svg",
      "new": "/icons-sriman/left-nav/user-new.svg"
    }
  ]}

  

const IconBeforeAfter = ({ name, oldUrl, newUrl }) => {
  return (
    <div className="grid grid-cols-3 gap-6 items-center py-3 border-b">
      <p className="text-sm text-gray-700">{name}</p>

      <div className="flex justify-center">
        <img src={oldUrl} alt={`${name} old icon`} className="h-6 opacity-70" />
      </div>

      <div className="flex justify-center">
        <img src={newUrl} alt={`${name} new icon`} className="h-6" />
      </div>
    </div>
  );
};

 function IconsSection() {
  return (
    <section className="space-y-10 mt-10">
      <p className="text-lg leading-relaxed">
        Icons are a crucial part of visual communication. ink uses a carefully curated
        icon library that maintains consistency across all components.
      </p>

      {Object.entries(nav).map(([category, icons]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold">{category}</h2>

          <div className="grid grid-cols-3 text-sm font-medium text-gray-500 pb-2 border-b">
            <div></div>
            <p className="text-center">Current Icons</p>
            <p className="text-center">Proposed Icons</p>
          </div>

          {icons.map((icon) => (
            <IconBeforeAfter
              key={icon.name}
              name={icon.name}
              oldUrl={icon.old}
              newUrl={icon.new}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

const FIRST_IMAGE = { imageUrl: "/assets/grid-demo-after.png" };
const SECOND_IMAGE = { imageUrl: "/assets/grid-demo.png" };
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
      description="Guidelines for using icons consistently across Qapita applications."
    >
      
        <p className="text-md leading-relaxed">
        A scalable library of icons handcrafted by Qapita, designed to represent actions, categories, and concepts with clarity and consistency. Our icons are visually simple, universally recognizable, and aligned with Qapita’s modern, friendly brand principles, supporting intuitive navigation and communication across all platforms.
        </p>
  {/* <div className="mt-2 border-rounded">
    <ReactBeforeSliderComponent
      firstImage={FIRST_IMAGE}
      secondImage={SECOND_IMAGE}
    />
  </div> */}

  <img src="/assets/figma-icon.png" className="mt-10 border-radius-10"  />

        <p className="text-md leading-relaxed mt-10">

One of our values is to create a distinct Qapita personality that is strong and consistent. Iconography is a powerful visual cue to the user and should reflect our particular sense of style.
        </p>


      <section className="space-y-6 mt-10" >
      


 {/* --- Start New Tabs Here --- */}
        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="Guidance">Guidance</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">

                <p className="text-lg leading-relaxed mt-10 mb-10">
          Icons are a crucial part of visual communication. ink uses a carefully curated
          icon library that maintains consistency across all components.
        </p>
            <p className="text-muted-foreground mt-4">
 <IconsSection />

                                {/* <IconGallery categories={customIconCategories} /> */}
            </p>


          </TabsContent>
          <TabsContent value="Guidance">
            <p className="text-muted-foreground mt-4">

{/* <img src="/assets/grid-demo.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> */}
              We primarily use Lucide icons for their extensive library and consistent design language. For specialized needs, we also maintain a custom SVG icon set.
            </p>

            <IconGridDocumentation />
{/* 
  <div className="mt-4">
    <ReactBeforeSliderComponent
      firstImage={FIRST_IMAGE}
      secondImage={SECOND_IMAGE}
    />
  </div> */}


          </TabsContent>
          <TabsContent value="usage">
            <p className="text-muted-foreground mt-4">
              Icons should be used purposefully to enhance comprehension, highlight actions, and improve navigation. Avoid decorative overuse that might clutter the interface.
            </p>
          </TabsContent>
         <TabsContent value="accessibility">
  <p className="text-muted-foreground mt-4">
    Ensure all icons provide adequate contrast and, when conveying meaning,
    include appropriate ARIA labels or alternative text for screen readers.
    Decorative icons should be hidden from accessibility trees.
  </p>

  <div className="space-y-6  mt-6">

    {/* ------------------------------------------ */}
    {/* ICON LIBRARY & PRINCIPLES */}
    {/* ------------------------------------------ */}

    <h2 className="text-lg font-semibold">Icon Library</h2>

    <h3 className="text-base font-medium">What are the principles guiding the creation?</h3>
    <p>Current and Proposed: Figma File Reference.</p>

    <h3 className="text-base font-medium">Usage Rules</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Stroke vs filled style and when to use each (primary vs secondary actions, states).</li>
      <li>Corner treatment (rounded vs sharp), joins, caps, and consistent visual weight.</li>
      <li>Use of negative space and appropriate simplification (avoid tiny details).</li>
      <li>States when combined with Buttons – Default, Hover/Pressed, Selected.</li>
    </ul>

    <h3 className="text-base font-medium">Color and Theming</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Use <code>currentColor</code> to inherit text color by default.</li>
      <li>Use semantic colors for success, warning, destructive states.</li>
      <li>Rules for duotone or multi-color icons (if supported).</li>
    </ul>

    <h3 className="text-base font-medium">Constraints</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Spacing with text, required alignment in inputs/buttons, minimum touch targets.</li>
      <li>When to pair icons with text vs icon-only and tooltip/ARIA-label requirements.</li>
      <li>Do/Don't guidelines (e.g., do not use icon-only for critical actions).</li>
    </ul>

    <h3 className="text-base font-medium">Size and Layout</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Standard sizes: 16, 20, 24px (dense UI, buttons, navigation, etc.).</li>
      <li>Use a 24×24 pixel grid with 2px padding.</li>
      <li>Maintain consistent stroke weight, corner radius, alignment.</li>
    </ul>

    {/* ------------------------------------------ */}
    {/* ACCESSIBILITY PRINCIPLE 1: PERCEIVABLE */}
    {/* ------------------------------------------ */}

    <h2 className="text-lg font-semibold">Accessibility</h2>

    <h3 className="text-base font-semibold">Principle 1: Perceivable</h3>

    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b">
          <th className="py-2 text-left font-medium">WCAG Success Criterion / ID</th>
          <th className="py-2 text-left font-medium">Level</th>
          <th className="py-2 text-left font-medium">Purpose</th>
          <th className="py-2 text-left font-medium">Target Needs</th>
          <th className="py-2 text-left font-medium">How to Implement</th>
        </tr>
      </thead>

      <tbody>
        {/* 1.1.1 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.1.1 Non-text Content</td>
          <td className="py-2">A</td>
          <td className="py-2">To convey meaning of visual or non-text content.</td>
          <td className="py-2">Code, Sensory, Wording, Cognitive, Visual.</td>
          <td className="py-2">
            Provide descriptive text alternatives for icons, charts, controls.
            Decorative content must use empty alt attributes or <code>aria-hidden</code>.
          </td>
        </tr>

        {/* 1.3.1 / 1.3.2 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.3 – Adaptable<br />1.3.1 / 1.3.2</td>
          <td className="py-2">A</td>
          <td className="py-2">
            Ensure information order and structure remain meaningful.
          </td>
          <td className="py-2">Cognitive, Visual, Code.</td>
          <td className="py-2">
            Use semantic HTML; reading order must match visual order.<br/><br/>
            <strong>Example:</strong><br/>
            Back icon → “Back” label → Next icon → “Next” label.
          </td>
        </tr>

        {/* 1.3.4 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.3.4 Orientation</td>
          <td className="py-2">AA</td>
          <td className="py-2">Content should be usable in portrait or landscape.</td>
          <td className="py-2">Visual, Cognitive.</td>
          <td className="py-2">Do not lock orientation unless essential.</td>
        </tr>

        {/* 1.3.6 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.3.6 Identify Purpose</td>
          <td className="py-2">AAA</td>
          <td className="py-2">Help assistive tech understand purpose of regions.</td>
          <td className="py-2">Visual, Cognitive.</td>
          <td className="py-2">
            Use semantic regions, ARIA landmarks.<br/>
            Example: Primary navigation with icon + label.
          </td>
        </tr>

        {/* 1.4 series */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.4.1 Use of Color</td>
          <td className="py-2">A</td>
          <td className="py-2">Color should not be the only indicator.</td>
          <td className="py-2">Visual.</td>
          <td className="py-2">
            Add icons, labels, underlines, shapes as supporting cues.
          </td>
        </tr>

        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.4.3 Contrast (Minimum)</td>
          <td className="py-2">AA</td>
          <td className="py-2">Ensure text/icons are readable for low vision users.</td>
          <td className="py-2">Visual.</td>
          <td className="py-2">
            4.5:1 for normal text/icons, 3:1 for large (24px+ or bold 19px+).
          </td>
        </tr>

        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.4.4 Resize Text</td>
          <td className="py-2">AA</td>
          <td className="py-2">Interfaces must remain usable at 200% zoom.</td>
          <td className="py-2">Visual.</td>
          <td className="py-2">Content must not break or overflow when zoomed.</td>
        </tr>

        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.4.6 Contrast (Enhanced)</td>
          <td className="py-2">AAA</td>
          <td className="py-2">Provide strong readability at high contrast levels.</td>
          <td className="py-2">Visual.</td>
          <td className="py-2">
            Icons/text require 7:1 contrast minimum (normal size).
          </td>
        </tr>

        <tr className="border-b align-top">
          <td className="py-2 font-medium">1.4.11 Non-text Contrast</td>
          <td className="py-2">AA</td>
          <td className="py-2">Interactive graphics & controls must be visible.</td>
          <td className="py-2">Visual.</td>
          <td className="py-2">Minimum 3:1 contrast for icons, graph lines, controls.</td>
        </tr>

        <tr className="align-top">
          <td className="py-2 font-medium">1.4.13 Content on Hover or Focus</td>
          <td className="py-2">AA</td>
          <td className="py-2">Hover/focus content must remain dismissible and visible.</td>
          <td className="py-2">Visual, Cognitive.</td>
          <td className="py-2">
            Must stay until dismissed; Esc must dismiss; must stay on hover.
          </td>
        </tr>

      </tbody>
    </table>

    {/* ------------------------------------------ */}
    {/* PRINCIPLE 2: OPERABLE */}
    {/* ------------------------------------------ */}

    <h3 className="text-base font-semibold">Principle 2: Operable</h3>

    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b">
          <th className="py-2 text-left font-medium">WCAG Success Criterion / ID</th>
          <th className="py-2 text-left font-medium">Level</th>
          <th className="py-2 text-left font-medium">Purpose</th>
          <th className="py-2 text-left font-medium">Target Needs</th>
          <th className="py-2 text-left font-medium">How to Implement</th>
        </tr>
      </thead>

      <tbody>

        {/* 2.1.1 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.1.1 Keyboard</td>
          <td className="py-2">A</td>
          <td className="py-2">Content must be usable without a mouse.</td>
          <td className="py-2">Keyboard, Motor, Visual.</td>
          <td className="py-2">
            All functions must be accessible with keyboard only.
          </td>
        </tr>

        {/* 2.1.2 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.1.2 No Keyboard Trap</td>
          <td className="py-2">A</td>
          <td className="py-2">Prevent trapping focus inside widgets.</td>
          <td className="py-2">Keyboard, Cognitive.</td>
          <td className="py-2">
            Users must easily tab in/out of components.
          </td>
        </tr>

        {/* 2.1.3 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.1.3 Keyboard (No Exception)</td>
          <td className="py-2">AAA</td>
          <td className="py-2">All functions must be keyboard operable.</td>
          <td className="py-2">All.</td>
          <td className="py-2">Even gesture tasks must have keyboard alternatives.</td>
        </tr>

        {/* 2.1.4 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.1.4 Character Key Shortcuts</td>
          <td className="py-2">A</td>
          <td className="py-2">Prevent accidental activation.</td>
          <td className="py-2">Keyboard, Motor.</td>
          <td className="py-2">
            Shortcuts must be turn-off-able or require modifiers.
          </td>
        </tr>

        {/* 2.3.3 */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.3.3 Animation from Interaction</td>
          <td className="py-2">AAA</td>
          <td className="py-2">Prevent motion sickness.</td>
          <td className="py-2">Sensory.</td>
          <td className="py-2">
            Allow reduced-motion settings to disable hover/tap animations.
          </td>
        </tr>

        {/* 2.4.x */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.4.7 Focus Visible</td>
          <td className="py-2">AA</td>
          <td className="py-2">Show which element is focused.</td>
          <td className="py-2">Keyboard.</td>
          <td className="py-2">Provide visible focus outline.</td>
        </tr>

        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.4.11 Focus Not Obscured (Minimum)</td>
          <td className="py-2">AA</td>
          <td className="py-2">Focus must remain partially visible.</td>
          <td className="py-2">Keyboard.</td>
          <td className="py-2">Avoid sticky overlays hiding focused elements.</td>
        </tr>

        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.4.12 Focus Not Obscured (Enhanced)</td>
          <td className="py-2">AAA</td>
          <td className="py-2">Focused element must be fully visible.</td>
          <td className="py-2">Keyboard.</td>
          <td className="py-2">No content may cover the focus target.</td>
        </tr>

        <tr className="align-top">
          <td className="py-2 font-medium">2.4.13 Focus Appearance</td>
          <td className="py-2">AAA</td>
          <td className="py-2">Enhance focus indicator visibility.</td>
          <td className="py-2">Keyboard, Visual.</td>
          <td className="py-2">
            2px minimum outline, 3:1 contrast against non-focused state.
          </td>
        </tr>

        {/* 2.5 series */}
        <tr className="border-b align-top">
          <td className="py-2 font-medium">2.5.5 Target Size (Enhanced)</td>
          <td className="py-2">AAA</td>
          <td className="py-2">Large, easy-to-hit controls.</td>
          <td className="py-2">Motor, Visual.</td>
          <td className="py-2">44×44px minimum target size.</td>
        </tr>

        <tr className="align-top">
          <td className="py-2 font-medium">2.5.8 Target Size (Minimum)</td>
          <td className="py-2">AA</td>
          <td className="py-2">Minimum touch accessibility.</td>
          <td className="py-2">Motor.</td>
          <td className="py-2">24×24px minimum target size.</td>
        </tr>

      </tbody>
    </table>

    {/* ------------------------------------------ */}
    {/* PRINCIPLE 3: UNDERSTANDABLE */}
    {/* ------------------------------------------ */}

    <h3 className="text-base font-semibold">Principle 3: Understandable</h3>

    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b">
          <th className="py-2 text-left font-medium">WCAG Success Criterion</th>
          <th className="py-2 text-left font-medium">Level</th>
          <th className="py-2 text-left font-medium">Purpose</th>
          <th className="py-2 text-left font-medium">Target Needs</th>
          <th className="py-2 text-left font-medium">How to Implement</th>
        </tr>
      </thead>

      <tbody>

        <tr className="border-b align-top">
          <td className="py-2 font-medium">3.2.1 On Focus</td>
          <td className="py-2">A</td>
          <td className="py-2">Avoid unexpected changes when focusing elements.</td>
          <td className="py-2">Keyboard, Cognitive.</td>
          <td className="py-2">No auto navigation, popups, or form submission on focus.</td>
        </tr>

        <tr className="border-b align-top">
          <td className="py-2 font-medium">3.2.3 Consistent Navigation</td>
          <td className="py-2">AA</td>
          <td className="py-2">Navigation must remain predictable.</td>
          <td className="py-2">Cognitive.</td>
          <td className="py-2">Menus, links, search must remain in consistent places.</td>
        </tr>

        <tr className="align-top">
          <td className="py-2 font-medium">3.2.4 Consistent Identification</td>
          <td className="py-2">AA</td>
          <td className="py-2">Controls must be recognized consistently.</td>
          <td className="py-2">Cognitive.</td>
          <td className="py-2">
            Icons with identical functionality must share the same appearance and label.
          </td>
        </tr>

      </tbody>
    </table>

    {/* ------------------------------------------ */}
    {/* PRINCIPLE 4: ROBUST */}
    {/* ------------------------------------------ */}

    <h3 className="text-base font-semibold">Principle 4: Robust</h3>

    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b">
          <th className="py-2 text-left font-medium">Criterion</th>
          <th className="py-2 text-left font-medium">Level</th>
          <th className="py-2 text-left font-medium">Purpose</th>
          <th className="py-2 text-left font-medium">Target Needs</th>
          <th className="py-2 text-left font-medium">Implementation</th>
        </tr>
      </thead>

      <tbody>
        <tr className="align-top">
          <td className="py-2 font-medium">4.1.2 Name, Role, Value</td>
          <td className="py-2">A</td>
          <td className="py-2">Assistive tech must interpret controls correctly.</td>
          <td className="py-2">Code, Forms, Keyboard, Visual.</td>
          <td className="py-2">
            Provide accessible names, proper roles (button, link), and expose states and values.
          </td>
        </tr>
      </tbody>
    </table>

    {/* ------------------------------------------ */}
    {/* FUTURE SCALABILITY / NEW ICON CREATION */}
    {/* ------------------------------------------ */}

    <h2 className="text-lg font-semibold mt-8">Creating and Adding New Icons – Future Scalability</h2>

    <h3 className="text-base font-medium">Process</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Request creation</li>
      <li>Design in Figma using the correct grid</li>
      <li>Review & audit</li>
      <li>Engineering handoff</li>
      <li>Release & documentation</li>
    </ul>

    <h3 className="text-base font-medium">Rules for Composite Icons</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Reuse existing shapes where possible.</li>
      <li>Limit number of parts for simplicity.</li>
      <li>Define consistent badge placement.</li>
    </ul>

    <h3 className="text-base font-medium">Checklist Before Adding</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Naming follows conventions.</li>
      <li>Aligns to pixel grid.</li>
      <li>Matches visual style & stroke weight.</li>
      <li>Tested at small sizes.</li>
    </ul>

    <h3 className="text-base font-medium">Naming and Organization</h3>
    <ul className="list-disc pl-6 space-y-1">
      <li>Conventions: <code>category_action-state-size</code> or <code>arrow_left</code>.</li>
      <li>Categories: actions, navigation, status, media, files, etc.</li>
      <li>Rules for aliases and deprecations.</li>
    </ul>

  </div>
</TabsContent>

        </Tabs>
        {/* --- End New Tabs Here --- */}




        

      </section>
    </ArticleLayout>
  );
};


 function IconGridDocumentation() {
  return (
    <div className="space-y-16">

      {/* ------------------------------------------- */}
      {/* SECTION: Icon Grid Structure */}
      {/* ------------------------------------------- */}
      <section>
        <h2 className="text-xl font-semibold mb-6">
          Icon Grid Structure — Circle, Square, Rectangle
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Square Icon Example */}
          <div className="space-y-4">
            <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center">
              {/* Replace with image */}
              <span className="text-gray-400">
                <img src="/assets/ico-ano-01.png" />
                </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Square height and width: 22px
            </p>
          </div>

          {/* Icon drawn using square keyline */}
          <div className="space-y-4">
            <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-gray-400">                <img src="/assets/ico-ano-02.png" />
</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Icon drawn using square keyline
            </p>
          </div>

          {/* Circle Keyline */}
          <div className="space-y-4">
            <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-gray-400"><img src="/assets/ico-ano-03.png" /></span>
            </div>
            <p className="text-sm text-muted-foreground">
              Circle diameter: 22px
            </p>
          </div>

          {/* Icon using circle keyline */}
          <div className="space-y-4">
            <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-gray-400"><img src="/assets/ico-ano-04.png" /></span>
            </div>
            <p className="text-sm text-muted-foreground">
              Icon drawn using circle keyline
            </p>
          </div>

        </div>
      </section>

      {/* ------------------------------------------- */}
      {/* SECTION: Live Area / Padding */}
      {/* ------------------------------------------- */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Padding / Spacing</h2>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Icon content should remain inside the live area, ensuring it stays
          visible and avoids clipping. Additional weight may extend into padding,
          but no part of the icon should enter outside the trim area.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Live Area */}
          <div className="space-y-4">
            <div className="w-full h-48 bg-gray-50 rounded-md flex items-center justify-center">
              <span className="text-gray-400">[ Live Area Image ]</span>
            </div>
            <p className="text-sm text-muted-foreground">Live area</p>
          </div>

          {/* Padding */}
          <div className="space-y-4">
            <div className="w-full h-48 bg-gray-50 rounded-md flex items-center justify-center">
              <span className="text-gray-400">[ Padding Image ]</span>
            </div>
            <p className="text-sm text-muted-foreground">Padding</p>
          </div>

        </div>
      </section>

      {/* ------------------------------------------- */}
      {/* SECTION: Pixel Alignment */}
      {/* ------------------------------------------- */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Pixel Alignment</h2>
        <p className="text-muted-foreground max-w-2xl mb-8">
          Icons are displayed on a 24px × 24px grid. For pixel-perfect accuracy,
          review icons at 100% scale to ensure clean alignment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="space-y-4">
            <div className="w-full h-48 bg-gray-50 rounded flex items-center justify-center">
              <span className="text-gray-400">[ 24px Grid (100%) ]</span>
            </div>
            <p className="text-sm text-muted-foreground">24px grid at 100% scale</p>
          </div>

          <div className="space-y-4">
            <div className="w-full h-48 bg-gray-50 rounded flex items-center justify-center">
              <span className="text-gray-400">[ 24×24 Grid ]</span>
            </div>
            <p className="text-sm text-muted-foreground">24×24 grid at 100% scale</p>
          </div>

        </div>
      </section>

      {/* ------------------------------------------- */}
      {/* SECTION: Icon Sizes */}
      {/* ------------------------------------------- */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Icon Sizes</h2>

        <p className="text-muted-foreground mb-6">
          Icons appear at additional sizes: 12px, 16px, 20px, 24px, 32px, 40px,
          and 48px, with 24px preferred for desktop UIs. Larger sizes are used
          for mobile or display contexts.
        </p>

        <div className="flex flex-wrap items-center gap-8">
          {["12", "16", "20", "24", "32", "40", "48"].map((size) => (
            <div key={size} className="flex flex-col items-center">
              <div
                className="bg-gray-100 rounded-md flex items-center justify-center mb-2"
                style={{ width: `${size}px`, height: `${size}px` }}
              >
                <span className="text-gray-400 text-xs">[{size}px]</span>
              </div>
              <span className="text-sm text-muted-foreground">{size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------- */}
      {/* SECTION: Corner Radius */}
      {/* ------------------------------------------- */}
      <section>
        <h2 className="text-xl font-semibold mb-6">Corner Radius</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Instructions */}
          <div className="space-y-4">
            <div className="w-full h-56 bg-gray-50 rounded-md flex items-center justify-center">
              <span className="text-gray-400">[ Corner Radius Diagram ]</span>
            </div>
            <ul className="list-decimal pl-6 text-muted-foreground space-y-1 text-sm">
              <li>Use a 1–12px corner radius depending on icon size.</li>
              <li>Use round line caps for stroke ends.</li>
              <li>Use a consistent stroke for inner and outer details.</li>
            </ul>
          </div>

          {/* Size-specific radius */}
          <div className="space-y-6">
            {[
              { size: "12×12", stroke: 1, radius: 2 },
              { size: "16×16", stroke: 1, radius: 2 },
              { size: "20×20", stroke: 1.5, radius: 4 },
              { size: "24×24", stroke: 1.5, radius: 6 },
              { size: "32×32", stroke: 2, radius: 8 },
              { size: "40×40", stroke: 2.5, radius: 10 },
              { size: "48×48", stroke: 2.5, radius: 12 },
            ].map((item) => (
              <div key={item.size} className="space-y-3">
                <h4 className="font-medium text-sm">Icon Size – {item.size}</h4>
                <div className="w-full h-40 bg-gray-50 rounded flex items-center justify-center">
                  <span className="text-gray-400">
                    [ Stroke {item.stroke}px • Radius {item.radius}px ]
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}


export default Icons;
