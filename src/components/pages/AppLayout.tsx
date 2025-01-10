import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Wallet, Settings, Home } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/app', icon: LayoutDashboard },
  { name: 'My Listings', href: '/app/listings', icon: Package },
  { name: 'Marketplace', href: '/app/marketplace', icon: ShoppingCart },
  { name: 'Earnings', href: '/app/earnings', icon: Wallet },
  { name: 'Settings', href: '/app/settings', icon: Settings },
];

function LogoIcon() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer circle */}
      <div className="absolute inset-0 border-2 border-indigo-600 rounded-full" />
      {/* Inner circle */}
      <div className="absolute inset-[4px] bg-indigo-600 rounded-full opacity-20" />
      {/* Center dot */}
      <div className="absolute w-2 h-2 bg-indigo-600 rounded-full" />
      {/* Orbital line */}
      <div className="absolute inset-[2px] border-2 border-indigo-600 rounded-full transform rotate-45" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' }} />
    </div>
  );
}

export default function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        <Link 
          to="/" 
          className="flex h-16 items-center gap-2 px-6 border-b border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <div className="w-8 h-8 bg-indigo-50 flex items-center justify-center">
            <LogoIcon />
          </div>
          <span className="font-semibold text-gray-900">TalentAI</span>
        </Link>
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Link
            to="/"
            className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <header className="h-16 bg-white border-b border-gray-200">
          <div className="flex h-full items-center justify-between px-8">
            <h1 className="text-xl font-semibold text-gray-900">
              {navigation.find((item) => item.href === location.pathname)?.name || 'Dashboard'}
            </h1>
            <div className="flex items-center gap-4">
              <button className="w-8 h-8 bg-gray-200"></button>
            </div>
          </div>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}