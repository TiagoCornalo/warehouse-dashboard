import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const location = useLocation();

  if (!isLoaded) {
    return <div>Cargando...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  const isAdmin = user?.organizationMemberships?.some(
    (membership) => membership.role === 'org:admin' && membership.organization.slug === 'warehouseorg'
  );

  if (!isAdmin) {
    return <Navigate to="/not-found" />;
  }

  return children;
};

export default ProtectedRoute;