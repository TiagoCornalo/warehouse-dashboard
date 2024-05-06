import { LayoutMain } from '@/components';
import { useClient } from '@/context';

const DashboardHomePage = () => {
  const { client } = useClient();

  return (
    <LayoutMain>
      <div className="flex flex-col justify-center items-center h-[90vh] w-full">
        <img src={client?.logo} alt="Client Logo" className="w-[200px] h-[90px] object-contain" />
        <h1 className="text-3xl font-semibold text-center mt-4">Welcome to {client?.name} dashboard</h1>
        <p className="text-lg text-center mt-2">
          Empowering your business with data-driven insights — where intelligence meets innovation.
        </p>
      </div>
    </LayoutMain>
  );
};

export default DashboardHomePage;
