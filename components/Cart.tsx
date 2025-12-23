import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, MessageCircle } from 'lucide-react'; // Added MessageCircle

// ... (imports remain same, keeping line numbers correct is tricky with partial replace, better to do two chunks or use multi_replace if needed, but here simple enough)

// Wait, I need to import MessageCircle first.
// Let's do imports first in a separate chunks if possible, or just be careful.
// Actually, `Cart.tsx` lines 1-3 imports:
// import { X, Trash2, ArrowRight, MessageCircle } from 'lucide-react';

// I'll update imports in one chunk, and the logic in another.

import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-wool-900/20 backdrop-blur-sm z-[70]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#FFF8E1] z-[80] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-wool-200">
              <h2 className="font-display font-bold text-2xl text-wool-900">Tu Cesta</h2>
              <button onClick={onClose} className="p-2 hover:bg-wool-200 rounded-full transition-colors">
                <X className="w-6 h-6 text-wool-900" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-20 text-wool-400">
                  <p>Tu cesta está vacía, ¡como un ovillo sin tejer!</p>
                </div>
              ) : (
                items.map(item => (
                  <motion.div
                    layout
                    key={item.id}
                    className="bg-white p-4 rounded-2xl flex gap-4 shadow-sm border border-wool-100"
                  >
                    <div className="w-20 h-20 bg-wool-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-wool-900 font-display">{item.name}</h4>
                      <p className="text-sm text-wool-500">Cantidad: {item.quantity}</p>
                      <p className="font-bold text-wool-700 mt-1">S/. {(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-wool-300 hover:text-red-400 transition-colors self-center"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-6 bg-white border-t border-wool-200 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-center mb-6">
                <span className="text-wool-500 font-medium">Total Estimado</span>
                <span className="font-display font-black text-3xl text-wool-900">S/. {total.toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
                  const phoneNumber = "51944246324";
                  let message = "¡Hola Arawi! 🧶 Me gustaría comprar los siguientes amigurumis:\n\n";

                  items.forEach(item => {
                    message += `- ${item.name} (x${item.quantity}) - S/. ${(item.price * item.quantity).toFixed(2)}\n`;
                  });

                  message += `\n*Total a pagar: S/. ${total.toFixed(2)}*`;
                  message += "\n\nQuedo a la espera de los detalles de pago y envío. ¡Gracias!";

                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                disabled={items.length === 0}
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold flex justify-center items-center gap-2 hover:bg-[#128C7E] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-green-200/50 hover:shadow-green-300/50"
              >
                Comprar por WhatsApp <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
