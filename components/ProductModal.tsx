import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Sparkles, Loader2 } from 'lucide-react';
import { generateProductStory } from '../services/geminiService';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [story, setStory] = useState<string>("");
  const [loadingStory, setLoadingStory] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStory(""); // Reset story on open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleGenerateStory = async () => {
    if (!product) return;
    setLoadingStory(true);
    const generated = await generateProductStory(product);
    setStory(generated);
    setLoadingStory(false);
  };

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-wool-900/40 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          layoutId={`product-${product.id}`}
          className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row max-h-[90vh]"
          style={{
            boxShadow: `0 25px 50px -12px ${product.shadowColor}40` // Outer colored glow
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="w-6 h-6 text-wool-900" />
          </button>

          {/* Image Side - Dynamic Background Color */}
          <div
            className="w-full md:w-1/2 relative h-64 md:h-auto transition-colors duration-500"
            style={{ backgroundColor: `${product.shadowColor}25` }} // 25% opacity of product color
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover mix-blend-multiply opacity-95"
            />
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-[#fdfbf7] relative">
            {/* Background decoration blob */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ backgroundColor: product.shadowColor }}
            />

            <span
              className="uppercase tracking-wider text-sm font-bold flex items-center gap-2"
              style={{ color: product.shadowColor }}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.shadowColor }}></span>
              {product.category}
            </span>

            <div>
              <h2 className="font-display font-black text-4xl text-wool-900 mb-2">{product.name}</h2>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-display font-bold text-blush-400">
                  S/. {product.price.toFixed(2)}
                </span>
                <span className="bg-wool-100 text-wool-600 px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              {product.colors.map((color, idx) => (
                <div key={idx} className="w-6 h-6 rounded-full border border-gray-200 shadow-sm" style={{ backgroundColor: color }} />
              ))}
            </div>

            <p className="text-wool-700 text-lg leading-relaxed mb-8 font-sans">
              {product.description}
            </p>

            {/* Gemini Section - Themed Border */}
            <div
              className="bg-white p-6 rounded-2xl border mb-8 shadow-sm transition-colors duration-300"
              style={{ borderColor: `${product.shadowColor}40` }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-wool-800 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" style={{ color: product.shadowColor }} />
                  El Alma de {product.name}
                </h3>
              </div>

              {!story && !loadingStory && (
                <button
                  onClick={handleGenerateStory}
                  className="text-sm underline decoration-dotted transition-colors font-medium"
                  style={{ color: product.shadowColor, textDecorationColor: product.shadowColor }}
                >
                  Descubre la historia única de este amigurumi (IA)
                </button>
              )}

              {loadingStory && (
                <div className="flex items-center gap-2 text-wool-500 text-sm">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Tejiendo historia...
                </div>
              )}

              {story && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-wool-600 italic font-serif text-sm border-l-2 pl-4"
                  style={{ borderColor: product.shadowColor }}
                >
                  "{story}"
                </motion.p>
              )}
            </div>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-wool-100">
              <div className="flex flex-col">
                <span className="text-sm text-wool-500 font-medium">Precio</span>
                <span className="text-3xl font-display font-bold text-wool-900">${product.price.toFixed(2)}</span>
              </div>

              {/* Dynamic Button Color */}
              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-lg text-wool-900"
                style={{ backgroundColor: product.shadowColor }}
              >
                <ShoppingBag className="w-5 h-5 text-wool-900" />
                Agregar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};