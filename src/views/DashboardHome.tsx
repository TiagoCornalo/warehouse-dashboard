import { LayoutMain } from '@/components';
import ImecaLogo from '@/assets/imeca-logo.png';

const DashboardHomePage = () => {
  return (
    <LayoutMain>
      <div className="flex flex-col justify-center items-center h-[90vh] w-full">
        <img src={ImecaLogo} alt="IMECA Logo" className="w-[200px] h-[90px] object-contain" />
        <h1 className="text-3xl font-semibold text-center mt-4">Welcome to IMECA dashboard</h1>
        <p className="text-lg text-center mt-2">
          Empowering your business with data-driven insights — where intelligence meets innovation.
        </p>
      </div>
    </LayoutMain>
  );
};

export default DashboardHomePage;
