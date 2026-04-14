import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          3G ONG : Bâtir des familles stables, <br /> Former une jeunesse responsable.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl mb-8"
        >
          Ensemble pour un Bénin plus fort.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transition">
            Découvrir nos actions
          </button>
        </motion.div>
      </div>
    </section>
  );
}