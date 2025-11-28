import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Activity, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const DataCardsShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,543</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <ArrowUpRight className="h-3 w-3 text-green-500" />
            <span className="text-green-500">+12.5%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <ArrowUpRight className="h-3 w-3 text-green-500" />
            <span className="text-green-500">+8.2%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,543</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <ArrowDownRight className="h-3 w-3 text-red-500" />
            <span className="text-red-500">-3.1%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+24.5%</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <ArrowUpRight className="h-3 w-3 text-green-500" />
            <span className="text-green-500">+4.3%</span> from last month
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
