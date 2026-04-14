import SectionTitle from '../components/UI/SectionTitle';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message envoyé (simulation)');
  };

  return (
    <div className="py-16">
      <div className="container-custom">
        <SectionTitle title="Contactez-nous" subtitle="Une question ? Un projet ? Nous sommes à votre écoute." />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-2xl text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Siège social</p>
                  <p className="text-slate-600">Quartier Dogoudo 2, Allada, Bénin</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-2xl text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-slate-600">+229 97 00 00 00 / 97 11 11 11</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-600">contact@3gong.org</p>
                </div>
              </div>
            </div>
            {/* Carte simulée */}
            <div className="mt-8 h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-500">
              [Carte Allada - Dogoudo 2]
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
              <select
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.sujet}
                onChange={(e) => setFormData({...formData, sujet: e.target.value})}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="benevolat">Devenir bénévole</option>
                <option value="formation">Demande de formation</option>
                <option value="partenariat">Partenariat</option>
                <option value="autre">Autre</option>
              </select>
              <textarea
                placeholder="Votre message"
                rows={5}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}