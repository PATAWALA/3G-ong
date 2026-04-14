import { Link } from 'react-router-dom';
import SectionTitle from '../components/UI/SectionTitle';
import {
  FaHandHoldingHeart,
  FaChild,
  FaHome,
  FaHeart,
  FaHandsHelping,
  FaDonate,
} from 'react-icons/fa';
import { motion } from 'motion/react';

const actions = [
  {
    title: 'Distribution de vivres',
    desc: 'Aide alimentaire aux familles démunies d\'Allada et des villages environnants.',
    icon: FaHandHoldingHeart,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop',
  },
  {
    title: 'Soutien aux orphelins',
    desc: 'Fournitures scolaires, vêtements et accompagnement éducatif.',
    icon: FaChild,
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=600&h=400&fit=crop',
  },
  {
    title: 'Aide au logement',
    desc: 'Réhabilitation de cases et amélioration de l\'habitat pour les personnes âgées.',
    icon: FaHome,
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
  },
];

export default function ActionsHumanitaire() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Actions Humanitaires"
          subtitle="Solidarité et soutien aux populations vulnérables du Bénin"
        />

        {/* Introduction avec image et statistiques */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              3G ONG intervient auprès des familles démunies, des enfants vulnérables
              et des communautés fragiles à travers des dons, des aides matérielles
              et des projets solidaires. Notre objectif : redonner espoir et dignité.
            </p>
            <div className="flex gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold text-primary-700">520+</p>
                <p className="text-slate-600">Familles aidées</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-700">12</p>
                <p className="text-slate-600">Villages couverts</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
              >
                <FaDonate />
                <span>Faire un don</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <FaHandsHelping />
                <span>Devenir bénévole</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
              alt="Distribution de vivres par 3G ONG"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Actions phares avec images */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {actions.map((action, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={action.image}
                  alt={action.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <div className="w-16 h-16 mx-auto -mt-12 bg-white rounded-full shadow-md flex items-center justify-center text-primary-600 mb-4">
                  <action.icon size={28} />
                </div>
                <h4 className="font-bold text-xl mb-2">{action.title}</h4>
                <p className="text-slate-600">{action.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact global */}
        <div className="bg-primary-50 rounded-3xl p-8 md:p-10 mb-16">
          <h3 className="text-2xl font-display font-bold text-primary-800 mb-6 text-center">
            Notre impact en quelques chiffres
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-700">1,2 t</p>
              <p className="text-slate-600">de vivres distribués</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-700">350</p>
              <p className="text-slate-600">enfants soutenus</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-700">18</p>
              <p className="text-slate-600">cases réhabilitées</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-700">45</p>
              <p className="text-slate-600">bénévoles actifs</p>
            </div>
          </div>
        </div>

        {/* Appel à l'action final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-700 to-primary-900 text-white p-10 rounded-3xl text-center shadow-xl"
        >
          <div className="flex justify-center mb-4">
            <FaHeart className="text-5xl text-secondary-400" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-4">
            Chaque geste compte
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Votre don, même modeste, contribue à changer des vies. Rejoignez notre
            chaîne de solidarité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary-700 font-bold px-8 py-3 rounded-full hover:bg-primary-50 transition shadow-md"
            >
              Faire un don maintenant
            </Link>
            <Link
              to="/actions/famille"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-primary-700 transition"
            >
              Découvrir nos actions
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}