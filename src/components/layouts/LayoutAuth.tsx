import { ReactNode } from 'react';
import { LayoutContainerAuth } from './styles';
import { ModeToggle } from '..';

const LayoutAuth = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContainerAuth>
      <ModeToggle />
      <main>{children}</main>
    </LayoutContainerAuth>
  );
};

export default LayoutAuth;
