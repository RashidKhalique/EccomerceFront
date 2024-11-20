import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate('/login');
  };

  return (
    <div className='w-full'>
      <aside
        id="application-sidebar-brand"
        className={`fixed top-0 left-0 h-screen flex-shrink-0 border-r-[1px] w-[270px] border-gray-400 bg-white transition-all duration-300 ${
          isSidebarOpen ? "block" : "hidden" // Show sidebar when open, hide otherwise
        } sm:block`} // Always show sidebar on larger screens
      >
        <div className="p-5">
          <a className="text-nowrap" onClick={() => { navigate('/dashboard'); }}>
            <img 
              src="/logo.png" 
              alt="Logo-Dark" 
              width="150" 
              height="150" 
              style={{ borderRadius: '50%' }} 
            />
          </a>
        </div>

        <div className="scroll-sidebar overflow-y-auto" data-simplebar="">
          <div className="px-6 mt-8">
            <nav className="w-full flex flex-col sidebar-nav">
              <ul id="sidebarnav" className="text-gray-600 text-sm">
                <li className="text-xs font-bold pb-4 cursor-default">
                  <span onClick={() => { navigate('/dashboard') }}>HOME</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3 rounded-md w-full flex items-center hover:text-white-600 hover:bg-blue-500 cursor-pointer"
                    onClick={() => { navigate('/dashboard') }}
                  >
                    <i className="ti ti-layout-dashboard text-xl"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3 rounded-md w-full flex items-center hover:text-white-600 hover:bg-blue-500 cursor-pointer"
                    onClick={() => { navigate('/products') }}
                  >
                    <i className="ti ti-package text-xl"></i>
                    <span>Products</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3 rounded-md w-full flex items-center hover:text-white-600 hover:bg-blue-500 cursor-pointer"
                    onClick={() => { navigate('/user') }}
                  >
                    <i className="ti ti-user text-xl"></i>
                    <span>User Management</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3 rounded-md w-full flex items-center hover:text-white-600 hover:bg-blue-500 cursor-pointer"
                    onClick={() => { navigate('/order') }}
                  >
                    <i className="ti ti-receipt text-xl"></i>
                    <span>Order Management</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link gap-3 py-2 px-3 rounded-md w-full flex items-center hover:text-white-600 hover:bg-blue-500 cursor-pointer"
                    onClick={() => { navigate('/CouponManager') }}
                  >
                    <i className="ti ti-truck text-xl"></i>
                    <span>Coupon</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    onClick={handleLogout}
                    className="sidebar-link gap-3 py-2 px-3 rounded-md w-full flex items-center hover:text-white-600 hover:bg-blue-500 cursor-pointer"
                  >
                    <i className="ti ti-login text-xl"></i>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>

      {/* Hamburger button for smaller screens */}
      <div className="sm:hidden  top-5 left-5 z-10 w-full">
  <div className="flex justify-between items-center w-full px-5">
    {/* Logo */}
    <img 
      src="/logo.png" 
      alt="Logo-Dark" 
      width="50" 
      height="50" 
      style={{ borderRadius: '50%' }} 
      className="flex-shrink-0" 
    />
    
    {/* Hamburger Button */}
    <button 
      className="bg-gray-800 text-white p-2 rounded-md"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar
    >
      <i className="ti ti-menu text-xl"></i>
    </button>
  </div>
</div>
</div>

  );
};

export default Nav;