import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote } from 'lucide-react';

export const CreatorSection: React.FC = () => {
  // Reliable placeholder image
  const creatorImage = "/creator.jpg";

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-violet-500/20 via-rosa-300/10 to-lavanda-100/30">

      {/* Background Texture - Knitted Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(#B28DFF 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
      />

      {/* Floating Elements Background */}
      <div className="absolute top-20 left-10 text-rosa-200 opacity-30 animate-float">
         <Heart size={64} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-violet-300 opacity-40 animate-wiggle">
         <div className="w-32 h-32 rounded-full border-4 border-dashed border-current"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side: Polaroid Style */}
          <motion.div 
            initial={{ opacity: 0, rotate: -5, x: -50 }}
            whileInView={{ opacity: 1, rotate: -3, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto lg:mx-0 max-w-md"
          >
            {/* The Photo Frame */}
            <div className="bg-white p-6 pb-20 shadow-2xl transform transition-transform duration-500 hover:rotate-0 hover:scale-105 relative z-10">
               <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 filter sepia-[0.1]">
                 <img 
                   src={creatorImage} 
                   alt="La Creadora de Arawi" 
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="font-display font-bold text-wool-800 text-center text-xl tracking-widest uppercase opacity-80">
                 Nuestra Creadora
               </div>
               
               {/* "Tape" Effect */}
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-peach-500/60 backdrop-blur-sm shadow-sm transform -rotate-2 z-20"></div>
            </div>

            {/* Decorative Elements around photo */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/2 bg-white p-4 rounded-full shadow-lg z-20 text-rosa-200"
            >
              <Sparkles size={32} />
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block p-3 rounded-2xl bg-rosa-300/20 text-rosa-200 mb-6">
               <Quote size={32} className="rotate-180 fill-current opacity-50" />
            </div>

            <h2 className="font-display font-black text-5xl md:text-6xl text-wool-900 mb-8 leading-tight">
              Manos que tejen <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rosa-200 to-violet-100">sueños tangibles.</span>
            </h2>

            <div className="space-y-6 text-lg text-wool-700 font-medium leading-relaxed font-sans">
              <p>
                Hola, soy el alma detrás de <strong className="text-violet-100">Arawi</strong>. Lo que comenzó como un pasatiempo para calmar la mente, se transformó en un pequeño universo de personajes.
              </p>
              <p>
                Creo firmemente que en un mundo digital, necesitamos volver a tocar, a sentir texturas y a regalar objetos que tengan tiempo y dedicación impregnados en sus fibras.
              </p>
              <p className="border-l-4 border-rosa-200 pl-6 italic text-wool-600">
                "Cada amigurumi no es solo lana y relleno; es una pequeña pieza de mi corazón esperando hacer sonreír a alguien."
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
               <div className="h-px bg-violet-300 flex-1"></div>
               <span className="font-display font-bold text-2xl text-violet-100 signing-font transform -rotate-6">
                 Con cariño, La Creadora
               </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};