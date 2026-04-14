import SectionTitle from '../components/UI/SectionTitle';
import { FaHeartbeat, FaHandsHelping, FaLeaf } from 'react-icons/fa';
import { motion } from 'motion/react';

const maladies = [
  'Prostate', 'Hémorroïdes', 'Ulcère', 'Hépatite',
  'Fibrome', 'Hypertension', 'Hypotension', 'Infertilité', 'Diabète'
];

export default function ActionsSante() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <SectionTitle 
          title="Santé Communautaire" 
          subtitle="Prévention, sensibilisation et prise en charge des maladies courantes"
        />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaHeartbeat className="text-red-500" /> Notre atelier de traitement
            </h3>
            <p className="text-slate-600 mb-4">
              3G ONG a mis en place un atelier spécialisé dans le traitement naturel de plusieurs affections.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {maladies.map((maladie, idx) => (
                <motion.span
                  key={maladie}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm text-center"
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
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaLeaf className="text-green-600" /> Campagnes de sensibilisation
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-2"><span>✅</span> Hygiène et assainissement</li>
              <li className="flex gap-2"><span>✅</span> Prévention des IST et du paludisme</li>
              <li className="flex gap-2"><span>✅</span> Alimentation saine et équilibrée</li>
              <li className="flex gap-2"><span>✅</span> Santé maternelle et infantile</li>
            </ul>
          </motion.div>
        </div>

        <div className="bg-primary/5 p-8 rounded-xl flex flex-col md:flex-row items-center gap-6">
          <FaHandsHelping className="text-6xl text-primary" />
          <div>
            <h4 className="text-2xl font-bold mb-2">Consultations gratuites</h4>
            <p className="text-slate-700">
              Chaque premier samedi du mois, une équipe médicale bénévole tient une permanence à Allada.
              Prenez rendez-vous dès maintenant.
            </p>
            <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-emerald-800">
              Prendre RDV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}