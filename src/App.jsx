
import { Routes, Route } from "react-router-dom";
import './App.css'
import Dashboard from "./pages/DashBoard";
import Sidebar from './Components/Sidebar';
import Navbar from "./Components/Navbar";
import CustomersPage from "./pages/CustomerPage";

function App() {

  return (
    <div className="flex min-h-screen">
      <Sidebar />

     
      <div className="flex-1 flex flex-col">
        
        <Navbar />

        <div className="p-6 flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customers" element={<CustomersPage />} />
            {/* <Route path="/products" element={<Products />} /> */}
            {/* <Route path="/suppliers" element={<Suppliers />} /> */}
            {/* <Route path="/orders" element={<Orders />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
