import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { useDashboards } from '@/context';
import { DashboardWithIcon } from '@/types';
import { HomeIcon, Menu } from 'lucide-react';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components';

export function Nav() {
  const { dashboards } = useDashboards();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setMenuOpen(open);
  };

  return (
    <DropdownMenu onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button variant={menuOpen ? 'default' : 'ghost'}>
          <Menu className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64">
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link
            to="/dashboard-home"
            className={cn(
              buttonVariants({ variant: 'default', size: 'sm' }),
              'dark:bg-muted dark:text-white dark:hover:bg-primary dark:hover:text-white',
              'justify-start align-center', 'w-full'
            )}
          >
            <HomeIcon className="h-5 w-5" />
            <span className="ml-2  text-sm">Dashboard Home</span>
          </Link>
        </DropdownMenuItem>

        {dashboards?.map((dashboard: DashboardWithIcon, index: number) => (
          <DropdownMenuItem asChild key={index} className="cursor-pointer mt-2">
            <Link
              to={`/${dashboard.path.toLowerCase().replace(/ /g, '-')}`}
              className={cn(
                buttonVariants({ variant: 'default', size: 'sm' }),
                'dark:bg-muted dark:text-white dark:hover:bg-primary dark:hover=text-white',
                'justify-start align-center', 'w-full'
              )}
            >
              {dashboard.icon}
              <span className="ml-2 text-sm">{dashboard.reportName}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
