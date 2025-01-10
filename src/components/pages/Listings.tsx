import React, { useState } from 'react';
import { Package, PlusCircle, Edit3, Trash2, Eye, BarChart3, AlertCircle } from 'lucide-react';

const myListings = [
  {
    id: 1,
    name: 'NLP Training Dataset',
    type: 'Training Data',
    price: '$2,999',
    status: 'Active',
    views: 245,
    sales: 12,
    lastUpdated: '2024-03-15'
  },
  {
    id: 2,
    name: 'Computer Vision Module',
    type: 'AI Module',
    price: '$4,500',
    status: 'Under Review',
    views: 189,
    sales: 8,
    lastUpdated: '2024-03-14'
  },
  {
    id: 3,
    name: 'Sentiment Analysis API',
    type: 'Complete Solution',
    price: '$7,999',
    status: 'Active',
    views: 567,
    sales: 24,
    lastUpdated: '2024-03-12'
  }
];

function SignUpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Sign Up to Manage Your Listings</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-2">Get full access to listing management features including:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Create and edit listings</li>
            <li>Track performance metrics</li>
            <li>Manage pricing and visibility</li>
            <li>Access detailed analytics</li>
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

export default function Listings() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="space-y-8">
      {/* Preview Banner */}
      <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <Package className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-indigo-900">Preview Mode</h3>
              <p className="text-sm text-indigo-700">This is a preview of your listings</p>
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

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Listings</h1>
          <p className="text-gray-600 mt-1">Manage and track your AI assets</p>
        </div>
        <button
          onClick={() => setShowSignUp(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          New Listing
        </button>
      </div>

      {/* Listings Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Asset</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Price</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Views</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Sales</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Last Updated</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {myListings.map((listing) => (
                <tr key={listing.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{listing.name}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{listing.type}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{listing.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium ${
                      listing.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {listing.status === 'Active' ? (
                        <>
                          <span className="w-1 h-1 mr-1.5 bg-green-400" />
                          Active
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Under Review
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{listing.views}</td>
                  <td className="px-6 py-4 text-gray-500">{listing.sales}</td>
                  <td className="px-6 py-4 text-gray-500">{listing.lastUpdated}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => setShowSignUp(true)}
                        className="text-gray-400 hover:text-indigo-600"
                        title="View Analytics"
                      >
                        <BarChart3 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setShowSignUp(true)}
                        className="text-gray-400 hover:text-indigo-600"
                        title="Preview"
                      >
                        <Eye className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setShowSignUp(true)}
                        className="text-gray-400 hover:text-indigo-600"
                        title="Edit"
                      >
                        <Edit3 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setShowSignUp(true)}
                        className="text-gray-400 hover:text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
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