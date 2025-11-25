import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCardProps {
  name: string;
  path: string;
  category: string[];
  updatedPath?: string;
}

export function IconCard({ name, path, category, updatedPath }: IconCardProps) {
  const [copied, setCopied] = useState(false);

  const copyPath = async () => {
    await navigator.clipboard.writeText(path);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        {/* Icon Preview */}
        <div className="flex gap-4 items-center justify-center min-h-[80px]">
          <div className="flex-1 flex items-center justify-center bg-muted rounded-lg p-4">
            <img src={path} alt={name} className="w-12 h-12 object-contain" />
            <span className="sr-only">Current icon</span>
          </div>
          {updatedPath && (
            <>
              <div className="text-muted-foreground">→</div>
              <div className="flex-1 flex items-center justify-center bg-accent/20 rounded-lg p-4 border border-accent">
                <img src={updatedPath} alt={`${name} updated`} className="w-12 h-12 object-contain" />
                <span className="sr-only">Updated icon</span>
              </div>
            </>
          )}
        </div>

        {/* Icon Info */}
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-medium text-sm truncate" title={name}>{name}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyPath}
              className="h-6 w-6 p-0 shrink-0"
              title="Copy path"
            >
              {copied ? (
                <Check className="h-3 w-3 text-green-500" />
              ) : (
                <Copy className="h-3 w-3" />
              )}
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {category.map((cat, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>

          {!updatedPath && (
            <div className="pt-2 border-t border-border">
              <p className="text-xs text-muted-foreground italic">
                No updated version
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
