import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export const CheckboxShowcase = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Checkbox Group</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="check-1" />
          <Label htmlFor="check-1">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="check-2" defaultChecked />
          <Label htmlFor="check-2">Subscribe to newsletter</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="check-3" disabled />
          <Label htmlFor="check-3" className="opacity-50">Disabled option</Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Feature Selection</h3>
        <div className="flex items-center space-x-2">
          <Checkbox id="feature-1" defaultChecked />
          <Label htmlFor="feature-1">Email notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="feature-2" defaultChecked />
          <Label htmlFor="feature-2">SMS notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="feature-3" />
          <Label htmlFor="feature-3">Push notifications</Label>
        </div>
      </div>
    </div>
  );
};
