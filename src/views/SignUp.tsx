import { SignUp } from '@clerk/clerk-react';
import { LayoutAuth } from '@/components';

const SignUpPage = () => {
  return (
    <LayoutAuth>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" afterSignUpUrl="/inventory-and-stock" />
    </LayoutAuth>
  );
};

export default SignUpPage;
