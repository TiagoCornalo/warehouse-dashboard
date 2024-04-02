import { ReactNode } from 'react';
import { LayoutContainer, NavigationBarContainer, LogoContainer } from './styles';
import Logo from '@/assets/warehouse-logo.png';
import { Nav } from './Nav';
import { ModeToggle } from '..';
import { LucideIcon, PieChart, Truck, AreaChart, TrendingUp, HardHat } from 'lucide-react';
import { UserButton } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import { useTheme } from '@/components';

const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  const links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost';
  }[] = [
    {
      title: 'Inventory and Stock',
      icon: PieChart,
      variant: 'default',
    },
    {
      title: 'Orders and Shipping',
      icon: Truck,
      variant: 'default',
    },
    {
      title: 'Operational Performance',
      icon: AreaChart,
      variant: 'default',
    },
    {
      title: 'Business Intelligence',
      icon: TrendingUp,
      variant: 'default',
    },
    {
      title: 'Safety and Maintenance',
      icon: HardHat,
      variant: 'default',
    },
  ];

  return (
    <LayoutContainer>
      <NavigationBarContainer>
        <LogoContainer>
          <img src={Logo} alt="Warehouse Logo" />
        </LogoContainer>
        <Nav links={links} isCollapsed />
        <div className='grid grid-cols-2 gap-4 ml-4'>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            baseTheme: theme === 'light' ? undefined : dark,
          }}
        />
        <ModeToggle />
        </div>
      </NavigationBarContainer>
      <main>{children}</main>
    </LayoutContainer>
  );
};

export default Layout;
