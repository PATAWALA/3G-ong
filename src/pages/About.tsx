import { Link } from 'react-router-dom';
import SectionTitle from '../components/UI/SectionTitle';
import { motion } from 'motion/react';
import { FaQuoteLeft, FaHandsHelping, FaLeaf, FaUsers } from 'react-icons/fa';

// Données de l'équipe avec images réelles (Unsplash)
const teamMembers = [
  {
    name: 'Bénédict Behoumbe Assossou',
    role: 'Présidente Fondatrice',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces',
    bio: 'Visionnaire engagée pour la transformation sociale au Bénin.',
  },
  {
    name: 'Dr. Antoine Kossi',
    role: 'Coordinateur Santé',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces',
    bio: 'Médecin spécialiste en santé communautaire.',
  },
  {
    name: 'Mme. Reine Zinsou',
    role: 'Responsable Formation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
    bio: 'Formatrice en leadership et entrepreneuriat.',
  },
];

const values = [
  {
    icon: FaHandsHelping,
    title: 'Solidarité',
    description: 'Agir ensemble pour les plus vulnérables.',
  },
  {
    icon: FaLeaf,
    title: 'Développement durable',
    description: 'Des actions pérennes pour les générations futures.',
  },
  {
    icon: FaUsers,
    title: 'Communauté',
    description: 'Renforcer les liens sociaux et familiaux.',
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Qui sommes-nous ?"
          subtitle="Une organisation ancrée dans les réalités béninoises, tournée vers l'avenir."
        />

        {/* Section Histoire + Citation */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6 text-primary-700">
              Notre Histoire
            </h3>
            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
              3G ONG est née d'une vision portée par <strong>Bénédict Behoumbe Assossou</strong> :
              celle d'un Bénin où les familles sont stables, les jeunes formés et les communautés solidaires.
            </p>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Lancée officiellement le <strong>22 septembre 2024 à Bohicon</strong>, l'organisation
              a rapidement établi son siège à <strong>Allada (Quartier Dogoudo 2)</strong> pour être
              au cœur des réalités locales.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Depuis, 3G ONG déploie des actions concrètes dans cinq domaines clés :
              accompagnement familial, formation des jeunes, santé communautaire,
              promotion culturelle et aide humanitaire.
            </p>

            {/* Bouton contextuel vers les actions */}
            <Link
              to="/actions/famille"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Découvrir nos actions</span>
              <span className="text-xl">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-inner"
          >
            <FaQuoteLeft className="text-5xl text-primary-400 mb-4" />
            <p className="text-xl md:text-2xl italic text-dark font-medium mb-6 leading-relaxed">
              "Nous croyons que la transformation sociale commence par le renforcement
              des liens familiaux et l'autonomisation de la jeunesse."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-primary-500"></div>
              <p className="font-bold text-primary-700">
                Bénédict Behoumbe Assossou
              </p>
            </div>
            <p className="text-sm text-slate-500 mt-1">Présidente Fondatrice</p>
          </motion.div>
        </div>

        {/* Section Nos Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-display font-bold text-center mb-12 text-dark">
            Nos Valeurs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Équipe */}
        <SectionTitle title="Notre Équipe" centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-display font-bold text-dark mb-1">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-slate-500 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Appel à l'action final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-10 text-center text-white shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Rejoignez l'aventure 3G ONG
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Que vous soyez bénévole, partenaire ou donateur, votre engagement fait la différence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary-700 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition shadow-md"
            >
              Devenir bénévole
            </Link>
            <Link
              to="/actions/humanitaire"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-700 transition"
            >
              Faire un don
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}