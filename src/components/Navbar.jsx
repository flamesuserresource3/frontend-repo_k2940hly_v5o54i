import React from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="font-semibold text-white tracking-tight">
                VibeLaunch
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#product">Product</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="text-white/80 hover:text-white">Sign in</a>
              <a
                href="#product"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 font-medium shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition"
              >
                <Rocket className="h-4 w-4" />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
