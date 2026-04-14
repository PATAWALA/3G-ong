import { Link } from 'react-router-dom';
import SectionTitle from '../components/UI/SectionTitle';
import { FaHeartbeat, FaLeaf, FaCalendarCheck, FaUserMd } from 'react-icons/fa';
import { motion } from 'motion/react';

const maladies = [
  'Prostate', 'Hémorroïdes', 'Ulcère', 'Hépatite',
  'Fibrome', 'Hypertension', 'Hypotension', 'Infertilité', 'Diabète'
];

export default function ActionsSante() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Santé Communautaire"
          subtitle="Prévention, sensibilisation et prise en charge des maladies courantes"
        />

        {/* Introduction avec image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              3G ONG agit pour améliorer l'accès aux soins de base dans les communautés
              rurales et urbaines du Bénin. Notre atelier de traitement naturel et nos
              campagnes de sensibilisation touchent chaque année des centaines de personnes.
            </p>
            <div className="flex gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold text-primary-700">800+</p>
                <p className="text-slate-600">Consultations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-700">15+</p>
                <p className="text-slate-600">Villages couverts</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
            >
              <span>Prendre rendez-vous</span>
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop"
              alt="Consultation médicale communautaire"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Atelier + Sensibilisation */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                <FaHeartbeat size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-dark">
                Notre atelier de traitement
              </h3>
            </div>
            <p className="text-slate-600 mb-4">
              3G ONG a mis en place un atelier spécialisé dans le traitement naturel de plusieurs affections.
              Nos praticiens utilisent des méthodes éprouvées et des plantes locales.
            </p>
            <div className="flex flex-wrap gap-2">
              {maladies.map((maladie, idx) => (
                <motion.span
                  key={maladie}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.02 }}
                  viewport={{ once: true }}
                  className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {maladie}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                <FaLeaf size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-dark">
                Campagnes de sensibilisation
              </h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-lg">•</span>
                Hygiène et assainissement en milieu scolaire
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-lg">•</span>
                Prévention des IST, du paludisme et de la dengue
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-lg">•</span>
                Promotion d'une alimentation saine et équilibrée
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-600 text-lg">•</span>
                Santé maternelle, planning familial et suivi de grossesse
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Consultation gratuite + Témoignage */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-primary-200 text-primary-700 flex items-center justify-center shrink-0">
              <FaUserMd size={36} />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2 text-primary-800">
                Consultations gratuites
              </h4>
              <p className="text-slate-700 mb-4">
                Chaque premier samedi du mois, une équipe médicale bénévole tient une permanence
                au siège d'Allada. Venez nombreux.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-700 transition"
              >
                Prendre RDV
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary-700 text-white p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaCalendarCheck size={28} />
              <h4 className="text-xl font-bold">Prochaine campagne</h4>
            </div>
            <p className="text-white/90 mb-2">
              <strong>Dépistage gratuit du diabète et de l'hypertension</strong>
            </p>
            <p className="text-white/80 mb-4">
              Samedi 5 avril 2026 – Place publique de Dogoudo, Allada
            </p>
            <p className="text-sm text-white/60">
              *Ouvert à tous, sans rendez-vous.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}