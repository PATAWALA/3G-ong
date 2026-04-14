import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

interface NavItem {
  name: string;
  path: string;
  submenu?: NavItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, setIsOpen, navItems }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t"
        >
          <div className="container-custom py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-500">{item.name}</p>
                    <div className="pl-4 space-y-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="bg-secondary text-white px-6 py-3 rounded-full font-semibold w-full">
              Faire un don
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}