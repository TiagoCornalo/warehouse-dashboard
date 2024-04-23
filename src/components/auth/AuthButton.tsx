import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";


const AuthButton = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      {isSignedIn ? <SignOutButton /> : <SignInButton />}
    </>
  );
};

export default AuthButton;