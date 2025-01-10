import React, { useState } from 'react';
import { Wallet, ArrowUpRight, Download, Filter, ChevronDown, DollarSign, TrendingUp, Users, ShoppingCart } from 'lucide-react';

const earningsData = [
  {
    id: 1,
    asset: 'NLP Training Dataset',
    type: 'Training Data',
    buyer: 'AI Solutions Inc.',
    amount: '$2,999',
    date: '2024-03-15',
    status: 'Completed'
  },
  {
    id: 2,
    name: 'Computer Vision Module',
    type: 'AI Module',
    buyer: 'TechCorp Ltd.',
    amount: '$4,500',
    date: '2024-03-14',
    status: 'Processing'
  },
  {
    id: 3,
    name: 'Sentiment Analysis API',
    type: 'Complete Solution',
    buyer: 'DataTech Systems',
    amount: '$7,999',
    date: '2024-03-12',
    status: 'Completed'
  }
];

const stats = [
  {
    name: 'Total Revenue',
    value: '$15,498',
    change: '+12.5%',
    icon: DollarSign
  },
  {
    name: 'Monthly Growth',
    value: '+24.5%',
    change: '+4.1%',
    icon: TrendingUp
  },
  {
    name: 'Active Buyers',
    value: '38',
    change: '+7.2%',
    icon: Users
  },
  {
    name: 'Total Sales',
    value: '156',
    change: '+11.4%',
    icon: ShoppingCart
  }
];

function SignUpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Sign Up to Access Earnings</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-2">Get full access to earnings features including:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Real-time earnings tracking</li>
            <li>Detailed transaction history</li>
            <li>Revenue analytics</li>
            <li>Payment processing</li>
          </ul>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Create a password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Earnings() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="space-y-8">
      {/* Preview Banner */}
      <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <Wallet className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-indigo-900">Preview Mode</h3>
              <p className="text-sm text-indigo-700">This is a preview of your earnings</p>
            </div>
          </div>
          <button
            onClick={() => setShowSignUp(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Sign Up for Full Access
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <stat.icon className="w-6 h-6 text-indigo-600" />
              <span className="text-sm text-green-600 flex items-center gap-1">
                {stat.change}
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">{stat.value}</h3>
            <p className="text-gray-600">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Earnings Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Transaction History</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSignUp(true)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Filter className="w-4 h-4" />
                Filter
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowSignUp(true)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Asset</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Buyer</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {earningsData.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{transaction.asset}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{transaction.type}</td>
                  <td className="px-6 py-4 text-gray-500">{transaction.buyer}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{transaction.amount}</td>
                  <td className="px-6 py-4 text-gray-500">{transaction.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sign Up Modal */}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </div>
  );
}