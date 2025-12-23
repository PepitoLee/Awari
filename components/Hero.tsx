import React from 'react';
import { motion } from 'framer-motion';
import { TAGLINE } from '../constants';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  // Image prompting for a soft, knitted landscape background
  const heroBg = "https://image.pollinations.ai/prompt/soft%20wavy%20knitted%20wool%20texture%20background,%20macro%20photography,%20cream%20beige%20and%20soft%20pastel%20peach%20colors,%20cozy%20atmosphere,%20warm%20sunlight,%20shallow%20depth%20of%20field,%204k,%20high%20quality?width=1920&height=1080&nologo=true&seed=88";
  
  // A cute hero composition element
  const heroFloatingImage = "https://image.pollinations.ai/prompt/cute%20happy%20amigurumi%20sun%20character%20hugging%20a%20cloud,%20soft%20crochet%20texture,%20floating%20in%20air,%20isolated,%20magical%20sparkles,%20soft%20lighting,%203d%20render%20style?width=800&height=800&nologo=true&seed=55";

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-rosa-300/30 via-violet-500/20 to-lavanda-100/40 pt-32 lg:pt-0">

      {/* 1. Immersive Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-25 lg:opacity-35 mix-blend-soft-light transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* 2. Soft Gradient Overlay with pastel layers */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-rosa-300/40 via-violet-500/20 to-transparent lg:bg-gradient-to-r lg:from-peach-100/50 lg:via-lavanda-100/30" />
      
      {/* 3. Noise Texture for tactile feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-2 px-4 bg-white/60 backdrop-blur-md border border-wool-200 rounded-full text-wool-800 text-xs md:text-sm font-bold tracking-wide uppercase mb-6 md:mb-8 shadow-sm"
          >
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>Nueva Colección Artesanal</span>
          </motion.div>

          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl text-wool-900 mb-6 md:mb-8 leading-[0.95] tracking-tight">
            Historias <br/>
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-100 via-rosa-200 to-lavanda-400">
                tejidas a mano
              </span>
              {/* Decorative underline */}
              <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-rosa-200 opacity-60 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Mobile Image (Visible only on small screens, integrated into text flow) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:hidden w-64 h-64 mb-6 relative"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-rosa-200 via-violet-300 to-aqua-300 rounded-full mix-blend-multiply filter blur-[40px] opacity-50 animate-pulse" />
             <img 
                src={heroFloatingImage} 
                alt="Amigurumi Mobile" 
                className="w-full h-full object-contain drop-shadow-xl animate-float"
             />
          </motion.div>

          <p className="font-sans text-lg md:text-xl lg:text-2xl text-wool-700 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
            {TAGLINE} Descubre amigos de hilo que cobran vida con la magia de la IA y el calor de lo hecho a mano.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 30px -10px rgba(178, 141, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-100 to-rosa-200 text-wool-900 font-bold py-4 px-8 md:py-5 md:px-10 rounded-full shadow-xl transition-all text-base md:text-lg flex items-center justify-center gap-3 group w-full sm:w-auto"
              onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Amigos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
               whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
               whileTap={{ scale: 0.95 }}
               className="bg-white/60 backdrop-blur-sm text-wool-800 font-bold py-4 px-8 md:py-5 md:px-10 rounded-full shadow-lg border border-rosa-300/30 transition-all text-base md:text-lg w-full sm:w-auto"
            >
              Nuestra Historia
            </motion.button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-8 md:mt-12 flex items-center justify-center lg:justify-start gap-4 md:gap-6 opacity-80">
             <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-wool-50 bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="User" />
                  </div>
                ))}
             </div>
             <p className="text-xs md:text-sm font-bold text-wool-600">
               +1000 abrazos entregados
             </p>
          </div>
        </motion.div>

        {/* Right Column: Floating Visuals (Desktop Only) */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.2 }}
           className="relative hidden lg:block"
        >
           {/* Blob Background behind product */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-rosa-200 via-violet-300 to-aqua-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-pulse" />
           
           {/* Main Floating Image */}
           <motion.div
             animate={{ 
               y: [0, -20, 0],
               rotate: [0, 2, 0]
             }}
             transition={{ 
               duration: 6,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             className="relative z-10 drop-shadow-2xl"
           >
              <img 
                src={heroFloatingImage} 
                alt="Amigurumi Mágico" 
                className="w-full h-auto max-w-[600px] mx-auto object-contain"
                style={{ filter: "drop-shadow(0 25px 25px rgba(0,0,0,0.15))" }}
              />
           </motion.div>

           {/* Decorative Elements */}
           <motion.div
             className="absolute top-20 right-20 text-rosa-200"
             animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 4, repeat: Infinity }}
           >
             <Star className="w-12 h-12 fill-current" />
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};