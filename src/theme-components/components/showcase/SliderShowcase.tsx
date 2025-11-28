import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

export const SliderShowcase = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label>Volume (0-100)</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      <div className="space-y-4">
        <Label>Price Range ($0 - $1000)</Label>
        <Slider defaultValue={[250, 750]} max={1000} step={10} />
      </div>

      <div className="space-y-4">
        <Label>Opacity (0% - 100%)</Label>
        <Slider defaultValue={[75]} max={100} step={5} />
      </div>

      <div className="space-y-4">
        <Label className="opacity-50">Disabled Slider</Label>
        <Slider defaultValue={[50]} max={100} disabled />
      </div>
    </div>
  );
};
