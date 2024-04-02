import { SignIn } from '@clerk/clerk-react';
import { LayoutAuthForm } from '@/components';
import { dark } from '@clerk/themes';
import { useTheme } from '@/components';

const SignInPage = () => {
  const { theme } = useTheme();

  return (
    <LayoutAuthForm>
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          baseTheme: theme === 'light' ? undefined : dark,
        }}
      />
    </LayoutAuthForm>
  );
};

export default SignInPage;
