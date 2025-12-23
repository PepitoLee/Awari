import React from 'react';
import { motion } from 'framer-motion';

const CATEGORIES = [
  { id: 'all', name: 'Todos', image: 'https://image.pollinations.ai/prompt/colorful%20yarn%20balls%20basket%20wool%20texture?width=200&height=200&nologo=true&seed=1' },
  { id: 'Andino', name: 'Andes', image: 'https://image.pollinations.ai/prompt/peruvian%20andes%20textile%20pattern%20wool%20macro?width=200&height=200&nologo=true&seed=2' },
  { id: 'Bosque', name: 'Bosque', image: 'https://image.pollinations.ai/prompt/green%20moss%20and%20brown%20wool%20texture%20forest?width=200&height=200&nologo=true&seed=3' },
  { id: 'Marino', name: 'Mar', image: 'https://image.pollinations.ai/prompt/blue%20waves%20crochet%20texture%20water?width=200&height=200&nologo=true&seed=4' },
  { id: 'Prehistórico', name: 'Dinos', image: 'https://image.pollinations.ai/prompt/green%20dinosaur%20scales%20crochet%20pattern?width=200&height=200&nologo=true&seed=5' },
];

interface CategoryPillsProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryPills: React.FC<CategoryPillsProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
      {CATEGORIES.map((cat, i) => {
        const isSelected = selectedCategory === cat.id;
        return (
          <motion.button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full p-1 border-2 border-dashed transition-all duration-300 ${isSelected ? 'border-blush-400 scale-110' : 'border-wool-300 group-hover:border-blush-300'}`}>
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-sm">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover filter brightness-105" />
                <div className={`absolute inset-0 transition-colors duration-300 ${isSelected ? 'bg-transparent' : 'bg-wool-900/20 group-hover:bg-transparent'}`} />
                
                {isSelected && (
                  <motion.div 
                    layoutId="active-check"
                    className="absolute inset-0 bg-blush-400/20 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 bg-white rounded-full shadow-md" />
                  </motion.div>
                )}
              </div>
            </div>
            <span className={`font-display font-bold uppercase tracking-widest text-xs transition-colors ${isSelected ? 'text-blush-400' : 'text-wool-600 group-hover:text-wool-800'}`}>
              {cat.name}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};