import { ReactNode } from 'react';
import { LayoutContainerAuth } from './styles';
import { ModeToggle } from '..';

const LayoutAuthForm = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContainerAuth>
      <ModeToggle />
      <main>{children}</main>
    </LayoutContainerAuth>
  );
};

export default LayoutAuthForm;
