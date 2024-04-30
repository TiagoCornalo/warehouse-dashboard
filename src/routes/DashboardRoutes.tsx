import { useDashboards } from '@/context';
import { DashboardHome } from '@/views';
import { Route, Routes } from 'react-router-dom';
import DashboardPowerBi from '../components/dashboards/DashboardPowerBi';

const DashboardRoutes = () => {
  const { dashboards } = useDashboards();

  return (
    <Routes>
      <Route path="dashboard-home" element={<DashboardHome />} />
      {dashboards?.map((dashboard) => (
        <Route key={dashboard.path} path={dashboard.path} element={<DashboardPowerBi config={dashboard} />} />
      ))}
    </Routes>
  );
};

export default DashboardRoutes;
