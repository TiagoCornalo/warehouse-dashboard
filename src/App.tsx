import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  InventoryAndStock,
  BusinessIntelligence,
  OperationalPerformance,
  OrdersAndShipping,
  SafetyAndMaintenance,
  SignIn,
  SignUp,
} from '@/views';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/inventory-and-stock" element={<InventoryAndStock />} />
      <Route path="/business-intelligence" element={<BusinessIntelligence />} />
      <Route path="/operational-performance" element={<OperationalPerformance />} />
      <Route path="/orders-and-shipping" element={<OrdersAndShipping />} />
      <Route path="/safety-and-maintenance" element={<SafetyAndMaintenance />} />
    </Routes>
    </ClerkProvider>
  );
}

export default App;
