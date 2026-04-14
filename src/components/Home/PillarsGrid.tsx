import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  FaHeart,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaPalette,
  FaHandsHelping,
  FaHandSparkles,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

interface Action {
  title: string;
  description: string;
  icon: IconType;
  link: string;
  color?: string;
  bgLight?: string;
}

const actions: Action[] = [
  {
    title: 'Famille & JIC',
    description:
      'Accompagnement des couples, prévention des conflits et Journée Internationale des Couples.',
    icon: FaHeart,
    link: '/actions/famille',
  },
  {
    title: 'Formations Jeunes',
    description:
      'Ateliers en leadership, numérique, entrepreneuriat et développement personnel.',
    icon: FaGraduationCap,
    link: '/actions/jeunes',
  },
  {
    title: 'Santé Communautaire',
    description:
      'Traitement de maladies courantes, campagnes de prévention et hygiène.',
    icon: FaHandHoldingHeart,
    link: '/actions/sante',
  },
  {
    title: 'Culture & Sport',
    description:
      'Promotion des talents locaux, festivals, compétitions et événements artistiques.',
    icon: FaPalette,
    link: '/actions/culture',
  },
  {
    title: 'Humanitaire',
    description:
      'Aide aux familles démunies, dons de vivres, soutien aux orphelins et personnes âgées.',
    icon: FaHandsHelping,
    link: '/actions/humanitaire',
  },
];

export default function PillarsGrid() {
  return (
    <section className="py-24 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4">
            Nos Domaines d'Action
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Cinq piliers pour un développement humain durable au Bénin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={action.link}
                className="group block h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200"
              >
                <div className="p-8 relative h-full flex flex-col">
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <action.icon
                      size={120}
                      className={action.color || 'text-primary-600'}
                    />
                  </div>
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      action.bgLight || 'bg-primary-50'
                    }`}
                  >
                    <action.icon
                      size={32}
                      className={action.color || 'text-primary-600'}
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-dark mb-3 group-hover:text-primary-700 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">
                    {action.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-primary-600 font-medium group-hover:gap-2 transition-all">
                    <span>En savoir plus</span>
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Sixième carte : Devenir Bénévole (couleurs personnalisées) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to="/contact"
              className="group block h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-secondary-200"
            >
              <div className="p-8 relative h-full flex flex-col">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <FaHandSparkles size={120} className="text-secondary-500" />
                </div>
                <div className="w-16 h-16 rounded-2xl bg-secondary-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaHandSparkles size={32} className="text-secondary-500" />
                </div>
                <h3 className="text-2xl font-display font-bold text-dark mb-3 group-hover:text-secondary-600 transition-colors">
                  Devenir Bénévole
                </h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  Rejoignez notre équipe et participez activement à nos actions sur le terrain.
                </p>
                <div className="mt-6 inline-flex items-center text-secondary-600 font-medium group-hover:gap-2 transition-all">
                  <span>Nous rejoindre</span>
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}