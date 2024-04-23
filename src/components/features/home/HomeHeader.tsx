import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  AuthButton,
} from '@/components';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const HomeHeader = () => {
  return (
    <div className="relative z-10">
      <Menubar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
        <MenubarMenu>
          <MenubarTrigger>
            <Menu />
          </MenubarTrigger>
          <MenubarContent className="flex space-x-2" align="center">
            <MenubarItem>
              <Link to="/dashboard-home">Dashboards</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <AuthButton />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default HomeHeader;
