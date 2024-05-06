import { Routes, Route, useNavigate } from 'react-router-dom';
import { DashboardProvider, ClientProvider } from '@/context';
import { ClerkProvider } from '@clerk/clerk-react';
import { lazy, Suspense } from 'react';
import { DashboardRoutes, ProtectedRoute } from '@/routes';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Home = lazy(() => import('@/views/Home'));
const SignIn = lazy(() => import('@/views/SignIn'));
const SignUp = lazy(() => import('@/views/SignUp'));
const NotFound = lazy(() => import('@/views/NotFound'));

function App() {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <ClientProvider>
        <DashboardProvider>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <DashboardRoutes />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </DashboardProvider>
      </ClientProvider>
    </ClerkProvider>
  );
}

export default App;
