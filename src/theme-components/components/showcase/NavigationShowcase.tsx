import { Home, Settings, User, Search } from 'lucide-react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export const NavigationShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Top Navigation Bar</h3>
        <nav className="flex items-center gap-6 p-4 border border-border rounded-lg bg-card">
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Breadcrumbs</h3>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Navigation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};
