import { createContext, useContext, useState, useEffect, ReactElement } from 'react';
import axios from 'axios';

import {
  PieChart,
  Truck,
  AreaChart,
  TrendingUp,
  HardHat,
  BadgeDollarSign,
  BarChart4,
  CreditCard,
  DollarSign,
  FileText,
  Folder,
  FolderOpen,
  Gauge,
  History,
  ShieldCheck
} from 'lucide-react';
import { DashboardRoute, IconName, DashboardWithIcon } from '@/types';

const iconMap: Record<IconName, ReactElement> = {
  PieChart: <PieChart className="h-5 w-5" />,
  Truck: <Truck className="h-5 w-5" />,
  AreaChart: <AreaChart className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
  HardHat: <HardHat className="h-5 w-5" />,
  BadgeDollarSign: <BadgeDollarSign className="h-5 w-5" />,
  BarChart4: <BarChart4 className="h-5 w-5" />,
  CreditCard: <CreditCard className="h-5 w-5" />,
  DollarSign: <DollarSign className="h-5 w-5" />,
  FileText: <FileText className="h-5 w-5" />,
  Folder: <Folder className="h-5 w-5" />,
  FolderOpen: <FolderOpen className="h-5 w-5" />,
  Gauge: <Gauge className="h-5 w-5" />,
  History: <History className="h-5 w-5" />,
  ShieldCheck: <ShieldCheck className="h-5 w-5" />
};

const DashboardContext = createContext<{
  dashboards: DashboardWithIcon[];
  setDashboards: React.Dispatch<React.SetStateAction<DashboardWithIcon[]>>;
}>({
  dashboards: [],
  setDashboards: () => {},
});

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [dashboards, setDashboards] = useState<DashboardWithIcon[]>([]);

  useEffect(() => {
    const loadDashboards = async () => {
      const response = await axios.get('/dashboards.json');
      const dashboardsWithIcons = response.data.dashboards.map((dashboard: DashboardRoute) => ({
        ...dashboard,
        icon: iconMap[dashboard.icon],
      }));
      setDashboards(dashboardsWithIcons);
    };

    loadDashboards();
  }, []);

  return <DashboardContext.Provider value={{ dashboards, setDashboards }}>{children}</DashboardContext.Provider>;
};

export const useDashboards = () => useContext(DashboardContext);
