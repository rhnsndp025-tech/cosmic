import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CollapsibleShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Collapsible Section</h3>
        <Collapsible className="border border-border rounded-lg">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between p-4 h-auto">
              <span>Click to expand additional information</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground">
              This is the collapsible content that appears when you click the trigger above.
              You can add any content here including forms, lists, or other components.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Accordion</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is a design system?</AccordionTrigger>
            <AccordionContent>
              A design system is a collection of reusable components, guided by clear standards,
              that can be assembled together to build applications.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I customize themes?</AccordionTrigger>
            <AccordionContent>
              You can customize themes using the Theme Composer tool available in the top navigation.
              Click the settings icon to open the composer and modify colors, typography, and spacing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What are design tokens?</AccordionTrigger>
            <AccordionContent>
              Design tokens are the visual design atoms of the design system - specifically, they are
              named entities that store visual design attributes like colors, fonts, and spacing values.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
