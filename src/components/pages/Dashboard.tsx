import React, { useState } from 'react';
import { ArrowUpRight, Package, ShoppingCart, Coins } from 'lucide-react';
import SignUpModal from '../components/SignUpModal';

const stats = [
  { name: 'Listed Assets', value: '48', change: '+5.2%', icon: Package },
  { name: 'Total Sales', value: '$12,450', change: '+8.1%', icon: ShoppingCart },
  { name: 'Revenue', value: '$8,920', change: '+12.5%', icon: Coins },
];

const recentListings = [
  { 
    id: 1, 
    name: 'NLP Training Dataset', 
    type: 'Training Data',
    price: '$2,999',
    status: 'Active' 
  },
  { 
    id: 2, 
    name: 'Computer Vision Module', 
    type: 'AI Module',
    price: '$4,500',
    status: 'Under Review' 
  },
  { 
    id: 3, 
    name: 'Sentiment Analysis API', 
    type: 'Complete Solution',
    price: '$7,999',
    status: 'Active' 
  },
  { 
    id: 4, 
    name: 'Speech Recognition Model', 
    type: 'Custom Model',
    price: '$5,500',
    status: 'Active' 
  },
];

export default function Dashboard() {
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
              <p className="text-sm text-indigo-700">This is a preview of the dashboard</p>
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Recent Listings */}
      <div className="bg-white border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Listings</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {recentListings.map((listing) => (
            <div key={listing.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div>
                <h3 className="font-medium text-gray-900">{listing.name}</h3>
                <p className="text-sm text-gray-600">{listing.type}</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-medium text-gray-900">{listing.price}</span>
                <span className={`px-3 py-1 text-sm ${
                  listing.status === 'Active' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {listing.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Up Modal */}
      {showSignUp && (
        <SignUpModal
          onClose={() => setShowSignUp(false)}
          title="Sign Up for Full Access"
          features={[
            'Real-time analytics',
            'Asset management',
            'Sales tracking',
            'Revenue insights'
          ]}
        />
      )}
    </div>
  );
}