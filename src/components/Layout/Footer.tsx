import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">3G ONG</h3>
            <p className="text-slate-300">
              Œuvrer pour l'épanouissement des familles et le développement des jeunes au Bénin.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/a-propos" className="hover:text-secondary">Qui sommes-nous ?</a></li>
              <li><a href="/actions/famille" className="hover:text-secondary">La JIC</a></li>
              <li><a href="/evenements" className="hover:text-secondary">Événements</a></li>
              <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><FaMapMarkerAlt /> Allada, Dogoudo 2</li>
              <li className="flex items-center gap-2"><FaPhoneAlt /> +229 97 00 00 00</li>
              <li className="flex items-center gap-2"><FaEnvelope /> contact@3gong.org</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-secondary"><FaFacebookF /></a>
              <a href="#" className="hover:text-secondary"><FaTwitter /></a>
              <a href="#" className="hover:text-secondary"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          © {new Date().getFullYear()} 3G ONG. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}