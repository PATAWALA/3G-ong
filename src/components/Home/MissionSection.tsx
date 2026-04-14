import { useInView } from 'react-intersection-observer';
import { motion } from 'motion/react';

export default function MissionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">Notre Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            La mission de 3G ONG est de contribuer à la transformation sociale durable au Bénin,
            en renforçant les capacités des familles, des jeunes et des communautés.
            En plaçant l’être humain au centre de ses interventions, l’ONG favorise un développement
            équilibré et une société plus inclusive.
          </p>
          <p className="mt-6 italic text-primary font-medium">
            — Bénédict Behoumbe Assossou, Présidente Fondatrice
          </p>
        </motion.div>
      </div>
    </section>
  );
}