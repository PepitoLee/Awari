import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { Cart } from './components/Cart';
import { CreatorSection } from './components/CreatorSection';
import { CategoryPills } from './components/CategoryPills';
import { Unboxing } from './components/Unboxing';
import { MaterialsSection } from './components/MaterialsSection';
import { LoveWall } from './components/LoveWall';
import { WoolMap } from './components/WoolMap';
import { CareGuide } from './components/CareGuide';
import { PRODUCTS } from './constants';
import { Product, CartItem } from './types';
import { motion } from 'framer-motion';
import { Leaf, HeartHandshake, Scissors } from 'lucide-react';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans selection:bg-blush-300 selection:text-white pb-0 overflow-x-hidden">
      <Navbar
        cartCount={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        <Hero />

        {/* Collection Section */}
        <section id="collection" className="container mx-auto px-6 py-24 relative">

          <div className="text-center mb-12">
            <span className="font-sans font-bold text-blush-400 tracking-widest text-sm uppercase mb-2 block">
              Hechos con el corazón
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl text-wool-900 mb-6 relative inline-block">
              La Familia Arawi
              <span className="absolute -top-6 -right-8 text-3xl animate-bounce">🧶</span>
            </h2>
            <p className="text-wool-600 text-xl max-w-lg mx-auto leading-relaxed font-medium mb-12">
              Cada personaje está esperando encontrar su hogar.
            </p>

            {/* NEW: Category Pills Filter */}
            <CategoryPills
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[400px]"
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  product={product}
                  onClick={handleProductClick}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-wool-400">
              <p className="text-xl">Ups, no hay amigurumis en esta categoría aún.</p>
            </div>
          )}
        </section>

        {/* NEW SECTIONS INTEGRATION */}
        <Unboxing />

        <MaterialsSection />

        <LoveWall />

        <WoolMap />

        <CreatorSection />

        {/* Improved Brand Promise - "Craft Workshop" Style */}
        <section className="container mx-auto px-4 mb-20 mt-20">
          <div className="bg-wool-900 text-wool-100 rounded-[3rem] relative overflow-hidden shadow-2xl">

            {/* Dashed Border Effect (Stitching) */}
            <div className="absolute inset-4 border-2 border-dashed border-wool-700/50 rounded-[2.5rem] pointer-events-none z-20"></div>

            <div className="grid md:grid-cols-2 gap-0 relative z-10">
              {/* Text Side */}
              <div className="p-12 md:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-blush-400/20 text-blush-300 p-2 rounded-lg">
                    <HeartHandshake className="w-6 h-6" />
                  </span>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white">
                    Sostenible y Suave
                  </h3>
                </div>

                <p className="text-lg leading-relaxed text-wool-200 mb-10">
                  En <span className="font-bold text-blush-300">Arawi</span>, no solo tejemos muñecos, tejemos futuro. Utilizamos hilos de algodón orgánico y rellenos reciclados, asegurando que cada abrazo sea seguro para ti y amable con el planeta.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="group bg-wool-800/50 p-5 rounded-2xl border border-wool-700 hover:border-blush-400/50 transition-colors">
                    <Leaf className="w-8 h-8 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="block font-bold text-2xl text-white">100%</span>
                    <span className="text-sm text-wool-400">Eco-Friendly</span>
                  </div>
                  <div className="group bg-wool-800/50 p-5 rounded-2xl border border-wool-700 hover:border-blush-400/50 transition-colors">
                    <Scissors className="w-8 h-8 text-blush-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="block font-bold text-2xl text-white">Artesanal</span>
                    <span className="text-sm text-wool-400">Hecho a mano</span>
                  </div>
                </div>
              </div>

              {/* Image Side with overlay effect */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img
                  src="https://image.pollinations.ai/prompt/cozy%20hands%20knitting%20crochet%20with%20soft%20wool,%20warm%20sunlight,%20wooden%20table,%20aesthetic,%20plants,%20cup%20of%20tea?width=800&height=1000&nologo=true&seed=24"
                  alt="Manos tejiendo"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-wool-900 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        <CareGuide />

      </main>

      <footer className="bg-wool-900 text-wool-200 py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-display font-bold text-3xl text-white mb-6">Arawi</h3>
            <div className="flex gap-6 mb-8 text-sm font-medium tracking-wide opacity-80">
              <a href="#" className="hover:text-blush-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-blush-300 transition-colors">TikTok</a>
              <a href="#" className="hover:text-blush-300 transition-colors">Contacto</a>
            </div>
            <p className="text-sm opacity-50">© 2024 Arawi. Diseñado con ❤️, IA y mucha lana.</p>

            {/* Creative Credit - Gacz Studio */}
            <div className="mt-12 group relative inline-flex flex-col items-center gap-2 cursor-pointer">
              {/* Thread connecting credit */}
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-blush-400/50 to-blush-400 opacity-50 group-hover:h-12 transition-all duration-500"></div>

              <div className="relative px-8 py-4 bg-wool-800/40 backdrop-blur-md rounded-2xl border border-white/5 shadow-2xl overflow-hidden group-hover:border-blush-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1">

                {/* Glowing background blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-blush-500/0 via-amber-500/0 to-blush-500/0 opacity-0 group-hover:opacity-20 group-hover:from-blush-500/10 group-hover:via-amber-500/10 group-hover:to-blush-500/10 transition-all duration-700"></div>

                <div className="relative flex items-center gap-4">
                  {/* Studio Brand Icon */}
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blush-400 to-amber-600 rounded-xl rotate-3 group-hover:rotate-12 transition-transform duration-500 opacity-80 blur-[2px]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blush-400 to-amber-600 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500 flex items-center justify-center border border-white/20 shadow-inner">
                      <span className="font-display font-black text-white text-lg">G</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-start pr-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-wool-400 group-hover:text-blush-300 transition-colors font-medium">
                      Created by
                    </span>
                    <span className="font-display font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-wool-100 via-blush-100 to-amber-100 group-hover:from-white group-hover:via-blush-200 group-hover:to-white transition-all duration-300 drop-shadow-sm">
                      Gacz Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={addToCart}
      />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={removeFromCart}
      />
    </div>
  );
};

export default App;