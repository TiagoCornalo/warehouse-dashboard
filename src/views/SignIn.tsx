import { SignIn } from '@clerk/clerk-react';
import { LayoutAuth } from '@/components';

const SignInPage = () => {
  return (
    <LayoutAuth>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" afterSignInUrl="/inventory-and-stock" />
    </LayoutAuth>
  );
};

export default SignInPage;
