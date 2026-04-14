import SectionTitle from '../components/UI/SectionTitle';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'motion/react';

const events = [
  { title: 'JIC 2026', date: '14-16 Février 2026', lieu: 'Palais des Congrès, Cotonou', type: 'Conférence' },
  { title: 'Formation en Graphisme', date: '5 Mars 2026', lieu: 'Siège Allada', type: 'Atelier' },
  { title: 'Dépistage Gratuit Diabète/HTA', date: '20 Mars 2026', lieu: 'Place publique Dogoudo', type: 'Santé' },
  { title: 'Festival des Arts du Bénin', date: '10-12 Avril 2026', lieu: 'Ouidah', type: 'Culture' },
];

export default function Events() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <SectionTitle title="Événements" subtitle="Retrouvez tous nos rendez-vous" />

        <div className="space-y-4 max-w-3xl mx-auto">
          {events.map((ev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <FaCalendarAlt />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{ev.title}</h4>
                  <p className="text-slate-500 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-sm" /> {ev.lieu}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  {ev.type}
                </span>
                <span className="font-semibold">{ev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}