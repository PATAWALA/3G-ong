import SectionTitle from '../components/UI/SectionTitle';
import { FaLaptopCode, FaChalkboardTeacher, FaUsers, FaMicrochip } from 'react-icons/fa';
import { motion } from 'motion/react';

const formations = [
  { name: 'Leadership', icon: FaUsers, color: 'bg-blue-100 text-blue-600' },
  { name: 'Développement personnel', icon: FaChalkboardTeacher, color: 'bg-green-100 text-green-600' },
  { name: 'Valeurs citoyennes', icon: FaUsers, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Entrepreneuriat', icon: FaMicrochip, color: 'bg-purple-100 text-purple-600' },
  { name: 'Graphisme', icon: FaLaptopCode, color: 'bg-pink-100 text-pink-600' },
  { name: 'Montage audiovisuel', icon: FaLaptopCode, color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Informatique', icon: FaLaptopCode, color: 'bg-cyan-100 text-cyan-600' },
  { name: 'Ingénierie de son', icon: FaLaptopCode, color: 'bg-orange-100 text-orange-600' },
];

export default function ActionsJeunes() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <SectionTitle 
          title="Formation des Jeunes" 
          subtitle="Bâtir une jeunesse responsable et compétente pour le Bénin de demain"
        />

        <p className="text-lg text-slate-700 mb-12 text-center max-w-3xl mx-auto">
          3G ONG organise des formations pratiques pour outiller les jeunes et les préparer aux défis du monde professionnel et citoyen.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {formations.map((formation, idx) => (
            <motion.div
              key={formation.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl text-center ${formation.color} bg-opacity-20`}
            >
              <formation.icon className="text-3xl mx-auto mb-2" />
              <span className="font-medium">{formation.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Programme type */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-primary">Nos programmes phares</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-secondary pl-4">
              <h4 className="font-semibold text-lg">Bootcamp Entrepreneuriat</h4>
              <p className="text-slate-600">Formation intensive de 2 semaines pour créer son entreprise.</p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <h4 className="font-semibold text-lg">Ateliers Numériques</h4>
              <p className="text-slate-600">Initiation au graphisme, montage vidéo et informatique de base.</p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <h4 className="font-semibold text-lg">Académie de Leadership</h4>
              <p className="text-slate-600">Développement personnel et engagement citoyen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}