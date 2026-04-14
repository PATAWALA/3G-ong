import SectionTitle from '../components/UI/SectionTitle';
import { FaHandHoldingHeart, FaChild, FaHome } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function ActionsHumanitaire() {
  const actions = [
    { title: 'Distribution de vivres', desc: 'Aide alimentaire aux familles démunies d\'Allada', icon: FaHandHoldingHeart },
    { title: 'Soutien aux orphelins', desc: 'Fournitures scolaires et vêtements', icon: FaChild },
    { title: 'Aide au logement', desc: 'Réhabilitation de cases pour personnes âgées', icon: FaHome },
  ];

  return (
    <div className="py-16">
      <div className="container-custom">
        <SectionTitle 
          title="Actions Humanitaires" 
          subtitle="Solidarité et soutien aux populations vulnérables"
        />

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-12">
          <p className="text-lg text-slate-700">
            3G ONG intervient auprès des familles démunies, des enfants vulnérables et des communautés fragiles à travers des dons, 
            des aides matérielles et des projets solidaires.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {actions.map((action, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <action.icon className="text-5xl text-secondary mx-auto mb-4" />
              <h4 className="font-bold text-xl mb-2">{action.title}</h4>
              <p className="text-slate-600">{action.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-dark text-white p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Devenez partenaire de nos actions</h3>
          <p className="mb-6">Votre don, même modeste, peut changer des vies.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-secondary text-white px-6 py-3 rounded-full font-bold">Faire un don</button>
            <button className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-dark transition">
              Devenir bénévole
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}