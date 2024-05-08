import { ReactElement } from 'react';

export type IconName =
  | 'PieChart'
  | 'Truck'
  | 'AreaChart'
  | 'TrendingUp'
  | 'HardHat'
  | 'BadgeDollarSign'
  | 'BarChart4'
  | 'CreditCard'
  | 'DollarSign'
  | 'FileText'
  | 'Folder'
  | 'FolderOpen'
  | 'Gauge'
  | 'History'
  | 'ShieldCheck';

export interface DashboardRoute {
  title: string;
  path: string;
  type: string;
  embedUrl: string;
  accessToken: string;
  reportId: string;
  icon: IconName;
}

export interface DashboardWithIcon {
  title: string;
  path: string;
  type: string;
  embedUrl: string;
  accessToken: string;
  reportId: string;
  icon: ReactElement;
}
