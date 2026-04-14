import SectionTitle from '../components/UI/SectionTitle';
import Card from '../components/UI/Card';
import { FaHeart, FaUsers, FaHandsHelping, FaCalendarCheck } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function ActionsFamilie() {
  const jicPoints = [
    { icon: FaUsers, title: "Partage d'expériences", desc: "Des couples du monde entier échangent leurs vécus" },
    { icon: FaHandsHelping, title: "Formations spécialisées", desc: "Ateliers sur la communication et la gestion des conflits" },
    { icon: FaHeart, title: "Sensibilisation", desc: "Promotion de la stabilité familiale et de l'épanouissement" },
    { icon: FaCalendarCheck, title: "Moments de communion", desc: "Activités festives pour restaurer les liens conjugaux" },
  ];

  return (
    <div className="py-16">
      <div className="container-custom">
        <SectionTitle 
          title="Famille & JIC" 
          subtitle="La Journée Internationale des Couples, un événement phare pour le renforcement familial"
        />

        {/* Description générale */}
        <div className="bg-primary/5 p-8 rounded-xl mb-16">
          <p className="text-lg text-slate-700 leading-relaxed">
            3G ONG intervient activement dans le soutien des familles, l’éducation des couples, 
            la prévention des conflits familiaux et la promotion de la cohésion sociale. 
            L’organisation met l’accent sur l’équilibre du foyer, la communication au sein du couple 
            et l’épanouissement des ménages.
          </p>
        </div>

        {/* La JIC */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-primary">La JIC – Journée Internationale des Couples</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-slate-600 mb-4">
                C’est dans cette dynamique qu’est née la JIC, un événement majeur qui rassemble des couples venant du monde entier. 
                La JIC offre un espace privilégié pour :
              </p>
              <ul className="space-y-3">
                {jicPoints.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <point.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{point.title}</h4>
                      <p className="text-sm text-slate-500">{point.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <Card className="p-6">
              <h4 className="text-xl font-bold mb-4">Prochaine édition JIC 2026</h4>
              <p className="text-slate-600 mb-2">📅 Date : 14-16 Février 2026</p>
              <p className="text-slate-600 mb-4">📍 Lieu : Palais des Congrès, Cotonou</p>
              <p className="text-slate-600 mb-6">Thème : "Communication et intimité dans le couple moderne"</p>
              <button className="bg-secondary text-white px-6 py-2 rounded-full w-full font-semibold hover:bg-amber-600">
                Pré-inscription
              </button>
            </Card>
          </div>
        </div>

        {/* Galerie photos */}
        <SectionTitle title="Quelques moments de la JIC" centered />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="aspect-square bg-slate-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/50 to-secondary/50 flex items-center justify-center text-white font-bold">
                JIC {i}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}