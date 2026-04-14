import { useInView } from 'react-intersection-observer';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function MissionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Équipe de 3G ONG"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge : petit décalage sur mobile, plus prononcé sur desktop */}
            <div className="absolute -bottom-3 -left-3 lg:-bottom-6 lg:-left-6 bg-primary-600 text-white px-5 py-2 lg:px-6 lg:py-3 rounded-xl shadow-lg">
              <p className="font-bold text-base lg:text-lg">3G ONG</p>
              <p className="text-xs lg:text-sm opacity-90">Depuis 2024</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              La mission de 3G ONG est de contribuer à la transformation sociale durable au Bénin,
              en renforçant les capacités des familles, des jeunes et des communautés.
              En plaçant l’être humain au centre de ses interventions, l’ONG favorise un développement
              équilibré et une société plus inclusive.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Fondée par Bénédict Behoumbe Assossou et lancée officiellement le 22 septembre 2024 à Bohicon,
              l'organisation est basée à Allada et rayonne dans tout le pays.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-0.5 bg-primary-600"></div>
              <p className="font-medium text-primary-700">
                Bénédict Behoumbe Assossou — Présidente Fondatrice
              </p>
            </div>
            
            <Link
              to="/a-propos"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>En savoir plus sur notre histoire</span>
              <span className="text-xl">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}