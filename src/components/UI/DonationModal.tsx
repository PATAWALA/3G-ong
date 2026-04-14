import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaTimes, FaHeart, FaCreditCard, FaMobileAlt } from 'react-icons/fa';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [amount, setAmount] = useState<string>('');
  const [step, setStep] = useState<'amount' | 'payment'>('amount');

  const predefinedAmounts = ['5000', '10000', '25000', '50000'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'amount') {
      setStep('payment');
    } else {
      alert('Merci pour votre générosité ! (Simulation)');
      onClose();
      setStep('amount');
      setAmount('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-display font-bold flex items-center gap-2">
                  <FaHeart /> Faire un don
                </h2>
                <button onClick={onClose} className="text-white/80 hover:text-white">
                  <FaTimes size={20} />
                </button>
              </div>
              <p className="text-white/90 mt-2">
                {step === 'amount'
                  ? 'Choisissez un montant pour soutenir nos actions.'
                  : 'Simulation de paiement sécurisé.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              {step === 'amount' ? (
                <>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Montant (FCFA)
                  </label>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {predefinedAmounts.map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setAmount(val)}
                        className={`py-2 px-4 rounded-lg border transition ${
                          amount === val
                            ? 'bg-primary-600 text-white border-primary-600'
                            : 'bg-white border-gray-300 hover:border-primary-400'
                        }`}
                      >
                        {val} FCFA
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Autre montant"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    min="500"
                  />
                  <button
                    type="submit"
                    disabled={!amount}
                    className="mt-6 w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuer
                  </button>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-50">
                      <FaCreditCard className="text-primary-600" />
                      <span>Carte bancaire (Visa, Mastercard)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-50">
                      <FaMobileAlt className="text-primary-600" />
                      <span>Mobile Money (MTN, Moov)</span>
                    </div>
                    <p className="text-sm text-slate-500">
                      Montant : <strong>{amount} FCFA</strong>
                    </p>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep('amount')}
                      className="flex-1 border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition"
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition"
                    >
                      Confirmer (simulation)
                    </button>
                  </div>
                </>
              )}
            </form>

            <div className="bg-gray-50 px-6 py-3 text-center text-xs text-slate-500">
              Simulation de don – Aucun paiement réel ne sera effectué.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}