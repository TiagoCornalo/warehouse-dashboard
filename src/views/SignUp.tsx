import { SignUp } from '@clerk/clerk-react';
import { LayoutAuthForm } from '@/components';
import { dark } from '@clerk/themes';
import { useTheme } from '@/components';

const SignUpPage = () => {
  const { theme } = useTheme();

  return (
    <LayoutAuthForm>
      <SignUp
        appearance={{
          baseTheme: theme === 'light' ? undefined : dark,
        }}
      />
    </LayoutAuthForm>
  );
};

export default SignUpPage;
