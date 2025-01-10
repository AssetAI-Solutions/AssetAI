import React, { useState } from 'react';
import { Package, ShoppingCart, Database, GitBranch, Binary, Code } from 'lucide-react';

const previewListings = [
  {
    id: 1,
    name: 'Premium NLP Dataset',
    type: 'Training Data',
    price: '$2,999',
    description: 'Comprehensive dataset for natural language processing tasks',
    icon: Database
  },
  {
    id: 2,
    name: 'Vision AI Module',
    type: 'AI Module',
    price: '$4,500',
    description: 'Pre-trained computer vision module for object detection',
    icon: GitBranch
  },
  {
    id: 3,
    name: 'Sentiment Analysis API',
    type: 'Complete Solution',
    price: '$7,999',
    description: 'Production-ready sentiment analysis system with API access',
    icon: Binary
  },
  {
    id: 4,
    name: 'Speech Recognition Model',
    type: 'Custom Model',
    price: '$5,500',
    description: 'Fine-tuned speech recognition model with 98% accuracy',
    icon: Code
  }
];

function SignUpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Sign Up to Access Full Marketplace</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-2">Get full access to all marketplace features including:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Detailed asset information</li>
            <li>Direct purchases</li>
            <li>Seller analytics</li>
            <li>Asset management tools</li>
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

export default function Marketplace() {
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
              <p className="text-sm text-indigo-700">This is a preview of the marketplace</p>
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
          <h1 className="text-2xl font-bold text-gray-900">AI Asset Marketplace</h1>
          <p className="text-gray-600 mt-1">Discover premium AI assets from top developers</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search assets..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <ShoppingCart className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Marketplace Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewListings.map((item) => (
          <div key={item.id} className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">{item.price}</span>
                <span className="text-sm text-gray-500">{item.type}</span>
              </div>
            </div>
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={() => setShowSignUp(true)}
            >
              <button className="bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                Sign Up to View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sign Up Modal */}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </div>
  );
}