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
  path: string; // This is the original path
  category: string[];
  updatedPath?: string; // This will now be populated
}

export interface IconCategory {
  name: string;
  subcategories?: IconCategory[];
  icons: IconItem[];
  description?: string; // Added description property
}

interface IconGalleryProps {
  categories: IconCategory[];
}

// Helper function to derive the updated path
const getUpdatedIconPath = (originalPath: string): string => {
  const lastDotIndex = originalPath.lastIndexOf('.');
  if (lastDotIndex === -1) {
    // If no extension, just append _updated
    return `${originalPath}_updated`;
  }
  const fileName = originalPath.substring(0, lastDotIndex);
  const extension = originalPath.substring(lastDotIndex);
  return `${fileName}_updated${extension}`;
};


export function IconGallery({ categories }: IconGalleryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Flatten all icons for search and filtering, and add the updatedPath
  const allIcons = useMemo(() => {
    const flatten = (cats: IconCategory[]): IconItem[] => {
      return cats.flatMap(cat => [
        ...cat.icons.map(icon => ({
          ...icon,
          // Populate updatedPath using the helper function
          updatedPath: getUpdatedIconPath(icon.path)
        })),
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

  // Get all unique categories (for filter buttons)
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    allIcons.forEach(icon => icon.category.forEach(cat => cats.add(cat)));
    return Array.from(cats).sort();
  }, [allIcons]);

  // Find the description for the currently selected category
  const selectedCategoryDescription = useMemo(() => {
    if (!selectedCategory) return null;

    // Recursive helper to find the category by name
    const findCategoryDescription = (cats: IconCategory[], name: string): string | undefined => {
      for (const cat of cats) {
        if (cat.name === name && cat.description) {
          return cat.description;
        }
        if (cat.subcategories) {
          const subDescription = findCategoryDescription(cat.subcategories, name);
          if (subDescription) return subDescription;
        }
      }
      return undefined;
    };

    return findCategoryDescription(categories, selectedCategory);

  }, [selectedCategory, categories]);


  const renderCategory = (category: IconCategory, level = 0) => {
    // Filter icons within this category based on search/selected category
    const categoryIcons = category.icons.filter(icon =>
      filteredIcons.some(filteredIcon => filteredIcon.name === icon.name && filteredIcon.path === icon.path)
    ).map(icon => ({
      ...icon,
      // Ensure updatedPath is present when mapping within categories
      updatedPath: getUpdatedIconPath(icon.path)
    }));

    const hasVisibleIcons = categoryIcons.length > 0;
    const hasVisibleSubcategories = category.subcategories?.some(subcat =>
      subcat.icons.some(icon => filteredIcons.some(fIcon => fIcon.name === icon.name))
    );

    // Only render if there are visible icons or subcategories
    if (!hasVisibleIcons && !hasVisibleSubcategories && (searchQuery || selectedCategory)) {
      return null;
    }

    if (!category.icons.length && (!category.subcategories || category.subcategories.length === 0) && !searchQuery && !selectedCategory) return null;


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
          {hasVisibleIcons && ( // Render categoryIcons
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
              {categoryIcons.map((icon, idx) => (
                <IconCard key={idx} {...icon} />
              ))}
            </div>
          )}
          {category.subcategories && category.subcategories.map(subcat => renderCategory(subcat, level + 1))}
        </CollapsibleContent>
      </Collapsible>
    );
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="sticky top-0 bg-background z-10 pb-4 border p-5 border-border">
        <div className="relative flex-1 mb-5 bg-green-100">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search icons by name or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex gap-2 flex-wrap">
         
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
               <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All ({allIcons.length})
            </Button>
          </div>
        </div>
      </div>

      {/* Category Description */}
      {selectedCategory && selectedCategoryDescription && !searchQuery && (
        <p className=" leading-relaxed mt-4 p-2 rounded-lg bg-secondary/20 border border-secondary/30">
          {selectedCategoryDescription}
        </p>
      )}

      {/* Results Count */}
      {/* <div className="text-sm text-muted-foreground">
        Showing {filteredIcons.length} of {allIcons.length} icons
      </div> */}

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