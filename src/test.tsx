import React, { useState } from 'react';
import { FiSearch, FiFileText, FiPlus, FiHome, FiUsers, FiCalendar, FiClock, FiDollarSign, FiFile } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';

const Test = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#5744E3] min-h-screen fixed left-0 transition-all duration-300`}>
        <div className="flex items-center justify-between p-4 border-b border-[#7466E9]">
          <a href="#" className={`${isSidebarOpen ? 'flex' : 'hidden'} text-white text-xl font-bold items-center gap-2`}>
            <span className="text-2xl">📄</span> BOOKING
          </a>
          <button
            onClick={toggleSidebar}
            className="text-white hover:bg-[#7466E9] p-2 rounded-lg"
          >
            <HiOutlineMenu className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            <li>
              <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg bg-white/20">
                <FiHome size={20} />
                <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
                <FiUsers size={20} />
                <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Employees</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
                <FiClock size={20} />
                <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Attendances</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
                <FiCalendar size={20} />
                <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Calendar</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
                <FiClock size={20} />
                <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Leaves</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
                <FiDollarSign size={20} />
                <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Payroll</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-white py-3 px-4 rounded-lg hover:bg-[#7466E9]">
                <FiFile size={20} />
                <span className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>Document</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
        {/* Top Header */}
        <div className="bg-white h-16 flex items-center justify-between px-6 border-b">
          <div className="flex items-center gap-4">
            <button className="hover:bg-gray-100 p-2 rounded-lg">
              <FiSearch size={20} className="text-gray-600" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:bg-gray-100 p-2 rounded-lg">
              <FiFileText size={20} className="text-gray-600" />
            </button>
            <button className="flex items-center gap-2 bg-[#5744E3] text-white py-2 px-4 rounded-lg hover:bg-[#7466E9] transition-all duration-300">
              <FiPlus size={18} />
              <span>Add Employee</span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <div className="mb-6">
            <h6 className="text-2xl font-semibold text-gray-800 mb-1.5">
              Welcome back!
            </h6>
            <p className="text-sm font-medium text-gray-600">Home</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8">
            <div className="border border-gray-200 rounded-2xl">
              <img src="/api/placeholder/800/400" alt="Content" className="object-cover w-full h-full"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;