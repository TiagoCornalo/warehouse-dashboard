import { ReactNode } from 'react';
import { LayoutContainer, NavigationBarContainer, LogoContainer } from './styles';
import BlinkLogo from '@/assets/blink.png';
import { Nav } from './Nav';
import { ModeToggle } from '..';
import { UserButton } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import { useTheme } from '@/components';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <LayoutContainer>
      <NavigationBarContainer>
        <LogoContainer>
          <Link to="/">
            <img
              src={BlinkLogo}
              alt="Blink Logo"
              className="w-[80px] h-[80px] object-contain bg-[#0c0a09] rounded-full px-2"
            />
          </Link>
        </LogoContainer>
        <Nav  isCollapsed />
        <div className="grid grid-cols-2 gap-4 ml-4">
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
