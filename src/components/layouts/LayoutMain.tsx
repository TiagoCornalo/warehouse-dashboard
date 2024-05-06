import { ReactNode, useState, useEffect } from 'react';
import { LayoutContainer, NavigationBarContainer, LogoContainer } from './styles';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import BlinkLogo from '@/assets/blink.png';
import { Nav } from './Nav';
import { ModeToggle } from '..';
import { UserButton } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import { useTheme } from '@/components';
import { Link, useLocation } from 'react-router-dom';
import { useClient } from '@/context';

dayjs.extend(utc);
dayjs.extend(timezone);

const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const location = useLocation();
  const { client } = useClient();

  const [formattedDate, setFormattedDate] = useState(() =>
    dayjs().tz('America/New_York').format('MMMM D, YYYY [at] HH:mm')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedDate(dayjs().tz('America/New_York').format('MMMM D, YYYY [at] HH:mm'));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutContainer>
      <NavigationBarContainer>
        <LogoContainer>
          <Link to="/">
            <img
              src={BlinkLogo}
              alt="Blink Logo"
              className="w-[65px] h-[65px] object-contain bg-[#0c0a09] dark:bg-transparent rounded-full px-2"
            />
          </Link>
          <Link to="/">
            <img
              src={client?.logo}
              alt="Client Logo"
              className="w-[65px] h-[65px] object-contain px-2"
            />
          </Link>
        </LogoContainer>
        {location.pathname !== '/dashboard-home' && (
          <p className="text-center mt-2 text-lg text-gray-500 dark:text-gray-400">{formattedDate}</p>
        )}
        <div className="grid grid-cols-3 gap-4 items-center place-items-center w-full md:w-auto">
          <Nav />
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
