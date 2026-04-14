import { Link } from 'react-router-dom';
import SectionTitle from '../components/UI/SectionTitle';
import { motion } from 'motion/react';
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaUsers,
  FaMicrochip,
  FaGraduationCap,
  FaCalendarAlt,
} from 'react-icons/fa';

const formations = [
  { name: 'Leadership', icon: FaUsers, color: 'bg-primary-100 text-primary-700' },
  { name: 'Développement personnel', icon: FaChalkboardTeacher, color: 'bg-primary-100 text-primary-700' },
  { name: 'Valeurs citoyennes', icon: FaUsers, color: 'bg-primary-100 text-primary-700' },
  { name: 'Entrepreneuriat', icon: FaMicrochip, color: 'bg-primary-100 text-primary-700' },
  { name: 'Graphisme', icon: FaLaptopCode, color: 'bg-primary-100 text-primary-700' },
  { name: 'Montage audiovisuel', icon: FaLaptopCode, color: 'bg-primary-100 text-primary-700' },
  { name: 'Informatique', icon: FaLaptopCode, color: 'bg-primary-100 text-primary-700' },
  { name: 'Ingénierie de son', icon: FaLaptopCode, color: 'bg-primary-100 text-primary-700' },
];

// Images de jeunes en formation (Unsplash)
const galleryImages = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
];

const programs = [
  {
    title: 'Bootcamp Entrepreneuriat',
    description: 'Formation intensive de 2 semaines pour créer son entreprise.',
    icon: FaGraduationCap,
  },
  {
    title: 'Ateliers Numériques',
    description: 'Initiation au graphisme, montage vidéo et informatique de base.',
    icon: FaLaptopCode,
  },
  {
    title: 'Académie de Leadership',
    description: 'Développement personnel et engagement citoyen.',
    icon: FaUsers,
  },
];

export default function ActionsJeunes() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Formation des Jeunes"
          subtitle="Bâtir une jeunesse responsable et compétente pour le Bénin de demain"
        />

        {/* Introduction avec image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              3G ONG organise des formations pratiques pour outiller les jeunes et les préparer
              aux défis du monde professionnel et citoyen. Notre approche combine théorie et
              pratique pour une insertion réussie.
            </p>
            <p className="text-slate-600 mb-8">
              Plus de <strong className="text-primary-700">480 jeunes</strong> ont déjà bénéficié
              de nos programmes, avec un taux d'insertion professionnelle de 78%.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
            >
              <span>Demander une formation</span>
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={galleryImages[0]}
              alt="Jeunes en formation"
              className="rounded-2xl shadow-md object-cover w-full h-48"
            />
            <img
              src={galleryImages[1]}
              alt="Atelier numérique"
              className="rounded-2xl shadow-md object-cover w-full h-48"
            />
            <img
              src={galleryImages[2]}
              alt="Groupe de jeunes"
              className="col-span-2 rounded-2xl shadow-md object-cover w-full h-48"
            />
          </motion.div>
        </div>

        {/* Badges des formations */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-center mb-8 text-dark">
            Nos domaines de formation
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {formations.map((formation, idx) => (
              <motion.div
                key={formation.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.03 }}
                viewport={{ once: true }}
                className={`p-5 rounded-xl text-center ${formation.color} bg-opacity-20 backdrop-blur-sm border border-primary-100`}
              >
                <formation.icon className="text-2xl mx-auto mb-2" />
                <span className="font-medium text-sm md:text-base">{formation.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Programmes phares avec détails */}
        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 mb-16">
          <h3 className="text-3xl font-display font-bold mb-8 text-dark text-center">
            Nos programmes phares
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-light p-6 rounded-xl hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                  <program.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2">{program.title}</h4>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <div className="text-primary-600 font-medium text-sm flex items-center gap-1">
                  <FaCalendarAlt size={14} />
                  <span>Prochaine session : Mars 2026</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Témoignages / Impact */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-3xl"
          >
            <h4 className="text-2xl font-display font-bold mb-4 text-primary-800">
              Ils témoignent
            </h4>
            <p className="italic text-slate-700 mb-4">
              "Grâce à la formation en graphisme de 3G ONG, j'ai pu décrocher un stage
              dans une agence de communication à Cotonou. Je suis très reconnaissante."
            </p>
            <p className="font-semibold">— Nadège H., 22 ans</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary-700 text-white p-8 rounded-3xl"
          >
            <h4 className="text-2xl font-display font-bold mb-4">
              Vous souhaitez former vos jeunes ?
            </h4>
            <p className="text-white/90 mb-6">
              Nous intervenons également dans les écoles, les centres communautaires
              et les entreprises.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-700 font-bold px-6 py-3 rounded-lg hover:bg-primary-50 transition"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}