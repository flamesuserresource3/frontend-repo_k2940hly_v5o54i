import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <section id="product" className="relative scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">A product that feels alive</h2>
                <p className="mt-4 text-white/70">Built with modern tools and smooth motion primitives so every interaction feels intentional and crisp. Add sections, swap content, and extend with ease.</p>
                <ul className="mt-6 space-y-3 text-white/80">
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500" />Rich micro-interactions propelled by motion.</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />Responsive, accessible, and optimized.</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />Composable components designed for startups.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 blur-2xl" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800">
                    <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.25),transparent_45%),radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_55%)]" />
                  </div>
                  <div className="mt-4 text-sm text-white/70">A clean canvas to showcase screenshots, demos, or product mockups.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
