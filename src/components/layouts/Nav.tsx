import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../ui/tooltip';
import { useDashboards } from '@/context';
import { DashboardWithIcon } from '@/types';
import { HomeIcon } from 'lucide-react';

interface NavProps {
  isCollapsed: boolean;
}

export function Nav({ isCollapsed }: NavProps) {
  const { dashboards } = useDashboards();

  return (
    <TooltipProvider delayDuration={0}>
      <div data-collapsed={isCollapsed} className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2">
        <nav className="flex gap-4 px-2 md:grid  group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
          <Tooltip key={'dashboard-home'} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                to="/dashboard-home"
                className={cn(
                  buttonVariants({ variant: 'default', size: 'icon' }),
                  'h-9 w-9',
                  'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                )}
              >
                <HomeIcon className="h-5 w-5" />
                <span className="sr-only">Dashboard Home</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
              Dashboard Home
            </TooltipContent>
          </Tooltip>
          {dashboards?.map((dashboard: DashboardWithIcon, index: number) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to={`/${dashboard.path.toLowerCase().replace(/ /g, '-')}`}
                    className={cn(
                      buttonVariants({ variant: 'default', size: 'icon' }),
                      'h-9 w-9',
                      'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white'
                    )}
                  >
                    {dashboard.icon}
                    <span className="sr-only">{dashboard.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {dashboard.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                to={`/${dashboard.path.toLowerCase().replace(/ /g, '-')}`}
                key={index}
                className={cn(
                  buttonVariants({ variant: 'default', size: 'sm' }),
                  'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                  'justify-start'
                )}
              >
                {dashboard.icon}
                {dashboard.title}
              </Link>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  );
}
