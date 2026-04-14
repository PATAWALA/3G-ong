import { Link } from 'react-router-dom';
import SectionTitle from '../components/UI/SectionTitle';
import {
  FaMusic,
  FaPalette,
  FaTheaterMasks,
  FaCamera,
  FaTicketAlt,
} from 'react-icons/fa';
import { motion } from 'motion/react';

// Imports des images locales (place ces fichiers dans src/assets/images/culture/)
import imgIntroCulture from '../assets/images/culture/intro-culture.jpg';
import imgDanseTraditionnelle from '../assets/images/culture/danse-traditionnelle.jpg';
import imgArtistesEmergents from '../assets/images/culture/artistes-emergents.jpg';
import imgTheatreForum from '../assets/images/culture/theatre-forum.jpg';
import imgGalerie1 from '../assets/images/culture/galerie-1.jpg';
import imgGalerie2 from '../assets/images/culture/galerie-2.jpg';
import imgGalerie3 from '../assets/images/culture/galerie-3.jpg';

const events = [
  {
    icon: FaMusic,
    title: 'Festival de Musique Traditionnelle',
    date: 'Août 2026',
    description: 'Célébration des rythmes et danses du Bénin.',
    image: imgDanseTraditionnelle,
  },
  {
    icon: FaPalette,
    title: 'Exposition Artistes Émergents',
    date: 'Octobre 2026',
    description: 'Vitrine des jeunes talents en arts visuels.',
    image: imgArtistesEmergents,
  },
  {
    icon: FaTheaterMasks,
    title: 'Soirée Théâtre Forum',
    date: 'Janvier 2026',
    description: 'Débats citoyens par le théâtre participatif.',
    image: imgTheatreForum,
  },
];

const galleryImages = [imgGalerie1, imgGalerie2, imgGalerie3];

export default function ActionsCulture() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionTitle
          title="Culture & Sport"
          subtitle="Valoriser la richesse culturelle béninoise et promouvoir les talents locaux"
        />

        {/* Introduction avec image locale */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              3G ONG considère la culture, l'art et le sport comme des leviers essentiels
              pour l’expression des jeunes, la cohésion sociale et le développement
              communautaire au Bénin.
            </p>
            <p className="text-slate-600 mb-8">
              Nous organisons et soutenons des événements qui mettent en lumière les
              talents locaux et favorisent les échanges intergénérationnels.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md"
              >
                <FaTicketAlt />
                <span>Proposer un événement</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                <FaCamera />
                <span>Devenir partenaire</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={imgIntroCulture}
              alt="Culture béninoise"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Événements à venir */}
        <h3 className="text-3xl font-display font-bold text-dark mb-8 text-center">
          Nos prochains événements
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {events.map((ev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={ev.image}
                  alt={ev.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium opacity-90">{ev.date}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                    <ev.icon size={18} />
                  </div>
                  <h4 className="font-bold text-xl">{ev.title}</h4>
                </div>
                <p className="text-slate-600">{ev.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Galerie photos */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-dark mb-6 text-center">
            Moments forts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <img
                  src={img}
                  alt={`Galerie ${idx + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Appel à candidature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-700 to-primary-900 text-white p-10 rounded-3xl text-center shadow-xl"
        >
          <h3 className="text-3xl font-display font-bold mb-4">
            Vous êtes artiste, sportif ou porteur de projet ?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau de talents soutenus par 3G ONG et bénéficiez d'un accompagnement personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-primary-700 font-bold px-8 py-3 rounded-full hover:bg-primary-50 transition shadow-md"
            >
              Déposer ma candidature
            </Link>
            <Link
              to="/evenements"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-primary-700 transition"
            >
              Voir tous les événements
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}