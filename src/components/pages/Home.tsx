import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, GitBranch, Binary, Network, Bot, ArrowRight, Copy } from 'lucide-react';
import SignInDrawer from '../components/SignInDrawer';
import SignUpModal from '../components/SignUpModal';

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

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-gray-600 hover:text-indigo-600 transition-colors relative group py-2"
    >
      {children}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
    </a>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-8 border border-gray-200 hover:border-indigo-600 transition-all duration-300 group">
      <div className="w-14 h-14 bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors duration-300">
        <Icon className="w-7 h-7 text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const contractAddress = "Coming Soon";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSignUpClick = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 bg-white border-b border-gray-200 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-50 flex items-center justify-center">
                <LogoIcon />
              </div>
              <span className="text-xl font-bold text-gray-900">TalentAI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="https://twitter.com">Twitter</NavLink>
              <NavLink href="https://github.com">GitHub</NavLink>
              <button 
                onClick={() => setShowSignIn(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h1 className="text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                TalentAI
                <span className="block text-indigo-600">Marketplace</span>
              </h1>
              <p className="text-xl mb-6 text-gray-600">
                Buy and sell high-quality training data, AI modules, and complete solutions. Connect with developers and monetize your AI assets in a secure marketplace.
              </p>

              {/* Contract Address Section */}
              <div className="mb-10 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Token Contract Address</h3>
                <div className="flex items-center gap-2">
                  <code className="flex-1 font-mono text-sm bg-white px-3 py-2 rounded border border-gray-200 text-gray-500 italic">
                    {contractAddress}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 text-gray-500 hover:text-indigo-600 transition-colors"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                {copied && (
                  <p className="text-sm text-green-600 mt-1">✓ Copied to clipboard</p>
                )}
              </div>

              <Link 
                to="/app" 
                className="group inline-flex px-8 py-4 bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-colors"
              >
                <span className="flex items-center gap-2">
                  Enter Marketplace <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
            <div className="lg:w-1/2">
              {/* Decorative border around the image */}
              <div className="relative">
                {/* Background pattern */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-50 to-white rounded-lg" />
                
                {/* Border frame */}
                <div className="relative">
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-indigo-600" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-indigo-600" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-indigo-600" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-indigo-600" />
                  
                  {/* Main image with subtle border */}
                  <div className="relative p-2 bg-white shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=800&q=80"
                      alt="3D Artificial Intelligence Visualization"
                      className="w-full transform hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-32 bg-gray-50" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What You Can Trade</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to build and scale AI solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Database}
              title="Training Data"
              description="High-quality, curated datasets for training AI models across various domains"
            />
            <FeatureCard
              icon={GitBranch}
              title="AI Modules"
              description="Specialized AI components and modules ready to integrate into existing systems"
            />
            <FeatureCard
              icon={Binary}
              title="Complete Solutions"
              description="Production-ready AI systems with full documentation and support"
            />
            <FeatureCard
              icon={Code}
              title="Custom Models"
              description="Pre-trained models optimized for specific use cases and industries"
            />
            <FeatureCard
              icon={Network}
              title="API Access"
              description="Secure API endpoints for AI services with usage-based pricing"
            />
            <FeatureCard
              icon={Database}
              title="Infrastructure"
              description="Deployment templates and infrastructure configurations for AI systems"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-indigo-50 p-12 border border-indigo-100">
            <div className="text-center">
              <Bot className="w-20 h-20 text-indigo-600 mx-auto mb-8" />
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Trade AI Assets?</h2>
              <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
                Join other AI developers in buying and selling valuable AI resources. Start monetizing your work today.
              </p>
              <Link 
                to="/app" 
                className="inline-flex bg-indigo-600 text-white px-8 py-4 font-semibold text-lg hover:bg-indigo-700 transition-colors"
              >
                Enter Marketplace
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sign In Drawer */}
      {showSignIn && (
        <SignInDrawer 
          onClose={() => setShowSignIn(false)}
          onSignUp={handleSignUpClick}
        />
      )}

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
    </>
  );
}