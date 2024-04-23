import { Routes, Route, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '@/components';
import { ClerkProvider } from '@clerk/clerk-react';
import { lazy, Suspense } from 'react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const Home = lazy(() => import('@/views/Home'));
const SignIn = lazy(() => import('@/views/SignIn'));
const SignUp = lazy(() => import('@/views/SignUp'));
const NotFound = lazy(() => import('@/views/NotFound'));
const DashboardHomePage = lazy(() => import('@/views/dashboards'));
const InventoryAndStock = lazy(() => import('@/views/dashboards/InventoryAndStock'));
const BusinessIntelligence = lazy(() => import('@/views/dashboards/BusinessIntelligence'));
const OperationalPerformance = lazy(() => import('@/views/dashboards/OperationalPerformance'));
const OrdersAndShipping = lazy(() => import('@/views/dashboards/OrdersAndShipping'));
const SafetyAndMaintenance = lazy(() => import('@/views/dashboards/SafetyAndMaintenance'));

function App() {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
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
                <Routes>
                  <Route path="dashboard-home" element={<DashboardHomePage />} />
                  <Route path="inventory-and-stock" element={<InventoryAndStock />} />
                  <Route path="business-intelligence" element={<BusinessIntelligence />} />
                  <Route path="operational-performance" element={<OperationalPerformance />} />
                  <Route path="orders-and-shipping" element={<OrdersAndShipping />} />
                  <Route path="safety-and-maintenance" element={<SafetyAndMaintenance />} />
                </Routes>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </ClerkProvider>
  );
}

export default App;
