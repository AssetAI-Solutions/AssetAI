import React, { useState } from 'react';

interface SignUpModalProps {
  onClose: () => void;
  title: string;
  features: string[];
}

export default function SignUpModal({ onClose, title, features }: SignUpModalProps) {
  const [step, setStep] = useState<'signup' | 'verify'>('signup');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('verify');
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would verify the code
    onClose();
  };

  const handleVerificationChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digits

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 max-w-md w-full rounded-lg shadow-xl">
        {step === 'signup' ? (
          <>
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-2">Get full access to all features including:</p>
              <ul className="space-y-1 list-disc list-inside">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Create Account
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">Verify your email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a verification code to <span className="font-medium">{email}</span>. 
              Enter the 6-digit code below to verify your email address.
            </p>
            <form onSubmit={handleVerificationSubmit} className="space-y-6">
              <div className="flex justify-between gap-2">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleVerificationChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    required
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Verify Email
              </button>
              <div className="text-center text-sm text-gray-600">
                Didn't receive the code?{' '}
                <button
                  type="button"
                  className="text-indigo-600 hover:text-indigo-700 font-medium"
                  onClick={() => {
                    // Here you would resend the code
                  }}
                >
                  Resend
                </button>
              </div>
            </form>
          </>
        )}
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