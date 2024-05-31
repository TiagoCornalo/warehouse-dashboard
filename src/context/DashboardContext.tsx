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
      const storedData = localStorage.getItem('dashboardData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (new Date(parsedData.tokenExpiry) > new Date()) {
          const dashboardsWithIcons = parsedData.dashboards.map((dashboard: any) => ({
            ...dashboard,
            icon: iconMap[dashboard.icon as IconName] || null
          }));
          setDashboards(dashboardsWithIcons);
          return;
        }
      }

      try {
        const fallbackResponse = await axios.get('/fallback-dashboards.json');
        const fallbackDashboards = fallbackResponse.data.embedReports;

        const apiResponses = await Promise.all(
          fallbackDashboards.map(async (dashboard: DashboardRoute) => {
            try {
              const apiResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/getembedinfo?reportid=${dashboard.reportId}&workspaceid=${dashboard.workspaceId}`);
              return {
                ...dashboard,
                embedUrl: apiResponse.data.embedReports[0].embedUrl,
                embedToken: apiResponse.data.embedToken,
                tokenExpiry: apiResponse.data.tokenExpiry,
                icon: dashboard.icon
              };
            } catch (error) {
              console.error(`Error fetching embed info for ${dashboard.reportId}:`, error);
              return {
                ...dashboard,
                icon: dashboard.icon
              };
            }
          })
        );

        setDashboards(apiResponses.map(dashboard => ({
          ...dashboard,
          icon: iconMap[dashboard.icon as IconName] || null
        })));
        localStorage.setItem('dashboardData', JSON.stringify({
          dashboards: apiResponses,
          tokenExpiry: apiResponses[0]?.tokenExpiry
        }));
      } catch (error) {
        console.error('Error loading data:', error);
        const localResponse = await axios.get('/fallback-dashboards.json');
        const fallbackDashboards: DashboardWithIcon[] = localResponse.data.embedReports.map(
          (dashboard: DashboardRoute) => ({
            ...dashboard,
            icon: iconMap[dashboard.icon as IconName] || null,
          })
        );
        setDashboards(fallbackDashboards);
      }
    };

    loadDashboards();
    const interval = setInterval(loadDashboards, 3600000);
    return () => clearInterval(interval);
  }, []);

  return <DashboardContext.Provider value={{ dashboards, setDashboards }}>{children}</DashboardContext.Provider>;
};

export const useDashboards = () => useContext(DashboardContext);
