import { Routes, Route, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '@/components';
import {
  Home,
  SignIn,
  SignUp,
  NotFound,
  InventoryAndStock,
  BusinessIntelligence,
  OperationalPerformance,
  OrdersAndShipping,
  SafetyAndMaintenance
} from '@/views';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
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
    </ClerkProvider>
  );
}

export default App;
