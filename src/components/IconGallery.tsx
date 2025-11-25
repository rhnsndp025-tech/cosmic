import { useState, useMemo } from "react";
import { IconCard } from "@/components/IconCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export interface IconItem {
  name: string;
  path: string;
  category: string[];
  updatedPath?: string;
}

export interface IconCategory {
  name: string;
  subcategories?: IconCategory[];
  icons: IconItem[];
}

interface IconGalleryProps {
  categories: IconCategory[];
}

export function IconGallery({ categories }: IconGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Flatten all icons for search and filtering
  const allIcons = useMemo(() => {
    const flatten = (cats: IconCategory[]): IconItem[] => {
      return cats.flatMap(cat => [
        ...cat.icons,
        ...(cat.subcategories ? flatten(cat.subcategories) : [])
      ]);
    };
    return flatten(categories);
  }, [categories]);

  // Filter icons based on search and category
  const filteredIcons = useMemo(() => {
    return allIcons.filter(icon => {
      const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           icon.category.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = !selectedCategory || icon.category.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });
  }, [allIcons, searchQuery, selectedCategory]);

  // Get all unique categories
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    allIcons.forEach(icon => icon.category.forEach(cat => cats.add(cat)));
    return Array.from(cats).sort();
  }, [allIcons]);

  const renderCategory = (category: IconCategory, level = 0) => {
    const hasIcons = category.icons.length > 0;
    const hasSubcategories = category.subcategories && category.subcategories.length > 0;

    if (!hasIcons && !hasSubcategories) return null;

    return (
      <Collapsible key={category.name} defaultOpen={level === 0} className="mb-4">
        <CollapsibleTrigger className="flex items-center gap-2 w-full text-left group">
          <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-0 group-data-[state=closed]:-rotate-90" />
          <h3 className={`font-playfair font-semibold ${level === 0 ? 'text-2xl' : level === 1 ? 'text-xl' : 'text-lg'}`}>
            {category.name}
          </h3>
          <span className="text-sm text-muted-foreground ml-2">
            ({category.icons.length} icons)
          </span>
        </CollapsibleTrigger>
        
        <CollapsibleContent className={`mt-4 ${level > 0 ? 'ml-6' : ''}`}>
          {hasIcons && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
              {category.icons.map((icon, idx) => (
                <IconCard key={idx} {...icon} />
              ))}
            </div>
          )}
          
          {hasSubcategories && category.subcategories!.map(subcat => renderCategory(subcat, level + 1))}
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="sticky top-0 bg-background z-10 pb-4 border-b border-border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search icons by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All ({allIcons.length})
            </Button>
            {allCategories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredIcons.length} of {allIcons.length} icons
      </div>

      {/* Icon Display */}
      {searchQuery || selectedCategory ? (
        // Flat grid when searching/filtering
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredIcons.map((icon, idx) => (
            <IconCard key={idx} {...icon} />
          ))}
        </div>
      ) : (
        // Organized by categories when not searching
        <div className="space-y-8">
          {categories.map(category => renderCategory(category))}
        </div>
      )}

      {filteredIcons.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No icons found matching your search.
        </div>
      )}
    </div>
  );
}
