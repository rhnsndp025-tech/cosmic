import { NavigationShowcase } from './showcase/NavigationShowcase';
import { ToggleShowcase } from './showcase/ToggleShowcase';
import { CheckboxShowcase } from './showcase/CheckboxShowcase';
import { RadioShowcase } from './showcase/RadioShowcase';
import { SliderShowcase } from './showcase/SliderShowcase';
import { TabsShowcase } from './showcase/TabsShowcase';
import { PaginationShowcase } from './showcase/PaginationShowcase';
import { TagBadgeShowcase } from './showcase/TagBadgeShowcase';
import { AlertDialogShowcase } from './showcase/AlertDialogShowcase';
import { DataTableShowcase } from './showcase/DataTableShowcase';
import { DrawerShowcase } from './showcase/DrawerShowcase';
import { DataCardsShowcase } from './showcase/DataCardsShowcase';
import { BannerShowcase } from './showcase/BannerShowcase';
import { CollapsibleShowcase } from './showcase/CollapsibleShowcase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const ComponentShowcase = () => {
  return (
    <div className="py-8 px-4">
      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-8 mt-6">
          {/* Typography */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Typography</h2>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <h2 className="text-3xl font-bold">Heading 2</h2>
              <h3 className="text-2xl font-bold">Heading 3</h3>
              <h4 className="text-xl font-bold">Heading 4</h4>
              <p className="text-base text-foreground">
                This is a paragraph with regular text. The design system provides consistent typography across all components.
              </p>
              <p className="text-sm text-muted-foreground">Small muted text for secondary information</p>
            </div>
          </section>

          <Separator />

          {/* Buttons */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button disabled>Disabled</Button>
            </div>
          </section>

          <Separator />

          {/* Form Elements */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Form Elements</h2>
            <div className="space-y-4 max-w-md">
              <Input placeholder="Enter text..." />
              <Input type="email" placeholder="Email address" />
              <Input type="password" placeholder="Password" />
              <Input disabled placeholder="Disabled input" />
            </div>
          </section>

          <Separator />

          {/* Toggles & Checkboxes */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Toggles & Switches</h2>
            <ToggleShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Checkboxes</h2>
            <CheckboxShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Radio Buttons</h2>
            <RadioShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Sliders</h2>
            <SliderShowcase />
          </section>
        </TabsContent>

        <TabsContent value="navigation" className="space-y-8 mt-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Navigation</h2>
            <NavigationShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Tabs</h2>
            <TabsShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Pagination</h2>
            <PaginationShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Drawer / Sheet</h2>
            <DrawerShowcase />
          </section>
        </TabsContent>

        <TabsContent value="data" className="space-y-8 mt-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Cards & Badges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">This is the card content area where you can place any information.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Another Card</CardTitle>
                  <CardDescription>With some badges</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Tags & Badges</h2>
            <TagBadgeShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Cards</h2>
            <DataCardsShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Table</h2>
            <DataTableShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Collapsible & Accordion</h2>
            <CollapsibleShowcase />
          </section>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-8 mt-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Alerts & Banners</h2>
            <BannerShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Alert Dialogs</h2>
            <AlertDialogShowcase />
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Progress Indicators</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">25% Complete</p>
                <Progress value={25} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">50% Complete</p>
                <Progress value={50} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">75% Complete</p>
                <Progress value={75} />
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
};
