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
  embedUrl: string;
  reportId: string;
  path: string;
  reportName: string;
  type: string;
  icon: IconName;
}

export interface DashboardWithIcon {
  embedUrl: string;
  reportId: string;
  path: string;
  reportName: string;
  type: string;
  icon: ReactElement;
}
