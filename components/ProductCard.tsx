import React from 'react';
import { Product } from '../types';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div
      layoutId={`product-${product.id}`}
      className="group relative bg-white rounded-3xl p-4 transition-all duration-300 cursor-pointer overflow-hidden border-2"
      onClick={() => onClick(product)}
      style={{
        boxShadow: `0 20px 40px -12px ${product.shadowColor}`,
        borderColor: `${product.shadowColor}40` // 40% opacity border for subtle frame
      }}
      whileHover={{
        y: -12,
        boxShadow: `0 35px 70px -15px ${product.shadowColor}`,
        borderColor: `${product.shadowColor}80` // 80% opacity border on hover
      }}
    >
      <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500/10 to-rosa-300/10 relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-violet-100/10 group-hover:bg-transparent transition-colors" />

        <button
          className="absolute bottom-3 right-3 bg-white text-wool-900 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md"
          style={{ color: product.shadowColor }}
        >
          <Plus className="w-5 h-5" style={{ color: '#3D2F5A' }} />
        </button>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-bold text-violet-100 uppercase tracking-wider mb-1">{product.category}</p>
            <h3 className="font-display font-bold text-2xl text-wool-900 leading-tight group-hover:text-rosa-200 transition-colors">{product.name}</h3>
          </div>
          <span className="font-display font-black text-xl text-wool-700 bg-gradient-to-r from-violet-500/20 to-rosa-300/20 px-3 py-1 rounded-full">
            S/. {product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-wool-600 text-sm line-clamp-2">{product.description}</p>
      </div>
      {/* Tiny color dot indicator using shadow color */}
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: product.shadowColor }}
      />

    </motion.div >
  );
};