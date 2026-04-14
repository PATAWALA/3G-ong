import SectionTitle from '../components/UI/SectionTitle';
import { FaMusic, FaPalette, FaFutbol, FaTheaterMasks } from 'react-icons/fa';
import { motion } from 'motion/react';

export default function ActionsCulture() {
  const events = [
    { icon: FaMusic, title: 'Festival de Musique Traditionnelle', date: 'Août 2026' },
    { icon: FaPalette, title: 'Exposition Artistes Émergents', date: 'Octobre 2026' },
    { icon: FaFutbol, title: 'Tournoi de Football Inter-quartiers', date: 'Décembre 2026' },
    { icon: FaTheaterMasks, title: 'Soirée Théâtre Forum', date: 'Janvier 2026' },
  ];

  return (
    <div className="py-16">
      <div className="container-custom">
        <SectionTitle 
          title="Culture & Sport" 
          subtitle="Valoriser la richesse culturelle béninoise et promouvoir les talents locaux"
        />

        <p className="text-lg text-slate-700 mb-12 text-center max-w-3xl mx-auto">
          3G ONG considère la culture, l'art et le sport comme des leviers essentiels pour l’expression des jeunes, 
          la cohésion sociale et le développement communautaire.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((ev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                <ev.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">{ev.title}</h4>
                <p className="text-slate-500">{ev.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Vous êtes artiste ou sportif ?</h3>
          <p className="mb-6">Rejoignez notre réseau de talents soutenus par 3G ONG.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-100">
            Déposer ma candidature
          </button>
        </div>
      </div>
    </div>
  );
}