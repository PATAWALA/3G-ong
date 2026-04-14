import { Link } from 'react-router-dom';
import { FaHeart, FaGraduationCap, FaHandHoldingHeart, FaPalette, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'motion/react';
import type { IconType } from 'react-icons';

interface Pillar {
  title: string;
  icon: IconType;
  color: string;
  path: string;
}

const pillars: Pillar[] = [
  { title: 'Famille & JIC', icon: FaHeart, color: 'bg-red-100 text-red-600', path: '/actions/famille' },
  { title: 'Formations Jeunes', icon: FaGraduationCap, color: 'bg-blue-100 text-blue-600', path: '/actions/jeunes' },
  { title: 'Santé Communautaire', icon: FaHandHoldingHeart, color: 'bg-green-100 text-green-600', path: '/actions/sante' },
  { title: 'Culture & Sport', icon: FaPalette, color: 'bg-purple-100 text-purple-600', path: '/actions/culture' },
  { title: 'Humanitaire', icon: FaHandsHelping, color: 'bg-orange-100 text-orange-600', path: '/actions/humanitaire' },
];

export default function PillarsGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">Nos Domaines d'Action</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <Link to={pillar.path} className="block text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${pillar.color} mb-4`}>
                  <pillar.icon size={28} />
                </div>
                <h3 className="font-semibold text-lg">{pillar.title}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}