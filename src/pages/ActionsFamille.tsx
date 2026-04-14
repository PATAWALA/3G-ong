import { motion } from 'motion/react';
import { FaHeart, FaUsers, FaCalendarCheck, FaHandsHelping } from 'react-icons/fa';
import SectionTitle from '../components/UI/SectionTitle';
import Card from '../components/UI/Card';

// Donnees pour la JIC
const jicFeatures = [
  {
    icon: FaUsers,
    title: 'Partage international',
    description: 'Des couples venus du monde entier echangent experiences et bonnes pratiques.',
  },
  {
    icon: FaHeart,
    title: 'Formations specialisees',
    description: 'Ateliers sur la communication, la gestion des conflits et l\'intimite conjugale.',
  },
  {
    icon: FaCalendarCheck,
    title: 'Moments de communion',
    description: 'Activites recreatives et spirituelles pour renforcer les liens.',
  },
  {
    icon: FaHandsHelping,
    title: 'Accompagnement continu',
    description: 'Suivi personnalise apres l\'evenement pour des resultats durables.',
  },
];

export default function ActionsFamilie() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Famille et JIC"
          subtitle="La Journee Internationale des Couples : un evenement phare pour la stabilite familiale"
        />

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16"
        >
          <p className="text-lg md:text-xl text-primary-800 leading-relaxed max-w-4xl mx-auto text-center">
            3G ONG place la famille au coeur de son action. A travers des programmes
            d'education, de mediation et de soutien, nous accompagnons les couples
            beninois vers un epanouissement durable. La JIC incarne cet engagement
            en reunissant chaque annee des centaines de participants autour de
            formations, de temoignages et de moments festifs.
          </p>
        </motion.div>

        {/* Section JIC en detail */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-display font-bold text-primary-700 mb-6">
              Qu'est-ce que la JIC ?
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              La Journee Internationale des Couples est nee de la volonte de creer un
              espace dedie aux conjoints, ou ils peuvent se ressourcer, apprendre et
              celebrer leur union. L'edition 2026 se tiendra a Cotonou et proposera :
            </p>
            <ul className="space-y-4">
              {jicFeatures.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-dark">{item.title}</h4>
                    <p className="text-slate-500">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Couple africain heureux"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Edition 2026</h3>
                <p className="text-slate-500 mb-4">
                  <span className="font-semibold">Dates :</span> 14 - 16 Fevrier 2026<br />
                  <span className="font-semibold">Lieu :</span> Palais des Congres, Cotonou
                </p>
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition">
                  Pre-inscription
                </button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Galerie photos */}
        <SectionTitle title="Moments forts" centered />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
          ].map((url, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={url}
                alt={`Galerie JIC ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Appel a l'action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-primary rounded-2xl p-10 text-center text-white"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Vous souhaitez participer a la JIC 2026 ?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines de couples engages pour une experience
            transformatrice.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-700 font-semibold px-8 py-3 rounded-full hover:bg-primary-50 transition"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </div>
  );
}