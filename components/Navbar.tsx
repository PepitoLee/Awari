import React from 'react';
import { ShoppingBag, Menu, Heart } from 'lucide-react';
import { BRAND_NAME } from '../constants';
import { motion } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 md:py-6 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-lg px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg pointer-events-auto border border-rosa-300/20">
        <div className="flex items-center gap-3 md:gap-4">
          <button className="p-2 hover:bg-violet-500/20 rounded-full transition-colors">
            <Menu className="w-5 h-5 md:w-6 md:h-6 text-wool-900" />
          </button>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-rosa-200">
            {BRAND_NAME}
          </span>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <button className="p-2 md:p-3 hover:bg-rosa-300/20 rounded-full transition-colors relative group">
            <Heart className="w-5 h-5 text-wool-700 group-hover:text-rosa-200 transition-colors" />
          </button>

          <button
            onClick={onOpenCart}
            className="p-2 md:p-3 bg-gradient-to-r from-violet-100 to-rosa-200 text-wool-900 rounded-full hover:from-violet-200 hover:to-rosa-300 transition-all hover:scale-105 relative shadow-md"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rosa-200 text-wool-900 text-[10px] md:text-xs font-bold w-4 h-4 md:w-5 md:h-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};