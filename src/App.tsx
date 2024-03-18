import { Routes, Route } from 'react-router-dom';
import { InventoryAndStock, BusinessIntelligence, OperationalPerformance, OrdersAndShipping, SafetyAndMaintenance } from '@/views';

function App() {
  return (
    <Routes>
      <Route path="/inventory-and-stock" element={<InventoryAndStock />} />
      <Route path="/business-intelligence" element={<BusinessIntelligence />} />
      <Route path="/operational-performance" element={<OperationalPerformance />} />
      <Route path="/orders-and-shipping" element={<OrdersAndShipping />} />
      <Route path="/safety-and-maintenance" element={<SafetyAndMaintenance />} />
    </Routes>
  )
}

export default App
