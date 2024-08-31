"use client";

import React, { useState } from 'react';
import { FiHome, FiShoppingCart, FiUsers, FiBarChart2, FiSettings } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const sampleOrders = [
    { id: 1, customer: 'John Doe', items: 'Cappuccino, Croissant', total: '$12.50', status: 'Completed' },
    { id: 2, customer: 'Jane Smith', items: 'Latte, Sandwich', total: '$15.75', status: 'In Progress' },
    { id: 3, customer: 'Bob Johnson', items: 'Espresso, Muffin', total: '$8.25', status: 'Pending' },
  ];

  const sampleInventory = [
    { id: 1, item: 'Coffee Beans', quantity: 50, unit: 'kg' },
    { id: 2, item: 'Milk', quantity: 100, unit: 'liters' },
    { id: 3, item: 'Cups', quantity: 500, unit: 'pieces' },
  ];

  const sampleCustomers = [
    { id: 1, name: 'Alice Brown', email: 'alice@example.com', visits: 10 },
    { id: 2, name: 'Charlie Davis', email: 'charlie@example.com', visits: 5 },
    { id: 3, name: 'Eva Green', email: 'eva@example.com', visits: 8 },
  ];

  const sampleSalesData = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3000 },
    { name: 'Wed', sales: 2000 },
    { name: 'Thu', sales: 2780 },
    { name: 'Fri', sales: 1890 },
    { name: 'Sat', sales: 2390 },
    { name: 'Sun', sales: 3490 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Cafe Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <DashboardCard title="Total Orders" value="156" icon={<FiShoppingCart className="text-blue-500" />} />
              <DashboardCard title="Total Customers" value="89" icon={<FiUsers className="text-green-500" />} />
              <DashboardCard title="Total Revenue" value="$2,345" icon={<FiBarChart2 className="text-yellow-500" />} />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sampleSalesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Items</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{order.id}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{order.customer}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{order.items}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{order.total}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : order.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'inventory':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Item ID</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleInventory.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{item.id}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{item.item}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{item.quantity}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{item.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Customers</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer ID</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Visits</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleCustomers.map((customer) => (
                    <tr key={customer.id}>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{customer.id}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{customer.name}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{customer.email}</td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">{customer.visits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Cafe Dashboard</h1>
        </div>
        <ul className="mt-4">
          <NavItem icon={<FiHome />} title="Home" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <NavItem icon={<FiShoppingCart />} title="Orders" active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
          <NavItem icon={<FiBarChart2 />} title="Inventory" active={activeTab === 'inventory'} onClick={() => setActiveTab('inventory')} />
          <NavItem icon={<FiUsers />} title="Customers" active={activeTab === 'customers'} onClick={() => setActiveTab('customers')} />
          <NavItem icon={<FiSettings />} title="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        </ul>
      </nav>
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, title, active, onClick }) => (
  <li
    className={`flex items-center px-4 py-2 cursor-pointer ${active ? 'bg-violet-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
    onClick={onClick}
  >
    <span className="mr-2">{icon}</span>
    <span>{title}</span>
  </li>
);

const DashboardCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-gray-200 mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

export default AdminDashboard;