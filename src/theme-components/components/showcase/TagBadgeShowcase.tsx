import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

export const TagBadgeShowcase = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Badge Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Status Badges</h3>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
          <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
          <Badge className="bg-red-500 hover:bg-red-600">Inactive</Badge>
          <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Removable Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="gap-1">
            React
            <X className="h-3 w-3 cursor-pointer" />
          </Badge>
          <Badge variant="secondary" className="gap-1">
            TypeScript
            <X className="h-3 w-3 cursor-pointer" />
          </Badge>
          <Badge variant="secondary" className="gap-1">
            Tailwind
            <X className="h-3 w-3 cursor-pointer" />
          </Badge>
        </div>
      </div>
    </div>
  );
};
