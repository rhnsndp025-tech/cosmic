import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export const ToggleShowcase = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
        <Label htmlFor="toggle-1">Enable notifications</Label>
        <Switch id="toggle-1" />
      </div>
      
      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
        <Label htmlFor="toggle-2">Dark mode</Label>
        <Switch id="toggle-2" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between p-4 border border-border rounded-lg opacity-50">
        <Label htmlFor="toggle-3">Disabled option</Label>
        <Switch id="toggle-3" disabled />
      </div>
    </div>
  );
};
