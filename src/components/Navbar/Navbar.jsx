import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <div className="text-xl font-bold text-white">Blacky</div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#customers"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Customers
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block text-sm font-semibold text-white hover:text-gray-300 transition-colors">
            Sign In
          </button>
          <button className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-semibold text-white hover:bg-white/20 transition-colors">
            Start Free
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm p-4">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-white">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-white">
              Pricing
            </a>
            <a href="#customers" className="text-sm font-medium text-white">
              Customers
            </a>
            <a href="#signin" className="text-sm font-medium text-white">
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
