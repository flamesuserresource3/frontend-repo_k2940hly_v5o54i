import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full scroll-mt-24">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.20),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.18),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live interactive 3D hero
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
              Launch your startup with a stunning, animated presence
            </h1>
            <p className="mt-5 text-lg text-white/80">
              A modern landing experience with immersive 3D, buttery-smooth scrolling, and delightful animations. Built for teams who want to impress from the first visit.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#product"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-xl shadow-fuchsia-500/10 hover:shadow-fuchsia-500/20 transition"
              >
                Explore the product
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition"
              >
                See features
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
