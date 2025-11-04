import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, Layers } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Immersive 3D Hero',
    desc: 'Interactive Spline scene with glassy aesthetics and real-time parallax.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Smooth Scrolling',
    desc: 'Seamless in-page navigation with gentle easing and section reveals.'
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Modern UI Kit',
    desc: 'Responsive layout, gradients, and subtle glassmorphism by default.'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Production Ready',
    desc: 'Clean, accessible components and motion that feels delightful.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Everything you need to wow visitors</h2>
          <p className="mt-4 text-white/70">Carefully crafted sections that balance performance, aesthetics, and engagement.</p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-lg hover:bg-white/10 transition"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/10">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
