import { Link } from 'react-router-dom';
import SectionTitle from '../components/UI/SectionTitle';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'motion/react';

// Événements avec images associées (Unsplash)
const events = [
  {
    title: 'JIC 2026 - Journée Internationale des Couples',
    date: '14-16 Février 2026',
    lieu: 'Palais des Congrès, Cotonou',
    type: 'Conférence',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop',
    description: 'Trois jours de partage, de formation et de célébration pour les couples du monde entier.',
  },
  {
    title: 'Formation intensive en Graphisme',
    date: '5 Mars 2026',
    lieu: 'Siège 3G ONG, Allada',
    type: 'Atelier',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop',
    description: 'Maîtrisez les fondamentaux du design graphique avec des professionnels du secteur.',
  },
  {
    title: 'Dépistage Gratuit Diabète & Hypertension',
    date: '20 Mars 2026',
    lieu: 'Place publique Dogoudo, Allada',
    type: 'Santé',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop',
    description: 'Consultations gratuites, conseils nutritionnels et sensibilisation.',
  },
  {
    title: 'Festival des Arts du Bénin',
    date: '10-12 Avril 2026',
    lieu: 'Maison de la Culture, Ouidah',
    type: 'Culture',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?w=800&h=500&fit=crop',
    description: 'Expositions, spectacles de danse et concerts mettant en valeur les talents béninois.',
  },
];

export default function Events() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Événements"
          subtitle="Retrouvez tous nos rendez-vous et participez à la vie de 3G ONG"
        />

        {/* Événement phare (mise en avant) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={events[0].image}
              alt={events[0].title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <span className="inline-block bg-secondary-500 text-dark px-4 py-1 rounded-full text-sm font-bold mb-4">
                Événement phare
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3">
                {events[0].title}
              </h3>
              <p className="text-white/80 text-lg mb-4 max-w-3xl">
                {events[0].description}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-white/90 mb-6">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>{events[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>{events[0].lieu}</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-6 py-3 rounded-lg hover:bg-primary-50 transition shadow-md"
              >
                <FaTicketAlt />
                <span>S'inscrire à cet événement</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Liste des autres événements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {events.slice(1).map((ev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {ev.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2 group-hover:text-primary-700 transition-colors">
                  {ev.title}
                </h4>
                <p className="text-slate-600 text-sm mb-4">{ev.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaCalendarAlt className="text-primary-500" />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-primary-500" />
                    <span>{ev.lieu}</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-primary-600 font-medium hover:gap-2 transition-all"
                >
                  <span>En savoir plus</span>
                  <FaArrowRight className="ml-1 text-sm" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Appel à proposition d'événement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 md:p-10 rounded-3xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-800 mb-4">
            Vous organisez un événement solidaire, culturel ou sportif ?
          </h3>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            3G ONG est toujours à la recherche de nouveaux partenariats pour enrichir son agenda.
            Proposez-nous votre projet et nous étudierons ensemble les possibilités de collaboration.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
          >
            <span>Proposer un événement</span>
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}