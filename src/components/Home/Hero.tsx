import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

// Import de l'image locale pour la culture
import heroCulture from '../../assets/images/culturehero.jpg';

interface Slide {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Renforcer les familles',
    subtitle: 'Accompagnement des couples et cohésion sociale au Bénin',
    buttonText: 'Découvrir la JIC',
    buttonLink: '/actions/famille',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Former la jeunesse',
    subtitle: 'Compétences numériques, leadership et entrepreneuriat',
    buttonText: 'Voir les formations',
    buttonLink: '/actions/jeunes',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Agir pour la santé',
    subtitle: 'Ateliers de traitement et prévention communautaire',
    buttonText: 'Nous soutenir',
    buttonLink: '/actions/sante',
  },
  {
    // Utilisation de l'image locale pour la culture
    imageUrl: heroCulture,
    title: 'Promouvoir la culture',
    subtitle: 'Valorisation des talents artistiques et sportifs',
    buttonText: 'Voir les événements',
    buttonLink: '/actions/culture',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Solidarité humanitaire',
    subtitle: 'Aide aux populations vulnérables et dons',
    buttonText: 'Faire un don',
    buttonLink: '/actions/humanitaire',
  },
];

const avatars = [
  'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=150&h=150&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full container-custom flex items-center">
        <div className="max-w-4xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 drop-shadow-lg">
                {slides[currentIndex].title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl drop-shadow">
                {slides[currentIndex].subtitle}
              </p>
              <Link
                to={slides[currentIndex].buttonLink}
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
              >
                {slides[currentIndex].buttonText}
              </Link>

              {/* Avatars avec texte corrigé */}
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {avatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="Membre"
                      className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md"
                    />
                  ))}
                </div>
                <div className="text-white/90">
                  <p className="font-semibold">+1280 personnes accompagnées</p>
                  <p className="text-sm text-white/70">Rejoignez notre communauté</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-10 bg-secondary-500'
                : 'w-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}