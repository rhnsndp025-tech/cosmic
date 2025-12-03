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
      description="Guidelines for using icons consistently across your applications."
    >
      
  <div className="mt-4 border-rounded">
    <ReactBeforeSliderComponent
      firstImage={FIRST_IMAGE}
      secondImage={SECOND_IMAGE}
    />
  </div>
      <section className="space-y-6 mt-10" >
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
 <IconsSection />

                                {/* <IconGallery categories={customIconCategories} /> */}
            </p>


          </TabsContent>
          <TabsContent value="types">
            <p className="text-muted-foreground mt-4">

{/* <img src="/assets/grid-demo.png" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> */}
              We primarily use Lucide icons for their extensive library and consistent design language. For specialized needs, we also maintain a custom SVG icon set.
            </p>
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
