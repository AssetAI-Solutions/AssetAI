import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, CreditCard, User, Mail, Key, Globe, ChevronRight } from 'lucide-react';

const settingsSections = [
  {
    title: 'Account',
    icon: User,
    items: [
      { name: 'Profile Information', description: 'Update your account details and profile' },
      { name: 'Email Preferences', description: 'Manage your email settings and notifications' },
      { name: 'Password', description: 'Change your password and security settings' }
    ]
  },
  {
    title: 'Payments',
    icon: CreditCard,
    items: [
      { name: 'Payment Methods', description: 'Add or remove payment methods' },
      { name: 'Payout Settings', description: 'Configure how you receive your earnings' },
      { name: 'Billing History', description: 'View your past transactions and invoices' }
    ]
  },
  {
    title: 'Security',
    icon: Shield,
    items: [
      { name: 'Two-Factor Authentication', description: 'Add an extra layer of security' },
      { name: 'API Keys', description: 'Manage your API keys and access tokens' },
      { name: 'Login History', description: 'Review your recent login activity' }
    ]
  },
  {
    title: 'Notifications',
    icon: Bell,
    items: [
      { name: 'Email Notifications', description: 'Choose which emails you want to receive' },
      { name: 'Push Notifications', description: 'Configure browser notifications' },
      { name: 'Marketing Preferences', description: 'Manage marketing communication preferences' }
    ]
  }
];

function SignUpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6">Sign Up to Access Settings</h2>
        <div className="text-gray-600 mb-6">
          <p className="mb-2">Get full access to account settings including:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Profile management</li>
            <li>Security settings</li>
            <li>Payment preferences</li>
            <li>Notification controls</li>
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

export default function Settings() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="space-y-8">
      {/* Preview Banner */}
      <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
              <SettingsIcon className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-indigo-900">Preview Mode</h3>
              <p className="text-sm text-indigo-700">This is a preview of account settings</p>
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

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => setShowSignUp(true)}
          className="flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-indigo-600 transition-colors group"
        >
          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100">
            <Mail className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-900">Update Email</h3>
            <p className="text-sm text-gray-600">Change your email address</p>
          </div>
        </button>
        <button
          onClick={() => setShowSignUp(true)}
          className="flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-indigo-600 transition-colors group"
        >
          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100">
            <Key className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-900">Change Password</h3>
            <p className="text-sm text-gray-600">Update your password</p>
          </div>
        </button>
        <button
          onClick={() => setShowSignUp(true)}
          className="flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-indigo-600 transition-colors group"
        >
          <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100">
            <Globe className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-900">Language & Region</h3>
            <p className="text-sm text-gray-600">Set your preferences</p>
          </div>
        </button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-indigo-600" />
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {section.items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setShowSignUp(true)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Sign Up Modal */}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </div>
  );
}