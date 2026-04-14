import SectionTitle from '../components/UI/SectionTitle';
import { motion } from 'motion/react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function About() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <SectionTitle 
          title="Qui sommes-nous ?" 
          subtitle="Découvrez l'histoire et la mission de 3G ONG"
        />

        {/* Histoire */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Notre Histoire</h3>
            <p className="text-slate-600 mb-4">
              3G ONG est née d'une vision portée par Bénédict Behoumbe Assossou : celle d'un Bénin où les familles sont stables, les jeunes formés et les communautés solidaires.
            </p>
            <p className="text-slate-600 mb-4">
              Lancée officiellement le 22 septembre 2024 à Bohicon, l'organisation a rapidement établi son siège à Allada (Quartier Dogoudo 2) pour être au cœur des réalités locales.
            </p>
            <p className="text-slate-600">
              Depuis, 3G ONG déploie des actions concrètes dans cinq domaines clés : accompagnement familial, formation des jeunes, santé communautaire, promotion culturelle et aide humanitaire.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 p-8 rounded-xl"
          >
            <FaQuoteLeft className="text-4xl text-secondary mb-4" />
            <p className="text-xl italic text-dark mb-4">
              "Nous croyons que la transformation sociale commence par le renforcement des liens familiaux et l'autonomisation de la jeunesse."
            </p>
            <p className="font-semibold">— Bénédict Behoumbe Assossou, Présidente Fondatrice</p>
          </motion.div>
        </div>

        {/* Équipe */}
        <SectionTitle title="Notre Équipe" centered />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Bénédict Behoumbe Assossou', role: 'Présidente Fondatrice', img: '/images/team/presidente.jpg' },
            { name: 'Dr. Antoine Kossi', role: 'Coordinateur Santé', img: '/images/team/coordo-sante.jpg' },
            { name: 'Mme. Reine Zinsou', role: 'Responsable Formation', img: '/images/team/respo-formation.jpg' },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 bg-slate-200">
                {/* Remplacer par une vraie image plus tard */}
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
              </div>
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-slate-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}