import { ReactElement } from "react";

export type IconName = "PieChart" | "Truck" | "AreaChart" | "TrendingUp" | "HardHat";

export interface DashboardRoute {
  title: string;
  path: string;
  embedUrl: string;
  accessToken: string;
  reportId: string;
  icon: IconName; // Sólo el nombre del ícono
}

// Nueva interfaz específicamente para uso interno con componentes
export interface DashboardWithIcon {
  title: string;
  path: string;
  embedUrl: string;
  accessToken: string;
  reportId: string;
  icon: ReactElement; // El componente React del ícono
}