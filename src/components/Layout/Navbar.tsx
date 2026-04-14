import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import { motion } from 'motion/react';
import MobileMenu from './MobileMenu';
import DonationModal from '../UI/DonationModal'; // Adapte le chemin si nécessaire

interface NavItem {
  name: string;
  path: string;
  submenu?: NavItem[];
}

const navItems: NavItem[] = [
  { name: 'Accueil', path: '/' },
  { name: 'Qui sommes-nous ?', path: '/a-propos' },
  {
    name: 'Nos Actions',
    path: '#',
    submenu: [
      { name: 'Famille & JIC', path: '/actions/famille' },
      { name: 'Formations Jeunes', path: '/actions/jeunes' },
      { name: 'Santé Communautaire', path: '/actions/sante' },
      { name: 'Culture & Sport', path: '/actions/culture' },
      { name: 'Humanitaire', path: '/actions/humanitaire' },
    ]
  },
  { name: 'Événements', path: '/evenements' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDonationOpen, setIsDonationOpen] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container-custom flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 text-2xl font-display font-bold">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <FaHeart className="text-white text-sm" />
            </div>
            <span className="text-primary-700">
              3G<span className="text-secondary-500">ONG</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button className="py-2 font-medium hover:text-primary transition-colors">
                    {item.name}
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-slate-50 hover:text-primary"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDonationOpen(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition flex items-center gap-2"
            >
              <FaHeart size={14} />
              Faire un don
            </motion.button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-2xl"
            aria-label="Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
      </header>

      <DonationModal isOpen={isDonationOpen} onClose={() => setIsDonationOpen(false)} />
    </>
  );
}