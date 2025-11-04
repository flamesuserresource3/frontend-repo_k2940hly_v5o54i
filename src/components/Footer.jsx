import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-white">Ready to make a powerful first impression?</h3>
            <p className="mt-3 text-white/70 max-w-xl">Let’s craft a landing experience that feels alive. Reach out and we’ll get your startup looking spectacular in no time.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex max-w-md rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent px-3 py-2 text-white placeholder-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-slate-900 hover:opacity-95"
              >
                Join waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur"
          >
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-white font-semibold">Company</div>
                <ul className="mt-3 space-y-2">
                  <li><a href="#home" className="hover:text-white">Home</a></li>
                  <li><a href="#features" className="hover:text-white">Features</a></li>
                  <li><a href="#product" className="hover:text-white">Product</a></li>
                </ul>
              </div>
              <div>
                <div className="text-white font-semibold">Resources</div>
                <ul className="mt-3 space-y-2">
                  <li><a href="#contact" className="hover:text-white">Contact</a></li>
                  <li><a href="#contact" className="hover:text-white">Support</a></li>
                  <li><a href="#contact" className="hover:text-white">Privacy</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} VibeLaunch. All rights reserved.</div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
