import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaBoxOpen, FaTruck, FaShoppingCart } from "react-icons/fa";
import { MdStore } from "react-icons/md";


const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
    { name: "Customers", path: "/customers", icon: <FaUsers /> },
    { name: "Products", path: "/products", icon: <FaBoxOpen /> },
    { name: "Suppliers", path: "/suppliers", icon: <FaTruck /> },
    { name: "Orders", path: "/orders", icon: <FaShoppingCart /> },
  ];
  const activeClass = "bg-blue-600 text-white shadow-lg";
  const hoverClass = "text-gray-300 hover:bg-gray-800 hover:text-blue-500 hover:shadow-md";

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen shadow-lg flex flex-col overflow-y-auto">
      <Link
  to="/"
  className="flex items-center justify-center px-3 py-2 text-white hover:bg-gray-800 transition-colors rounded-xl mb-6"
>
  <MdStore className="text-5xl text-blue-600 hover:scale-110 transition-transform duration-200" />
</Link>

      <nav className="flex-1 px-2 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 ease-in-out ${
                isActive ? activeClass : hoverClass
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-4 text-gray-400 text-sm mt-auto">
        &copy; 2025 Your Company
      </div>
    </aside>
  );
};

export default Sidebar;
